import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type LeadRequest = {
  fullName?: unknown
  email?: unknown
  organization?: unknown
  phone?: unknown
  website?: unknown
  startedAt?: unknown
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[0-9+()\-\s]{7,24}$/
const ALLOWED_HOSTS = new Set(['tayyar.app', 'www.tayyar.app', 'tayyar-landing.vercel.app'])

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  if (origin) {
    try {
      const host = new URL(origin).hostname
      if (!ALLOWED_HOSTS.has(host) && !host.endsWith('.vercel.app')) {
        return NextResponse.json({ message: 'تعذر قبول الطلب من هذا المصدر.' }, { status: 403 })
      }
    } catch {
      return NextResponse.json({ message: 'مصدر الطلب غير صالح.' }, { status: 403 })
    }
  }

  let body: LeadRequest
  try {
    body = (await request.json()) as LeadRequest
  } catch {
    return NextResponse.json({ message: 'بيانات الطلب غير صالحة.' }, { status: 400 })
  }

  const fullName = clean(body.fullName, 120)
  const email = clean(body.email, 160).toLowerCase()
  const organization = clean(body.organization, 120)
  const phone = clean(body.phone, 24)
  const website = clean(body.website, 200)
  const startedAt = typeof body.startedAt === 'number' ? body.startedAt : 0

  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (startedAt && Date.now() - startedAt < 2500) {
    return NextResponse.json({ message: 'أعد المحاولة بعد لحظات.' }, { status: 429 })
  }

  if (!fullName || !email || !organization || !phone) {
    return NextResponse.json({ message: 'أكمل جميع الحقول المطلوبة.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ message: 'البريد الإلكتروني غير صالح.' }, { status: 400 })
  }

  if (!PHONE_PATTERN.test(phone)) {
    return NextResponse.json({ message: 'رقم الجوال غير صالح.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.LEAD_FROM_EMAIL || 'Tayyar <leads@tayyar.app>'
  const to = process.env.LEAD_TO_EMAIL || 'hello@tayyar.app'

  if (!apiKey) {
    console.error('Lead capture is missing RESEND_API_KEY')
    return NextResponse.json(
      { message: 'الإرسال غير متاح مؤقتًا. تواصل معنا عبر hello@tayyar.app.' },
      { status: 503 },
    )
  }

  const submittedAt = new Intl.DateTimeFormat('ar-SA', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Riyadh',
  }).format(new Date())

  const subject = `طلب عرض مباشر جديد — ${organization}`
  const html = `
    <div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.8;color:#0f2942">
      <h2>طلب عرض مباشر جديد</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px">
        <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>الاسم الكامل</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>اسم المنشأة</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(organization)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>البريد الإلكتروني</strong></td><td dir="ltr" style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>رقم الجوال</strong></td><td dir="ltr" style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:8px"><strong>وقت الإرسال</strong></td><td style="padding:8px">${escapeHtml(submittedAt)}</td></tr>
      </table>
      <p style="color:#667085">المصدر: tayyar.app</p>
    </div>
  `

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      html,
    }),
  })

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text()
    console.error('Resend lead notification failed', resendResponse.status, errorText)
    return NextResponse.json(
      { message: 'تعذر إرسال الطلب حاليًا. حاول مرة أخرى بعد قليل.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
