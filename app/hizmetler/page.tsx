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
          <div className="ml-8 flex gap-4">
            <Link 
              href="/iletisim" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Teklif Al
            </Link>
            <Link
              href="#hizmetler"
              className="relative inline-block px-8 py-3 font-medium rounded-lg transition-all duration-300 group"
              style={{
                background: 'white',
              }}
            >
              <span
                className="absolute inset-0 rounded-lg p-[2px] group-hover:bg-gradient-to-r group-hover:from-[#10B981] group-hover:via-[#00BCD4] group-hover:to-[#00D4AA]"
                style={{
                  background: 'linear-gradient(90deg, #10B981, #00BCD4, #00D4AA)',
                  zIndex: 0,
                  transition: 'background 0.3s',
                }}
                aria-hidden="true"
              ></span>
              <span
                className="relative z-10 block bg-white group-hover:bg-gradient-to-r group-hover:from-[#10B981] group-hover:via-[#00BCD4] group-hover:to-[#00D4AA] group-hover:text-white transition-all duration-300 px-8 py-3 rounded-lg"
                style={{
                  border: '2px solid transparent',
                  backgroundClip: 'padding-box',
                  fontSize: '16px', // 2 punto küçültüldü
                }}
              >
                Daha fazla keşfet
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 