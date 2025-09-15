import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })
const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sitenano - Modern Web Çözümleri ve Yapay Zeka Araçları',
    template: '%s | Sitenano'
  },
  description: 'Sitenano, modern web tasarımı, e-ticaret platformları, yapay zeka araçları ve online sipariş sistemleri konusunda uzmanlaşmış bir teknoloji şirketidir.',
  keywords: ['web tasarım', 'e-ticaret', 'yapay zeka', 'online sipariş sistemi', 'web geliştirme', 'Türkiye'],
  authors: [{ name: 'Sitenano' }],
  creator: 'Sitenano',
  publisher: 'Sitenano',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sitenano.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sitenano - Modern Web Çözümleri ve Yapay Zeka Araçları',
    description: 'Modern web tasarımı, e-ticaret platformları, yapay zeka araçları ve online sipariş sistemleri.',
    url: 'https://sitenano.com',
    siteName: 'Sitenano',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitenano - Modern Web Çözümleri ve Yapay Zeka Araçları',
    description: 'Modern web tasarımı, e-ticaret platformları, yapay zeka araçları ve online sipariş sistemleri.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 