import styles from './LegalPage.module.css'

// Shared shell for the public legal pages (/privacy, /terms, /data-deletion).
// Static server component: no data access, no client JS, no analytics.

export const LEGAL_OPERATOR = 'Ket Code LLC'
export const LEGAL_CONTACT_EMAIL = 'info@ketcode.com'

export type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

export type LegalLocale = {
  heading: string
  intro: string
  updated: string
  sections: LegalSection[]
}

export type LegalDoc = {
  ar: LegalLocale
  en: LegalLocale
}

function Article({
  locale,
  idPrefix,
  doc,
}: {
  locale: 'ar' | 'en'
  idPrefix: string
  doc: LegalLocale
}) {
  return (
    <article
      id={locale === 'en' ? 'english' : 'arabic'}
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={styles.article}
    >
      <h1>{doc.heading}</h1>
      <p className={styles.updated}>{doc.updated}</p>
      <p className={styles.intro}>{doc.intro}</p>
      <div className={styles.sections}>
        {doc.sections.map((s, i) => (
          <section key={`${idPrefix}-${i}`} aria-labelledby={`${idPrefix}-${i}`}>
            <h2 id={`${idPrefix}-${i}`}>{s.title}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.items && (
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  )
}

export function LegalPage({
  doc,
}: {
  doc: LegalDoc
  current: 'privacy' | 'terms' | 'data-deletion'
}) {
  return (
    <div className={styles.page} dir="rtl" lang="ar">
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="/" aria-label="تيار">
            <img src="/brand/tayyar-logo-ar-dark-bg.svg" alt="تيار" width={147} height={47} />
          </a>
          <a href="#english" hrefLang="en" className={styles.langLink}>
            English
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <Article locale="ar" idPrefix="ar" doc={doc.ar} />
        <hr />
        <Article locale="en" idPrefix="en" doc={doc.en} />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>
            تيار · {LEGAL_OPERATOR} · <span dir="ltr">Tayyar is operated by {LEGAL_OPERATOR}</span>
          </p>
          <nav aria-label="Legal">
            <a href="/privacy">سياسة الخصوصية / Privacy</a>
            <a href="/terms">شروط الخدمة / Terms</a>
            <a href="/data-deletion">حذف البيانات / Data deletion</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
