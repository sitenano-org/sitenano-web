'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Updated 2024 */}
      <section
        className="relative w-full h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}
      >
        <div className="w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
            
            {/* Left Column - Updated */}
            <div className="flex items-center justify-center p-8 lg:p-16">
              <div className="w-full h-[700px] flex flex-col justify-between">
                <div className="container-custom">
                  <div className="mt-16">
                    <h1
                      className="text-white"
                      style={{
                        display: 'block',
                        fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                        fontSize: '45px',
                        fontWeight: 400,
                        letterSpacing: '0.5px',
                        lineHeight: '1.4',
                        textAlign: 'left',
                        width: '100%',
                        maxWidth: '700px'
                      }}
                    >
                      Yapay zeka ile sektörleri<br />
                      dönüştürüyor, işletmeleri<br />
                      güçlendiriyor, geleceği<br />
                      şekillendiriyoruz
                    </h1>
                  </div>
                  <div className="mt-16">
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
                      background: 'linear-gradient(135deg, #E1BEE7 0%, #BBDEFB 100%)',
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
                        Nasıl etki yaratıyoruz
                      </h3>
                      <div style={{ height: '30px' }}></div>
                      <div className="text-4xl font-bold text-purple-600 mb-3 ml-6">500K</div>
                      <p
                        style={{
                          color: '#fff',
                          fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          fontWeight: 500,
                          marginLeft: '25px'
                        }}
                      >
                        Her gün aktif kullanıcı
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
                      background: 'linear-gradient(135deg, #80CBC4 0%, #A5D6A7 100%)',
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
                        Aiero Startup ile düşünme şeklinizi dönüştürüyoruz
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
                          <span>Daha fazla keşfet</span>
                          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="absolute top-6 right-6 w-16 h-16 rotate-45">
                      <div className="w-full h-full bg-purple-800 rounded-lg opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Updated */}
            <div className="flex items-center justify-center p-8 pt-24 lg:pt-32">
              <div className="relative" style={{ width: '900px', height: '700px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Yapay zeka ve teknoloji"
                  fill
                  priority
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-3xl font-bold leading-tight">
                    <div>Innovating</div>
                    <div>with Neural</div>
                    <div>Networks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Updated 2024 */}
      <section className="bg-white relative overflow-hidden" style={{ height: '740px' }}>
        {/* Background gradient - Updated */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-purple-50 opacity-60"></div>
        
        <div className="container-custom relative z-10 h-full flex flex-col justify-center">
          <div className="mb-16">
            <div className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider">
              [özellikler]
            </div>
            <h2 className="text-gray-900" style={{
              color: 'rgb(17, 17, 17)',
              display: 'block',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '60px',
              fontStyle: 'normal',
              fontWeight: 400,
              height: 'auto',
              letterSpacing: '-3px',
              lineHeight: '69.9996px',
              overflowWrap: 'break-word',
              position: 'relative',
              textAlign: 'left',
              textSizeAdjust: '100%',
              textTransform: 'none',
              width: '100%',
              wordSpacing: '8px'
            }}>
              Yapay zeka ile güçlendirin ve yükseltin Sitenano Startup
            </h2>
          </div>

          {/* Features Grid - Updated 2024 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Feature 1: AI Technology - Updated */}
            <div className="text-left space-y-8">
              <div className="w-12 h-12 relative mb-8">
                <svg className="w-12 h-12 text-gray-900" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-gray-900" style={{
                boxShadow: 'none',
                boxSizing: 'border-box',
                color: 'rgb(17, 17, 17)',
                cursor: 'pointer',
                display: 'inline',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                height: 'auto',
                letterSpacing: 'normal',
                lineHeight: '28px',
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
              }}>Yapay Zeka Teknolojisi</h3>
              <p className="text-gray-600" style={{
                color: 'rgb(51, 51, 51)',
                display: 'block',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                height: '90px',
                letterSpacing: 'normal',
                lineHeight: '30px',
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
                width: '280px',
                wordSpacing: '0px'
              }}>
                Sinir ağları geliştirme ve uygulama konusundaki uzmanlığımızı ve bilgi birikimimizi vurguluyoruz
              </p>
            </div>

            {/* Feature 2: Tailored solutions - Updated */}
            <div className="text-left space-y-8">
              <div className="w-12 h-12 relative mb-8">
                <svg className="w-12 h-12 text-gray-900" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-gray-900" style={{
                boxShadow: 'none',
                boxSizing: 'border-box',
                color: 'rgb(17, 17, 17)',
                cursor: 'pointer',
                display: 'inline',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                height: 'auto',
                letterSpacing: 'normal',
                lineHeight: '28px',
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
              }}>Özel Çözümler</h3>
              <p className="text-gray-600" style={{
                color: 'rgb(51, 51, 51)',
                display: 'block',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                height: '90px',
                letterSpacing: 'normal',
                lineHeight: '30px',
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
                width: '280px',
                wordSpacing: '0px'
              }}>
                Belirli iş gereksinimlerine göre çözümleri özelleştirme yeteneğimizi gösteriyoruz
              </p>
            </div>

            {/* Feature 3: Cutting-edge technology - Updated */}
            <div className="text-left space-y-8">
              <div className="w-12 h-12 relative mb-8">
                <svg className="w-12 h-12 text-gray-900" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-gray-900" style={{
                boxShadow: 'none',
                boxSizing: 'border-box',
                color: 'rgb(17, 17, 17)',
                cursor: 'pointer',
                display: 'inline',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                height: 'auto',
                letterSpacing: 'normal',
                lineHeight: '28px',
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
              }}>En Güncel Teknoloji</h3>
              <p className="text-gray-600" style={{
                color: 'rgb(51, 51, 51)',
                display: 'block',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                height: '90px',
                letterSpacing: 'normal',
                lineHeight: '30px',
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
                width: '240px',
                wordSpacing: '0px'
              }}>
                Sinir ağı geliştirmede en son araçları ve teknikleri kullanımımızı vurguluyoruz
              </p>
            </div>

            {/* Feature 4: Modern development - Updated */}
            <div className="text-left space-y-8">
              <div className="w-12 h-12 relative mb-8">
                <svg className="w-12 h-12 text-gray-900" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-gray-900" style={{
                boxShadow: 'none',
                boxSizing: 'border-box',
                color: 'rgb(17, 17, 17)',
                cursor: 'pointer',
                display: 'inline',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 600,
                height: 'auto',
                letterSpacing: 'normal',
                lineHeight: '28px',
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
              }}>Modern Geliştirme</h3>
              <p className="text-gray-600" style={{
                color: 'rgb(51, 51, 51)',
                display: 'block',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                height: '90px',
                letterSpacing: 'normal',
                lineHeight: '30px',
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
                width: '240px',
                wordSpacing: '0px'
              }}>
                Hizmetlerimizin etkinliğini gösteren başarılı vaka çalışmaları ve müşteri referanslarımızı sergiliyoruz
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
      <section className="bg-white relative overflow-hidden" style={{ height: '890px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
          
          {/* Left Column - Vector Image - Updated */}
          <div className="relative h-full">
            <Image
              src="/images/Vector-13 (1).png"
              alt="Neural Network Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - Text Content - Updated */}
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="w-full max-w-2xl">
              <h2 
                className="text-gray-900 leading-tight"
                style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '60px',
                  fontWeight: 400,
                  letterSpacing: '-2px',
                  lineHeight: '1.2',
                  textAlign: 'left'
                }}
              >
                Experiment with a{' '}
                <span style={{ color: '#00BCD4' }}>Neural Network</span>{' '}
                directly in your browser. no worries, you can't break it—we promise
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 