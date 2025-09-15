'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'


// ICON COMPONENTS
const GearIcon = ({ stroke = '#909090' }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '22px' }}>
    <path d="M11 10.27 7 3.34"/>
    <path d="m11 13.73-4 6.93"/>
    <path d="M12 22v-2"/>
    <path d="M12 2v2"/>
    <path d="M14 12h8"/>
    <path d="m17 20.66-1-1.73"/>
    <path d="m17 3.34-1 1.73"/>
    <path d="M2 12h2"/>
    <path d="m20.66 17-1.73-1"/>
    <path d="m20.66 7-1.73 1"/>
    <path d="m3.34 17 1.73-1"/>
    <path d="m3.34 7 1.73 1"/>
    <circle cx="12" cy="12" r="2"/>
    <circle cx="12" cy="12" r="8"/>
  </svg>
);
const BarChartIcon = ({ stroke = '#909090' }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '22px' }}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M9 13a4.5 4.5 0 0 0 3-4"/>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
    <path d="M6 18a4 4 0 0 1-1.967-.516"/>
    <path d="M12 13h4"/>
    <path d="M12 18h6a2 2 0 0 1 2 2v1"/>
    <path d="M12 8h8"/>
    <path d="M16 8V5a2 2 0 0 1 2-2"/>
    <circle cx="16" cy="13" r=".5"/>
    <circle cx="18" cy="3" r=".5"/>
    <circle cx="20" cy="21" r=".5"/>
    <circle cx="20" cy="8" r=".5"/>
  </svg>
);
const ChipIcon = ({ stroke = '#909090' }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '22px' }}>
    <rect width="8" height="8" x="3" y="3" rx="2"/>
    <path d="M7 11v4a2 2 0 0 0 2 2h4"/>
    <rect width="8" height="8" x="13" y="13" rx="2"/>
  </svg>
);

