import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projelerimiz | Sitenano',
  description: 'Sitenano\'nun tamamladığı başarılı projeler ve referanslar. Web tasarımı, e-ticaret ve yapay zeka projelerimizi inceleyin.',
  keywords: ['projeler', 'referanslar', 'portföy', 'başarılı projeler', 'web tasarım projeleri', 'Türkiye'],
}

export default function ProjelerPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-heading font-bold text-secondary mb-6">
          Projelerimiz
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Sitenano\'nun tamamladığı başarılı projeler ve referanslar.
        </p>
        <Link href="/iletisim" className="btn-primary">
          Proje Başlat
        </Link>
      </div>
    </div>
  )
} 