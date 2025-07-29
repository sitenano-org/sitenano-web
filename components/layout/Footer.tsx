import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    hizmetler: [
      { name: 'Yapay Zeka', href: '/yapay-zeka' },
      { name: 'Dijital Dönüşüm', href: '/hizmetler' },
      { name: 'Web Projeleri', href: '/web-tasarim' },
      { name: 'E-ticaret', href: '/e-ticaret' },
      { name: 'Web Tasarım', href: '/web-tasarim' },
      { name: 'Komisyonsuz Sat', href: '/e-ticaret' },
      { name: 'Online Sipariş', href: '/online-siparis-sistemi' },
      { name: 'Yazılım Geliştirme', href: '/hizmetler' },
    ],
    sirket: [
      { name: 'İçerik ve İletişim Otomasyonu', href: '/yapay-zeka' },
      { name: 'Akıllı Web & Uygulama Özellikleri', href: '/yapay-zeka' },
      { name: 'Süreç Otomasyonları', href: '/yapay-zeka' },
      { name: 'AI destekli İş Akışları', href: '/yapay-zeka' },
      { name: 'Veri Analizi ve Raporlama Sistemleri', href: '/yapay-zeka' },
      { name: 'Görsel ve Medya Üretimi', href: '/yapay-zeka' },
    ],
  }

  return (
    <footer className="bg-secondary text-white relative overflow-hidden" style={{ height: '760px', margin: '0 15px 20px 15px', borderRadius: '0 0 32px 32px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/footer-bg.jpg)' }}></div>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 mt-8">
              <Image
                src="/images/logos/sitenano-logo-beyaz-yesil.svg"
                alt="Sitenano Logo"
                width={179}
                height={30}
                className="h-8 w-auto"
                priority
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Web tasarımı, yapay zeka destekli çözümler, e-ticaret altyapıları ve özel yazılım projeleri geliştiriyoruz. Fikriniz ister net olsun ister henüz şekillenmemiş, sizi dinlemeye ve aklınızdakini güçlü dijital çözümlere dönüştürmeye hazırız.
            </p>

          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 mt-8">DİJİTAL ÇÖZÜMLER</h3>
            <ul className="space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 mt-8">YAPAY ZEKA ÇÖZÜMLERİ</h3>
            <ul className="space-y-3">
              {footerLinks.sirket.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 mt-8">BİZE ULAŞIN</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300">Yakuplu Mh. 194 Sk. No:1 D:183</p>
                <p className="text-gray-300">Beylikdüzü / İstanbul</p>
              </div>
              
              <div style={{ marginTop: '70px' }}>
                <h4 className="text-xl font-heading font-semibold mb-3 text-primary">TELEFON</h4>
                <p className="text-gray-300">+90 212 212 9990</p>
              </div>
              
              <div style={{ marginTop: '70px' }}>
                <h4 className="text-xl font-heading font-semibold mb-3 text-primary">E-POSTA GÖNDERİN</h4>
                <p className="text-gray-300">info@sitenano.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
              <p className="text-gray-300 text-sm" style={{marginBottom: '80px'}}>
                © {currentYear} Sitenano. Tüm hakları saklıdır.
              </p>
              <div style={{flex: 1}} />
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/gizlilik-politikasi" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Gizlilik Politikası
                </Link>
                <Link href="/kullanim-kosullari" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Kullanım Koşulları
                </Link>
              </div>
              <div style={{width: '60px'}} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 