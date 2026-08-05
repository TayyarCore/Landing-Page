import type { Metadata } from 'next'
import InterestForm from './InterestForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'ماذا يفعل تيار؟ — نظام تشغيل للمنشآت العقارية',
  description:
    'تعرّف على طريقة تنظيم تيار للطلبات والعقارات والعملاء والمتابعات والفرص داخل المنشآت العقارية السعودية.',
  alternates: { canonical: '/what-we-do' },
  openGraph: {
    title: 'ماذا يفعل تيار؟',
    description: 'مسار تشغيلي واحد للطلبات والعقارات والعملاء والمتابعات.',
    url: 'https://tayyar.app/what-we-do',
    locale: 'ar_SA',
    type: 'website',
  },
}

const capabilities = [
  ['الطلبات', 'حوّل احتياج العميل إلى مسار واضح من أول تواصل حتى العرض والمتابعة والنتيجة.'],
  ['العقارات والوحدات', 'اجمع البيانات والصور والمستندات ومصدر العرض في سجل واحد يمكن الرجوع إليه.'],
  ['العملاء وجهات التواصل', 'اربط كل عميل بطلباته وعقاراته وأنشطته بدل تكرار المعلومات في أكثر من مكان.'],
  ['المتابعات', 'اعرف ما يجب تنفيذه اليوم، وما تأخر، ومن المسؤول عن الخطوة التالية.'],
  ['المطابقة', 'اعرض العقارات الأقرب إلى شروط الطلب بدل البحث اليدوي بين الملفات والمحادثات.'],
  ['عمل الفريق', 'حافظ على سياق العمل والقرارات حتى لا تبقى الفرصة مرتبطة بذاكرة شخص واحد.'],
]

const journey = [
  ['01', 'استقبال الطلب', 'تسجيل العميل والمصدر والاحتياج الأساسي.'],
  ['02', 'توضيح الاحتياج', 'تحويل الكلام العام إلى شروط قابلة للعمل.'],
  ['03', 'العثور على المناسب', 'ربط الطلب بالعقارات الأقرب إليه.'],
  ['04', 'المتابعة', 'تحديد مسؤول وموعد وإجراء تالٍ واضح.'],
  ['05', 'تثبيت النتيجة', 'توثيق الرد والقرار والمرحلة التالية.'],
]

