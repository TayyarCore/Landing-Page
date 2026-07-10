'use client'

import { useState } from 'react'

const APP_URL = 'https://app.tayyar.app/login'

const workflow = [
  {
    label: 'استقبل الطلب',
    status: 'طلب جديد',
    title: 'حوّل الاتصال إلى طلب قابل للعمل',
    description:
      'أنشئ العميل والطلب من أول مكالمة بدل أن تبقى التفاصيل موزعة بين الملاحظات والمحادثات.',
    next: 'تم تسجيل المصدر: اتصال هاتفي',
    items: [
      ['العميل', 'شركة المدار'],
      ['الغرض', 'استئجار مكتب'],
      ['المدينة', 'الرياض'],
    ],
  },
  {
    label: 'وضّح الاحتياج',
    status: 'توضيح الطلب',
    title: 'حوّل الكلام العام إلى شروط واضحة',
    description:
      'ثبّت المدينة والنوع والميزانية والمساحة والاشتراطات ليصبح الطلب مفهومًا لكل شخص في الفريق.',
    next: 'الخطوة التالية: اعتماد الاشتراطات',
    items: [
      ['المساحة', '180–250 م²'],
      ['الميزانية', 'حتى 190 ألف ر.س'],
      ['الاشتراطات', 'واجهة واضحة ومواقف'],
    ],
  },
  {
    label: 'اعثر على المناسب',
    status: 'إرسال العروض',
    title: 'اعرض العقارات الأقرب إلى الطلب',
    description:
      'اجمع نتائج المطابقة في مكان واحد وافتح العقار مباشرة بدل البحث اليدوي بين الملفات.',
    next: '3 عقارات قريبة من الاشتراطات',
    items: [
      ['مكتب العليا', '92% مطابقة'],
      ['مكتب الورود', '87% مطابقة'],
      ['مكتب الصحافة', '81% مطابقة'],
    ],
  },
  {
    label: 'تابع العميل',
    status: 'متابعة العميل',
    title: 'اجعل الخطوة التالية ظاهرة ومرتبطة بموعد',
    description:
      'بعد إرسال العرض أنشئ متابعة واضحة بمسؤول وموعد وهدف بدل الاعتماد على الذاكرة.',
    next: 'المتابعة مستحقة اليوم · 4:30 م',
    items: [
      ['الإجراء', 'الاتصال بعد مراجعة العروض'],
      ['المسؤول', 'عبدالعزيز'],
      ['الأولوية', 'مرتفعة'],
    ],
  },
  {
    label: 'ثبّت النتيجة',
    status: 'تحديث الجدية',
    title: 'وثّق رأي العميل ولا تفقد المعرفة',
    description:
      'سجّل ما ناسب العميل وما لم يناسبه وحدد الإجراء التالي حتى تبقى الفرصة مفهومة.',
    next: 'تم توثيق الملاحظة وربطها بالطلب والعقار',
    items: [
      ['رد العميل', 'الموقع مناسب'],
      ['الملاحظة', 'يحتاج مرونة في السعر'],
      ['الخطوة التالية', 'بدء التفاوض'],
    ],
  },
]

const problems = [
  ['01', 'طلب وصل ولم تتم متابعته', 'انتهت المكالمة وبقيت التفاصيل دون إجراء تالٍ واضح.'],
  ['02', 'عقار موجود ولا يظهر وقت الحاجة', 'البيانات والصور ومصدر العرض موزعة بين أكثر من مكان.'],
  ['03', 'الطلب والعقار لا يلتقيان', 'لا توجد صورة تشغيلية تربط الطلب بالعقار والمتابعة والنتيجة.'],
]

const capabilities = [
  ['01', 'الطلبات', 'حوّل احتياج العميل إلى مسار واضح من الاستفسار حتى المتابعة والإغلاق.'],
  ['02', 'العقارات والوحدات', 'احفظ البيانات والصور والمستندات ومصدر العرض في سجل واحد.'],
  ['03', 'العملاء وجهات التواصل', 'اعرف العميل وطلباته والعقارات والأنشطة المرتبطة به.'],
  ['04', 'المتابعات', 'شاهد ما يجب تنفيذه اليوم وما تأخر وما يحتاج إجراءً تاليًا.'],
  ['05', 'المطابقة', 'اعرض العقارات الأقرب إلى بيانات الطلب الأساسية.'],
  ['06', 'خريطة العقارات', 'شاهد توزيع مخزونك جغرافيًا وافتح تفاصيل العقار مباشرة.'],
]

