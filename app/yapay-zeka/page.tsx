import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Yapay Zeka Araçları ve Çözümleri | Sitenano',
  description: 'İş süreçlerinizi otomatikleştiren, verimliliği artıran ve maliyetleri düşüren yapay zeka çözümleri. Chatbot, veri analizi, otomasyon ve daha fazlası.',
  keywords: ['yapay zeka', 'AI', 'chatbot', 'veri analizi', 'otomasyon', 'makine öğrenmesi', 'Türkiye'],
  openGraph: {
    title: 'Yapay Zeka Araçları ve Çözümleri | Sitenano',
    description: 'İş süreçlerinizi otomatikleştiren, verimliliği artıran ve maliyetleri düşüren yapay zeka çözümleri.',
    url: 'https://sitenano.com/yapay-zeka',
    siteName: 'Sitenano',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yapay Zeka Araçları ve Çözümleri | Sitenano',
    description: 'İş süreçlerinizi otomatikleştiren, verimliliği artıran ve maliyetleri düşüren yapay zeka çözümleri.',
  },
}

const aiServices = [
  {
    title: 'Chatbot Geliştirme',
    description: 'Müşteri hizmetlerinizi 7/24 destekleyen akıllı chatbot çözümleri.',
    icon: '💬',
    features: ['Doğal dil işleme', 'Çok dilli destek', 'Entegrasyon kolaylığı', 'Analitik raporlama'],
  },
  {
    title: 'Veri Analizi ve İş Zekası',
    description: 'Büyük veri setlerinden anlamlı içgörüler çıkaran AI destekli analiz araçları.',
    icon: '📊',
    features: ['Gerçek zamanlı analiz', 'Görselleştirme', 'Tahmin modelleri', 'Otomatik raporlama'],
  },
  {
    title: 'Süreç Otomasyonu',
    description: 'Tekrarlayan iş süreçlerinizi otomatikleştiren akıllı sistemler.',
    icon: '⚙️',
    features: ['RPA entegrasyonu', 'İş akışı otomasyonu', 'Hata kontrolü', 'Performans izleme'],
  },
  {
    title: 'Görüntü ve Ses İşleme',
    description: 'Görüntü tanıma, ses analizi ve multimedya içerik işleme çözümleri.',
    icon: '🎯',
    features: ['Nesne tanıma', 'Yüz tanıma', 'Ses komutları', 'İçerik moderasyonu'],
  },
]

const benefits = [
  {
    title: 'Verimlilik Artışı',
    description: 'Otomatikleştirilmiş süreçler ile %60\'a kadar verimlilik artışı sağlayın.',
    icon: '📈',
  },
  {
    title: 'Maliyet Tasarrufu',
    description: 'İş gücü maliyetlerini azaltın ve kaynaklarınızı daha verimli kullanın.',
    icon: '💰',
  },
  {
    title: '7/24 Hizmet',
    description: 'Müşterilerinize kesintisiz hizmet sunun ve memnuniyeti artırın.',
    icon: '🕒',
  },
  {
    title: 'Veri Odaklı Kararlar',
    description: 'AI destekli analizler ile daha akıllı ve hızlı kararlar alın.',
    icon: '🧠',
  },
]

export default function YapayZekaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-secondary opacity-20"></div>
        <div className="container-custom relative z-10 section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Yapay Zeka ile{' '}
                <span className="text-yellow-300">Geleceği</span>{' '}
                Şekillendirin
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                İş süreçlerinizi otomatikleştiren, verimliliği artıran ve maliyetleri düşüren yapay zeka çözümleri ile rekabette öne geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/iletisim" className="btn-secondary text-lg px-8 py-4">
                  Ücretsiz Danışmanlık
                </Link>
                <Link href="#hizmetler" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                  Hizmetlerimizi İncele
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Yapay zeka ve teknoloji"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
              Yapay Zeka Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşinizin ihtiyaçlarına özel geliştirilen yapay zeka çözümleri ile dijital dönüşümünüzü hızlandırın
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-heading font-semibold text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
              Yapay Zeka Avantajları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yapay zeka çözümlerimiz ile elde edeceğiniz somut faydalar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yapay zeka projenizi adım adım hayata geçiriyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analiz ve Planlama',
                description: 'İhtiyaçlarınızı analiz eder, en uygun AI çözümünü planlarız.',
              },
              {
                step: '02',
                title: 'Tasarım ve Geliştirme',
                description: 'Özel AI modellerini tasarlar ve geliştiririz.',
              },
              {
                step: '03',
                title: 'Test ve Optimizasyon',
                description: 'Kapsamlı testler yapar, performansı optimize ederiz.',
              },
              {
                step: '04',
                title: 'Deployment ve Destek',
                description: 'Sistemi devreye alır, sürekli destek sağlarız.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-secondary mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Yapay Zeka Yolculuğunuza Başlayın
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            İşinizi geleceğe taşıyacak yapay zeka çözümleri için uzman ekibimizle görüşün. Ücretsiz danışmanlık ve demo için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="btn-primary text-lg px-8 py-4">
              Ücretsiz Demo Talep Et
            </Link>
            <Link href="/projeler" className="btn-outline border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4">
              Referans Projelerimizi İncele
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
            "@type": "WebPage",
            "name": "Yapay Zeka Araçları ve Çözümleri",
            "description": "İş süreçlerinizi otomatikleştiren, verimliliği artıran ve maliyetleri düşüren yapay zeka çözümleri.",
            "url": "https://sitenano.com/yapay-zeka",
            "mainEntity": {
              "@type": "Service",
              "name": "Yapay Zeka Çözümleri",
              "description": "Chatbot, veri analizi, süreç otomasyonu ve görüntü işleme çözümleri",
              "provider": {
                "@type": "Organization",
                "name": "Sitenano"
              },
              "serviceType": "Yapay Zeka Geliştirme",
              "areaServed": "Türkiye"
            }
          })
        }}
      />
    </>
  )
} 