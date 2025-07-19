import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Sitenano',
  description: 'Sitenano\'nun sunduğu tüm dijital çözümler: web tasarımı, e-ticaret, yapay zeka araçları ve online sipariş sistemleri.',
  keywords: ['hizmetler', 'web tasarım', 'e-ticaret', 'yapay zeka', 'online sipariş', 'dijital çözümler', 'Türkiye'],
}

export default function HizmetlerPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 leading-tight">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-gray-600">
              Sitenano\'nun sunduğu tüm dijital çözümler.
            </p>
          </div>
          <div className="ml-8">
            <Link 
              href="/iletisim" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 