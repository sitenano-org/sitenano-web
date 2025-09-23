import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Online Sipariş Sistemi | Sitenano',
  description: 'Restoran ve işletmeler için özel online sipariş sistemleri. Mobil uygulama, web sitesi ve yönetim paneli çözümleri.',
  keywords: ['online sipariş', 'restoran sipariş sistemi', 'mobil sipariş', 'sipariş uygulaması', 'Türkiye'],
  openGraph: {
    title: 'Online Sipariş Sistemi | Sitenano',
    description: 'Restoran ve işletmeler için özel online sipariş sistemleri. Mobil uygulama, web sitesi ve yönetim paneli çözümleri.',
    url: 'https://sitenano.com/online-siparis-sistemi',
    siteName: 'Sitenano',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Sipariş Sistemi | Sitenano',
    description: 'Restoran ve işletmeler için özel online sipariş sistemleri. Mobil uygulama, web sitesi ve yönetim paneli çözümleri.',
  },
}

const orderServices = [
  {
    title: 'Mobil Sipariş Uygulaması',
    description: 'Müşterilerinizin kolayca sipariş verebileceği kullanıcı dostu mobil uygulama.',
    icon: '📱',
    features: ['Kolay sipariş verme', 'Ödeme entegrasyonu', 'Sipariş takibi', 'Push bildirimler'],
  },
  {
    title: 'Web Tabanlı Sipariş Sistemi',
    description: 'Web sitesi üzerinden çalışan, responsive tasarımlı sipariş platformu.',
    icon: '💻',
    features: ['Responsive tasarım', 'SEO optimizasyonu', 'Hızlı yükleme', 'Güvenli ödeme'],
  },
  {
    title: 'Yönetim Paneli',
    description: 'Siparişleri yönetebileceğiniz, stok takibi yapabileceğiniz admin paneli.',
    icon: '⚙️',
    features: ['Sipariş yönetimi', 'Stok takibi', 'Raporlama', 'Müşteri yönetimi'],
  },
  {
    title: 'Ödeme Entegrasyonları',
    description: 'Güvenli ve hızlı ödeme işlemleri için çoklu ödeme sistemi entegrasyonu.',
    icon: '💳',
    features: ['Kredi kartı', 'Banka kartı', 'Dijital cüzdan', 'Kapıda ödeme'],
  },
]

const benefits = [
  {
    title: 'Komisyonsuz Altyapı',
    description: 'Komisyon ödemeden, kendi markanızla sipariş alın.',
    icon: '💰',
  },
  {
    title: '7/24 Sipariş',
    description: 'Müşterileriniz istediği zaman sipariş verebilir.',
    icon: '🕒',
  },
  {
    title: 'Kolay Yönetim',
    description: 'Siparişleri tek yerden kolayca yönetin.',
    icon: '📊',
  },
  {
    title: 'Markanıza Özel',
    description: 'İşletmenizin ihtiyaçlarına göre özelleştirilmiş çözüm.',
    icon: '🎨',
  },
]

export default function OnlineSiparisPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-secondary opacity-20"></div>
        <div className="container-custom relative z-10 section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Online Sipariş{' '}
                <span className="text-yellow-300">Sistemleri</span>{' '}
                ile Büyüyün
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                Komisyonsuz, kolay, markanıza özel online sipariş altyapısı ile işletmenizi dijitalleştirin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/iletisim" className="btn-secondary text-lg px-8 py-4">
                  Ücretsiz Demo
                </Link>
                <Link href="#hizmetler" className="btn-outline border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
                  Hizmetlerimizi İncele
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/online-siparis-sistemi.jpg"
                alt="Online sipariş sistemi"
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
              Online Sipariş Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına özel geliştirilen online sipariş çözümleri ile müşteri deneyimini artırın
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {orderServices.map((service, index) => (
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
              Online Sipariş Avantajları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Online sipariş sistemimiz ile elde edeceğiniz somut faydalar
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
              Kurulum Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Online sipariş sisteminizi adım adım hayata geçiriyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'İhtiyaç Analizi',
                description: 'İşletmenizin ihtiyaçlarını analiz eder, en uygun çözümü planlarız.',
              },
              {
                step: '02',
                title: 'Tasarım ve Geliştirme',
                description: 'Markanıza özel tasarım ve geliştirme sürecini başlatırız.',
              },
              {
                step: '03',
                title: 'Test ve Entegrasyon',
                description: 'Sistemi test eder, ödeme ve diğer entegrasyonları yaparız.',
              },
              {
                step: '04',
                title: 'Yayın ve Destek',
                description: 'Sistemi yayına alır, sürekli destek ve güncelleme sağlarız.',
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
            Online Sipariş Sisteminizi Kurun
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Komisyonsuz, markanıza özel online sipariş sistemi ile işletmenizi büyütün. Ücretsiz danışmanlık ve demo için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="btn-primary text-lg px-8 py-4">
              Ücretsiz Teklif Al
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
            "name": "Online Sipariş Sistemi",
            "description": "Restoran ve işletmeler için özel online sipariş sistemleri. Mobil uygulama, web sitesi ve yönetim paneli çözümleri.",
            "url": "https://sitenano.com/online-siparis-sistemi",
            "mainEntity": {
              "@type": "Service",
              "name": "Online Sipariş Sistemi",
              "description": "Mobil uygulama, web tabanlı sipariş sistemi, yönetim paneli ve ödeme entegrasyonları",
              "provider": {
                "@type": "Organization",
                "name": "Sitenano"
              },
              "serviceType": "Online Sipariş Sistemi Geliştirme",
              "areaServed": "Türkiye"
            }
          })
        }}
      />
    </>
  )
} 