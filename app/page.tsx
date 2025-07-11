import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sitenano - Modern Web Çözümleri ve Yapay Zeka Araçları',
  description: 'Sitenano, modern web tasarımı, e-ticaret platformları, yapay zeka araçları ve online sipariş sistemleri konusunda uzmanlaşmış bir teknoloji şirketidir.',
  keywords: ['web tasarım', 'e-ticaret', 'yapay zeka', 'online sipariş sistemi', 'web geliştirme', 'Türkiye'],
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
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full Width Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Modern teknoloji ve inovasyon"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 container-custom text-white">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-none mb-8 tracking-tight">
              Dijital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400">
                Devrim
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-12 leading-relaxed max-w-3xl">
              Yapay zeka, web tasarımı ve dijital çözümlerle işinizi geleceğe taşıyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/iletisim" 
                className="group relative px-12 py-6 bg-primary hover:bg-primary-dark text-white font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10">Ücretsiz Teklif Al</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/projeler" 
                className="px-12 py-6 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-secondary transition-all duration-300 transform hover:scale-105"
              >
                Projelerimizi İncele
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Yapay Zeka Çözümleri Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 bg-primary/20 border border-primary/30 rounded-full text-primary font-semibold">
                🤖 Yapay Zeka Çözümleri
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black leading-tight">
                AI ile
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Geleceği
                </span>
                <br />
                Şekillendirin
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                İş süreçlerinizi otomatikleştiren, verimliliği artıran ve maliyetleri düşüren yapay zeka çözümleri ile rekabette öne geçin.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">%60 Verimlilik Artışı</h3>
                    <p className="text-gray-400">Otomatikleştirilmiş süreçler</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Maliyet Tasarrufu</h3>
                    <p className="text-gray-400">Akıllı kaynak yönetimi</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/yapay-zeka" 
                className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                AI Çözümlerini Keşfet
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Yapay zeka ve makine öğrenmesi"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Tasarım Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Modern web tasarım ve geliştirme"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Design Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce delay-500"></div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-block px-6 py-3 bg-green-100 border border-green-300 rounded-full text-green-700 font-semibold">
                💻 Web Tasarım & Geliştirme
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black leading-tight text-secondary">
                Modern
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                  Web
                </span>
                <br />
                Deneyimleri
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Kullanıcı deneyimini ön planda tutan, responsive ve SEO dostu web siteleri tasarlıyoruz. Her piksel mükemmellik için.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">Responsive Tasarım</h3>
                    <p className="text-gray-500">Tüm cihazlarda mükemmel</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">Hızlı Performans</h3>
                    <p className="text-gray-500">Optimize edilmiş kod</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/web-tasarim" 
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Web Projelerini İncele
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Online Sipariş Sistemi Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 bg-orange-100 border border-orange-300 rounded-full text-orange-700 font-semibold">
                📱 Online Sipariş Sistemi
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black leading-tight text-secondary">
                Dijital
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Sipariş
                </span>
                <br />
                Çözümleri
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Restoran ve işletmeler için özel geliştirilen online sipariş sistemleri. Mobil uygulama, web sitesi ve yönetim paneli.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">Kolay Sipariş</h3>
                    <p className="text-gray-500">Tek tıkla sipariş</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">Analitik Raporlar</h3>
                    <p className="text-gray-500">Detaylı satış analizi</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/online-siparis-sistemi" 
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Sipariş Sistemini Keşfet
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Online sipariş ve mobil uygulama"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-black leading-tight mb-8">
            Projenizi
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400">
              Hayata
            </span>
            <br />
            Geçirelim
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Dijital dönüşüm yolculuğunuzda size yardımcı olmak için buradayız. Hemen iletişime geçin ve ücretsiz danışmanlık alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/iletisim" 
              className="group relative px-12 py-6 bg-primary hover:bg-primary-dark text-white font-bold text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="relative z-10">Hemen Başlayın</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/projeler" 
              className="px-12 py-6 border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white hover:text-secondary transition-all duration-300 transform hover:scale-105"
            >
              Referanslarımızı İnceleyin
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sitenano",
            "url": "https://sitenano.com",
            "logo": "https://sitenano.com/logo.png",
            "description": "Modern web tasarımı, e-ticaret platformları, yapay zeka araçları ve online sipariş sistemleri konusunda uzmanlaşmış teknoloji şirketi.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressCountry": "TR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-212-555-0123",
              "contactType": "customer service",
              "email": "info@sitenano.com"
            },
            "sameAs": [
              "https://twitter.com/sitenano",
              "https://linkedin.com/company/sitenano",
              "https://instagram.com/sitenano"
            ]
          })
        }}
      />
    </>
  )
} 