function TabsV2() {
  const tabs = [
    {
      label: 'İş Süreci Otomasyonu',
      icon: GearIcon,
      image: '/images/is-sureci-otomasyonu.jpg',
      title: 'İş Süreci Otomasyonu',
      content: [
        'Tekrarlayan görevleri otomatikleştirmek, sıradan ve kural tabanlı iş akışlarınızı sorunsuz bir şekilde kolaylaştırmak için kişiye özel otomasyon geliştirme hizmetlerimizden faydalanın.',
        ''
      ]
    },
    {
      label: 'Üretken ve Özel Ai Çözümleri',
      icon: BarChartIcon,
      image: '/images/ozel-uretken-ai-cozumleri.jpg',
      title: 'Üretken ve Özel Ai Çözümleri',
              content: [
          'Kısa zamanda hızlı çözümler gerektiren, iş zorluklarına benzersiz çözümler, yenilik ve verimlilik sunmak için gelişmiş algoritmalar kullanan Üretken ve Özel Yapay Zeka çözümleri.',
          ''
        ]
    },
    {
      label: 'MVP Geliştirme',
      icon: ChipIcon,
      image: '/images/mvp-gelistirme.jpg',
      title: 'MVP Geliştirme',
              content: [
          'İşletmelerin MVP geliştirmelerini sorunsuz bir şekilde ve endişe duymadan sürdürmelerini sağlıyoruz. Son derece verimli ve güvenilir MVP\'ler oluşturmak için son teknoloji ve yenilikçi metodolojilerden yararlanırız.',
          ''
        ]
    }
  ];
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            className={`rounded-2xl font-medium transition-all duration-200 focus:outline-none flex items-center justify-start px-6 lg:px-10 w-full lg:w-auto ${active === idx ? 'text-white' : 'text-gray-300'}`}
            style={{
              background: active === idx ? 'linear-gradient(135deg, #10B981, #00BCD4, #00D4AA, #282828)' : '#282828',
              height: 'clamp(80px, 15vh, 148px)',
              width: '100%',
              maxWidth: '434px',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: 'clamp(14px, 4vw, 20px)',
              fontWeight: 400,
              textAlign: 'left',
              boxShadow: active === idx ? '0 4px 24px 0 rgba(0,0,0,0.18)' : 'none',
              border: 'none',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #10B981, #00BCD4, #00D4AA, #282828)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={e => {
              if (active !== idx) {
                e.currentTarget.style.background = '#282828';
                e.currentTarget.style.color = '#d1d5db'; // Tailwind text-gray-300
              }
            }}
          >
            {React.createElement(tab.icon, { stroke: active === idx ? '#fff' : '#909090' })}
            <span className="ml-3 lg:ml-0">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center" style={{ background: '#282828', borderRadius: '16px', padding: 'clamp(16px, 4vw, 24px)', border: '1px solid #3F3F3F' }}>
        <img src={tabs[active].image} alt={tabs[active].title} className="rounded-xl object-cover w-full lg:w-auto" style={{ width: '100%', maxWidth: '526px', height: 'clamp(300px, 50vh, 626px)' }} />
        <div className="flex-1 flex flex-col justify-between h-full w-full">
          <div>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl mb-4 lg:mb-6" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', color: '#fff', letterSpacing: '-0.5px', fontWeight: 400 }}>{tabs[active].title}</h3>
            <p className="text-sm lg:text-base mb-3 lg:mb-4" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', lineHeight: '1.6', color: '#fff' }}>{tabs[active].content[0]}</p>
            <p className="text-sm lg:text-base mb-6 lg:mb-8" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', lineHeight: '1.6', color: '#fff' }}>{tabs[active].content[1]}</p>
          </div>
          <button className="relative inline-block px-6 lg:px-8 py-3 font-medium rounded-xl transition-all duration-300 group overflow-hidden text-white w-full lg:w-fit mt-4" style={{ background: 'linear-gradient(90deg, #10B981, #00BCD4, #00D4AA)', border: 'none', outline: 'none', fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span className="relative z-10 block">Daha fazla keşfet</span>
            <svg className="relative z-10" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
      {/* Hero Section - Updated 2024 */}
      <section
        className="relative w-full h-screen flex items-center overflow-hidden"
        style={{ background: '#fff', position: 'relative', marginTop: '-60px' }}
      >
        <div className="w-full h-full">
          {/* Desktop Hero Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
            
            {/* Left Column - Updated */}
            <div className="flex items-center justify-center p-8 lg:p-16">
              <div className="w-full h-[700px] flex flex-col justify-between">
                <div className="container-custom" style={{position: 'relative', zIndex: 2}}>
                  <div className="mt-8">
                    <h1
                      className="text-black"
                      style={{
                        display: 'block',
                        fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                        fontSize: '45px',
                        fontWeight: 400,
                        letterSpacing: '0.5px',
                        lineHeight: '1.4',
                        textAlign: 'left',
                        width: '100%',
                        maxWidth: '700px',
                        marginTop: '60px'
                      }}
                    >
                      Yapay Zeka dönüşümüne hazır mısınız? İşinizi birlikte geleceğe taşıyalım.
                    </h1>
                  </div>
                  <div className="mt-4">
                    <Link 
                      href="/iletisim" 
                      className="inline-flex items-center justify-center w-48 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-normal rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-sora"
                    >
                      <span>Keşfet</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Impact Cards - Updated */}
                <div className="flex gap-5 mt-8 px-5">
                  {/* First Card - Updated */}
                  <div
                    className="rounded-2xl text-white relative overflow-hidden font-sora flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)',
                      width: '420px',
                      height: '280px'
                    }}
                  >
                    <div className="relative z-10 px-8 h-full">
                      <div style={{ height: '55px' }}></div>
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                          fontSize: '25px',
                          fontWeight: 400,
                          lineHeight: '35px',
                          marginLeft: '25px'
                        }}
                      >
                        Her proje, bir öncekinin öğrettiğini taşıyor.
                      </h3>
                      <div style={{ height: '30px' }}></div>
                      <div className="text-4xl font-bold text-white mb-3 ml-6">15+</div>
                      <p
                        style={{
                          color: '#fff',
                          fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          fontWeight: 500,
                          marginLeft: '25px'
                        }}
                      >
                        Yıl Yolculuk & Her bir işte tecrübe
                      </p>
                    </div>
                    {/* Background Elements - Updated */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400 rounded-full opacity-20 translate-x-12 -translate-y-12"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-400 rounded-full opacity-20 -translate-x-10 translate-y-10"></div>
                  </div>
                  
                  {/* Second Card - Updated */}
                  <div
                    className="rounded-2xl p-8 text-white relative overflow-hidden font-sora flex-shrink-0"
                    style={{
                      background: 'url("/images/top-hero-color-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                      width: '420px',
                      height: '280px'
                    }}
                  >
                    <div className="relative z-10 px-8 h-full">
                      <h3
                        className="text-white mt-2"
                        style={{
                          fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                          fontSize: '25px',
                          fontWeight: 400,
                          lineHeight: '35px'
                        }}
                      >
                        İş süreçlerinizi daha verimli ve hızlı hale getiren araçlar geliştiriyoruz.
                      </h3>
                      <div className="mt-10">
                        <Link 
                          href="/yapay-zeka"
                          className="inline-flex items-center text-white transition-all duration-300 hover:text-primary"
                          style={{
                            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                            fontSize: '14px',
                            fontWeight: 500,
                            textDecoration: 'underline'
                          }}
                        >
                          <span>Projeleri İncele</span>
                          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Updated */}
            <div className="flex items-center justify-center p-8 pt-24 lg:pt-32">
              <div className="relative" style={{ width: '900px', height: '700px' }}>
                <Image
                  src="/images/sitenano-ai-solutions.jpg"
                  alt="Yapay zeka ve teknoloji"
                  fill
                  priority
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-3xl font-bold leading-tight">
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Hero Layout */}
          <div className="block lg:hidden" style={{ height: 'auto', paddingBottom: '20px' }}>
            <div className="flex flex-col" style={{ height: 'auto' }}>
              {/* Mobile Hero Content */}
              <div className="flex flex-col justify-center px-6 py-2" style={{ minHeight: 'auto' }}>
                <div className="container-custom" style={{position: 'relative', zIndex: 2}}>
                  <div className="mb-6">
                    <h1
                      className="text-black"
                      style={{
                        display: 'block',
                        fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                        fontSize: '32px',
                        fontWeight: 400,
                        letterSpacing: '0.5px',
                        lineHeight: '1.3',
                        textAlign: 'left',
                        width: '100%',
                        maxWidth: '100%'
                      }}
                    >
                      Zeka dönüşümüne hazır mısınız?<br />
                      İşinizi birlikte geleceğe taşıyalım.
                    </h1>
                  </div>
                  <div className="mb-6">
                    <Link 
                      href="/iletisim" 
                      className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary hover:bg-primary-dark text-white font-normal rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-sora"
                    >
                      <span>Keşfet</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Impact Cards */}
              <div className="px-6 pb-4">
                <div className="flex flex-col gap-4">
                  {/* First Card - Mobile */}
                  <div
                    className="rounded-2xl text-white relative overflow-hidden font-sora"
                    style={{
                      background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)',
                      height: '200px'
                    }}
                  >
                    <div className="relative z-10 px-6 h-full flex flex-col justify-center">
                      <h3
                        className="text-white mb-4"
                        style={{
                          fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                          fontSize: '20px',
                          fontWeight: 400,
                          lineHeight: '28px'
                        }}
                      >
                        Her proje, bir öncekinin öğrettiğini taşıyor.
                      </h3>
                      <div className="text-3xl font-bold text-white mb-2">15+</div>
                      <p
                        style={{
                          color: '#fff',
                          fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                          fontSize: '14px',
                          fontWeight: 500
                        }}
                      >
                        Yıl Yolculuk & Her bir işte tecrübe
                      </p>
                    </div>
                    {/* Background Elements - Mobile */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400 rounded-full opacity-20 translate-x-8 -translate-y-8"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-purple-400 rounded-full opacity-20 -translate-x-6 translate-y-6"></div>
                  </div>
                  
                  {/* Second Card - Mobile */}
                  <div
                    className="rounded-2xl p-6 text-white relative overflow-hidden font-sora"
                    style={{
                      background: 'url("/images/top-hero-color-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                      height: '200px'
                    }}
                  >
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <h3
                        className="text-white mb-4"
                        style={{
                          fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                          fontSize: '20px',
                          fontWeight: 400,
                          lineHeight: '28px'
                        }}
                      >
                        Aiero Startup ile düşünme şeklinizi dönüştürüyoruz
                      </h3>
                      <Link 
                        href="/yapay-zeka"
                        className="inline-flex items-center text-white transition-all duration-300 hover:text-primary"
                        style={{
                          fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                          fontSize: '14px',
                          fontWeight: 500,
                          textDecoration: 'underline'
                        }}
                      >
                        <span>Daha fazla keşfet</span>
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Hero Image */}
              <div className="px-6 pb-4">
                <div className="relative" style={{ height: '400px' }}>
                  <Image
                    src="/images/sitenano-ai-solutions.jpg"
                    alt="Yapay zeka ve teknoloji"
                    fill
                    priority
                    className="object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-2xl font-bold leading-tight">
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Bottom Spacing */}
              <div className="h-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Updated 2024 */}
      <section className="bg-white relative overflow-hidden features-section" style={{ height: 'auto', minHeight: '740px' }}>
        <div className="container-custom relative z-10 h-full flex flex-col justify-center" style={{ minHeight: '740px' }}>
          {/* Desktop Top Spacing */}
          <div className="hidden lg:block h-24"></div>
          {/* Mobile Top Spacing */}
          <div className="block lg:hidden h-24"></div>
          <div className="mb-16">
            <div className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3vw, 14px)', paddingLeft: 'clamp(16px, 4vw, 0px)' }}>
              [HİZMETLER]
            </div>
            <h2 className="text-gray-900" style={{
              color: 'rgb(17, 17, 17)',
              display: 'block',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: 'clamp(28px, 5vw, 60px)',
              fontStyle: 'normal',
              fontWeight: 400,
              height: 'auto',
              letterSpacing: '-3px',
              lineHeight: '1.2',
              overflowWrap: 'break-word',
              position: 'relative',
              textAlign: 'left',
              textSizeAdjust: '100%',
              textTransform: 'none',
              width: '100%',
              wordSpacing: '8px',
              paddingLeft: 'clamp(16px, 4vw, 0px)'
            }}>
              Web'den mobil uygulamaya, tasarım, teknoloji ve akıllı sistemleri bir araya getiriyoruz.
            </h2>
          </div>

          {/* Features Grid - Updated 2024 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-12 lg:mb-24" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
            {/* Feature 1: AI Technology - Updated */}
            <div className="text-left space-y-4 lg:space-y-8">
              <div className="relative mb-8" style={{ width: 'clamp(40px, 8vw, 48px)', height: 'clamp(40px, 8vw, 48px)' }}>
                <svg className="text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <path d="M12 22v-9"/>
                  <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"/>
                  <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"/>
                  <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"/>
                </svg>
              </div>
              <h3 className="text-gray-900" style={{
                boxShadow: 'none',
                boxSizing: 'border-box',
                color: 'rgb(17, 17, 17)',
                cursor: 'pointer',
                display: 'inline',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(20px, 4vw, 20px)',
                fontStyle: 'normal',
                fontWeight: 600,
                height: 'auto',
                letterSpacing: 'normal',
                lineHeight: '1.4',
                overflowWrap: 'break-word',
                textAlign: 'left',
                textDecorationColor: 'rgb(17, 17, 17)',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid',
                textDecorationThickness: 'auto',
                textSizeAdjust: '100%',
                textTransform: 'none',
                transitionBehavior: 'normal',
                transitionDelay: '0s',
                transitionDuration: '0.3s',
                transitionProperty: 'all',
                transitionTimingFunction: 'ease',
                width: 'auto',
                wordSpacing: '0px'
              }}>E-ticaret & Online Sipariş</h3>
              <h4 className="text-gray-800" style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: 400,
                fontStyle: 'italic',
                marginTop: '8px',
                marginBottom: '8px',
                textAlign: 'left',
                color: 'rgb(31, 31, 31)'
              }}>Herkes Satabilir</h4>
              <p className="text-gray-600" style={{
                color: 'rgb(51, 51, 51)',
                display: 'block',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: 'clamp(16px, 3vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 500,
                height: 'auto',
                minHeight: '90px',
                letterSpacing: 'normal',
                lineHeight: '1.5',
                marginBottom: '0px',
                marginLeft: '0px',
                marginRight: '0px',
                marginTop: '10px',
                textAlign: 'left',
                textSizeAdjust: '100%',
                textTransform: 'none',
                transitionBehavior: 'normal',
                transitionDelay: '0s',
                transitionDuration: '0.3s',
                transitionProperty: 'color',
                transitionTimingFunction: 'ease',
                unicodeBidi: 'isolate',
                width: '100%',
                maxWidth: '280px',
                wordSpacing: '0px'
              }}>
                Yeme–içmeden perakendeye, sipariş süreçlerini daha hızlı ve daha kolay yönetebilmeniz için sistemler geliştiriyoruz. Aracısız satışla işletmeler kendi kontrolünü elinde tutuyor.
              </p>
            </div>

            {/* Feature 2: Tailored solutions - Updated */}
            <div className="text-left space-y-4 lg:space-y-8">
              <div className="relative mb-8" style={{ width: 'clamp(40px, 8vw, 48px)', height: 'clamp(40px, 8vw, 48px)' }}>
                <svg className="text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"/>
                </svg>
              </div>
              <h3 className="text-gray-900" style={{
                boxShadow: 'none',
                boxSizing: 'border-box',
                color: 'rgb(17, 17, 17)',
                cursor: 'pointer',
                display: 'inline',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(20px, 4vw, 20px)',
                fontStyle: 'normal',
                fontWeight: 600,
                height: 'auto',
                letterSpacing: 'normal',
                lineHeight: '1.4',
                overflowWrap: 'break-word',
                textAlign: 'left',
                textDecorationColor: 'rgb(17, 17, 17)',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid',
                textDecorationThickness: 'auto',
                textSizeAdjust: '100%',
                textTransform: 'none',
                transitionBehavior: 'normal',
                transitionDelay: '0s',
                transitionDuration: '0.3s',
                transitionProperty: 'all',
                transitionTimingFunction: 'ease',
                width: 'auto',
                wordSpacing: '0px'
              }}>Yazılım Geliştirme</h3>
              <h4 className="text-gray-800" style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(14px, 3vw, 16px)",
                fontWeight: 400,
                fontStyle: "italic",
                marginTop: "8px",
                marginBottom: "8px",
                textAlign: "left",
                color: "rgb(31, 31, 31)"
              }}>Web'den Mobile</h4>
              <p className="text-gray-600" style={{
                color: 'rgb(51, 51, 51)',
                display: 'block',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: 'clamp(16px, 3vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 500,
                height: 'auto',
                minHeight: '90px',
                letterSpacing: 'normal',
                lineHeight: '1.5',
                marginBottom: '0px',
                marginLeft: '0px',
                marginRight: '0px',
                marginTop: '10px',
                textAlign: 'left',
                textSizeAdjust: '100%',
                textTransform: 'none',
                transitionBehavior: 'normal',
                transitionDelay: '0s',
                transitionDuration: '0.3s',
                transitionProperty: 'color',
                transitionTimingFunction: 'ease',
                unicodeBidi: 'isolate',
                width: '100%',
                maxWidth: '280px',
                wordSpacing: '0px'
              }}>
                İhtiyaçlarınıza özel projeler geliştiriyoruz. Web'den mobil uygulamaya, her platformda işinizi kolaylaştıracak çözümler üretiyor, teknoloji, tasarım ve iş akışını bir araya getiriyoruz.
              </p>
            </div>

            {/* Feature 3: Cutting-edge technology - Updated */}
            <div className="text-left space-y-4 lg:space-y-8">
              <div className="relative mb-8" style={{ width: 'clamp(40px, 8vw, 48px)', height: 'clamp(40px, 8vw, 48px)' }}>
                <svg className="text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                  <path d="M9 13a4.5 4.5 0 0 0 3-4"/>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                  <path d="M12 13h4"/>
                  <path d="M12 18h6a2 2 0 0 1 2 2v1"/>
                  <path d="M12 8h8"/>
                  <path d="M16 8V5a2 2 0 0 1 2-2"/>
                  <circle cx="16" cy="13" r=".5"/>
                  <circle cx="18" cy="3" r=".5"/>
                  <circle cx="20" cy="21" r=".5"/>
                  <circle cx="20" cy="8" r=".5"/>
                </svg>
              </div>
              <h3 className="text-gray-900" style={{
                boxShadow: 'none',
                boxSizing: 'border-box',
                color: 'rgb(17, 17, 17)',
                cursor: 'pointer',
                display: 'inline',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(20px, 4vw, 20px)',
                fontStyle: 'normal',
                fontWeight: 600,
                height: 'auto',
                letterSpacing: 'normal',
                lineHeight: '1.4',
                overflowWrap: 'break-word',
                textAlign: 'left',
                textDecorationColor: 'rgb(17, 17, 17)',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid',
                textDecorationThickness: 'auto',
                textSizeAdjust: '100%',
                textTransform: 'none',
                transitionBehavior: 'normal',
                transitionDelay: '0s',
                transitionDuration: '0.3s',
                transitionProperty: 'all',
                transitionTimingFunction: 'ease',
                width: 'auto',
                wordSpacing: '0px'
              }}>AI Çözümleri – MVP Geliştirme</h3>
              <h4 className="text-gray-800" style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(14px, 3vw, 16px)",
                fontWeight: 400,
                fontStyle: "italic",
                marginTop: "8px",
                marginBottom: "8px",
                textAlign: "left",
                color: "rgb(31, 31, 31)"
              }}>Fikirden Ürüne, Hızla</h4>
              <p className="text-gray-600" style={{
                color: 'rgb(51, 51, 51)',
                display: 'block',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: 'clamp(16px, 3vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 500,
                height: 'auto',
                minHeight: '90px',
                letterSpacing: 'normal',
                lineHeight: '1.5',
                marginBottom: '0px',
                marginLeft: '0px',
                marginRight: '0px',
                marginTop: '10px',
                textAlign: 'left',
                textSizeAdjust: '100%',
                textTransform: 'none',
                transitionBehavior: 'normal',
                transitionDelay: '0s',
                transitionDuration: '0.3s',
                transitionProperty: 'color',
                transitionTimingFunction: 'ease',
                unicodeBidi: 'isolate',
                width: '100%',
                maxWidth: '240px',
                wordSpacing: '0px'
              }}>
                Yapay zekâ ile iş süreçlerini otomatikleştiriyor, yeni fikirlerinizi hızla test edilebilir prototiplere dönüştürüyoruz.
              </p>
            </div>

            {/* Feature 4: Modern development - Updated */}
            <div className="text-left space-y-4 lg:space-y-8">
              <div className="relative mb-8" style={{ width: 'clamp(40px, 8vw, 48px)', height: 'clamp(40px, 8vw, 48px)' }}>
                <svg className="text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/>
                  <path d="m14.3 19.6 1-.4"/>
                  <path d="M15 3v7.5"/>
                  <path d="m15.2 16.9-.9-.3"/>
                  <path d="m16.6 21.7.3-.9"/>
                  <path d="m16.8 15.3-.4-1"/>
                  <path d="m19.1 15.2.3-.9"/>
                  <path d="m19.6 21.7-.4-1"/>
                  <path d="m20.7 16.8 1-.4"/>
                  <path d="m21.7 19.4-.9-.3"/>
                  <path d="M9 3v18"/>
                  <circle cx="18" cy="18" r="3"/>
                </svg>
              </div>
              <h3 className="text-gray-900" style={{
                boxShadow: 'none',
                boxSizing: 'border-box',
                color: 'rgb(17, 17, 17)',
                cursor: 'pointer',
                display: 'inline',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(20px, 4vw, 20px)',
                fontStyle: 'normal',
                fontWeight: 600,
                height: 'auto',
                letterSpacing: 'normal',
                lineHeight: '1.4',
                overflowWrap: 'break-word',
                textAlign: 'left',
                textDecorationColor: 'rgb(17, 17, 17)',
                textDecorationLine: 'none',
                textDecorationStyle: 'solid',
                textDecorationThickness: 'auto',
                textSizeAdjust: '100%',
                textTransform: 'none',
                transitionBehavior: 'normal',
                transitionDelay: '0s',
                transitionDuration: '0.3s',
                transitionProperty: 'all',
                transitionTimingFunction: 'ease',
                width: 'auto',
                wordSpacing: '0px'
              }}>Web Tasarım</h3>
              <h4 className="text-gray-800" style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: 400,
                fontStyle: 'italic',
                marginTop: '8px',
                marginBottom: '8px',
                textAlign: 'left',
                color: 'rgb(31, 31, 31)'
              }}>Her Piksel Bir Anlatı</h4>
              <p className="text-gray-600" style={{
                color: 'rgb(51, 51, 51)',
                display: 'block',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: 'clamp(16px, 3vw, 16px)',
                fontStyle: 'normal',
                fontWeight: 500,
                height: 'auto',
                minHeight: '90px',
                letterSpacing: 'normal',
                lineHeight: '1.5',
                marginBottom: '0px',
                marginLeft: '0px',
                marginRight: '0px',
                marginTop: '10px',
                textAlign: 'left',
                textSizeAdjust: '100%',
                textTransform: 'none',
                transitionBehavior: 'normal',
                transitionDelay: '0s',
                transitionDuration: '0.3s',
                transitionProperty: 'color',
                transitionTimingFunction: 'ease',
                unicodeBidi: 'isolate',
                width: '100%',
                maxWidth: '240px',
                wordSpacing: '0px'
              }}>
                Markanız için tasarlanan her sayfa, müşterilerinize açılan bir kapıdır. Web Sitenizi tasarlıyor, markanızın taşıdığı anlamı ön plana çıkarıyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to top button - Updated */}
        <div className="absolute bottom-8 right-8">
          <button className="w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </section>

      {/* Neural Network Section - Updated 2024 */}
      <section className="bg-white relative neural-network-section" style={{ height: 'auto', minHeight: '890px', marginTop: '120px', overflow: 'visible' }}>
        {/* Desktop Layout */}
        <div className="hidden lg:flex h-full" style={{ overflow: 'visible' }}>
          
          {/* Left Column - Vector Image - Updated */}
          <div className="relative h-full" style={{ width: '700px', marginLeft: '-60px' }}>
            <Image
              src="/images/Vector-13.png"
              alt="Neural Network Background"
              width={700}
              height={800}
              className="object-contain"
              priority
              style={{
                position: 'absolute',
                left: '-30px',
                top: '-50px',
                width: '700px',
                height: '800px'
              }}
            />
          </div>

          {/* Right Column - Text Content - Updated */}
          <div className="flex flex-col justify-start" style={{ marginLeft: '70px', flex: '1', paddingTop: '0px' }}>
            <h2 
              className="text-gray-900 leading-tight mb-20"
              style={{
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: '85px',
                fontStyle: 'normal',
                fontWeight: 400,
                letterSpacing: '-1.2px',
                lineHeight: '95px',
                overflowWrap: 'break-word',
                position: 'relative',
                textAlign: 'left',
                textSizeAdjust: '100%',
                textTransform: 'none',
                width: 'calc(100% - 90px)',
                maxWidth: '1110px',
                wordSpacing: '0px',
                minHeight: '475px'
              }}
            >
              Bir fikri işe dönüştüren, bir ihtiyacı çözüme ulaştıran <span style={{ 
                background: 'linear-gradient(135deg, #10B981, #00BCD4, #00D4AA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>dijital projeler</span> geliştiriyoruz.
            </h2>
            
            {/* Demo Logos */}
            <div className="flex items-center space-x-12">
              {/* Next.js Logo */}
              <div className="flex flex-col items-center" style={{ width: '220px' }}>
                <div className="mb-2">
                  <Image 
                    src="/images/next-js-logo.svg?v=1757412151175741191817574115411757411267" 
                    alt="Next.js Logo" 
                    width={80} 
                    height={80}
                    style={{ filter: 'brightness(0.7)' }}
                  />
                </div>
                <div className="text-lg font-semibold" style={{ color: '#B2B2B2' }}>Next.js</div>
              </div>
              
              {/* ND2 Nordyne Defense Dynamics */}
              <div className="flex items-center space-x-4" style={{ width: '220px' }}>
                <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: '#B2B2B2' }}>
                  <span className="text-white font-bold text-lg">ND2</span>
                </div>
                <div className="flex flex-col text-sm" style={{ color: '#B2B2B2' }}>
                  <span>Nordyne</span>
                  <span>Defense</span>
                  <span>Dynamics</span>
                </div>
              </div>
              
              {/* Metriks Data Center */}
              <div className="flex items-center space-x-4" style={{ width: '220px' }}>
                <div className="w-20 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B2B2B2' }}>
                  <span className="text-white font-semibold text-sm">Metriks</span>
                </div>
                <div className="flex flex-col text-sm" style={{ color: '#B2B2B2' }}>
                  <span>Data</span>
                  <span>Center</span>
                </div>
              </div>
              
              {/* QUO LEGAL FIRM */}
              <div className="flex items-center space-x-4" style={{ width: '220px' }}>
                <div className="font-bold text-3xl" style={{ color: '#B2B2B2' }}>QUO</div>
                <div className="flex flex-col text-sm" style={{ color: '#B2B2B2' }}>
                  <span>LEGAL</span>
                  <span>FIRM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden px-6 py-2">
          <div className="text-center mb-8">
                          <h2 
                className="text-gray-900 leading-tight mb-8"
              style={{
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: 'clamp(32px, 8vw, 48px)',
                fontStyle: 'normal',
                fontWeight: 400,
                letterSpacing: '-1px',
                lineHeight: '1.2',
                overflowWrap: 'break-word',
                position: 'relative',
                textAlign: 'center',
                textSizeAdjust: '100%',
                textTransform: 'none',
                width: '100%',
                wordSpacing: '0px'
              }}
            >
              Bir fikri işe dönüştüren, bir ihtiyacı çözüme ulaştıran <span style={{ 
                background: 'linear-gradient(135deg, #10B981, #00BCD4, #00D4AA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>dijital projeler</span> geliştiriyoruz.
            </h2>
          </div>
          
          {/* Mobile Demo Logos */}
          <div className="grid grid-cols-2 gap-6 mt-8">            {/* Next.js Logo */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image 
                  src="/images/next-js-logo.svg?v=1757412151175741191817574115411757411267" 
                  alt="Next.js Logo" 
                  width={50} 
                  height={50}
                  style={{ filter: 'brightness(0.7)' }}
                />
              </div>
              <div className="text-sm font-semibold" style={{ color: '#B2B2B2' }}>Next.js</div>
            </div>
            
            {/* ND2 Nordyne Defense Dynamics */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-4" style={{ backgroundColor: '#B2B2B2' }}>
                <span className="text-white font-bold text-base">ND2</span>
              </div>
              <div className="flex flex-col text-xs text-center" style={{ color: '#B2B2B2' }}>
                <span>Nordyne</span>
                <span>Defense</span>
                <span>Dynamics</span>
              </div>
            </div>
            
            {/* Metriks Data Center */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-8 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#B2B2B2' }}>
                <span className="text-white font-semibold text-xs">Metriks</span>
              </div>
              <div className="flex flex-col text-xs text-center" style={{ color: '#B2B2B2' }}>
                <span>Data</span>
                <span>Center</span>
              </div>
            </div>
            
            {/* QUO LEGAL FIRM */}
            <div className="flex flex-col items-center">
              <div className="font-bold text-2xl mb-4" style={{ color: '#B2B2B2' }}>QUO</div>
              <div className="flex flex-col text-xs text-center" style={{ color: '#B2B2B2' }}>
                <span>LEGAL</span>
                <span>FIRM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section - New 2024 */}
      <section className="bg-white relative services-section" style={{ height: 'auto', minHeight: '960px', paddingTop: 'clamp(10px, 2vw, 60px)', paddingBottom: 'clamp(150px, 20vw, 100px)' }}>
        {/* Mobile Top Spacing */}
        <div className="block lg:hidden h-20"></div>
        {/* Header Section - Independent Container */}
        <div className="container-custom relative z-10">
          <div className="mb-4 lg:mb-16">
            <div className="text-sm font-medium text-gray-600 mb-1 lg:mb-4 uppercase tracking-wider" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3vw, 14px)', paddingLeft: 'clamp(16px, 4vw, 0px)' }}>
              [Dijital Dönüşüm]
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start">
              <div className="flex-1 mb-6 lg:mb-0" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
                <h2 className="text-gray-900 mb-3 lg:mb-4" style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: 'clamp(28px, 7vw, 60px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '-2px',
                  lineHeight: '1.2',
                  textAlign: 'left',
                  width: '100%',
                  wordSpacing: '6px'
                }}>
                  Tekrarlayan işleri, akıllı sistemlere bırakın.
                </h2>
                <p className="text-gray-600 text-lg mb-6" style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  fontWeight: 500,
                  lineHeight: '1.5'
                }}>
                  Gelecek, yapay zeka odaklı çalışmaya adapte olanlarla yeniden şekilleniyor. Değişime adapte olan iş süreçleri, geleceğe daha hızlı uyum sağlıyor.
                </p>
              </div>
              <div className="lg:ml-8" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
                <div className="relative rounded-xl p-[1px] overflow-hidden" style={{
                  background: 'linear-gradient(90deg, #10B981, #00BCD4, #00D4AA)',
                  display: 'inline-block',
                }}>
                  <button
                    className="px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 flex items-center space-x-2 bg-transparent w-full h-full"
                    style={{
                      border: 'none',
                      outline: 'none',
                      borderRadius: '0.75rem',
                      fontSize: 'clamp(14px, 2.5vw, 16px)',
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.background = '#111827';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderRadius = '0.75rem';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderRadius = '0.75rem';
                    }}
                  >
                    <span>Daha fazla keşfet</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid - Independent Container */}
        <div className="relative z-10" style={{ maxWidth: '1900px', margin: '0 auto', padding: '0 20px', marginTop: 'clamp(10px, 2vw, 0px)' }}>
          <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-5">
            {/* Card 1: Robotic Process Automation */}
            <div className="rounded-3xl shadow-lg relative overflow-hidden" style={{ width: '100%', maxWidth: '414px', height: 'clamp(400px, 60vh, 596px)', margin: '0 auto', background: 'url("/images/ilk-adim-otomasyon.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              {/* Sol alt yazı */}
              <div className="absolute" style={{ left: 'clamp(20px, 5vw, 50px)', bottom: 'clamp(40px, 8vw, 80px)', width: 'calc(100% - clamp(40px, 10vw, 100px))', height: 'auto', textAlign: 'left', display: 'block' }}>
                <span style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: 'clamp(18px, 4vw, 25px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  height: 'auto',
                  letterSpacing: '-0.75px',
                  lineHeight: '1.3',
                  overflowWrap: 'break-word',
                  position: 'relative',
                  textAlign: 'left',
                  textSizeAdjust: '100%',
                  textTransform: 'none',
                  width: '100%',
                  wordSpacing: '0px',
                  display: 'block',
                }}>
                  İlk Adım: Otomasyon
                </span>
              </div>
              <div className="absolute" style={{ right: '40px', bottom: '40px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Card 2: Data Analysis and Visualization */}
            <div className="rounded-3xl shadow-lg relative overflow-hidden" style={{ width: '100%', maxWidth: '414px', height: 'clamp(400px, 60vh, 596px)', margin: '0 auto', background: 'url("/images/adim-adim-donusum.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              {/* Siyah overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
              {/* Sol alt yazı */}
              <div className="absolute" style={{ left: 'clamp(20px, 5vw, 50px)', bottom: 'clamp(40px, 8vw, 80px)', width: 'calc(100% - clamp(40px, 10vw, 100px))', height: 'auto', textAlign: 'left', display: 'block' }}>
                <span style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: 'clamp(18px, 4vw, 25px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  height: 'auto',
                  letterSpacing: '-0.75px',
                  lineHeight: '1.3',
                  overflowWrap: 'break-word',
                  position: 'relative',
                  textAlign: 'left',
                  textSizeAdjust: '100%',
                  textTransform: 'none',
                  width: '100%',
                  wordSpacing: '0px',
                  display: 'block',
                  color: '#fff',
                }}>
                  Kademeli Geçiş (Adım Adım Dönüşüm)
                </span>
              </div>
              <div className="absolute" style={{ right: '40px', bottom: '40px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Card 3: Market Research */}
            <div className="rounded-3xl shadow-lg relative overflow-hidden" style={{ width: '100%', maxWidth: '996px', height: 'clamp(400px, 60vh, 596px)', margin: '0 auto', background: 'url("/images/ai-insan-isbirligi.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              {/* Siyah overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
              {/* Sol alt yazı */}
              <div className="absolute" style={{ left: 'clamp(20px, 5vw, 50px)', bottom: 'clamp(40px, 8vw, 80px)', width: 'calc(100% - clamp(40px, 10vw, 100px))', height: 'auto', textAlign: 'left', display: 'block' }}>
                <span style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: 'clamp(18px, 4vw, 25px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  height: 'auto',
                  letterSpacing: '-0.75px',
                  lineHeight: '1.3',
                  overflowWrap: 'break-word',
                  position: 'relative',
                  textAlign: 'left',
                  textSizeAdjust: '100%',
                  textTransform: 'none',
                  width: '100%',
                  wordSpacing: '0px',
                  display: 'block',
                  color: '#fff',
                }}>
                  İnsan + AI İşbirliği
                </span>
              </div>
              <div className="absolute" style={{ right: '40px', bottom: '40px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full transform translate-x-16 -translate-y-16 opacity-60"></div>
              <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full opacity-30"></div>
              <div className="absolute top-32 left-40 w-2 h-2 bg-white rounded-full opacity-30"></div>
              <div className="absolute top-48 left-24 w-3 h-3 bg-white rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Extra Spacing */}
      <div className="block lg:hidden h-64"></div>

      {/* HİZMETLER BÖLÜMÜNÜN ALTINA YENİ SEKME YAPISI (belirtilen ölçülerle) */}
      <div className="mobile-section-spacing" style={{ width: 'clamp(320px, 95vw, 1865px)', margin: '0 auto', background: '#1F1F1F', borderRadius: '32px', minHeight: 'clamp(150px, 25vh, 1400px)', paddingLeft: 'clamp(16px, 4vw, 28px)', paddingRight: 'clamp(16px, 4vw, 28px)', marginTop: 'clamp(0px, 0vw, 0px)', paddingTop: 'clamp(0px, 0vw, 0px)', paddingBottom: 'clamp(0px, 0vw, 0px)' }}>
        <div className="block lg:hidden h-48"></div>
        <div className="hidden lg:block" style={{ height: '140px' }} />
        <div className="max-w-7xl mx-auto w-full" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
          <div className="mb-8">
            <div className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(12px, 3vw, 14px)' }}>[ÖZEL AI ÇÖZÜMLERİ]</div>
            <h2 className="text-4xl md:text-5xl text-white mb-8" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontWeight: 400, letterSpacing: '-1px', lineHeight: '1.2', fontSize: 'clamp(32px, 8vw, 60px)' }}>
              İşlerinizi otomatize ediyoruz.
            </h2>
            <TabsV2 />
          </div>
        </div>
        <div className="block lg:hidden h-48"></div>
        <div className="hidden lg:block" style={{ height: '160px' }} />
      </div>

      {/* YENİ BÖLÜM: AI SYSTEMS BLOCKS */}
      <section
        className="relative w-full flex items-center justify-center bg-white mobile-section-spacing ai-systems-blocks"
        style={{ height: 'clamp(600px, 80vh, 854px)', marginTop: 'clamp(160px, 20vw, 60px)', marginBottom: '80px' }}
      >
        <div className="w-full flex flex-col items-start" style={{ maxWidth: '1310px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(16px, 4vw, 32px)', paddingRight: 'clamp(16px, 4vw, 16px)', paddingTop: 'clamp(40px, 8vw, 0px)' }}>
          <div className="mb-8 lg:mb-16">
            <div className="text-sm font-medium text-gray-600 mb-2 lg:mb-4 uppercase tracking-wider" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(12px, 3vw, 14px)' }}>[Danışmanlık & Yol Arkadaşlığı – "Üretimden Önce Strateji"]</div>
            <h2
              className="text-gray-900"
              style={{
                color: 'rgb(17, 17, 17)',
                display: 'block',
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: 'clamp(28px, 7vw, 60px)',
                fontStyle: 'normal',
                fontWeight: 400,
                letterSpacing: '-2px',
                lineHeight: '1.2',
                textAlign: 'left',
                width: '100%',
                wordSpacing: '6px',
                marginBottom: '0px',
              }}
            >
              Yolun Başında Olanlara Yol Haritası
            </h2>
            <p className="text-gray-600 text-lg mb-6" style={{
              fontFamily: "Manrope, Arial, Helvetica, sans-serif",
              fontSize: "clamp(16px, 4vw, 18px)",
              fontWeight: 500,
              lineHeight: "1.5"
            }}>
              Her teknoloji yatırımı doğru bir soruya cevap arar. Biz, o soruyu birlikte buluyoruz. İster AI otomasyonu, ister MVP geliştirme olsun, ilk adım stratejidir. Yolun başında olanlara yol haritası çiziyor, süreç boyunca da birlikte ilerliyoruz.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-0" style={{maxWidth: '1310px'}}>
            {/* 1. Sütun */}
            <div className="flex-1 flex flex-col justify-start items-start px-4 lg:px-8 py-6 lg:py-8" style={{minWidth: '0'}}>
              {/* İKON */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient-1)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '40px', display: 'block'}} className="lg:w-16 lg:h-16">
                <defs>
                  <linearGradient id="icon-gradient-1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="0.5" stopColor="#00BCD4" />
                    <stop offset="1" stopColor="#00D4AA" />
                  </linearGradient>
                </defs>
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              <h3 className="text-gray-900" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 600, lineHeight: '1.3', marginBottom: '12px', textAlign: 'left', width: '100%' }}>Strateji ve Yol Haritası</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: 400, lineHeight: '1.5', width: '100%', textAlign: 'left' }}>
                Her işin başlangıcı bir sorudur: "Neye gerçekten ihtiyacımız var?"
