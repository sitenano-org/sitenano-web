import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Sitenano',
  description: 'Sitenano\'nun sunduğu tüm dijital çözümler: web tasarımı, e-ticaret, yapay zeka araçları ve online sipariş sistemleri.',
  keywords: ['hizmetler', 'web tasarım', 'e-ticaret', 'yapay zeka', 'online sipariş', 'dijital çözümler', 'Türkiye'],
}

export default function HizmetlerPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-heading font-bold text-secondary mb-6">
          Hizmetlerimiz
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Sitenano\'nun sunduğu tüm dijital çözümler.
        </p>
        <Link href="/iletisim" className="btn-primary">
          Teklif Al
        </Link>
      </div>
    </div>
  )
} 