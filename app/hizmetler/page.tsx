'use client'

import React from 'react';
import Image from 'next/image';

export default function HizmetlerPage() {
  const [selected, setSelected] = React.useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO BÖLÜMÜ */}
      <section
        className="relative w-full flex items-center overflow-hidden hizmetler-hero-section"
        style={{ minHeight: '520px', height: '520px', background: 'none', position: 'relative', marginTop: '12px' }}
      >
        {/* Arka plan görseli */}
        <img
          src="/images/top-hero-bg.jpg"
          alt="Hizmetler Hero Background"
          className="object-cover absolute top-0 z-0 hizmetler-hero-image"
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
            className="text-white drop-shadow-lg hizmetler-hero-title"
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
            / Hizmetlerimiz /
          </h1>
        </div>
      </section>

      {/* HERO ALTINDA YENİ BÖLÜM */}
      <section
        className="bg-white w-full flex flex-row items-start justify-start hizmetler-content-section"
        style={{ marginTop: '180px', marginBottom: '64px' }}
      >
        <div className="hizmetler-content-wrapper" style={{ marginLeft: '280px', display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'flex-start' }}>
          {/* Sol Bölümler */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Sol Menü */}
            <div
              style={{
                width: '310px',
                height: '280px', // Sabit yükseklik
                background: '#F0F2F4',
                borderRadius: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: "flex-start",
                padding: '24px 20px 24px 20px',
                boxSizing: 'border-box',
                flexShrink: 0, // Boyutunu sabit tut
              }}
            >
              {[
                'Özel Ai Çözümleri',
                'Proje Geliştirme',
                'Online Sipariş Sistemi',
                'E-ticaret',
                'Web Tasarım',
              ].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => setSelected(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    color: selected === idx ? '#111' : '#888',
                    fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    height: 'auto',
                    letterSpacing: '-0.6px',
                    lineHeight: '30px',
                    marginBottom: '16px', // Butonlar arası boşluğu azalt
                    cursor: 'pointer',
                    textAlign: 'left', // Yazı sola hizalı
                    width: '100%',
                    transition: 'color 0.2s',
                    display: 'flex',
                    justifyContent: 'flex-start', // Yazı sola hizalı
                    alignItems: 'center',
                    paddingLeft: '32px', // Soldan boşluk
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.color = selected === idx ? '#111' : '#888';
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Sol Alt Bölüm - Services Brochure */}
            <div
              className="services-brochure-card"
              style={{
                width: '310px',
                height: '350px',
                background: 'linear-gradient(135deg, #FF4D47 0%, #F9A09D 50%, #FF6B6B 100%)',
                borderRadius: '32px',
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Nokta deseni */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.3,
              }} />
              
              {/* Üst etiket */}
              <div style={{
                position: 'absolute',
                top: '80px',
                left: '30px',
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#fff',
                zIndex: 1,
              }}>
                /Online Sipariş Sistemi/
              </div>
              
              {/* Ana içerik */}
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'left', paddingLeft: '0px' }}>
                <div style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '26px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  height: '90px',
                  letterSpacing: '-1.2px',
                  lineHeight: '32px',
                  color: '#fff',
                  marginBottom: '24px',
                  marginTop: '104px',
                  marginLeft: '30px',
                }}>
                  Komisyonsuz, kolay, markanıza özel online sipariş altyapısı.
                </div>
                <button style={{
                  background: 'transparent',
                  border: '2px solid #fff',
                  borderRadius: '8px',
                  color: '#fff',
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  transition: 'all 0.3s ease',
                  marginLeft: '30px',
                  marginBottom: '62px',
                }}>
                  Detaylı İncele
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* AI Strategy Bölümü */}
            <div
              className="ai-strategy-card"
              style={{
                width: '310px',
                height: '388px',
                background: 'linear-gradient(135deg, #059669 0%, #0EA5E9 50%, #0284C7 100%)',
                borderRadius: '32px',
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 40px 48px 40px',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Dalga deseni */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 22px)',
                opacity: 0.3,
              }} />
              
              {/* Ana içerik */}
              <div className="ai-strategy-content" style={{ position: 'relative', zIndex: 1, textAlign: 'left', marginTop: '120px' }}>
                <div style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  color: '#fff',
                  marginBottom: '20px',
                }}>
                  Web Tasarım
                </div>
                <div style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#fff',
                  lineHeight: '1.5',
                  opacity: 0.9,
                }}>
                  <div>Sadece bir Web Sitesi ya da tam bir Dijital Dönüşüm Aracı.</div>
                  <div style={{ marginTop: '16px' }}>Görünmek, satmak, etkilemek ya da dönüştürmek…</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sağ İçerik */}
          <div className="hizmetler-right-content" style={{ marginLeft: '32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Başlık ve Alt Metin */}
            {selected === 0 && (
              <>
                <h2 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '60px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-3px',
                  lineHeight: '1.1',
                  margin: 0,
                  marginBottom: '60px', // Boşluğu artır
                  textAlign: 'left',
                }}>
                  Dijital dünyada başarı için<br />ihtiyacınız olan tüm çözümler
                </h2>
                <div style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  height: '120px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  color: '#222',
                  marginBottom: '8px', // 1. ve 2. paragraf arasındaki boşluğu azalt
                  maxWidth: '1000px', // Genişlik 1000px
                }}>
                  Sitenano olarak, işletmenizi dijital dünyada öne çıkaracak kapsamlı çözümler sunuyoruz. Modern teknolojiler ve yaratıcı tasarım anlayışımızla projelerinizi hayata geçiriyoruz.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px' // Genişlik 1000px
                }}>
                  Web tasarımından e-ticaret çözümlerine, yapay zeka uygulamalarından online sipariş sistemlerine kadar geniş bir hizmet yelpazesi ile işletmenizin dijital dönüşümüne öncülük ediyoruz.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px',
                  marginBottom: '16px'
                }}>
                  Uzman ekibimiz, en güncel teknolojileri kullanarak size özel çözümler geliştirir. Dijital başarınız için Sitenano yanınızda.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px',
                  marginBottom: '16px'
                }}>
                  Responsive tasarım prensipleri ile tüm cihazlarda mükemmel görünüm sağlıyoruz. Mobil uyumlu web siteleri ile kullanıcı deneyimini en üst seviyeye çıkarıyoruz.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px',
                  marginBottom: '16px'
                }}>
                  SEO optimizasyonu ile arama motorlarında üst sıralarda yer almanızı sağlıyoruz. Organik trafik artışı ile işletmenizin görünürlüğünü artırıyoruz.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px',
                  marginBottom: '16px'
                }}>
                  Güvenli ödeme sistemleri ve stok yönetimi ile e-ticaret sitenizi profesyonel seviyeye taşıyoruz. Müşteri memnuniyeti odaklı çözümler geliştiriyoruz.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px',
                  marginBottom: '16px'
                }}>
                  Yapay zeka teknolojileri ile işletmenizi geleceğe taşıyoruz. Chatbot geliştirme, veri analizi ve otomasyon çözümleri ile verimliliğinizi artırıyoruz.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px'
                }}>
                  Online sipariş sistemleri ile restoran ve kafelerin dijital dönüşümüne öncülük ediyoruz. Müşteri deneyimini iyileştiren çözümler sunuyoruz.
                </div>
                {/* Alt Resim */}
                <div style={{ marginTop: '40px' }}>
                  <img
                    src="/images/top-hero-bg.jpg"
                    alt="Hizmetler Görsel"
                    style={{
                      width: '994px',
                      height: '640px',
                      borderRadius: '32px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>
                
                {/* Resmin Altındaki Yazılar */}
                <div style={{ marginTop: '40px' }}>
                  <div style={{ 
                    fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                    fontSize: '16px', 
                    color: '#444', 
                    maxWidth: '1000px',
                    marginBottom: '16px'
                  }}>
                    Mobil uygulama geliştirme süreçlerimizde kullanıcı deneyimini ön planda tutuyoruz. iOS ve Android platformları için native uygulamalar geliştirerek performans ve güvenilirlik sağlıyoruz.
                  </div>
                  <div style={{ 
                    fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                    fontSize: '16px', 
                    color: '#444', 
                    maxWidth: '1000px',
                    marginBottom: '16px'
                  }}>
                    Dijital pazarlama stratejileri ile markanızın online varlığını güçlendiriyoruz. SEO optimizasyonu, sosyal medya yönetimi ve içerik pazarlama çözümleri sunuyoruz.
                  </div>
                  <div style={{ 
                    fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                    fontSize: '16px', 
                    color: '#444', 
                    maxWidth: '1000px',
                    marginBottom: '16px'
                  }}>
                    Veri analizi ve raporlama araçları ile işletmenizin performansını takip ediyoruz. Anlamlı içgörüler elde ederek stratejik kararlar almanıza yardımcı oluyoruz.
                  </div>
                  <div style={{ 
                    fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                    fontSize: '16px', 
                    color: '#444', 
                    maxWidth: '1000px',
                    marginBottom: '16px'
                  }}>
                    Teknik destek ve bakım hizmetleri ile projelerinizin sürekli güncel kalmasını sağlıyoruz. 7/24 destek ekibimiz ile her zaman yanınızdayız.
                  </div>
                  <div style={{ 
                    fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                    fontSize: '16px', 
                    color: '#444', 
                    maxWidth: '1000px',
                    marginBottom: '16px'
                  }}>
                    Bulut tabanlı çözümler ile işletmenizin ölçeklenebilirliğini artırıyoruz. Güvenli ve hızlı altyapı hizmetleri ile dijital dönüşümünüzü destekliyoruz.
                  </div>
                </div>
              </>
            )}
            {selected === 1 && (
              <>
                <h2 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '60px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-3px',
                  lineHeight: '1.1',
                  margin: 0,
                  marginBottom: '60px',
                  textAlign: 'left',
                }}>
                  E-Ticaret Çözümleri
                </h2>
                <div style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  height: '120px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  color: '#222',
                  marginBottom: '24px',
                  maxWidth: '1000px',
                }}>
                  Online satış yapmanız için gerekli tüm araçları sağlıyoruz. Güvenli ödeme sistemleri ve stok yönetimi.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px' 
                }}>
                  • Güvenli Ödeme<br />
                  • Stok Yönetimi<br />
                  • Müşteri Paneli<br />
                  • Analitik Raporlar
                </div>
              </>
            )}
            {selected === 2 && (
              <>
                <h2 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '60px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-3px',
                  lineHeight: '1.1',
                  margin: 0,
                  marginBottom: '60px',
                  textAlign: 'left',
                }}>
                  Yapay Zeka
                </h2>
                <div style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  height: '120px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  color: '#222',
                  marginBottom: '24px',
                  maxWidth: '1000px',
                }}>
                  AI teknolojileri ile işletmenizi geleceğe taşıyoruz. Otomasyon ve akıllı çözümler.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px' 
                }}>
                  • Chatbot Geliştirme<br />
                  • Veri Analizi<br />
                  • Otomasyon<br />
                  • Makine Öğrenmesi
                </div>
              </>
            )}
            {selected === 3 && (
              <>
                <h2 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '60px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-3px',
                  lineHeight: '1.1',
                  margin: 0,
                  marginBottom: '60px',
                  textAlign: 'left',
                }}>
                  Online Sipariş Sistemi
                </h2>
                <div style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  height: '120px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  color: '#222',
                  marginBottom: '24px',
                  maxWidth: '1000px',
                }}>
                  Restoran ve kafeler için özel online sipariş sistemleri. Müşteri memnuniyeti odaklı çözümler.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px' 
                }}>
                  • Mobil Uygulama<br />
                  • Sipariş Takibi<br />
                  • Ödeme Entegrasyonu<br />
                  • Yönetim Paneli
                </div>
              </>
            )}
            {selected === 4 && (
              <>
                <h2 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '60px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-3px',
                  lineHeight: '1.1',
                  margin: 0,
                  marginBottom: '60px',
                  textAlign: 'left',
                }}>
                  Mobil Uygulama
                </h2>
                <div style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  height: '120px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  color: '#222',
                  marginBottom: '24px',
                  maxWidth: '1000px',
                }}>
                  iOS ve Android platformları için native mobil uygulamalar geliştiriyoruz.
                </div>
                <div style={{ 
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif', 
                  fontSize: '16px', 
                  color: '#444', 
                  maxWidth: '1000px' 
                }}>
                  • iOS & Android<br />
                  • Native Geliştirme<br />
                  • Push Bildirimler<br />
                  • App Store Optimizasyonu
                </div>
              </>
            )}
          </div>
        </div>
      </section>



      {/* YENİ BÖLÜM - NEURAL NETWORK KARTLARI (Desktop) */}
      <section
        className="desktop-cards-section hidden md:flex"
        style={{
          width: 'auto',
          margin: '200px 20px 0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* 1. Kart - E-Ticaretin Yeni Dönemi */}
        <div
          style={{
            width: '450px',
            height: '570px',
            background: "linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #0891B2 100%)",
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', // yazıları alta yasla
            padding: '40px 40px 50px 40px', // sol padding aynı, alt 50px
            boxSizing: 'border-box',
          }}
        >
          {/* Dalga deseni */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))',
            borderRadius: '50%',
            transform: 'rotate(45deg)',
          }} />
          
          {/* İçerik */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: 'auto',
              letterSpacing: '-0.75px',
              lineHeight: '35px',
              color: '#fff',
              marginBottom: '20px',
            }}>
              E-Ticaretin Yeni Dönemi
            </h3>
            <p style={{
              fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              height: '120px',
              letterSpacing: 'normal',
              lineHeight: '30px',
              color: '#fff',
              opacity: 0.9,
            }}>
              Kişiselleştirilmiş alışveriş özellikleri, akıllı öneriler.
