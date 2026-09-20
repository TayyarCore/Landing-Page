// Source-pinning tests for the public legal pages required by the Meta app
// review (/privacy, /terms, /data-deletion). Page files are TSX so they can't
// be imported under node's type-stripping runner; like the other route tests
// here, this asserts on the source wiring and content.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const read = (p: string) => readFileSync(fileURLToPath(new URL(p, import.meta.url)), 'utf8')

const shell = read('./components/LegalPage.tsx')

const pages = [
  { route: '/privacy', file: './privacy/page.tsx' },
  { route: '/terms', file: './terms/page.tsx' },
  { route: '/data-deletion', file: './data-deletion/page.tsx' },
] as const

for (const { route, file } of pages) {
  const src = read(file)

  test(`${route} has canonical URL, title and description metadata`, () => {
    assert.match(src, new RegExp(`canonical: CANONICAL`))
    assert.match(src, new RegExp(`const CANONICAL = 'https://tayyar\\.app${route}'`))
    assert.match(src, /title: '/)
    assert.match(src, /description:/)
  })

  test(`${route} has Arabic and English content, operator and contact`, () => {
    assert.match(src, /\bar: \{/)
    assert.match(src, /\ben: \{/)
    assert.match(src, /LEGAL_OPERATOR/)
    assert.match(src, /LEGAL_CONTACT_EMAIL/)
    assert.match(src, /LegalPage/)
  })

  test(`${route} does not touch Supabase, env vars or client scripts`, () => {
    assert.doesNotMatch(src, /supabase|process\.env|'use client'|<script|next\/script/i)
  })
}

test('legal shell: RTL Arabic first, English section, Ket Code LLC, official contact', () => {
  assert.match(shell, /dir="rtl" lang="ar"/)
  assert.match(shell, /id=\{locale === 'en' \? 'english' : 'arabic'\}/)
  assert.ok(shell.indexOf('locale="ar"') < shell.indexOf('locale="en"'))
  assert.match(shell, /LEGAL_OPERATOR = 'Ket Code LLC'/)
  assert.match(shell, /LEGAL_CONTACT_EMAIL = 'info@ketcode\.com'/)
  assert.doesNotMatch(shell, /supabase|process\.env|'use client'|<script/i)
})

test('privacy page covers required WhatsApp disclosures and policy topics', () => {
  const src = read('./privacy/page.tsx')
  for (const s of [
    'Meta',
    'WhatsApp profile name',
    'Sender phone number',
    'Message text',
    'Attachments',
    'Timestamps and delivery/status metadata',
    'Capturing real-estate opportunities',
    'operational inbox records',
    'Acknowledging receipt',
    'does not read your unrelated chats',
    'does not access your WhatsApp account',
    'Lawful basis and consent',
    'Storage and security',
    'Sharing',
    'Retention',
    'Your rights',
    'Deletion requests',
    'Policy updates',
    'Contact',
    'رقم هاتف المرسِل',
    'الاحتفاظ بالبيانات',
    'حقوقك',
    'لا تقرأ تيّار محادثاتك الأخرى',
  ]) {
    assert.ok(src.includes(s), `privacy page missing: ${s}`)
  }
})

test('data-deletion page gives a procedure and required identifying info', () => {
  const src = read('./data-deletion/page.tsx')
  for (const s of [
    'How to request deletion',
    'Information we need from you',
    'phone number',
    'WhatsApp profile',
    'approximate period',
    'within 30 days',
    'كيف تطلب الحذف',
    'المعلومات المطلوبة منك',
    'LEGAL_CONTACT_EMAIL',
  ]) {
    assert.ok(src.includes(s), `data-deletion page missing: ${s}`)
  }
})

test('terms page covers all required topics in both languages', () => {
  const src = read('./terms/page.tsx')
  for (const s of [
    'The service',
    'user responsibilities',
    'Acceptable use',
    'WhatsApp integration',
    'Intellectual property',
    'Availability',
    'Limitation of liability',
    'Termination',
    'Contracting entity and governing law',
    'Changes',
    'Contact',
    'الاستخدام المقبول',
    'تكامل واتساب',
    'الملكية الفكرية',
    'حدود المسؤولية',
    'الإنهاء',
    'التغييرات',
  ]) {
    assert.ok(src.includes(s), `terms page missing: ${s}`)
  }
})

test('terms: Wyoming governing law preserves non-waivable rights; liability cap is conditional', () => {
  const src = read('./terms/page.tsx')
  assert.match(src, /a Wyoming, United States company/)
  assert.match(src, /laws of the State of Wyoming/)
  assert.match(src, /competent courts of Wyoming/)
  assert.match(src, /cannot legally be waived/)
  assert.match(src, /To the maximum extent permitted by applicable law/)
  assert.match(src, /non-waivable statutory rights/)
  assert.doesNotMatch(src, /Kingdom of Saudi Arabia/)
})

test('deletion timing is conditional on applicable law, in both languages', () => {
  const src = read('./data-deletion/page.tsx')
  assert.match(
    src,
    /within the period required by applicable law, and ordinarily within 30 days after verifying the request/,
  )
  assert.match(src, /وعادةً خلال 30 يومًا من التحقق من الطلب/)
})

test('privacy: Saudi PDPL applies only where processing involves individuals in Saudi Arabia', () => {
  const src = read('./privacy/page.tsx')
  assert.match(src, /Where processing involves individuals in Saudi Arabia/)
  assert.doesNotMatch(src, /incorporated in Saudi/i)
})

test('landing footer links to the public legal pages', () => {
  const landing = read('./page.tsx')
  for (const r of ['/privacy', '/terms', '/data-deletion']) {
    assert.ok(landing.includes(`href="${r}"`), `landing footer missing ${r}`)
  }
})

test('sitemap lists the public legal pages', () => {
  const sitemap = read('./sitemap.ts')
  for (const r of ['privacy', 'terms', 'data-deletion']) {
    assert.ok(sitemap.includes('/' + r), 'sitemap missing ' + r)
  }
})
