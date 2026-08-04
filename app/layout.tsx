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
const title = 'تيار — نظام تشغيل للمكاتب العقارية السعودية'
const description =
  'نظام تشغيل للمنشآت العقارية يجمع الطلبات والعقارات والعملاء والمتابعات في مكان واحد.'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/brand/tayyar-favicon-16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/brand/tayyar-favicon-32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/brand/tayyar-favicon-48.svg', sizes: '48x48', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/brand/tayyar-app-icon.png', sizes: '512x512', type: 'image/png' }],
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