İşletmelerin nereye gitmek istediğini netleştirmesi için danışmanlık.
İş modeli analizi, dijital dönüşüm öncelikleri, teknoloji seçimi.
              </p>
            </div>
            {/* Dikey çizgi - Mobilde gizli */}
            <div className="hidden lg:block" style={{height: '300px', alignSelf: 'center', width: '1px', background: '#E5E7EB'}} />
            {/* 2. Sütun */}
            <div className="flex-1 flex flex-col justify-start items-start px-4 lg:px-8 py-6 lg:py-8" style={{minWidth: '0'}}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient-2)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '40px', display: 'block'}} className="lg:w-16 lg:h-16">
                <defs>
                  <linearGradient id="icon-gradient-2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="0.5" stopColor="#00BCD4" />
                    <stop offset="1" stopColor="#00D4AA" />
                  </linearGradient>
                </defs>
                <path d="m21 16-4 4-4-4"/>
                <path d="M17 20V4"/>
                <path d="m3 8 4-4 4 4"/>
                <path d="M7 4v16"/>
              </svg>
              <h3 className="text-gray-900" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 600, lineHeight: '1.3', marginBottom: '12px', textAlign: 'left', width: '100%' }}>Doğru Teknoloji, Doğru Zaman</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: 400, lineHeight: '1.5', width: '100%', textAlign: 'left' }}>
                AI çözümlerinde hangi araçların, hangi iş süreçlerine uygun olduğunu belirleme.
