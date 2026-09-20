import type { Metadata } from 'next'
import {
  LegalPage,
  LEGAL_CONTACT_EMAIL,
  LEGAL_OPERATOR,
  type LegalDoc,
} from '../components/LegalPage'

const CANONICAL = 'https://tayyar.app/terms'

export const metadata: Metadata = {
  title: 'شروط الخدمة | Terms of Service — تيّار',
  description:
    'شروط استخدام منصة تيّار وتكامل واتساب، وحقوق ومسؤوليات المستخدمين. Terms governing the use of the Tayyar platform and its WhatsApp integration.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'شروط الخدمة — تيّار',
    url: CANONICAL,
    type: 'website',
    locale: 'ar_SA',
    siteName: 'تيّار',
  },
  robots: { index: true, follow: true },
}

const doc: LegalDoc = {
  ar: {
    heading: 'شروط الخدمة',
    updated: 'آخر تحديث: 20 سبتمبر 2026',
    intro: `تحكم هذه الشروط استخدامك لمنصة تيّار وخدماتها، وتُشغَّل بواسطة ${LEGAL_OPERATOR} («نحن»، وهي الجهة المالكة والمشغّلة للخدمة). باستخدامك تيّار أو إرسال رسائل إلى رقم واتساب تيّار فإنك توافق على هذه الشروط.`,
    sections: [
      {
        title: '1. الخدمة',
        paragraphs: [
          'تيّار منصة تشغيل للمنشآت والوسطاء العقاريين، تجمع الطلبات والعقارات والعملاء والمتابعات في مسار عمل واحد. قد تتغير ميزات الخدمة مع تطورها.',
        ],
      },
      {
        title: '2. استخدام الخدمة ومسؤوليات المستخدم',
        items: [
          'أن تكون مخوَّلًا نظامًا بإبرام هذه الشروط، وأن تمثّل منشأتك عند التسجيل باسمها.',
          'تقديم معلومات صحيحة ومحدَّثة والحفاظ على سرية بيانات دخولك، وأنت مسؤول عن الأنشطة التي تتم عبر حسابك.',
          'أن يكون لديك الحق والأساس النظامي في إدخال أو استيراد بيانات العملاء والعقارات التي تعالجها داخل تيّار.',
          'مراجعة المعلومات والقرارات التجارية بنفسك؛ تيّار أداة تشغيل ولا تقدّم مشورة قانونية أو مالية أو عقارية.',
        ],
      },
      {
        title: '3. الاستخدام المقبول',
        items: [
          'عدم استخدام الخدمة في أي نشاط مخالف للأنظمة، أو احتيالي، أو مضلِّل.',
          'عدم إرسال رسائل مزعجة أو غير مرغوبة، أو محتوى مسيء أو ينتهك حقوق الآخرين.',
          'عدم محاولة الوصول غير المصرّح به إلى الأنظمة أو بيانات الآخرين، أو تعطيل الخدمة أو اختبار ثغراتها دون إذن.',
          'عدم نسخ الخدمة أو هندستها عكسيًا أو إعادة بيعها دون إذن كتابي.',
          'الالتزام بشروط واتساب وسياسات Meta المطبَّقة عند استخدام قناة واتساب.',
        ],
      },
      {
        title: '4. تكامل واتساب',
        paragraphs: [
          'تستقبل تيّار الرسائل التي يرسلها المستخدمون أو يعيدون توجيهها عمدًا إلى رقم واتساب تيّار، وتُنقل عبر واتساب Cloud API المقدَّمة من Meta بصفتها مزوّد خدمة خارجيًا. لا تصل تيّار إلى حساب واتساب الخاص بك أو محادثاتك الأخرى. تيّار مستقلة عن Meta وWhatsApp وغير تابعة لهما أو معتمدة منهما. تخضع معالجة البيانات لـ',
          'سياسة الخصوصية: /privacy. توصيل الرسائل يعتمد على خدمات طرف ثالث ولا نضمن توصيلها أو توقيتها.',
        ],
      },
      {
        title: '5. الملكية الفكرية',
        paragraphs: [
          `تيّار وشعارها وبرمجياتها وتصميمها مملوكة لـ ${LEGAL_OPERATOR} أو مرخّصة لها، ونمنحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل لاستخدام الخدمة وفق هذه الشروط. تبقى بياناتك ومحتواك ملكًا لك، وتمنحنا حق معالجتها بالقدر اللازم لتشغيل الخدمة.`,
        ],
      },
      {
        title: '6. توفّر الخدمة',
        paragraphs: [
          'نسعى إلى إتاحة الخدمة باستمرار، لكنها تُقدَّم «كما هي» و«حسب التوفر». قد تتوقف أو تتأثر بسبب الصيانة أو أعطال مزوّدي الخدمة أو ظروف خارجة عن سيطرتنا.',
        ],
      },
      {
        title: '7. حدود المسؤولية',
        paragraphs: [
          'بالقدر الأقصى الذي يسمح به النظام المعمول به، لا نتحمل المسؤولية عن الأضرار غير المباشرة أو التبعية أو فقدان الأرباح أو الفرص أو البيانات الناتجة عن استخدام الخدمة أو تعذّر استخدامها، ولا يتجاوز إجمالي مسؤوليتنا ما دفعته لنا مقابل الخدمة خلال الاثني عشر شهرًا السابقة للمطالبة. لا تستبعد هذه الشروط ولا تحدّ من أي حقوق نظامية لا يجوز التنازل عنها أو مسؤولية لا يجوز نظامًا استبعادها.',
        ],
      },
      {
        title: '8. الإنهاء',
        paragraphs: [
          'يمكنك التوقف عن استخدام الخدمة في أي وقت. ويجوز لنا تعليق أو إنهاء وصولك عند مخالفة هذه الشروط أو لحماية الخدمة أو المستخدمين. عند الإنهاء تبقى الأحكام التي بطبيعتها تستمر سارية، ويمكنك طلب حذف بياناتك وفق صفحة: /data-deletion.',
        ],
      },
      {
        title: '9. الجهة المتعاقدة والنظام الواجب التطبيق',
        paragraphs: [
          `الجهة المتعاقدة هي ${LEGAL_OPERATOR}، وهي شركة مسجّلة في ولاية وايومنغ بالولايات المتحدة الأمريكية. تخضع هذه الشروط لقوانين ولاية وايومنغ، وتختص المحاكم المختصة في وايومنغ بنظر النزاعات الناشئة عنها. لا يمس ذلك أي حقوق نظامية إلزامية لحماية المستهلك أو حماية البيانات لا يجوز التنازل عنها في بلد إقامتك، ولا حقك في اللجوء إلى الجهات المختصة هناك حيث يقتضي النظام ذلك.`,
        ],
      },
      {
        title: '10. التغييرات',
        paragraphs: [
          'قد نعدّل هذه الشروط من وقت لآخر. ننشر النسخة المحدَّثة في هذه الصفحة مع تاريخ آخر تحديث، ويُعد استمرارك في استخدام الخدمة بعد النشر قبولًا للتعديلات.',
        ],
      },
      {
        title: '11. التواصل',
        paragraphs: [`${LEGAL_OPERATOR} — البريد الإلكتروني: ${LEGAL_CONTACT_EMAIL}`],
      },
    ],
  },
  en: {
    heading: 'Terms of Service',
    updated: 'Last updated: 20 September 2026',
    intro: `These terms govern your use of the Tayyar platform and its services, owned and operated by ${LEGAL_OPERATOR} ("we"). By using Tayyar or sending messages to the Tayyar WhatsApp number, you agree to these terms.`,
    sections: [
      {
        title: '1. The service',
        paragraphs: [
          'Tayyar is an operating platform for real-estate offices and brokers that brings requests, properties, clients and follow-ups into one workflow. Features may change as the service evolves.',
        ],
      },
      {
        title: '2. Use of the service and user responsibilities',
        items: [
          'You are legally authorised to enter these terms, and to bind your office if you register on its behalf.',
          'You provide accurate, current information and keep your login credentials confidential; you are responsible for activity under your account.',
          'You have the right and legal basis to enter or import the client and property data you process in Tayyar.',
          'You review information and business decisions yourself; Tayyar is an operational tool and does not provide legal, financial or real-estate advice.',
        ],
      },
      {
        title: '3. Acceptable use',
        items: [
          'Do not use the service for unlawful, fraudulent or misleading activity.',
          'Do not send spam or unsolicited messages, or abusive content or content that infringes others’ rights.',
          'Do not attempt unauthorised access to systems or others’ data, disrupt the service, or probe its vulnerabilities without permission.',
          'Do not copy, reverse engineer or resell the service without written permission.',
          'Comply with the applicable WhatsApp terms and Meta policies when using the WhatsApp channel.',
        ],
      },
      {
        title: '4. WhatsApp integration',
        paragraphs: [
          'Tayyar receives messages that users intentionally send or forward to the Tayyar WhatsApp number, transported through the WhatsApp Cloud API provided by Meta as an external service provider. Tayyar does not access your WhatsApp account or your other chats. Tayyar is independent of, and not affiliated with or endorsed by, Meta or WhatsApp. Data handling is described in our Privacy Policy: /privacy. Message delivery depends on third-party services and we do not guarantee delivery or timing.',
        ],
      },
      {
        title: '5. Intellectual property',
        paragraphs: [
          `Tayyar, its logo, software and design are owned by or licensed to ${LEGAL_OPERATOR}. We grant you a limited, non-exclusive, non-transferable licence to use the service under these terms. Your data and content remain yours, and you grant us the right to process them as needed to operate the service.`,
        ],
      },
      {
        title: '6. Availability',
        paragraphs: [
          'We aim to keep the service available but provide it "as is" and "as available". It may be interrupted or affected by maintenance, provider outages or circumstances beyond our control.',
        ],
      },
      {
        title: '7. Limitation of liability',
        paragraphs: [
          'To the maximum extent permitted by applicable law, we are not liable for indirect or consequential damages, or loss of profits, opportunities or data arising from use of, or inability to use, the service, and our total liability is limited to the amount you paid us for the service in the twelve months before the claim. Nothing in these terms excludes or limits any non-waivable statutory rights or liability that cannot lawfully be excluded.',
        ],
      },
      {
        title: '8. Termination',
        paragraphs: [
          'You may stop using the service at any time. We may suspend or end your access if you breach these terms or to protect the service or users. Provisions that by nature survive termination continue to apply, and you may request deletion of your data via: /data-deletion.',
        ],
      },
      {
        title: '9. Contracting entity and governing law',
        paragraphs: [
          `The contracting entity is ${LEGAL_OPERATOR}, a Wyoming, United States company. These terms are governed by the laws of the State of Wyoming, and the competent courts of Wyoming have jurisdiction over disputes arising from them. This does not affect any mandatory consumer or data-protection rights that cannot legally be waived in your jurisdiction, nor your right to bring proceedings before the competent authorities there where the law so requires.`,
        ],
      },
      {
        title: '10. Changes',
        paragraphs: [
          'We may amend these terms from time to time. The updated version is published on this page with a new "last updated" date, and continued use after publication constitutes acceptance.',
        ],
      },
      {
        title: '11. Contact',
        paragraphs: [`${LEGAL_OPERATOR} — Email: ${LEGAL_CONTACT_EMAIL}`],
      },
    ],
  },
}

export default function TermsPage() {
  return <LegalPage doc={doc} current="terms" />
}
