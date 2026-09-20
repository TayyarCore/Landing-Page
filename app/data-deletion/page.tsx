import type { Metadata } from 'next'
import {
  LegalPage,
  LEGAL_CONTACT_EMAIL,
  LEGAL_OPERATOR,
  type LegalDoc,
} from '../components/LegalPage'

const CANONICAL = 'https://tayyar.app/data-deletion'

export const metadata: Metadata = {
  title: 'تعليمات حذف البيانات | Data Deletion — تيّار',
  description:
    'كيف تطلب حذف بياناتك من تيّار، بما فيها رقمك ورسائلك على واتساب. How to request deletion of your data from Tayyar, including your WhatsApp number and messages.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'تعليمات حذف البيانات — تيّار',
    url: CANONICAL,
    type: 'website',
    locale: 'ar_SA',
    siteName: 'تيّار',
  },
  robots: { index: true, follow: true },
}

const doc: LegalDoc = {
  ar: {
    heading: 'تعليمات حذف البيانات',
    updated: 'آخر تحديث: 20 سبتمبر 2026',
    intro: `تُشغَّل تيّار بواسطة ${LEGAL_OPERATOR}. يمكنك طلب حذف بياناتك الشخصية التي عالجناها، ومنها رقم هاتفك واسم ملفك في واتساب ورسائلك ومرفقاتك التي أرسلتها إلى رقم واتساب تيّار.`,
    sections: [
      {
        title: 'كيف تطلب الحذف',
        items: [
          `أرسل بريدًا إلكترونيًا إلى ${LEGAL_CONTACT_EMAIL} بعنوان «طلب حذف بيانات».`,
          'اذكر في الرسالة المعلومات الموضحة أدناه لنتمكن من تحديد بياناتك.',
          'سنرسل إليك تأكيدًا باستلام الطلب، وقد نطلب خطوة تحقق إضافية، مثل إرسال رمز أو عبارة تحقق من الرقم نفسه على واتساب.',
          'بعد التحقق ننفّذ الحذف ونؤكد لك إتمامه.',
        ],
      },
      {
        title: 'المعلومات المطلوبة منك',
        items: [
          'رقم الهاتف الذي أرسلت منه الرسائل عبر واتساب، بالصيغة الدولية (مثال: +9665XXXXXXXX).',
          'الاسم الظاهر في ملفك الشخصي على واتساب.',
          'الفترة التقريبية التي أرسلت فيها الرسائل.',
          'اسم المنشأة العقارية التي تعاملت معها، إن كنت تعرفها.',
          'نطاق الطلب: حذف كل بياناتك، أو رسائل/مرفقات محددة.',
        ],
        paragraphs: [
          'لا ترسل كلمات مرور أو بيانات بنكية أو صور هويات. نطلب فقط ما يلزم لتحديد بياناتك والتحقق منها.',
        ],
      },
      {
        title: 'ماذا سيُحذف',
        paragraphs: [
          'نحذف رقم الهاتف واسم الملف الشخصي والرسائل والمرفقات والسجلات التشغيلية المرتبطة بها في تيّار، أو نجعلها مجهولة الهوية. قد نحتفظ بالحد الأدنى من السجلات التي يوجب النظام الاحتفاظ بها، مع إبلاغك بذلك.',
        ],
      },
      {
        title: 'المدة',
        paragraphs: ['نرد خلال المدة التي يقتضيها النظام المعمول به، وعادةً خلال 30 يومًا من التحقق من الطلب.'],
      },
      {
        title: 'جهات أخرى',
        paragraphs: [
          'تخضع البيانات المخزنة لدى Meta / WhatsApp لسياساتها، ولا تشمل حذفًا في حسابك على واتساب أو محادثاتك على جهازك. يمكنك حذف الرسائل من جهازك بنفسك.',
        ],
      },
      {
        title: 'التواصل',
        paragraphs: [
          `${LEGAL_OPERATOR} — ${LEGAL_CONTACT_EMAIL}`,
          'للاطلاع على سياستنا الكاملة: /privacy',
        ],
      },
    ],
  },
  en: {
    heading: 'User Data Deletion Instructions',
    updated: 'Last updated: 20 September 2026',
    intro: `Tayyar is operated by ${LEGAL_OPERATOR}. You can request deletion of the personal data we processed, including your phone number, WhatsApp profile name, and the messages and attachments you sent to the Tayyar WhatsApp number.`,
    sections: [
      {
        title: 'How to request deletion',
        items: [
          `Email ${LEGAL_CONTACT_EMAIL} with the subject "Data deletion request".`,
          'Include the information listed below so we can locate your data.',
          'We will confirm receipt and may ask for an extra verification step, such as a code or phrase sent to the same number on WhatsApp.',
          'Once verified, we carry out the deletion and confirm when it is complete.',
        ],
      },
      {
        title: 'Information we need from you',
        items: [
          'The phone number you messaged from on WhatsApp, in international format (e.g. +9665XXXXXXXX).',
          'The name shown on your WhatsApp profile.',
          'The approximate period when you sent messages.',
          'The name of the real-estate office you dealt with, if known.',
          'Scope: delete all your data, or specific messages/attachments.',
        ],
        paragraphs: [
          'Do not send passwords, banking details, or ID photos. We ask only for what is needed to identify and verify your data.',
        ],
      },
      {
        title: 'What will be deleted',
        paragraphs: [
          'We delete or anonymise the phone number, profile name, messages, attachments and related operational records in Tayyar. We may keep the minimum records the law requires us to retain, and will tell you if so.',
        ],
      },
      {
        title: 'Timeline',
        paragraphs: ['We respond within the period required by applicable law, and ordinarily within 30 days after verifying the request.'],
      },
      {
        title: 'Other parties',
        paragraphs: [
          'Data held by Meta / WhatsApp is governed by their own policies; our deletion does not remove your WhatsApp account or the chat on your device. You can delete messages from your own device yourself.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [`${LEGAL_OPERATOR} — ${LEGAL_CONTACT_EMAIL}`, 'Full policy: /privacy'],
      },
    ],
  },
}

export default function DataDeletionPage() {
  return <LegalPage doc={doc} current="data-deletion" />
}
