import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'İletişim | Sitenano',
  description: 'Sitenano ile iletişime geçin. Web tasarımı, e-ticaret, yapay zeka ve online sipariş sistemleri için ücretsiz danışmanlık alın.',
  keywords: ['iletişim', 'sitenano', 'web tasarım', 'e-ticaret', 'yapay zeka', 'danışmanlık', 'Türkiye'],
  openGraph: {
    title: 'İletişim | Sitenano',
    description: 'Sitenano ile iletişime geçin. Web tasarımı, e-ticaret, yapay zeka ve online sipariş sistemleri için ücretsiz danışmanlık alın.',
    url: 'https://sitenano.com/iletisim',
    siteName: 'Sitenano',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İletişim | Sitenano',
    description: 'Sitenano ile iletişime geçin. Web tasarımı, e-ticaret, yapay zeka ve online sipariş sistemleri için ücretsiz danışmanlık alın.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: '100vh', backgroundColor: '#333646' }}>
        <div className="container-custom relative z-10 h-full flex items-center py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <div>
                <h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-tight mb-4 uppercase tracking-widest"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '80px',
                    fontWeight: 900,
                    letterSpacing: '8px',
                    lineHeight: '110px',
                    color: 'rgb(255, 255, 255)',
                    margin: '0px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    WebkitTextStroke: '2px rgba(255,255,255,0.3)'
                  }}
                >
                  BİZE<br />ULAŞIN
                </h1>
                <div className="w-20 h-1 bg-red-500 rounded-full mb-6"></div>
              </div>
              
              <div className="space-y-6">
                <p 
                  className="text-gray-300 leading-relaxed"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '20px',
                    fontWeight: 400
                  }}
                >
                  Sayfamızı ziyaret ettiğiniz için teşekkür ederiz.
                </p>
                <p 
                  className="text-gray-300 leading-relaxed"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '20px',
                    fontWeight: 400
                  }}
                >
                  İletişim formunu kullanarak bize ulaşabilir, detaylı bilgi alabilirsiniz. En kısa sürede size geri dönüş yapacağız.
                </p>
              </div>
              
              <div className="space-y-12">
                <div className="text-gray-300 mb-8">
                  <p 
                    className="mb-1"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  >
                    Ege Baskı Tasarım Amb. San. ve Dış Tic. Ltd. Şti.
                  </p>
                  <p 
                    className="mb-1"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  >
                    Yakuplu Mah. 194. Sk. No:1 D:183
                  </p>
                  <p 
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  >
                    Beylikdüzü / İstanbul
                  </p>
                </div>
                <a 
                  href="mailto:info@cmsnano.com"
                  className="flex items-center space-x-3 cursor-pointer transition-all duration-300 ease group"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    lineHeight: '24px',
                    color: 'rgb(44, 182, 187)',
                    textDecoration: 'none',
                    userSelect: 'none',
                    verticalAlign: 'middle'
                  }}
                >
                  <span>info@cmsnano.com</span>
                  <svg className="w-6 h-6 text-primary transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="mailto:info@sitenano.com"
                  className="flex items-center space-x-3 cursor-pointer transition-all duration-300 ease group"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    lineHeight: '24px',
                    color: 'rgb(44, 182, 187)',
                    textDecoration: 'none',
                    userSelect: 'none',
                    verticalAlign: 'middle'
                  }}
                >
                  <span>info@sitenano.com</span>
                  <svg className="w-6 h-6 text-primary transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="tel:02122129990"
                  className="flex items-center space-x-3 cursor-pointer transition-all duration-300 ease group"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    lineHeight: '24px',
                    color: 'rgb(44, 182, 187)',
                    textDecoration: 'none',
                    userSelect: 'none',
                    verticalAlign: 'middle'
                  }}
                >
                  <span>Tel : 0(212)2129990</span>
                  <svg className="w-6 h-6 text-primary transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="p-8" style={{ marginTop: '150px' }}>
              <form className="space-y-6">
                <div>
                  <label 
                    className="block text-white mb-2"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  >
                    Adınız
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white focus:border-primary focus:outline-none transition-colors"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-white mb-2"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  >
                    E-posta adresiniz
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white focus:border-primary focus:outline-none transition-colors"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-white mb-2"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white focus:border-primary focus:outline-none transition-colors"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-white mb-2"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  >
                    Mesajınız
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  ></textarea>
                </div>
                
                <div className="space-y-4">
                  <h3 
                    className="text-white"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '20px',
                      fontWeight: 400
                    }}
                  >
                    Hangi konularda çözüm arıyorsunuz?
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-primary bg-transparent border-gray-600 rounded focus:ring-primary" />
                      <span 
                        className="text-white"
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '20px',
                          fontWeight: 400
                        }}
                      >
                        Web site ve tasarım desteğine ihtiyacım var
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-primary bg-transparent border-gray-600 rounded focus:ring-primary" />
                      <span 
                        className="text-white"
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '20px',
                          fontWeight: 400
                        }}
                      >
                        E-ticaret siteleri hakkında çözüm arıyorum
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-primary bg-transparent border-gray-600 rounded focus:ring-primary" />
                      <span 
                        className="text-white"
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '20px',
                          fontWeight: 400
                        }}
                      >
                        Kapıda ödemeli, entegre sipariş sistemi arıyorum
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-primary bg-transparent border-gray-600 rounded focus:ring-primary" />
                      <span 
                        className="text-white"
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '20px',
                          fontWeight: 400
                        }}
                      >
                        Özel bir web projesi hazırlığım var
                      </span>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="py-3 px-8 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '20px',
                    fontWeight: 400
                  }}
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "İletişim",
            "description": "Sitenano ile iletişime geçin. Web tasarımı, e-ticaret, yapay zeka ve online sipariş sistemleri için ücretsiz danışmanlık alın.",
            "url": "https://sitenano.com/iletisim",
            "mainEntity": {
              "@type": "Organization",
              "name": "Sitenano",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Teknoloji Mahallesi İnovasyon Caddesi No: 123",
                "addressLocality": "Şişli",
                "addressRegion": "İstanbul",
                "addressCountry": "TR"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+90-212-555-0123",
                  "contactType": "customer service",
                  "email": "info@sitenano.com"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+90-532-555-0123",
                  "contactType": "customer service"
                }
              ]
            }
          })
        }}
      />
    </>
  )
} 