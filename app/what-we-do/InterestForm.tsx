'use client'

import { useRef, useState } from 'react'
import styles from './page.module.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function InterestForm() {
  const startedAt = useRef(Date.now())
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const query = new URLSearchParams(window.location.search)

    const payload = {
      fullName: String(data.get('fullName') ?? '').trim(),
      organization: String(data.get('organization') ?? '').trim(),
      contact: String(data.get('contact') ?? '').trim(),
      city: String(data.get('city') ?? '').trim(),
      activity: String(data.get('activity') ?? '').trim(),
      interestArea: String(data.get('interestArea') ?? '').trim(),
      notes: String(data.get('notes') ?? '').trim(),
      website: String(data.get('website') ?? '').trim(),
      startedAt: startedAt.current,
      utmSource: query.get('utm_source') ?? '',
      utmMedium: query.get('utm_medium') ?? '',
      utmCampaign: query.get('utm_campaign') ?? '',
    }

    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/interests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json().catch(() => null)) as { message?: string } | null
      if (!response.ok) throw new Error(result?.message || 'تعذر إرسال الاهتمام')

      form.reset()
      setStatus('success')
      setMessage('تم تسجيل اهتمامك. سنتواصل معك عندما تكون المرحلة المناسبة متاحة.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'تعذر الإرسال حاليًا. حاول مرة أخرى.')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label>
          <span>الاسم</span>
          <input name="fullName" autoComplete="name" maxLength={120} required />
        </label>
        <label>
          <span>اسم المنشأة</span>
          <input name="organization" autoComplete="organization" maxLength={160} required />
        </label>
        <label>
          <span>رقم الجوال أو البريد الإلكتروني</span>
          <input name="contact" dir="ltr" maxLength={180} required />
        </label>
        <label>
          <span>المدينة</span>
          <input name="city" maxLength={100} />
        </label>
        <label>
          <span>نشاط المنشأة</span>
          <select name="activity" defaultValue="">
            <option value="">اختر</option>
            <option value="وساطة عقارية">وساطة عقارية</option>
            <option value="إدارة أملاك">إدارة أملاك</option>
            <option value="تطوير عقاري">تطوير عقاري</option>
            <option value="استثمار عقاري">استثمار عقاري</option>
            <option value="أكثر من نشاط">أكثر من نشاط</option>
          </select>
        </label>
        <label>
          <span>ما الجانب الذي يهمك؟</span>
          <select name="interestArea" defaultValue="">
            <option value="">اختر</option>
            <option value="تنظيم الطلبات والمتابعات">تنظيم الطلبات والمتابعات</option>
            <option value="إدارة العقارات والوحدات">إدارة العقارات والوحدات</option>
            <option value="إدارة الملاك والعقود">إدارة الملاك والعقود</option>
            <option value="متابعة الفريق والصفقات">متابعة الفريق والصفقات</option>
            <option value="التعاون بين الوسطاء">التعاون بين الوسطاء</option>
          </select>
        </label>
      </div>

      <label>
        <span>ملاحظة اختيارية</span>
        <textarea name="notes" rows={4} maxLength={1200} />
      </label>

      <label className={styles.honeypot} aria-hidden="true">
        <span>الموقع الإلكتروني</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {message && (
        <p className={status === 'error' ? styles.formError : styles.formSuccess} role="status">
          {message}
        </p>
      )}

      <button className={styles.primaryButton} disabled={status === 'submitting'} type="submit">
        {status === 'submitting' ? 'جارٍ تسجيل الاهتمام…' : 'سجّل اهتمامك'}
      </button>
      <p className={styles.formNote}>تسجيل الاهتمام لا يعني شراءً أو اشتراكًا، ولا ينشئ حسابًا تلقائيًا.</p>
    </form>
  )
}