Ürün, fiyatlama yönetimi için özel ai çözümleri, satışa yönelik analizler…
            </p>
          </div>
          
          {/* Buton */}
          <button style={{
            position: 'relative',
            zIndex: 1,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#000',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginBottom: '-10px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* 2. Kart - Yapay Zeka Otomasyonu ile Dijital Dönüşüm Zamanı! */}
        <div
          style={{
            width: '450px',
            height: '570px',
            background: 'linear-gradient(135deg, #059669 0%, #0EA5E9 50%, #0284C7 100%)',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px',
            boxSizing: 'border-box',
          }}
        >
          {/* Sol alt resim */}
          <img
            src="/images/Training-Optimization.png"
            alt="Training Optimization"
            style={{
              position: 'absolute',
              bottom: '0px',
              left: '0px',
              width: '276px',
              height: '298px',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.3,
              zIndex: 0,
            }}
          />
          
          {/* Nokta deseni */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.3,
            zIndex: 1,
          }} />
          
          {/* X deseni */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '100px',
            height: '100px',
            background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(34, 197, 94, 0.3) 10px, rgba(34, 197, 94, 0.3) 20px)',
            zIndex: 1,
          }} />
          
          {/* İçerik */}
          <div style={{ position: 'relative', zIndex: 2, paddingTop: '22px' }}>
            <h3 style={{
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: 'auto',
              letterSpacing: '-0.75px',
              lineHeight: '35px',
              color: '#fff',
              marginBottom: '20px',
            }}>
              Yapay Zeka Otomasyonu ile Dijital Dönüşüm Zamanı!
            </h3>
            <p style={{
              fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              height: '120px',
              letterSpacing: 'normal',
              lineHeight: '30px',
              color: '#fff',
              opacity: 0.9,
            }}>
              Yapay Zeka, Dijital Dönüşüm, UX Dönüşümü ve Yazılım Geliştirme alanlarında işinize özel çözümler ile iş verimliliğini ve sürdürülebilir büyümeyi sağlıyoruz.
            </p>
          </div>
          
          {/* Buton */}
          <button style={{
            position: 'relative',
            zIndex: 2,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#000',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginBottom: '-10px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </button>
        </div>

        {/* 3. Kart ve altına yeni kartı ekleyeceğimiz column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
          {/* 3. Kart - İşinizi Dönüştürün, Geleceğe Güvenle İlerleyin. */}
          <div
            style={{
              width: '412px',
              height: '192px',
              background: '#F0F2F4',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px',
              boxSizing: 'border-box',
            }}
          >
            {/* Radar deseni */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '80px',
              height: '80px',
              border: '2px solid #F9A09D',
              borderRadius: '50%',
            }} />
            <div style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              width: '60px',
              height: '60px',
              border: '2px solid #F9A09D',
              borderRadius: '50%',
            }} />
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              width: '40px',
              height: '40px',
              border: '2px solid #F9A09D',
              borderRadius: '50%',
            }} />
            
                      {/* İçerik */}
          <div style={{ position: 'relative', zIndex: 1, marginBottom: '32px' }}>
            <h3 style={{
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: 'auto',
              letterSpacing: 'normal',
              lineHeight: '35px',
              color: '#000',
              marginBottom: '20px',
            }}>
              İşinizi Dönüştürün, Geleceğe Güvenle İlerleyin.
            </h3>
          </div>
          </div>
          {/* 3.5. Kart - MVP Geliştirme (Yeni) */}
          <div
            style={{
              width: '412px',
              height: '358px',
              background: '#1F2937',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '40px',
              boxSizing: 'border-box',
            }}
          >
                      {/* 24/7 ikonu */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '48px',
            height: '48px',
            border: '2px solid #F9A09D',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              background: '#F9A09D',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#fff',
            }}>
              24
            </div>
          </div>
          
          {/* İçerik */}
          <div style={{ position: 'relative', zIndex: 1, marginTop: '70px' }}>
                          <h3 style={{
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: 'auto',
              letterSpacing: '-0.75px',
              lineHeight: '35px',
              color: '#fff',
              marginBottom: '20px',
            }}>
              MVP Geliştirme
            </h3>
            <p style={{
              fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              height: '120px',
              letterSpacing: 'normal',
              lineHeight: '30px',
              color: '#fff',
              opacity: 0.9,
            }}>
              İşletmelerin MVP geliştirmelerini sorunsuz bir şekilde ve endişe duymadan sürdürmelerini sağlıyoruz.
            </p>
            </div>
            
            {/* Buton */}
            <button style={{
              position: 'relative',
              zIndex: 1,
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#000',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: "center",
              justifyContent: 'center',
              alignSelf: 'flex-end',
              marginTop: 'auto',
              marginBottom: '-10px',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 4. Kart - MVP Geliştirme */}
        <div
          style={{
            width: '490px',
            height: '570px',
            background: '#1F2937',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px',
            boxSizing: 'border-box',
          }}
        >
          {/* Arka plan resmi */}
          <img
            src="/images/top-hero-bg.jpg"
            alt="AI Background"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.3,
              zIndex: 0,
            }}
          />
          
          {/* Overlay - yazıların okunabilmesi için */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(31, 41, 55, 0.7)',
            zIndex: 1,
          }} />
          
          {/* İçerik */}
          <div style={{ position: 'relative', zIndex: 2, marginTop: '40px' }}>
            <h3 style={{
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: 'auto',
              letterSpacing: '-0.75px',
              lineHeight: '35px',
              color: '#fff',
              marginBottom: '20px',
            }}>
              Proje Geliştirme
            </h3>
            <p style={{
              fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              height: '120px',
              letterSpacing: 'normal',
              lineHeight: '30px',
              color: '#fff',
              opacity: 0.9,
            }}>
              PWA geliştirme, özel web ve mobil uygulama geliştirme, içerik yönetimi (cms) uygulamaları konusunda etkili ve de işlevsel projeler oluşturmanıza yardımcı oluyoruz.
            </p>
          </div>
          
          {/* Buton */}
          <button style={{
            position: 'relative',
            zIndex: 2,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#000',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginBottom: '-10px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Mobil - Kartlar tek sütun */}
      <section
        className="md:hidden mobile-cards-section"
        style={{
          margin: '40px 20px 0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {/* Card 1 */}
        <div style={{
          width: '100%',
          background: "linear-gradient(135deg, #FF4D47 0%, #F9A09D 50%, #FF6B6B 100%)",
          borderRadius: '20px',
          padding: '16px',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <h3 style={{
            fontFamily: 'Sora, Arial, Helvetica, sans-serif',
            fontSize: 'clamp(18px, 5.5vw, 22px)',
            lineHeight: '1.3',
            color: '#fff',
            margin: 0,
            marginBottom: '8px'
          }}>E-Ticaretin Yeni Dönemi</h3>
          <p style={{
            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
            fontSize: 'clamp(14px, 3.8vw, 16px)',
            lineHeight: '1.55',
            color: '#fff',
            opacity: 0.9,
            margin: 0
          }}>Kişiselleştirilmiş alışveriş özellikleri, akıllı öneriler.
Ürün, fiyatlama yönetimi için özel ai çözümleri, satışa yönelik analizler…</p>
        </div>
        {/* Card 2 */}
        <div style={{
          width: '100%',
          background: 'linear-gradient(135deg, #059669 0%, #0EA5E9 50%, #0284C7 100%)',
          borderRadius: '20px',
          padding: '16px',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <h3 style={{
            fontFamily: 'Sora, Arial, Helvetica, sans-serif',
            fontSize: 'clamp(18px, 5.5vw, 22px)',
            lineHeight: '1.3',
            color: '#fff',
            margin: 0,
            marginBottom: '8px'
          }}>Yapay Zeka Otomasyonu ile Dijital Dönüşüm Zamanı!</h3>
          <p style={{
            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
            fontSize: 'clamp(14px, 3.8vw, 16px)',
            lineHeight: '1.55',
            color: '#fff',
            opacity: 0.9,
            margin: 0
          }}>Yapay Zeka, Dijital Dönüşüm, UX Dönüşümü ve Yazılım Geliştirme alanlarında işinize özel çözümler ile iş verimliliğini ve sürdürülebilir büyümeyi sağlıyoruz.</p>
        </div>
        {/* Card 3 */}
        <div style={{
          width: '100%',
          background: '#F0F2F4',
          borderRadius: '20px',
          padding: '16px',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <h3 style={{
            fontFamily: 'Sora, Arial, Helvetica, sans-serif',
            fontSize: 'clamp(18px, 5.5vw, 22px)',
            lineHeight: '1.3',
            color: '#000',
            margin: 0
          }}>İşinizi Dönüştürün, Geleceğe Güvenle İlerleyin.</h3>
        </div>
        {/* Card 4 */}
        <div className="ai-consulting-card" style={{
          width: '100%',
          background: '#1F2937',
          borderRadius: '20px',
          padding: '16px',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}>
          <h3 style={{
            fontFamily: 'Sora, Arial, Helvetica, sans-serif',
            fontSize: 'clamp(18px, 5.5vw, 22px)',
            lineHeight: '1.3',
            color: '#fff',
            margin: 0,
            marginBottom: '8px'
          }}>Proje Geliştirme</h3>
          <p style={{
            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
            fontSize: 'clamp(14px, 3.8vw, 16px)',
            lineHeight: '1.55',
            color: '#fff',
            opacity: 0.9,
            margin: 0
          }}>PWA geliştirme, özel web ve mobil uygulama geliştirme, içerik yönetimi (cms) uygulamaları konusunda etkili ve de işlevsel projeler oluşturmanıza yardımcı oluyoruz.</p>
        </div>
      </section>

      {/* ALTINA MARGIN EKLE */}
      <div className="hizmetler-spacer" style={{ marginBottom: '200px' }} />

      {/* YENİ BÖLÜM - GÖRSELDEKİ GİBİ */}
      <section
        className="hizmetler-cta-section"
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
                Projenizi hayata geçirelim!
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
    </main>
  );
} 