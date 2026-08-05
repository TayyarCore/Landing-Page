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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://tayyar.app/#website',
      url: 'https://tayyar.app',
      name: 'تيار',
      description,
      inLanguage: 'ar-SA',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://tayyar.app/#software',
      name: 'تيار',
      url: 'https://tayyar.app',
      image: 'https://tayyar.app/brand/tayyar-og.png',
      description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      inLanguage: 'ar-SA',
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'المنشآت والوسطاء العقاريون في السعودية',
      },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: 'تيار',
  title,
  description,
  category: 'business',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        alt: 'تيار — نظام تشغيل للمنشآت العقارية السعودية',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <LeadCaptureEnhancer />
      </body>
    </html>
  )
}
