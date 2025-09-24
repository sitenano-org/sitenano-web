import React from 'react';
import Image from 'next/image';

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO BÖLÜMÜ */}
      <section
        className="relative w-full flex items-center overflow-hidden hakkimizda-hero-section"
        style={{ minHeight: '520px', height: '520px', background: 'none', position: 'relative', marginTop: '12px' }}
      >
        {/* Arka plan görseli */}
        <img
          src="/images/hero-hakkimizda-bg.jpg"
          alt="Hakkımızda Hero Background"
          className="object-cover absolute top-0 z-0 hakkimizda-hero-image"
          style={{ 
            objectFit: 'cover', 
            objectPosition: 'center', 
            opacity: 1, 
            minHeight: '520px', 
            height: '520px',
            width: 'calc(100% - 40px)',
            left: '20px',
            right: '20px',
            borderRadius: '20px'
          }}
        />
        {/* Siyah overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black z-0"
          style={{
            width: 'calc(100% - 40px)',
            left: '20px',
            right: '20px',
            borderRadius: '20px',
            opacity: 0.5
          }}
        />
        <div className="w-full h-full flex items-center justify-center relative z-10 px-4 md:px-0 hakkimizda-hero-content">
          <h1
            className="text-white drop-shadow-lg text-4xl md:text-6xl lg:text-8xl text-center hakkimizda-hero-title"
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
            / Hakkımızda /
          </h1>
        </div>
      </section>

      {/* HERO ALTINDA YENİ BÖLÜM */}
      <section
        className="bg-white w-full flex flex-col items-start justify-center"
        style={{ minHeight: '800px', height: 'auto', marginTop: '100px', paddingBottom: '60px' }}
      >
        <div className="w-full px-4 md:px-8 lg:px-0 hakkimizda-section" style={{ maxWidth: '1200px', paddingLeft: '310px', paddingRight: '24px', position: 'relative' }}>

          <div className="mb-4 text-sm font-medium text-gray-600 uppercase tracking-wider text-left" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', letterSpacing: '0.5px' }}>
            [ İşe Yaklaşımımız ]
          </div>
          <h2
            className="text-gray-900 text-3xl md:text-5xl lg:text-6xl text-left"
            style={{
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '60px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: '70px',
              justifyContent: 'flex-start',
              letterSpacing: '-3px',
              lineHeight: '69.9996px',
              textAlign: 'left',
              width: '836px',
              maxWidth: '100%',
              wordSpacing: '8px',
              display: 'block',
            }}
          >
            İyi Tasarlanmış Her Sistem,<br />Sessizce İşini Yapar.
          </h2>
          {/* Sitenano Logo Background - Başlık altında */}
          <div style={{
            position: 'absolute',
            left: '150px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '700px',
            height: '700px',
            opacity: 0.9,
            zIndex: 1,
            backgroundColor: 'white',
            background: 'linear-gradient(135deg, #00D4AA 0%, #1EBBBC 25%, #38BDF8 50%, #2DD4BF 75%, #00F5D4 100%)',
            WebkitMask: 'url(/images/sitenano-logo-bg.svg) no-repeat center',
            mask: 'url(/images/sitenano-logo-bg.svg) no-repeat center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain'
          }}>
          </div>
          <div className="mt-8 md:mt-[160px] flex flex-col md:flex-row justify-end w-full" style={{ minHeight: '1px', height: 'auto' }}>
            <div className="w-full md:w-auto text-left hakkimizda-text-container" style={{ width: '610px', textAlign: 'left', marginRight: '-420px' }}>
              <p className="text-gray-800 mb-6 text-lg md:text-base" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: '1.7' }}>
                Yapay zekâ çözümlerinden, özel yazılıma, web tasarımından iş otomasyonlarına kadar geniş bir alanda çözümler geliştiriyoruz. Tüm bu çözümler, hazır kalıplarla değil; ihtiyaçları gerçekten anlamaya yönelik başlangıçların ürünüdür.
              </p>
              <p className="text-gray-700 mb-4 text-lg md:text-base" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
                Bizim için teknoloji, sadece üretmekle ilgili değil; neyi, neden ve nasıl yapacağımızı önce iyi düşünmekle başlıyor. Sorunu doğru tanımlamak, ihtiyacı gerçekten anlamak ve süreci planlamak geliştirme kadar önemlidir, aksi takdirde üretilen hiçbir çözüm kalıcı olmuyor.
              </p>
              <p className="text-gray-700 mb-4 text-lg md:text-base" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
                Bu yüzden sadece üretmek yerine, analiz eder, seçenekleri tartar, süreci planlar ve ortaya çıkan yapının gerçekten işe yarayıp yaramayacağını önceden test ederiz. Her satır koddan önce bir fikir şekillenir; her arayüz çizilmeden önce kullanıcı düşünülür.
              </p>
              <p className="text-gray-700 mb-4 text-lg md:text-base" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
                Çalıştığımız her bir projeyi yalnızca kodlarla ya da ekran görüntüleriyle tarif etmek mümkün değil. Çünkü her sistemin arkasında bir sektör bilgisi, iş modeli ve kullanıcı davranışıyla kurulan bir denge vardır. Bu dengeyi, yapay zekâ destekli sistemlerden işlevsel ve estetik web çözümlerine, verimliliği artıran özel yazılım projelerine kadar her çözümümüzde uyguluyoruz.
              </p>
              <p className="text-gray-700 text-lg md:text-base" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
                Bugüne dek birlikte çalıştığımız şirketlerin çoğu, bizi bir hizmet sağlayıcı olarak değil, çözüm ortağı olarak gördü. Bu güvenin arkasında, süreçleri dikkatle okuyan, gerçek sorunlara yönelen ve her projenin iç dinamiğine saygı gösteren bir yaklaşım var. Amacımız dijital dünyanın hızına yetişmekten daha çok, o hızı anlamlandıran, işlevsel hâle getiren ve sürdürülebilir bir yapıya oturtan bir şekilde çalışmak. Her satır kod, her piksel, her algoritma; bu anlayışla yerleştirildiğinde, ortaya çıkan şey sadece bir yazılım ya da tasarım değil; işleyen bir sistem oluyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & AI PRODUCT BÖLÜMÜ */}
      <section
        className="bg-white flex flex-col md:flex-row justify-center items-center mission-section"
        style={{
          height: '600px',
          marginLeft: '14px',
          marginRight: '14px',
          marginTop: '80px',
          marginBottom: '60px',
          borderRadius: '24px',
        }}
      >
        {/* Sol Bölüm */}
        <div
          className="w-full md:w-auto mb-4 md:mb-0 mission-left"
          style={{
            width: '630px',
            height: '592px',
            background: '#1F1F1F',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '108px 90px 24px 90px',
            marginRight: '15px',
            boxSizing: 'border-box',
            position: 'relative',
          }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-center md:text-left" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '48px', fontWeight: 400, color: '#fff', margin: 0, lineHeight: '1.1' }}>Aynı Haritadan Farklı Rotalar Çizeriz</h2>
          <p className="text-lg md:text-base text-center md:text-left" style={{
            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 500,
            color: '#fff',
            margin: 0,
            marginTop: '20px',
            marginBottom: '16px',
            height: 'auto',
            letterSpacing: 'normal',
            lineHeight: '30px',
          }}>
            Her marka farklıdır. Her sektörün dinamiği başka.
          </p>
          <p className="text-lg md:text-base text-center md:text-left" style={{
            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 500,
            color: '#fff',
            margin: 0,
            marginTop: '0px',
            marginBottom: '32px',
            height: 'auto',
            letterSpacing: '-0.5px',
            lineHeight: '28px',
          }}>
            Bizim tercihimiz hazır çözümler yerine, yerinde sistemler kurmak. Bu yüzden uzun süreli iş birlikleri kurabiliyor, bir projeyle başlayan ilişkileri yıllar süren ortaklıklara dönüştürebiliyoruz.
          </p>
          <img src="/images/s-logo.svg" alt="Sitenano S Logo" style={{ position: 'absolute', right: '32px', bottom: '24px', height: '92px', width: 'auto', display: 'block', zIndex: 3, pointerEvents: 'none' }} />
        </div>
        {/* Sağ Bölüm */}
        <div
          className="w-full md:w-auto mission-right"
          style={{
            width: '1230px',
            height: '592px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #1EBBBC 0%, #38BDF8 50%, #2DD4BF 100%)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/images/top-hero-bg.jpg" alt="AI Product" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55, zIndex: 1, borderRadius: '24px' }} />
          <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="hidden md:block" style={{ position: 'absolute', left: 0, bottom: '66px', width: '100%', textAlign: 'left', paddingLeft: '80px', zIndex: 3 }}>
              <h3 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-left" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '40px', fontWeight: 400, color: '#fff', lineHeight: '1.2', margin: 0 }}>
                İş Modelleri Tasarlıyoruz.
              </h3>
              <p className="text-center md:text-left" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '20px', fontWeight: 400, color: '#fff', lineHeight: '1.4', margin: '10px 0 0 0' }}>
                Yapay Zekâ Çözümleri, Özel Yazılım Sistemleri,<br />Otomasyonlar, Eticaret, Online Sipariş Sistemleri,<br />Web Tasarımları...
              </p>
            </div>
            <div className="hidden md:block" style={{ position: 'absolute', right: '120px', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', zIndex: 3 }}>
              <span className="text-6xl md:text-8xl lg:text-9xl text-center" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '120px', fontWeight: 700, color: '#fff', opacity: 0.9, letterSpacing: '-4px', lineHeight: '1' }}>50+</span>
              <div className="text-sm md:text-base lg:text-xl text-left" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '20px', color: '#fff', opacity: 0.8, marginTop: '8px' }}>Tamamlanmış<br />Proje</div>
            </div>

            {/* Mobil için tam ortalanmış kutu */}
            <div className="block md:hidden h-full w-full flex flex-col justify-center items-center pt-8 space-y-8" style={{ position: 'absolute', top: 0, left: 0, zIndex: 3 }}>
              <h3 className="text-4xl text-center" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontWeight: 400, color: '#fff', lineHeight: '1.2', margin: 0, fontSize: '36px' }}>
                İş Modelleri Tasarlıyoruz.
              </h3>
              <p className="text-center" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '18px', fontWeight: 400, color: '#fff', lineHeight: '1.4', margin: '10px 0 0 0' }}>
                Yapay Zekâ Çözümleri, Özel Yazılım Sistemleri,<br />Otomasyonlar, Eticaret, Online Sipariş Sistemleri,<br />Web Tasarımları...
              </p>
                              <div className="flex flex-col items-center">
                  <span className="text-6xl text-center" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontWeight: 700, color: '#fff', opacity: 0.9, letterSpacing: '-4px', lineHeight: '1', fontSize: '60px' }}>50+</span>
                  <div className="text-lg text-left" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', color: '#fff', opacity: 0.8, marginTop: '8px', fontSize: '18px' }}>Tamamlanmış<br />Proje</div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT - GRADIENT TEXT BÖLÜMÜ */}
      <section
        className="flex flex-col md:flex-row items-center about-section"
        style={{
          background: '#fff',
          width: '100%',
          minHeight: '550px',
          height: '550px',
          borderRadius: '32px',
          margin: '180px 0 80px 0',
          paddingLeft: '14px',
          paddingRight: '14px',
          boxSizing: 'border-box',
        }}
      >
        {/* Sol görsel - Mobil */}
        <div className="block md:hidden w-full md:w-auto mb-4 md:mb-0 about-image" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '0px' }}>
          <img src="/images/about-elements-1.png" alt="About Elements" className="w-full md:w-auto h-auto object-contain" style={{ height: '400px', width: '300px', display: 'block', maxWidth: '100%' }} />
        </div>
        {/* Sol görsel - Masaüstü */}
        <div className="hidden md:block w-full md:w-auto mb-4 md:mb-0 about-image" style={{ height: '100%', display: 'flex', alignItems: 'center', marginLeft: '-20px' }}>
          <img src="/images/about-elements-1.png" alt="About Elements" className="w-full md:w-auto h-auto md:h-[700px] object-contain" style={{ height: '700px', width: '500px', display: 'block' }} />
        </div>
        {/* Sağ yazı */}
        <div
          className="w-full md:w-auto px-4 md:px-0 about-text"
          style={{
            marginLeft: '115px',
            width: '1032px',
            height: '550px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            marginRight: '240px',
          }}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-center md:text-left"
            style={{
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '100px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: '550px',
              letterSpacing: '-3px',
              lineHeight: '110px',
              overflowWrap: 'break-word',
              position: 'relative',
              textAlign: 'left',
              textSizeAdjust: '100%',
              textTransform: 'none',
              width: '1034.8px',
              wordSpacing: '0px',
              margin: 0,
              padding: 0,
              background: 'none',
              display: 'block',
            }}
          >
            Fikirden Koda <span style={{
              background: 'linear-gradient(90deg, #1EBBBC 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline',
            }}>Özel Yazılım Çözümleri</span><span style={{
              background: 'linear-gradient(90deg, #1EBBBC 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline',
              fontSize: '120px',
              lineHeight: '1',
              marginLeft: '10px',
            }}>.</span><br />Otomatize Sistemler <span style={{
              background: 'linear-gradient(90deg, #1EBBBC 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline',
            }}>&</span> Hızlı İş Süreçleri
          </h2>
        </div>
      </section>
      {/* ALTINA MARGIN EKLE */}
      <div style={{ marginBottom: '200px' }} />

      {/* YENİ BÖLÜM - GÖRSELDEKİ GİBİ */}
      <section
        className="quote-section-hakkimizda"
        style={{
          background: '#0D0D0C',
          width: 'auto',
          margin: '120px 15px 0 15px',
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
        <div className="container-custom px-4 md:px-0 quote-container-hakkimizda" style={{ width: '100%', position: 'relative' }}>
          <div className="flex flex-col md:flex-row items-center justify-between w-full quote-content-hakkimizda" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Sol: Başlık */}
            <div className="quote-title-hakkimizda" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
              <h2
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center md:text-left"
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
                Projeniz için bugün başlangıç olabilir
              </h2>
            </div>
            {/* Sağ: Teklif İste Butonu */}
            <button
              className="teklif-iste-btn text-sm md:text-base px-4 md:px-8 py-3 md:py-4 quote-button-hakkimizda"
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
    </main>
  );
} 