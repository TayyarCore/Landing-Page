import type { Metadata } from 'next'
import { Tajawal, Inter } from 'next/font/google'
import LeadCaptureEnhancer from './LeadCaptureEnhancer'
import './globals.css'

// Master Brand System v1.0 typography: Tajawal for Arabic, Inter for Latin
// fragments (this page is Arabic-first, so Inter covers incidental Latin
// text like emails rather than full paragraphs).
const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteUrl = new URL('https://tayyar.app')
const shareImage = '/brand/tayyar-og.png'
// Site identity - the "من أول اتصال إلى إغلاق الصفقة" tagline stays in the
// page content (app/page.tsx hero) as marketing copy; it is intentionally
// NOT the metadata title/OG identity.
const title = 'تيار — نظام تشغيل للمنشآت العقارية السعودية'
const description =
  'نظام تشغيل للمنشآت والوسطاء العقاريين في السعودية، يجمع الطلبات والعقارات والعملاء والمتابعات في مسار عمل واضح.'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/brand/tayyar-favicon.svg', type: 'image/svg+xml' },
      { url: '/brand/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/brand/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/brand/apple-touch-icon-180.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'تيار',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: 'تيار',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [shareImage],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${inter.variable}`}>
      <body>
        {children}
        <LeadCaptureEnhancer />
      </body>
    </html>
  )
}
