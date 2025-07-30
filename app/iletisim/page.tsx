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
    <main className="min-h-screen bg-white">
      {/* HERO BÖLÜMÜ */}
      <section
        className="relative w-full flex items-center overflow-hidden"
        style={{ minHeight: '520px', height: '520px', background: 'none', position: 'relative', marginTop: '12px' }}
      >
        {/* Arka plan görseli */}
        <img
          src="/images/top-hero-bg.jpg"
          alt="İletişim Hero Background"
          className="object-cover absolute top-0 z-0"
          style={{ 
            objectFit: 'cover', 
            objectPosition: 'center', 
            opacity: 0.85, 
            minHeight: '520px', 
            height: '520px',
            width: 'calc(100% - 40px)',
            left: '20px',
            right: '20px',
            borderRadius: '20px'
          }}
        />
        <div className="w-full h-full flex items-center justify-center relative z-10">
          <h1
            className="text-white drop-shadow-lg"
            style={{
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: '90px',
              letterSpacing: '-2.4px',
              lineHeight: '90px',
              textAlign: 'center',
              textShadow: '0 2px 16px rgba(0,0,0,0.25)'
            }}
          >
            / İletişim /
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative text-white overflow-hidden" style={{ 
        minHeight: '100vh', 
        backgroundColor: '#333646', 
        marginTop: '60px',
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '20px',
        borderRadius: '20px'
      }}>
        <div className="container-custom relative z-10 h-full flex items-center py-10" style={{ paddingBottom: '120px' }}>
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

      {/* ALTINA MARGIN EKLE */}
      <div style={{ marginBottom: '60px' }} />

      {/* YENİ BÖLÜM - GÖRSELDEKİ GİBİ */}
      <section
        style={{
          background: '#0D0D0C',
          width: 'auto',
          margin: '60px 15px 0 15px',
          height: '490px',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div className="container-custom" style={{ width: '100%', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Sol: Başlık */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
              <h2
                style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '80px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  height: '180px',
                  letterSpacing: '-2.4px',
                  lineHeight: '90px',
                  color: 'transparent',
                  background: 'linear-gradient(90deg, #1EBBBC 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                  width: '840px',
                  textAlign: 'left',
                  display: 'block',
                }}
              >
                Projenizi hayata geçirelim!<br />Hemen teklif alın
              </h2>
            </div>
            {/* Sağ: Teklif İste Butonu */}
            <button
              className="teklif-iste-btn"
              style={{
                border: '2px solid transparent',
                borderRadius: '15px',
                background: 'linear-gradient(#0D0D0C, #0D0D0C) padding-box, linear-gradient(90deg, #1EBBBC 0%, #38BDF8 100%) border-box',
                color: '#fff',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                height: '55px',
                minWidth: '70px',
                letterSpacing: '0.12px',
                lineHeight: '27px',
                padding: '0 32px',
                cursor: 'pointer',
                transition: 'background 0.3s',
                position: 'relative',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              Teklif Al
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '4px' }}>
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          {/* Yatay çizgi - butonun sonuna kadar uzanan */}
          <div style={{ 
            position: 'absolute', 
            left: 0, 
            right: 0, 
            height: '1px', 
            background: 'rgba(255,255,255,0.7)', 
            top: 'calc(50% + 90px)', 
            marginTop: '48px' 
          }} />
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
    </main>
  )
} 