import type { Metadata } from 'next'
import {
  LegalPage,
  LEGAL_CONTACT_EMAIL,
  LEGAL_OPERATOR,
  type LegalDoc,
} from '../components/LegalPage'

const CANONICAL = 'https://tayyar.app/privacy'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | Privacy Policy — تيّار',
  description:
    'كيف تجمع تيّار البيانات وتستخدمها وتحميها، بما في ذلك الرسائل التي يرسلها المستخدمون عمدًا إلى رقم واتساب تيّار. How Tayyar collects, uses and protects data, including WhatsApp messages sent to the Tayyar number.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'سياسة الخصوصية — تيّار',
    url: CANONICAL,
    type: 'website',
    locale: 'ar_SA',
    siteName: 'تيّار',
  },
  robots: { index: true, follow: true },
}

const doc: LegalDoc = {
  ar: {
    heading: 'سياسة الخصوصية',
    updated: 'آخر تحديث: 20 سبتمبر 2026',
    intro: `تيّار منصة تشغيل للمنشآت والوسطاء العقاريين، تُشغَّل بواسطة ${LEGAL_OPERATOR} («نحن»). توضح هذه السياسة البيانات التي نعالجها، ولماذا، وكيف نحميها، وما هي حقوقك. تنطبق على موقع تيّار وتطبيقه وعلى قناة واتساب الخاصة بتيّار.`,
    sections: [
      {
        title: '1. من نحن',
        paragraphs: [
          `تيّار تُشغَّل بواسطة ${LEGAL_OPERATOR}. للتواصل بشأن الخصوصية: ${LEGAL_CONTACT_EMAIL}.`,
        ],
      },
      {
        title: '2. تكامل واتساب',
        paragraphs: [
          'تستقبل تيّار الرسائل التي ترسلها أنت أو تعيد توجيهها عمدًا إلى رقم واتساب تيّار (عبر واتساب Cloud API المقدَّمة من Meta). لا تقرأ تيّار محادثاتك الأخرى، ولا تصل إلى حساب واتساب الخاص بك أو جهات اتصالك أو سجل محادثاتك. ما يصل إلينا هو فقط ما تختار إرساله إلى رقمنا.',
        ],
      },
      {
        title: '3. البيانات التي نجمعها',
        items: [
          'رقم هاتف المرسِل.',
          'اسم الملف الشخصي في واتساب.',
          'نص الرسالة.',
          'المرفقات التي ترسلها (مثل الصور والمستندات).',
          'الطوابع الزمنية وبيانات حالة التسليم والاستلام للرسائل.',
          'بيانات الحساب والاستخدام الأساسية للمستخدمين المسجّلين في تيّار (مثل الاسم والبريد الإلكتروني وبيانات المنشأة).',
        ],
        paragraphs: [
          'لا نستخدم ملفات تعريف الارتباط للتحليلات أو الإعلانات، ولا نضيف أدوات تتبع من أطراف خارجية في صفحاتنا القانونية.',
        ],
      },
      {
        title: '4. أغراض الاستخدام',
        items: [
          'التقاط الفرص العقارية من الرسائل الواردة.',
          'إنشاء سجلات تشغيلية في صندوق الوارد داخل تيّار.',
          'إرسال إشعار باستلام رسالتك.',
          'دعم المتابعة داخل تيّار من قِبل فريق المنشأة.',
          'تشغيل الخدمة وتأمينها وتحسينها ودعم المستخدمين.',
        ],
      },
      {
        title: '5. الأساس النظامي والموافقة',
        paragraphs: [
          'نعالج البيانات بناءً على موافقتك، وتتمثل في مبادرتك بإرسال الرسالة أو إعادة توجيهها إلى رقم تيّار، وعلى مصلحتنا المشروعة في تشغيل الخدمة وتأمينها، وبما يتوافق مع الأنظمة المعمول بها على المعالجة. وحيثما تتعلق المعالجة بأفراد في المملكة العربية السعودية، يسري نظام حماية البيانات الشخصية السعودي بالقدر الذي ينطبق. يمكنك سحب موافقتك في أي وقت بالتوقف عن المراسلة وطلب الحذف كما في صفحة تعليمات الحذف.',
        ],
      },
      {
        title: '6. التخزين والأمان',
        paragraphs: [
          'تُخزَّن البيانات لدى مزوّدي بنية تحتية سحابية موثوقين، ومفصولة لكل منشأة بضوابط وصول على مستوى الصفوف. نستخدم التشفير أثناء النقل، والتحقق من توقيع الطلبات الواردة من Meta، وصلاحيات وصول مقيّدة. لا توجد وسيلة نقل أو تخزين آمنة بنسبة 100%، لكننا نطبّق تدابير معقولة لحماية بياناتك.',
        ],
      },
      {
        title: '7. المشاركة',
        paragraphs: [
          'لا نبيع بياناتك الشخصية. قد نشاركها مع: (أ) المنشأة العقارية المشتركة في تيّار التي تخدمك، (ب) مزوّدي الخدمات الذين يشغّلون المنصة، ومنهم Meta / WhatsApp بصفتها مزوّد خدمة خارجيًا لنقل الرسائل، (ج) الجهات المختصة عند وجود التزام نظامي. تخضع معالجة Meta لبياناتها لسياسات Meta وWhatsApp الخاصة بها.',
        ],
      },
      {
        title: '8. الاحتفاظ بالبيانات',
        paragraphs: [
          'نحتفظ بالبيانات ما دام ذلك لازمًا لتقديم الخدمة والأغراض الموضحة أعلاه، أو ما تقتضيه الأنظمة، ثم نحذفها أو نجعلها مجهولة الهوية. عند قبول طلب حذف نحذف البيانات المرتبطة بك ما لم يوجب النظام الاحتفاظ بها.',
        ],
      },
      {
        title: '9. حقوقك',
        items: [
          'الاطلاع على بياناتك الشخصية التي نحتفظ بها.',
          'تصحيح البيانات غير الدقيقة.',
          'طلب حذف بياناتك.',
          'سحب موافقتك والاعتراض على المعالجة.',
          'طلب نسخة من بياناتك.',
        ],
        paragraphs: [`لممارسة أي حق، راسلنا على ${LEGAL_CONTACT_EMAIL}.`],
      },
      {
        title: '10. طلبات حذف البيانات',
        paragraphs: ['اتبع الخطوات الموضحة في صفحة تعليمات حذف البيانات: /data-deletion'],
      },
      {
        title: '11. تحديث السياسة',
        paragraphs: [
          'قد نحدّث هذه السياسة من وقت لآخر. ننشر النسخة المحدَّثة في هذه الصفحة مع تاريخ آخر تحديث، ونوضح التغييرات الجوهرية بوسيلة مناسبة.',
        ],
      },
      {
        title: '12. التواصل',
        paragraphs: [`${LEGAL_OPERATOR} — البريد الإلكتروني: ${LEGAL_CONTACT_EMAIL}`],
      },
    ],
  },
  en: {
    heading: 'Privacy Policy',
    updated: 'Last updated: 20 September 2026',
    intro: `Tayyar is an operating platform for real-estate offices and brokers, operated by ${LEGAL_OPERATOR} ("we"). This policy explains what data we process, why, how we protect it, and your rights. It applies to the Tayyar website, the Tayyar app, and the Tayyar WhatsApp channel.`,
    sections: [
      {
        title: '1. Who we are',
        paragraphs: [
          `Tayyar is operated by ${LEGAL_OPERATOR}. Privacy contact: ${LEGAL_CONTACT_EMAIL}.`,
        ],
      },
      {
        title: '2. WhatsApp integration',
        paragraphs: [
          'Tayyar receives messages that you intentionally send or forward to the Tayyar WhatsApp number, delivered through the WhatsApp Cloud API provided by Meta. Tayyar does not read your unrelated chats and does not access your WhatsApp account, contacts, or chat history. We only receive what you choose to send to our number.',
        ],
      },
      {
        title: '3. Data we collect',
        items: [
          'Sender phone number.',
          'WhatsApp profile name.',
          'Message text.',
          'Attachments you send (for example images and documents).',
          'Timestamps and delivery/status metadata for messages.',
          'Basic account and usage data for registered Tayyar users (such as name, email and office details).',
        ],
        paragraphs: [
          'We do not use cookies for analytics or advertising, and our legal pages load no third-party tracking scripts.',
        ],
      },
      {
        title: '4. Purposes',
        items: [
          'Capturing real-estate opportunities from incoming messages.',
          'Creating operational inbox records inside Tayyar.',
          'Acknowledging receipt of your message.',
          "Supporting follow-up inside Tayyar by the relevant office's team.",
          'Operating, securing and improving the service and supporting users.',
        ],
      },
      {
        title: '5. Lawful basis and consent',
        paragraphs: [
          'We process data based on your consent, shown by your initiative in sending or forwarding a message to the Tayyar number, and on our legitimate interest in operating and securing the service, in line with the laws applicable to the processing. Where processing involves individuals in Saudi Arabia, the Saudi Personal Data Protection Law applies to the extent applicable. You may withdraw consent at any time by ceasing to message us and requesting deletion as described on the data-deletion page.',
        ],
      },
      {
        title: '6. Storage and security',
        paragraphs: [
          'Data is stored with trusted cloud infrastructure providers and separated per office using row-level access controls. We use encryption in transit, signature verification of inbound requests from Meta, and restricted access permissions. No method of transmission or storage is 100% secure, but we apply reasonable measures to protect your data.',
        ],
      },
      {
        title: '7. Sharing',
        paragraphs: [
          'We do not sell your personal data. We may share it with: (a) the real-estate office using Tayyar that is serving you; (b) service providers that run the platform, including Meta / WhatsApp as an external service provider for message transport; and (c) authorities where legally required. Meta processes its own data under Meta and WhatsApp policies.',
        ],
      },
      {
        title: '8. Retention',
        paragraphs: [
          'We keep data for as long as needed to provide the service and the purposes above, or as required by law, then delete or anonymise it. When a deletion request is accepted, we delete data associated with you unless the law requires us to retain it.',
        ],
      },
      {
        title: '9. Your rights',
        items: [
          'Access the personal data we hold about you.',
          'Correct inaccurate data.',
          'Request deletion of your data.',
          'Withdraw consent and object to processing.',
          'Request a copy of your data.',
        ],
        paragraphs: [`To exercise any right, email ${LEGAL_CONTACT_EMAIL}.`],
      },
      {
        title: '10. Deletion requests',
        paragraphs: ['Follow the steps on the data-deletion instructions page: /data-deletion'],
      },
      {
        title: '11. Policy updates',
        paragraphs: [
          'We may update this policy from time to time. The updated version is published on this page with a new "last updated" date, and we will flag material changes appropriately.',
        ],
      },
      {
        title: '12. Contact',
        paragraphs: [`${LEGAL_OPERATOR} — Email: ${LEGAL_CONTACT_EMAIL}`],
      },
    ],
  },
}

export default function PrivacyPage() {
  return <LegalPage doc={doc} current="privacy" />
}
