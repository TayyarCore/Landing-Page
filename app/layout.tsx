import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://tayyar.app'),
  title: 'تيار | من أول اتصال إلى إغلاق الصفقة',
  description:
    'نظام تشغيل للمنشآت العقارية يجمع الطلبات والعقارات والعملاء والمتابعات في مكان واحد.',
  openGraph: {
    title: 'تيار | من أول اتصال إلى إغلاق الصفقة',
    description:
      'حوّل العمل العقاري اليومي إلى خطوات واضحة لا تضيع معها الفرص.',
    url: 'https://tayyar.app',
    siteName: 'تيار',
    locale: 'ar_SA',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