export default function Home() {
  const [activeStep, setActiveStep] = useState(0)
  const active = workflow[activeStep]

  function openMobileStep(index: number, target: HTMLButtonElement) {
    setActiveStep(index)
    window.setTimeout(() => {
      target.closest('article')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="تيار">
            <span className="brand-mark" aria-hidden="true" />
            تيــار
          </a>
          <nav className="nav-links" aria-label="التنقل الرئيسي">
            <a href="#product">المنتج</a>
            <a href="#workflow">كيف يعمل</a>
            <a href="#founders">البرنامج المؤسس</a>
          </nav>
          <a className="button button-outline" href={APP_URL}>
            دخول العملاء
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="pill">نظام تشغيل للمنشآت العقارية</span>
              <h1>
                من أول اتصال…
                <span>إلى إغلاق الصفقة.</span>
              </h1>
              <p className="lead">
                تيار يجمع الطلبات والعقارات والعملاء والمتابعات في مكان واحد، ويحوّل العمل اليومي
                إلى خطوات واضحة لا تضيع معها الفرص.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#founders">
                  اطلب الانضمام للبرنامج المؤسس ←
                </a>
                <a className="button button-secondary" href="#workflow">
                  شاهد كيف يعمل تيار ↓
                </a>
              </div>
              <p className="trust-line">صُمم في السعودية · باللغة العربية · للعمليات العقارية</p>
            </div>
            <ProductMock />
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <p className="eyebrow">المشكلة التشغيلية</p>
            <h2>الفرص موجودة. المشكلة أنها موزعة بين الأشخاص والملفات والمحادثات.</h2>
            <p className="section-description">
              عندما لا توجد صورة واحدة للعمل، يصبح كل اتصال جديد معتمدًا على الذاكرة وسرعة الوصول
              إلى المعلومات.
            </p>
            <div className="cards-grid">
              {problems.map(([number, title, description]) => (
                <article className="info-card" key={number}>
                  <span className="card-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="workflow">
          <div className="container">
            <p className="eyebrow">كيف يعمل تيار</p>
            <h2>مسار واحد يحافظ على الفرصة حتى نهايتها</h2>
            <p className="section-description">
              كل مرحلة توضح ما الذي تم وما هي الخطوة التالية، من دون أن يختفي السياق بين الصفحات أو
              الأشخاص.
            </p>

            <div className="workflow-desktop">
              <div className="workflow-tabs">
                {workflow.map((step, index) => (
                  <button
                    className={index === activeStep ? 'active' : ''}
                    key={step.label}
                    onClick={() => setActiveStep(index)}
                    type="button"
                  >
                    <small>المرحلة {index + 1}</small>
                    <b>{step.label}</b>
                  </button>
                ))}
              </div>
              <div className="workflow-panel">
                <BrowserBar />
                <StepContent step={active} />
              </div>
            </div>

            <div className="workflow-mobile">
              {workflow.map((step, index) => (
                <article className={index === activeStep ? 'open' : ''} key={step.label}>
                  <button
                    aria-expanded={index === activeStep}
                    onClick={(event) => openMobileStep(index, event.currentTarget)}
                    type="button"
                  >
                    <span className="mobile-step-number">{index + 1}</span>
                    <span className="mobile-step-label">
                      <small>المرحلة {index + 1}</small>
                      <b>{step.label}</b>
                    </span>
                    <span className="chevron">⌄</span>
                  </button>
                  {index === activeStep && <StepContent compact step={step} />}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" id="product">
          <div className="container">
            <p className="eyebrow">المنتج</p>
            <h2>كل ما تحتاجه لإدارة العمل العقاري اليومي</h2>
            <div className="cards-grid">
              {capabilities.map(([number, title, description]) => (
                <article className="info-card" key={number}>
                  <span className="card-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section proof-section">
          <div className="container proof-copy">
            <p className="eyebrow">صورة تشغيلية واحدة</p>
            <h2>عملك العقاري أمامك، لا في ذاكرة الفريق.</h2>
            <p className="section-description">
              الطلبات والمتابعات والعقارات والفرص المرتبطة تظهر ضمن سياق واحد قابل للعمل.
            </p>
            <div className="stats-grid">
              <Stat value="4" label="طلبات تحتاج إجراء" note="منها طلبان جديدان" />
              <Stat value="7" label="متابعات اليوم" note="متابعة واحدة متأخرة" />
              <Stat value="28" label="عقارات نشطة" note="6 عقارات مطابقة لطلبات" />
            </div>
          </div>
        </section>

        <section className="section section-soft" id="founders">
          <div className="container founders-grid">
            <div className="founder-card">
              <span className="pill pill-dark">البرنامج المؤسس · أول 10 منشآت</span>
              <h2>انضم إلى المنشآت المؤسسة لتيار</h2>
              <p>
                نعمل مع أول 10 منشآت بصورة مباشرة، ونطور تيار بناءً على الاستخدام العقاري الحقيقي.
              </p>
              <div className="price">
                499 <small>ر.س شهريًا</small>
              </div>
              <p className="price-note">لأول 6 أشهر · ثم 999 ر.س شهريًا</p>
              <div className="benefits">
                {[
                  'استخدام كامل للمنصة',
                  'إضافة الفريق وإعداد مساحة العمل',
                  'جلسات إعداد وتدريب مباشرة',
                  'دعم مباشر خلال مرحلة التأسيس',
                  'تأثير على أولويات المنتج',
                  'وصول مبكر للميزات الجديدة',
                ].map((benefit) => (
                  <span key={benefit}>✓ {benefit}</span>
                ))}
              </div>
            </div>

            <div className="form-card">
              <p className="eyebrow">اطلب عرضًا مباشرًا</p>
              <h2>شاهد تيار على سيناريو من عمل منشأتك</h2>
              <p className="section-description">
                اترك بياناتك لجدولة عرض مباشر يوضح مسار الطلب والعقار والمتابعة.
              </p>
              <div className="fields-grid">
                <input aria-label="الاسم الكامل" placeholder="الاسم الكامل" />
                <input aria-label="البريد الإلكتروني" dir="ltr" placeholder="البريد الإلكتروني" />
                <input aria-label="اسم المنشأة" placeholder="اسم المنشأة" />
                <input aria-label="رقم الجوال" dir="ltr" placeholder="رقم الجوال" />
              </div>
              <button className="button button-primary full-width" type="button">
                أرسل طلب الانضمام
              </button>
              <p className="form-note">سيتم ربط النموذج بعد تثبيت مشروع الصفحة المستقل.</p>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="final-cta">
              <h2>كل فرصة تحتاج خطوة تالية واضحة.</h2>
              <p>شاهد كيف تتحول الطلبات والعقارات والمتابعات إلى مسار عمل واحد داخل منشأتك.</p>
              <a className="button button-primary" href="#founders">
                احجز عرضًا مباشرًا ←
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <b>تيــار · نظام تشغيل للمنشآت العقارية</b>
          <span>© 2026 جميع الحقوق محفوظة</span>
        </div>
      </footer>
    </>
  )
}

function BrowserBar() {
  return (
    <div className="browser-bar">
      <span className="browser-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>معاينة تشغيلية ببيانات تجريبية</span>
    </div>
  )
}

function StepContent({
  step,
  compact = false,
}: {
  step: (typeof workflow)[number]
  compact?: boolean
}) {
  return (
    <div className={`step-content ${compact ? 'compact' : ''}`}>
      <span className="status">{step.status}</span>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
      <div className="step-items">
        {step.items.map(([label, value]) => (
          <div key={label}>
            <small>{label}</small>
            <b>{value}</b>
          </div>
        ))}
      </div>
      <aside>
        <small>الخطوة التشغيلية</small>
        <b>{step.next}</b>
      </aside>
    </div>
  )
}

function ProductMock() {
  return (
    <div className="product-browser">
      <BrowserBar />
      <div className="product-app">
        <div className="product-main">
          <span className="status">متابعة العميل</span>
          <h3>مكتب للإيجار في الرياض</h3>
          <p className="product-muted">شركة المدار · اتصال هاتفي</p>
          <div className="request-flow">
            <b>مسار الطلب</b>
            <div>
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <i className={item < 4 ? 'done' : ''} key={item} />
              ))}
            </div>
          </div>
          <div className="properties-box">
            <b>عقارات قريبة من الطلب</b>
            {[
              ['مكتب العليا التجاري', '185,000 ر.س', '92%'],
              ['مكتب الورود', '175,000 ر.س', '87%'],
              ['مكتب الصحافة', '165,000 ر.س', '81%'],
            ].map(([title, price, score]) => (
              <div className="property-row" key={title}>
                <span className="property-icon">⌂</span>
                <span>
                  <b>{title}</b>
                  <small>{price}</small>
                </span>
                <strong>{score}</strong>
              </div>
            ))}
          </div>
        </div>
        <aside className="product-sidebar">
          <b>تيــار</b>
          <span>الرئيسية</span>
          <span className="selected">الطلبات</span>
          <span>العقارات</span>
          <span>العملاء</span>
          <span>المتابعات</span>
        </aside>
      </div>
    </div>
  )
}

function Stat({ value, label, note }: { value: string; label: string; note: string }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <b>{label}</b>
      <small>{note}</small>
    </div>
  )
}
