'use client'

import { useEffect } from 'react'

type LeadPayload = {
  fullName: string
  email: string
  organization: string
  phone: string
  website: string
  startedAt: number
}

const labels = {
  fullName: 'الاسم الكامل',
  email: 'البريد الإلكتروني',
  organization: 'اسم المنشأة',
  phone: 'رقم الجوال',
}

export default function LeadCaptureEnhancer() {
  useEffect(() => {
    const card = document.querySelector<HTMLElement>('.form-card')
    if (!card) return

    const button = card.querySelector<HTMLButtonElement>('button.button-primary')
    const note = card.querySelector<HTMLElement>('.form-note')
    const fullName = card.querySelector<HTMLInputElement>('input[aria-label="الاسم الكامل"]')
    const email = card.querySelector<HTMLInputElement>('input[aria-label="البريد الإلكتروني"]')
    const organization = card.querySelector<HTMLInputElement>('input[aria-label="اسم المنشأة"]')
    const phone = card.querySelector<HTMLInputElement>('input[aria-label="رقم الجوال"]')

    if (!button || !note || !fullName || !email || !organization || !phone) return

    const startedAt = Date.now()
    const originalButtonText = button.textContent ?? 'أرسل طلب الانضمام'

    const fields = [
      [fullName, labels.fullName, 'text', 'name'],
      [email, labels.email, 'email', 'email'],
      [organization, labels.organization, 'text', 'organization'],
      [phone, labels.phone, 'tel', 'tel'],
    ] as const

    fields.forEach(([input, label, type, autocomplete]) => {
      input.type = type
      input.autocomplete = autocomplete
      input.required = true
      input.maxLength = type === 'email' ? 160 : 120
      input.setAttribute('aria-required', 'true')
      input.setAttribute('title', label)
    })

    phone.inputMode = 'tel'
    phone.maxLength = 24

    const setStatus = (message: string, tone: 'neutral' | 'success' | 'error' = 'neutral') => {
      note.textContent = message
      note.setAttribute('role', tone === 'error' ? 'alert' : 'status')
      note.style.color = tone === 'success' ? '#087f5b' : tone === 'error' ? '#b42318' : ''
    }

    const onSubmit = async () => {
      const requiredFields = [fullName, email, organization, phone]
      const emptyField = requiredFields.find((input) => !input.value.trim())
      if (emptyField) {
        setStatus('أكمل جميع الحقول لإرسال الطلب.', 'error')
        emptyField.focus()
        return
      }

      if (!email.validity.valid) {
        setStatus('تحقق من كتابة البريد الإلكتروني بشكل صحيح.', 'error')
        email.focus()
        return
      }

      const payload: LeadPayload = {
        fullName: fullName.value.trim(),
        email: email.value.trim(),
        organization: organization.value.trim(),
        phone: phone.value.trim(),
        website: '',
        startedAt,
      }

      button.disabled = true
      button.textContent = 'جارٍ إرسال الطلب…'
      setStatus('يتم إرسال بياناتك بأمان.', 'neutral')

      try {
        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        const result = (await response.json().catch(() => null)) as { message?: string } | null
        if (!response.ok) throw new Error(result?.message || 'تعذر إرسال الطلب')

        fullName.value = ''
        email.value = ''
        organization.value = ''
        phone.value = ''
        button.textContent = 'تم إرسال طلبك ✓'
        setStatus('وصل طلبك إلى فريق تيار. سنتواصل معك قريبًا لتنسيق العرض.', 'success')
      } catch (error) {
        button.disabled = false
        button.textContent = originalButtonText
        setStatus(
          error instanceof Error ? error.message : 'تعذر إرسال الطلب حاليًا. حاول مرة أخرى.',
          'error',
        )
      }
    }

    button.addEventListener('click', onSubmit)
    return () => button.removeEventListener('click', onSubmit)
  }, [])

  return null
}
