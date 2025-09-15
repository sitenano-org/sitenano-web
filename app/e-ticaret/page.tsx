import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'E-Ticaret Platformları | Sitenano',
  description: 'Güçlü e-ticaret platformları ile online satış yapın. Güvenli ödeme sistemleri, stok yönetimi ve müşteri yönetimi çözümleri.',
  keywords: ['e-ticaret', 'online satış', 'e-ticaret platformu', 'online mağaza', 'Türkiye'],
}

export default function ETicaretPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-heading font-bold text-secondary mb-6">
          E-Ticaret Platformları
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Güçlü e-ticaret platformları ile online satış yapın.
        </p>
        <Link href="/iletisim" className="btn-primary">
          Teklif Al
        </Link>
      </div>
    </div>
  )
} 