MVP mi, otomasyon mu, yoksa özel yazılım mı daha önce gelmeli?
Yatırımın nereye yapılacağına dair rehberlik.
              </p>
            </div>
            {/* Dikey çizgi - Mobilde gizli */}
            <div className="hidden lg:block" style={{height: '300px', alignSelf: 'center', width: '1px', background: '#E5E7EB'}} />
            {/* 3. Sütun */}
            <div className="flex-1 flex flex-col justify-start items-start px-4 lg:px-8 py-6 lg:py-8" style={{minWidth: '0'}}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient-3)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '40px', display: 'block'}} className="lg:w-16 lg:h-16">
                <defs>
                  <linearGradient id="icon-gradient-3" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="0.5" stopColor="#00BCD4" />
                    <stop offset="1" stopColor="#00D4AA" />
                  </linearGradient>
                </defs>
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>
              </svg>
              <h3 className="text-gray-900" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 600, lineHeight: '1.3', marginBottom: '12px', textAlign: 'left', width: '100%' }}>İlk Adımda Risk Azaltma</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: 400, lineHeight: '1.5', width: '100%', textAlign: 'left' }}>
                Yanlış yatırımları önlemek.
Dijital dönüşüm büyük planlarla değil, doğru ilk adımla başlar.
MVP'ler, pilot projeler ve testler ile riskinizi azaltıp, ilerlemenizi sağlamlaştırıyoruz.
              </p>
            </div>
            {/* Dikey çizgi - Mobilde gizli */}
            <div className="hidden lg:block" style={{height: '300px', alignSelf: 'center', width: '1px', background: '#E5E7EB'}} />
            {/* 4. Sütun */}
            <div className="flex-1 flex flex-col justify-start items-start px-4 lg:px-8 py-6 lg:py-8" style={{minWidth: '0'}}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#icon-gradient-4)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '40px', display: 'block'}} className="lg:w-16 lg:h-16">
                <defs>
                  <linearGradient id="icon-gradient-4" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="0.5" stopColor="#00BCD4" />
                    <stop offset="1" stopColor="#00D4AA" />
                  </linearGradient>
                </defs>
                <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/>
              </svg>
              <h3 className="text-gray-900" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 600, lineHeight: '1.3', marginBottom: '12px', textAlign: 'left', width: '100%' }}>Süreç Boyunca Destek</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: 400, lineHeight: '1.5', width: '100%', textAlign: 'left' }}>
              Tek seferlik danışmanlık değil, iş büyüdükçe ölçeklenebilir sistemler kurma, eğitim, adaptasyon ve sürdürülebilirlik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS BÖLÜMÜ */}
      <section className="w-full flex justify-center items-center mobile-section-spacing" style={{paddingLeft: '32px', paddingRight: '16px', marginTop: '60px', paddingTop: '20px', paddingBottom: '20px'}}>
        <div className="flex flex-row gap-[20px] w-full" style={{maxWidth: '1865px'}}>
          {/* Sol kutu */}
          <div style={{width: '1112px', height: '720px', background: '#232323', borderRadius: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative'}}>
            <div style={{paddingLeft: '130px', paddingRight: '150px'}}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{marginBottom: '32px', marginTop: '40px'}}>
                <path d="M16 24C16 17.3726 21.3726 12 28 12" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="16" cy="32" r="2.5" fill="#fff" />
                <path d="M32 24C32 17.3726 37.3726 12 44 12" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="32" cy="32" r="2.5" fill="#fff" />
              </svg>
              <p style={{color: '#fff', fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '28px', fontWeight: 400, lineHeight: '1.3', marginBottom: '40px'}}>
                "Bir fikri işe dönüştüren, bir ihtiyacı çözüme ulaştıran dijital projeler geliştiriyoruz. Sözlerimiz büyük değil, ama yaptıklarımız net. Web'den mobil uygulamalara, e-ticaretten yapay zeka çözümlerine kadar uzanan bir yolculuğumuz var."
              </p>
            </div>
          </div>
          {/* Sağ kutu */}
          <div style={{width: '735px', height: '720px', borderRadius: '32px', background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', overflow: 'hidden'}}>
            <div style={{padding: '0 60px'}}>
              <div className="text-sm font-medium text-white mb-4 uppercase tracking-wider" style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', marginTop: '40px'}}>[ HER PROJE BİR ÖĞRETİYDİ ]</div>
              <h2 className="text-white" style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '54px', fontWeight: 400, lineHeight: '1.1', marginBottom: '40px', textAlign: 'left', width: '100%', maxWidth: '600px'}}>
                Bugün Bildiklerimiz, Dün Öğrendiklerimizden
              </h2>
              <div style={{display: 'flex', alignItems: 'flex-end', gap: '24px', marginTop: '60px', marginBottom: '40px'}}>
                <span style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '80px', fontWeight: 400, lineHeight: '1', color: 'rgba(255,255,255,0.8)'}}>15+</span>
                <span style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '22px', fontWeight: 400, color: 'rgba(255,255,255,0.9)', marginBottom: '12px'}}>Yıl Yolculuk & Her bir işte tecrübe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{marginBottom: '120px'}} />

      {/* BLOG/ARTICLES BÖLÜMÜ */}
      <section className="w-full flex flex-col items-center justify-center mobile-section-spacing" style={{height: '976px', marginTop: '120px', marginBottom: '80px'}}>
        {/* Mobil için başlık - sadece mobilde görünür */}
        <div className="block lg:hidden" style={{textAlign: 'center', marginBottom: '20px', padding: '0 20px', marginTop: '40px'}}>
          <div className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider" style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(12px, 3vw, 14px)'}}>[ NELER GELİŞTİRDİK? ]</div>
          <h2 style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(20px, 5vw, 40px)', fontWeight: 400, lineHeight: '1.3', color: '#111', marginBottom: '20px'}}>
            Tasarım, kodlama ve teknoloji ile iş akışını birleştiren, geliştirdiğimiz dijital ürünler
          </h2>
        </div>
        <div className="w-full flex flex-row items-start justify-between" style={{maxWidth: '1400px', margin: '0 auto', paddingLeft: '32px', paddingRight: '16px', marginBottom: '60px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <div className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider" style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', textAlign: 'left'}}>[ NELER GELİŞTİRDİK? ]</div>
            <h2 style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '60px', fontWeight: 400, lineHeight: '1.1', color: '#111', textAlign: 'left', maxWidth: '700px',
                        wordSpacing: '8px', marginTop: 0}}>
              Tasarım, kodlama ve teknoloji ile iş akışını birleştiren, geliştirdiğimiz dijital ürünler
            </h2>
          </div>
          <button style={{height: '56px', padding: '0 36px', borderRadius: '18px', border: '1.5px solid #A7F3D0', background: 'white', color: '#232323', fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '18px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px', marginTop: '60px', position: 'relative', left: '-15px'}}>
            Projeleri İncele
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#00BCD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="flex flex-row justify-center items-start" style={{gap: '40px', maxWidth: '1400px', margin: '0 auto'}}>
          {/* Kart 1 */}
          <div style={{width: '420px', height: '555px', background: '#fff', borderRadius: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative'}}>
              <img src="/images/online-siparis-sistemleri.jpg" alt="AI Blog 1" style={{width: '420px', height: '310px', objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}} />
              <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.65)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}}></div>
            </div>
            <div style={{padding: '28px 28px 0 28px', flex: 1, display: 'flex', flexDirection: 'column'}}>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#888', marginBottom: '18px'}}>Yeme–içme sektörü ile, ürünlerini doğrudan müşterilerine sunmak isteyenler için geliştirilmiş özel online sipariş sistemi.</div>
              <div style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '23px', fontWeight: 500, color: '#111', marginBottom: '18px', lineHeight: '1.3'}}>Online Sipariş Sistemleri</div>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#bbb', marginTop: 'auto', marginBottom: '18px'}}>/ Ürünlerimizden /</div>
            </div>
          </div>
          {/* Kart 2 */}
          <div style={{width: '420px', height: '555px', background: '#fff', borderRadius: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative'}}>
              <img src="/images/baski-surec-yonetimi.jpg" alt="AI Blog 2" style={{width: '420px', height: '310px', objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}} />
              <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.65)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}}></div>
            </div>
            <div style={{padding: '28px 28px 0 28px', flex: 1, display: 'flex', flexDirection: 'column'}}>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#888', marginBottom: '18px'}}> Sipariş alımı, iş takibi, üretim planlaması, malzeme kullanımı, müşteri onayları ve sevkiyat gibi işlemler sistemli ve izlenebilir hale gelir.</div>
              <div style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '23px', fontWeight: 500, color: '#111', marginBottom: '18px', lineHeight: '1.3'}}>Baskı Süreç Yönetimi</div>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#bbb', marginTop: 'auto', marginBottom: '18px'}}>/ Tamamlanan Projelerimizden Bazıları/</div>
              
            </div>
          </div>
          {/* Kart 3 */}
          <div style={{width: '420px', height: '555px', background: '#fff', borderRadius: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative'}}>
            <div style={{position: 'relative'}}>
              <img src="/images/lojistik-yuk-yol-optimizasyonlari.jpg" alt="AI Blog 3" style={{width: '420px', height: '310px', objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}} />
              <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.65)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}}></div>
            </div>
            <div style={{padding: '28px 28px 0 28px', flex: 1, display: 'flex', flexDirection: 'column'}}>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#888', marginBottom: '18px'}}>Araçların konumu, yük durumu, sürücü bilgileri ve zaman çizelgesi her an izlenerek, lojistik süreçlerinizin her aşaması kontrol altında tutulur.</div>
              <div style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '23px', fontWeight: 500, color: '#111', marginBottom: '18px', lineHeight: '1.3'}}>Lojistik | Yük & Yol Optimizasyonları</div>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#bbb', marginTop: 'auto', marginBottom: '18px'}}>/ Tamamlanan Projelerimizden Bazıları/</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA HERO BÖLÜMÜ - Footer üstü */}
      <section className="mobile-section-spacing" style={{height: '662px', background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)', borderRadius: '32px 32px 0 0', margin: '0 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0}}>
        <div style={{width: '100%', maxWidth: '1866px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingLeft: '260px'}}>
            <div className="text-sm font-medium text-white mb-4 uppercase tracking-wider" style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', textAlign: 'left'}}>[PROJENİZ İÇİN BİR BAŞLANGIÇ ADIMI]</div>
            <h2 style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '56px', fontWeight: 400, lineHeight: '1.1', color: '#fff', textAlign: 'left', maxWidth: '800px', wordSpacing: '8px', margin: 0}}>
              Eğer bir fikriniz varsa ya da sadece nasıl yaparız diye merak ediyorsanız, iletişime geçmek için büyük planlara ihtiyacınız yok.
            </h2>
          </div>
          <div style={{display: 'flex', alignItems: 'center', height: '100%', paddingRight: '260px'}}>
            <a
              href="/iletisim"
              className="cta-getintouch-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '140px',
                height: '140px',
                border: '2px solid #fff',
                borderRadius: '50%',
                color: '#fff',
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: '22px',
                fontWeight: 400,
                textDecoration: 'none',
                transition: 'background 0.3s, color 0.3s',
                textAlign: 'center',
                cursor: 'pointer',
                background: 'transparent',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span className="cta-getintouch-text" style={{zIndex: 2, position: 'relative'}}>Sormak Serbest</span>
            </a>
          </div>
        </div>
      </section>
      <style jsx>{`
        .cta-getintouch-btn:hover {
          background: #fff !important;
          color: transparent;
          opacity: 1;
        }
        .cta-getintouch-btn:hover .cta-getintouch-text {
          background: linear-gradient(90deg, #10B981, #00BCD4, #00D4AA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 1024px) {
          .features-section {
            min-height: 400px !important;
          }
          .features-section .container-custom {
            min-height: 400px !important;
          }
          .neural-network-section {
            min-height: 500px !important;
          }
          .services-section {
            min-height: 600px !important;
          }
          .mobile-section-spacing {
            margin-top: 80px !important;
            margin-bottom: 80px !important;
          }
          /* Services Cards Section'dan sonraki bölümler arası boşluk */
          .services-section + .mobile-section-spacing {
            margin-top: 120px !important;
          }
          /* AI Systems Blocks bölümü mobil ayarları */
          .mobile-section-spacing[style*="height: clamp(600px, 80vh, 854px)"] {
            margin-top: 100px !important;
            margin-bottom: 100px !important;
          }
          /* Services Cards Section mobil alt boşluk */
          .services-section {
            padding-bottom: 150px !important;
          }
          /* Tüm bölümler arası genel boşluk */
          section + section {
            margin-top: 80px !important;
          }
          /* Services Cards Section'dan sonraki ilk bölüm */
          .services-section + div {
            margin-top: 120px !important;
          }
          /* Services Cards Section içindeki kartlar arası boşluk */
          .services-section .space-y-12 > * + * {
            margin-top: 48px !important;
          }
          /* AI Systems Blocks bölümü mobil üst boşluk */
          .ai-systems-blocks {
            margin-top: 320px !important;
          }
          .ai-systems-blocks .mb-8 {
            margin-bottom: 40px !important;
          }
          .ai-systems-blocks h2 {
            font-size: clamp(24px, 6vw, 60px) !important;
            line-height: 1.1 !important;
          }
          /* Possibilities bölümü mobil responsive ayarları - Yeni Yaklaşım */
          @media (max-width: 1024px) {
            /* Ana container */
            div[style*="width: clamp(320px, 95vw, 1865px)"] {
              min-height: 200px !important;
              padding-top: 2px !important;
              padding-bottom: 2px !important;
              margin-top: 0px !important;
            }
            /* Üst boşluk div */
            div[style*="width: clamp(320px, 95vw, 1865px)"] .h-32 {
              height: 2px !important;
            }
            /* Alt boşluk div */
            div[style*="width: clamp(320px, 95vw, 1865px)"] .hidden.lg\\:block {
              height: 20px !important;
            }
            /* Tüm margin'ları sıfırla */
            div[style*="width: clamp(320px, 95vw, 1865px)"] * {
              margin-top: 0px !important;
              margin-bottom: 0px !important;
            }
            /* Sadece gerekli margin'ları ekle */
            div[style*="width: clamp(320px, 95vw, 1865px)"] .mb-8 {
              margin-bottom: 5px !important;
            }
            div[style*="width: clamp(320px, 95vw, 1865px)"] .mb-4 {
              margin-bottom: 2px !important;
            }
            div[style*="width: clamp(320px, 95vw, 1865px)"] .mb-6 {
              margin-bottom: 3px !important;
            }
            /* Gap ayarları */
            div[style*="width: clamp(320px, 95vw, 1865px)"] .gap-4 {
              gap: 2px !important;
            }
            div[style*="width: clamp(320px, 95vw, 1865px)"] .gap-8 {
              gap: 4px !important;
            }
            /* TabsV2 content padding */
            div[style*="width: clamp(320px, 95vw, 1865px)"] .flex.flex-col.lg\\:flex-row {
              padding: 2px !important;
            }
            /* Buton margin */
            div[style*="width: clamp(320px, 95vw, 1865px)"] .mt-4 {
              margin-top: 2px !important;
            }
          }
          
          /* [testimonials] bölümü mobil responsive ayarları - Alternatif Yaklaşım */
          @media (max-width: 1024px) {
            /* Ana container ayarları - daha genel selector */
            section {
              padding-left: 16px !important;
              padding-right: 16px !important;
              margin-top: 20px !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            /* Flex container ayarları - daha genel selector */
            section .flex.flex-row {
              flex-direction: column !important;
              gap: 16px !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            /* Flex container içindeki div genişlik ayarları */
            section .flex.flex-row > div {
              width: 100% !important;
              max-width: 100% !important;
            }
            /* Sol kutu ayarları - daha genel selector */
            section > div > div:first-child {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              min-height: 300px !important;
            }
            section > div > div:first-child > div {
              padding-left: 20px !important;
              padding-right: 20px !important;
              padding-top: 40px !important;
              padding-bottom: 40px !important;
            }
            /* Sol kutu içindeki yazı genişlik ayarları - daha genel selector */
            section > div > div:first-child > div > p {
              width: 100% !important;
              max-width: 100% !important;
            }
            section > div > div:first-child > div > div {
              width: 100% !important;
              max-width: 100% !important;
            }
            /* Sol kutu içindeki yazı font boyutları */
            section > div > div:first-child p {
              font-size: clamp(16px, 4vw, 25px) !important;
              line-height: 1.4 !important;
              margin-bottom: 20px !important;
            }
            section > div > div:first-child > div > div {
              font-size: clamp(14px, 3.5vw, 18px) !important;
              margin-top: 16px !important;
            }
            /* Sağ kutu ayarları */
            section > div > div:last-child {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              min-height: 250px !important;
            }
            section > div > div:last-child > div {
              padding: 20px !important;
            }
            /* Sağ kutu içindeki yazı font boyutları */
            section > div > div:last-child .text-sm {
              font-size: clamp(12px, 3vw, 14px) !important;
              margin-bottom: 16px !important;
            }
            section > div > div:last-child h2 {
              font-size: clamp(24px, 6vw, 54px) !important;
              line-height: 1.2 !important;
              margin-bottom: 20px !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            section > div > div:last-child span:first-of-type {
              font-size: clamp(40px, 8vw, 80px) !important;
            }
            section > div > div:last-child span:last-of-type {
              font-size: clamp(16px, 4vw, 22px) !important;
              margin-bottom: 8px !important;
            }
            /* İkon boyutları */
            section svg {
              width: 32px !important;
              height: 32px !important;
              margin-bottom: 16px !important;
            }
          }
          
          /* [how it works] bölümü mobil responsive ayarları - [özellikler] ile tutarlı */
          @media (max-width: 1024px) {
            /* Ana container ayarları */
            .ai-systems-blocks {
              height: auto !important;
              min-height: 300px !important;
              margin-top: 20px !important;
            }
            /* Sayfa sağ-sol ayarları - [özellikler] ile aynı */
            .ai-systems-blocks .w-full.flex.flex-col.items-start {
              padding-left: clamp(16px, 4vw, 0px) !important;
              padding-right: clamp(16px, 4vw, 0px) !important;
              padding-top: 16px !important;
            }
            /* [how it works] label font boyutu - [özellikler] ile aynı */
            .ai-systems-blocks .text-sm.font-medium.text-gray-600 {
              font-size: clamp(14px, 3vw, 14px) !important;
              margin-bottom: 6px !important;
              padding-left: clamp(16px, 4vw, 0px) !important;
            }
            /* Ana başlık font boyutu - [özellikler] ile aynı */
            .ai-systems-blocks h2 {
              font-size: clamp(28px, 5vw, 60px) !important;
              line-height: 1.2 !important;
              margin-bottom: 16px !important;
              letter-spacing: -3px !important;
              word-spacing: 8px !important;
              padding-left: clamp(16px, 4vw, 0px) !important;
            }
            /* İkon boyutları - [özellikler] ile aynı */
            .ai-systems-blocks svg {
              width: clamp(40px, 8vw, 48px) !important;
              height: clamp(40px, 8vw, 48px) !important;
              margin-bottom: 0px !important;
              margin-right: 12px !important;
            }
            /* İkon ve başlık aynı satırda */
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start {
              display: flex !important;
              flex-direction: column !important;
            }
            /* İkon ve başlık yan yana - mobilde */
            .ai-systems-blocks svg {
              display: inline-block !important;
              margin-bottom: 0px !important;
              margin-right: 12px !important;
              vertical-align: middle !important;
            }
            .ai-systems-blocks h3 {
              display: inline-block !important;
              margin-bottom: 8px !important;
              vertical-align: middle !important;
            }
            /* İkon ve başlık container'ı - daha spesifik */
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start {
              display: flex !important;
              flex-direction: column !important;
            }
            /* İkon ve başlık yan yana - flexbox ile */
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start > svg {
              order: 1 !important;
              margin-bottom: 0px !important;
              margin-right: 12px !important;
            }
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start > h3 {
              order: 2 !important;
              margin-bottom: 8px !important;
            }
            /* İkon ve başlık wrapper */
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start > svg,
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start > h3 {
              display: inline-block !important;
              vertical-align: middle !important;
            }
            /* İkon ve başlık yan yana - agresif override */
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start {
              display: block !important;
            }
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start > svg {
              float: left !important;
              margin-right: 12px !important;
              margin-bottom: 0px !important;
              display: inline-block !important;
            }
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start > h3 {
              overflow: hidden !important;
              margin-bottom: 8px !important;
              display: inline-block !important;
              float: left !important;
            }
            /* İkon ve başlık wrapper - CSS Grid yaklaşımı */
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start {
              display: grid !important;
              grid-template-columns: auto 1fr !important;
              grid-template-rows: auto auto !important;
              gap: 0 12px !important;
              align-items: start !important;
            }
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start > svg {
              grid-column: 1 !important;
              grid-row: 1 !important;
              margin: 0 !important;
            }
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start > h3 {
              grid-column: 2 !important;
              grid-row: 1 !important;
              margin: 0 0 8px 0 !important;
            }
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start > p {
              grid-column: 1 / -1 !important;
              grid-row: 2 !important;
              margin: 0 !important;
            }
            /* Alt başlık font boyutu - [özellikler] ile aynı */
            .ai-systems-blocks h3 {
              font-size: clamp(20px, 4vw, 20px) !important;
              line-height: 1.4 !important;
              margin-bottom: 6px !important;
              font-weight: 600 !important;
            }
            /* Alt metin font boyutu - [özellikler] ile aynı */
            .ai-systems-blocks p {
              font-size: clamp(16px, 3vw, 16px) !important;
              line-height: 1.5 !important;
              font-weight: 500 !important;
            }
            /* Sütunlar arası mesafe */
            .ai-systems-blocks .flex.flex-col.lg\\:flex-row {
              gap: 12px !important;
            }
            /* Sütun içi padding */
            .ai-systems-blocks .flex-1.flex.flex-col.justify-start.items-start {
              padding: 8px !important;
            }
            /* Başlık-ikon-alt metin arası mesafeler */
            .ai-systems-blocks .mb-8.lg\\:mb-16 {
              margin-bottom: 12px !important;
            }
            .ai-systems-blocks .mb-2.lg\\:mb-4 {
              margin-bottom: 4px !important;
            }
          }
          /* TabsV2 component mobil ayarları */
          @media (max-width: 1024px) {
            .mobile-section-spacing .flex {
              flex-direction: column !important;
              gap: 16px !important;
            }
            .mobile-section-spacing .flex > button {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              min-height: 80px !important;
              font-size: clamp(14px, 4vw, 20px) !important;
            }
            .mobile-section-spacing .flex.flex-col {
              gap: 24px !important;
            }
          }
          /* [testimonials] bölümü mobil responsive ayarları - blog bölümü ile aynı yaklaşım */
          @media (max-width: 1024px) {
            /* Ana container ayarları */
            section[style*="paddingLeft: '32px'"] {
              padding-left: 16px !important;
              padding-right: 16px !important;
              margin-top: 20px !important;
              width: 100% !important;
              max-width: 100% !important;
              position: relative !important;
              z-index: 1 !important;
            }
            /* Flex container ayarları */
            section[style*="paddingLeft: '32px'"] .flex.flex-row {
              flex-direction: column !important;
              gap: 16px !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            /* Flex container içindeki div genişlik ayarları */
            section[style*="paddingLeft: '32px'"] .flex.flex-row > div {
              width: 100% !important;
              max-width: 100% !important;
            }
            /* Sol kutu ayarları */
            section[style*="paddingLeft: '32px'"] > div > div:first-child {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              min-height: 300px !important;
            }
            section[style*="paddingLeft: '32px'"] > div > div:first-child > div {
              padding-left: 20px !important;
              padding-right: 20px !important;
              padding-top: 40px !important;
              padding-bottom: 40px !important;
            }
            /* Sol kutu içindeki yazı genişlik ayarları */
            section[style*="paddingLeft: '32px'"] > div > div:first-child > div > p {
              width: 100% !important;
              max-width: 100% !important;
            }
            section[style*="paddingLeft: '32px'"] > div > div:first-child > div > div {
              width: 100% !important;
              max-width: 100% !important;
            }
            /* Sol kutu içindeki yazı font boyutları */
            section[style*="paddingLeft: '32px'"] > div > div:first-child p {
              font-size: clamp(16px, 4vw, 25px) !important;
              line-height: 1.4 !important;
              margin-bottom: 20px !important;
            }
            section[style*="paddingLeft: '32px'"] > div > div:first-child > div > div {
              font-size: clamp(14px, 3.5vw, 18px) !important;
              margin-top: 16px !important;
            }
            /* Sağ kutu ayarları */
            section[style*="paddingLeft: '32px'"] > div > div:last-child {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              min-height: 250px !important;
            }
            section[style*="paddingLeft: '32px'"] > div > div:last-child > div {
              padding: 20px !important;
            }
            /* Sağ kutu içindeki yazı font boyutları */
            section[style*="paddingLeft: '32px'"] > div > div:last-child .text-sm {
              font-size: clamp(12px, 3vw, 14px) !important;
              margin-bottom: 16px !important;
            }
            section[style*="paddingLeft: '32px'"] > div > div:last-child h2 {
              font-size: clamp(24px, 6vw, 54px) !important;
              line-height: 1.2 !important;
              margin-bottom: 20px !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            section[style*="paddingLeft: '32px'"] > div > div:last-child span:first-of-type {
              font-size: clamp(40px, 8vw, 80px) !important;
            }
            section[style*="paddingLeft: '32px'"] > div > div:last-child span:last-of-type {
              font-size: clamp(16px, 4vw, 22px) !important;
              margin-bottom: 8px !important;
            }
            /* İkon boyutları */
            section[style*="paddingLeft: '32px'"] svg {
              width: 32px !important;
              height: 32px !important;
              margin-bottom: 16px !important;
            }
          }
          /* [blog] bölümü mobil responsive ayarları */
          @media (max-width: 1024px) {
            /* Ana container ayarları */
            section[style*="height: '976px'"],
            section.mobile-section-spacing[style*="height: '976px'"] {
              height: auto !important;
              min-height: auto !important;
              margin-top: 120px !important;
              margin-bottom: 40px !important;
              padding: 20px !important;
              position: relative !important;
              z-index: 5 !important;
            }
            /* Blog başlıkları için agresif override */
            section[style*="height: '976px'"] *,
            section.mobile-section-spacing[style*="height: '976px'"] * {
              display: block !important;
              visibility: visible !important;
              opacity: 1 !important;
            }
            /* Üst başlık ve buton container ayarları */
            section[style*="height: '976px'"] > div:first-child,
            section[style*="height: '976px'"] .w-full.flex.flex-row.items-start.justify-between,
            section[style*="height: '976px'"] div[style*="maxWidth: '1400px'"],
            section[style*="height: '976px'"] > div:first-child {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              margin-bottom: 40px !important;
              gap: 20px !important;
              margin-top: 80px !important;
              padding-top: 20px !important;
              display: flex !important;
              visibility: visible !important;
              opacity: 1 !important;
              position: relative !important;
              z-index: 10 !important;
            }
            /* Parent container ayarları */
            section[style*="height: '976px'"] > div:first-child > div:first-child {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              visibility: visible !important;
              opacity: 1 !important;
              position: relative !important;
              z-index: 50 !important;
            }
            /* Başlık parent container ayarları */
            section[style*="height: '976px'"] > div:first-child > div:first-child > div:first-child {
              display: flex !important;
              flex-direction: column !important;
              align-items: flex-start !important;
              visibility: visible !important;
              opacity: 1 !important;
              position: relative !important;
              z-index: 75 !important;
            }
            /* Üst küçük başlık ayarları */
            section[style*="height: '976px'"] [style*="[ blog ]"],
            section[style*="height: '976px'"] .text-sm.font-medium.text-gray-600,
            section[style*="height: '976px'"] > div:first-child > div:first-child > div:first-child,
            section[style*="height: '976px'"] div[style*="fontFamily: 'Manrope'"],
            section[style*="height: '976px'"] > div:first-child > div:first-child > div:first-child,
            section[style*="height: '976px'"] > div:first-child > div:first-child,
            section[style*="height: '976px'"] > div:first-child > div:first-child > div:first-child > div:first-child {
              font-size: clamp(12px, 3vw, 14px) !important;
              margin-bottom: 8px !important;
              text-align: center !important;
              display: block !important;
              visibility: visible !important;
              opacity: 1 !important;
              position: relative !important;
              z-index: 100 !important;
              color: #6b7280 !important;
              font-weight: 500 !important;
            }
            /* Alt büyük başlık ayarları */
            section[style*="height: '976px'"] h2,
            section[style*="height: '976px'"] [style*="fontSize: '60px'"],
            section[style*="height: '976px'"] > div:first-child > div:first-child > h2,
            section[style*="height: '976px'"] div[style*="fontFamily: 'Sora'"],
            section[style*="height: '976px'"] > div:first-child > div:first-child > h2,
            section[style*="height: '976px'"] > div:first-child > div:first-child > div:first-child > h2 {
              font-size: clamp(28px, 7vw, 60px) !important;
              line-height: 1.2 !important;
              text-align: center !important;
              margin-bottom: 12px !important;
              max-width: 100% !important;
              display: block !important;
              visibility: visible !important;
              opacity: 1 !important;
              position: relative !important;
              z-index: 100 !important;
              color: #111 !important;
              font-weight: 400 !important;
            }
            /* Buton ayarları */
            section[style*="height: '976px'"] button {
              width: 100% !important;
              max-width: 300px !important;
              height: 56px !important;
              font-size: clamp(16px, 4vw, 18px) !important;
              margin-top: 0 !important;
              left: 0 !important;
              position: relative !important;
              z-index: 100 !important;
            }
            /* Blog kartları container ayarları */
            section[style*="height: '976px'"] > div:last-child {
              flex-direction: column !important;
              gap: 24px !important;
              width: 100% !important;
              max-width: 100% !important;
              position: relative !important;
              z-index: 1 !important;
            }
            /* Blog kartları ayarları */
            section[style*="height: '976px'"] > div:last-child > div {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              min-height: 400px !important;
              position: relative !important;
              z-index: 1 !important;
            }
            /* Blog kartları içindeki resim ayarları */
            section[style*="height: '976px'"] > div:last-child > div img {
              width: 100% !important;
              height: 200px !important;
            }
            /* Blog kartları içindeki içerik ayarları */
            section[style*="height: '976px'"] > div:last-child > div > div {
              padding: 20px !important;
            }
            /* Blog kartları içindeki küçük başlık ayarları */
            section[style*="height: '976px'"] > div:last-child > div > div > div:first-child {
              font-size: clamp(12px, 3vw, 15px) !important;
              margin-bottom: 12px !important;
            }
            /* Blog kartları içindeki büyük başlık ayarları */
            section[style*="height: '976px'"] > div:last-child > div > div > div:nth-child(2) {
              font-size: clamp(18px, 4vw, 23px) !important;
              line-height: 1.3 !important;
              margin-bottom: 16px !important;
            }
            /* Blog kartları içindeki etiket ayarları */
            section[style*="height: '976px'"] > div:last-child > div > div > div:last-child {
              font-size: clamp(12px, 3vw, 15px) !important;
              margin-bottom: 16px !important;
            }
          }
        }
      `}</style>
    </main>
    </>
  )
} 