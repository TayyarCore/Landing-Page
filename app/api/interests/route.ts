import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type InterestRequest = {
  fullName?: unknown
  organization?: unknown
  contact?: unknown
  city?: unknown
  activity?: unknown
  interestArea?: unknown
  notes?: unknown
  website?: unknown
  startedAt?: unknown
  utmSource?: unknown
  utmMedium?: unknown
  utmCampaign?: unknown
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

  let body: InterestRequest
  try {
    body = (await request.json()) as InterestRequest
  } catch {
    return NextResponse.json({ message: 'بيانات الطلب غير صالحة.' }, { status: 400 })
  }

  const fullName = clean(body.fullName, 120)
  const organization = clean(body.organization, 160)
  const contact = clean(body.contact, 180)
  const city = clean(body.city, 100)
  const activity = clean(body.activity, 120)
  const interestArea = clean(body.interestArea, 180)
  const notes = clean(body.notes, 1200)
  const website = clean(body.website, 200)
  const startedAt = typeof body.startedAt === 'number' ? body.startedAt : 0
  const utmSource = clean(body.utmSource, 120)
  const utmMedium = clean(body.utmMedium, 120)
  const utmCampaign = clean(body.utmCampaign, 160)

  if (website) return NextResponse.json({ ok: true })

  if (startedAt && Date.now() - startedAt < 1800) {
    return NextResponse.json({ message: 'أعد المحاولة بعد لحظات.' }, { status: 429 })
  }

  if (!fullName || !organization || !contact) {
    return NextResponse.json({ message: 'أكمل الحقول المطلوبة.' }, { status: 400 })
  }

  const normalizedContact = contact.toLowerCase()
  if (!EMAIL_PATTERN.test(normalizedContact) && !PHONE_PATTERN.test(contact)) {
    return NextResponse.json(
      { message: 'اكتب رقم جوال أو بريدًا إلكترونيًا صالحًا.' },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.LEAD_FROM_EMAIL || 'Tayyar <leads@tayyar.app>'
  const to = process.env.LEAD_TO_EMAIL || 'hello@tayyar.app'

  if (!apiKey) {
    console.error('Interest capture is missing RESEND_API_KEY')
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

  const subject = `تسجيل اهتمام جديد — ${organization}`
  const rows = [
    ['الاسم', fullName],
    ['المنشأة', organization],
    ['وسيلة التواصل', contact],
    ['المدينة', city || '—'],
    ['النشاط', activity || '—'],
    ['مجال الاهتمام', interestArea || '—'],
    ['ملاحظات', notes || '—'],
    ['وقت الإرسال', submittedAt],
    ['UTM Source', utmSource || '—'],
    ['UTM Medium', utmMedium || '—'],
    ['UTM Campaign', utmCampaign || '—'],
  ]

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>${escapeHtml(label)}</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: EMAIL_PATTERN.test(normalizedContact) ? normalizedContact : undefined,
      subject,
      html: `<div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.8;color:#0f2942"><h2>تسجيل اهتمام جديد بتيار</h2><table style="border-collapse:collapse;width:100%;max-width:680px">${htmlRows}</table><p style="color:#667085">المصدر: tayyar.app/what-we-do</p></div>`,
    }),
  })

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text()
    console.error('Resend interest notification failed', resendResponse.status, errorText)
    return NextResponse.json(
      { message: 'تعذر إرسال الاهتمام حاليًا. حاول مرة أخرى بعد قليل.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
