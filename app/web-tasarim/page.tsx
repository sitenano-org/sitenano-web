import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Tasarım Hizmetleri | Sitenano',
  description: 'Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz. SEO optimizasyonu ve mobil uyumlu tasarımlar ile işinizi büyütün.',
  keywords: ['web tasarım', 'web sitesi', 'responsive tasarım', 'SEO', 'mobil uyumlu', 'Türkiye'],
}

export default function WebTasarimPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-heading font-bold text-secondary mb-6">
          Web Tasarım Hizmetleri
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz.
        </p>
        <Link href="/iletisim" className="btn-primary">
          Teklif Al
        </Link>
      </div>
    </div>
  )
} 