export default function WhatWeDoPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="/" aria-label="العودة إلى تيار">
            <img src="/brand/tayyar-logo-ar-dark-bg.svg" alt="تيار" width={147} height={47} />
          </a>
          <nav aria-label="التنقل">
            <a href="#what-we-do">ماذا نفعل</a>
            <a href="#how-it-works">كيف يعمل</a>
            <a className={styles.headerAction} href="#interest">سجّل اهتمامك</a>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div>
              <span className={styles.pill}>What We Do · تعريف بتيار</span>
              <h1>نظام تشغيل للمنشآت العقارية السعودية</h1>
              <p>
                تيار يجمع الطلبات والعقارات والعملاء والمتابعات والصفقات في مسار تشغيلي واحد، حتى
                يعرف الفريق ما الذي حدث وما الذي يجب تنفيذه الآن.
              </p>
              <div className={styles.actions}>
                <a className={styles.primaryButton} href="#interest">سجّل اهتمامك</a>
                <a className={styles.secondaryButton} href="#what-we-do">تعرّف كيف يعمل تيار</a>
              </div>
              <small>صفحة تعريفية · لا تتطلب شراءً أو اشتراكًا</small>
            </div>

            <div className={styles.productMock} aria-label="معاينة توضيحية لتيار">
              <div className={styles.browserBar}>معاينة تشغيلية ببيانات تجريبية</div>
              <div className={styles.mockBody}>
                <aside>
                  <b>تيــار</b>
                  <span>الرئيسية</span>
                  <span className={styles.selected}>الطلبات</span>
                  <span>العقارات</span>
                  <span>العملاء</span>
                  <span>المتابعات</span>
                </aside>
                <article>
                  <span className={styles.status}>متابعة العميل</span>
                  <h3>مكتب للإيجار في الرياض</h3>
                  <p>شركة المدار · اتصال هاتفي</p>
                  <div className={styles.flow}>
                    <b>مسار الطلب</b>
                    <div><i /><i /><i /><i /><i className={styles.pending} /></div>
                  </div>
                  <div className={styles.matches}>
                    <b>عقارات قريبة من الطلب</b>
                    <div><span>مكتب العليا التجاري</span><strong>92%</strong></div>
                    <div><span>مكتب الورود</span><strong>87%</strong></div>
                    <div><span>مكتب الصحافة</span><strong>81%</strong></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.problem}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>المشكلة التشغيلية</p>
            <h2>العمل العقاري لا يجب أن يعتمد على الذاكرة</h2>
            <p className={styles.intro}>
              عندما تتوزع الطلبات والمحادثات والعقارات والمتابعات بين واتساب والملفات والأفراد، يصبح
              من الصعب معرفة حالة كل فرصة والخطوة التالية المطلوبة.
            </p>
            <div className={styles.problemGrid}>
              <article><b>الطلب موجود</b><p>لكن تفاصيله موزعة بين مكالمة ومحادثة وملاحظة.</p></article>
              <article><b>العقار موجود</b><p>لكن لا يظهر وقت الحاجة لأن بياناته ليست في سجل واحد.</p></article>
              <article><b>الفرصة موجودة</b><p>لكن لا توجد متابعة واضحة تحافظ عليها حتى النتيجة.</p></article>
            </div>
          </div>
        </section>

        <section className={styles.section} id="what-we-do">
          <div className={styles.container}>
            <p className={styles.eyebrow}>ماذا ينظم تيار؟</p>
            <h2>ليس مجرد مكان لتسجيل البيانات</h2>
            <p className={styles.intro}>
              يربط تيار كل طلب بما حدث عليه، وما أُرسل للعميل، ومن المسؤول عنه، وما الإجراء التالي.
            </p>
            <div className={styles.capabilityGrid}>
              {capabilities.map(([title, description], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.journeySection} id="how-it-works">
          <div className={styles.container}>
            <p className={styles.eyebrow}>كيف يعمل</p>
            <h2>مسار واحد يحافظ على الفرصة حتى نهايتها</h2>
            <div className={styles.journey}>
              {journey.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.fitSection}>
          <div className={`${styles.container} ${styles.fitGrid}`}>
            <div>
              <p className={styles.eyebrow}>لمن صُمم؟</p>
              <h2>للمنشآت العقارية التي تريد تشغيلًا أوضح</h2>
            </div>
            <p>
              للمنشآت العاملة في الوساطة العقارية أو إدارة الأملاك أو أكثر من نشاط، والتي تريد
              الانتقال من المحادثات والملفات المتفرقة إلى عمل واضح وقابل للمتابعة.
            </p>
          </div>
        </section>

        <section className={styles.interestSection} id="interest">
          <div className={`${styles.container} ${styles.interestGrid}`}>
            <div>
              <p className={styles.eyebrow}>سجّل اهتمامك</p>
              <h2>هل ترى أن تيار يمكن أن يخدم منشأتك؟</h2>
              <p>
                سجّل اهتمامك لنشاركك التحديثات ونتواصل معك عندما تصبح المرحلة المناسبة لمنشأتك متاحة.
              </p>
              <ul>
                <li>لا يتطلب شراءً أو اشتراكًا.</li>
                <li>لا ينشئ حسابًا تلقائيًا.</li>
                <li>يساعدنا على فهم احتياج السوق.</li>
              </ul>
            </div>
            <div className={styles.formCard}><InterestForm /></div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <img src="/brand/tayyar-logo-ar-dark-bg.svg" alt="تيار" width={125} height={40} />
          <span>نظام تشغيل للمنشآت العقارية السعودية</span>
        </div>
      </footer>
    </div>
  )
}
