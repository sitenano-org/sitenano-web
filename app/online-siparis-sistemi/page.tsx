import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Online Sipariş Sistemi | Sitenano',
  description: 'Restoran ve işletmeler için özel online sipariş sistemleri. Mobil uygulama, web sitesi ve yönetim paneli çözümleri.',
  keywords: ['online sipariş', 'restoran sipariş sistemi', 'mobil sipariş', 'sipariş uygulaması', 'Türkiye'],
}

export default function OnlineSiparisPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-heading font-bold text-secondary mb-6">
          Online Sipariş Sistemi
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Restoran ve işletmeler için özel online sipariş sistemleri.
        </p>
        <Link href="/iletisim" className="btn-primary">
          Teklif Al
        </Link>
      </div>
    </div>
  )
} 