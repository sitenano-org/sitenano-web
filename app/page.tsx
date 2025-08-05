'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'


// ICON COMPONENTS
const GearIcon = ({ stroke = '#909090' }) => (
  <svg width="68" height="68" viewBox="0 0 54 54" fill="none" style={{ marginRight: '22px' }}>
    <circle cx="27" cy="27" r="16" stroke={stroke} strokeWidth="1.5" fill="none" />
    <path d="M27 15v4M27 35v4M39 27h-4M19 27h-4M34.78 19.22l-2.83 2.83M19.22 34.78l2.83-2.83M34.78 34.78l-2.83-2.83M19.22 19.22l2.83 2.83" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="27" cy="27" r="5" stroke={stroke} strokeWidth="1.5" fill="none" />
  </svg>
);
const BarChartIcon = ({ stroke = '#909090' }) => (
  <svg width="68" height="68" viewBox="0 0 54 54" fill="none" style={{ marginRight: '22px' }}>
    <rect x="12" y="30" width="6" height="12" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
    <rect x="24" y="18" width="6" height="24" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
    <rect x="36" y="24" width="6" height="18" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
    <path d="M10 42h34" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const ChipIcon = ({ stroke = '#909090' }) => (
  <svg width="68" height="68" viewBox="0 0 54 54" fill="none" style={{ marginRight: '22px' }}>
    <rect x="14" y="14" width="26" height="26" rx="6" stroke={stroke} strokeWidth="1.5" fill="none" />
    <rect x="22" y="22" width="10" height="10" rx="2" stroke={stroke} strokeWidth="1.5" fill="none" />
    <path d="M27 6v8M27 40v8M6 27h8M40 27h8M14.93 14.93l-5.66-5.66M39.07 39.07l5.66 5.66M14.93 39.07l-5.66 5.66M39.07 14.93l5.66-5.66" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

function TabsV2() {
  const tabs = [
    {
      label: 'Robotic Process Automation (RPA)',
      icon: GearIcon,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      title: 'Robotic Process Automation (RPA)',
      content: [
        'RPA enables the automation of repetitive tasks, freeing up human resources for more strategic work. It increases efficiency and reduces errors in business processes. With RPA, businesses can automate data entry, invoice processing, and other rule-based tasks, allowing employees to focus on higher-value activities. This leads to faster turnaround times and improved accuracy across operations.',
        'By leveraging RPA, organizations can streamline operations, reduce costs, and improve overall productivity. RPA solutions are scalable and can be integrated with existing systems, making them ideal for companies of all sizes. Embracing automation is a key step toward digital transformation and long-term business growth.'
      ]
    },
    {
      label: 'Data Analysis and Visualization',
      icon: BarChartIcon,
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      title: 'Data Analysis and Visualization',
      content: [
        'Our AI solutions provide powerful data analysis and visualization tools, helping businesses make data-driven decisions and uncover hidden insights. These tools enable users to process large volumes of data quickly, identify trends, and generate comprehensive reports. Interactive dashboards and visualizations make complex information easy to understand and share with stakeholders.',
        'With advanced analytics, you can transform raw data into actionable intelligence for your organization. Predictive modeling and machine learning algorithms help forecast outcomes and optimize strategies. Empower your team to make smarter decisions and stay ahead in a competitive market.'
      ]
    },
    {
      label: 'Insightful market research for strategic business decisions',
      icon: ChipIcon,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      title: 'Insightful market research for strategic business decisions',
      content: [
        'We deliver actionable market research powered by AI, supporting strategic business decisions with up-to-date and relevant information. Our platform aggregates data from multiple sources, analyzes market trends, and provides clear recommendations. This enables businesses to identify new opportunities and mitigate potential risks more effectively.',
        'Our research tools help you stay ahead of market trends and make informed choices for your business. Customizable reports and real-time insights ensure you always have the latest information at your fingertips. Make confident decisions and drive your business forward with data-driven market intelligence.'
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
        style={{ background: '#fff', position: 'relative' }}
      >
        <div className="w-full h-full">
          {/* Desktop Hero Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
            
            {/* Left Column - Updated */}
            <div className="flex items-center justify-center p-8 lg:p-16">
              <div className="w-full h-[700px] flex flex-col justify-between">
                <div className="container-custom" style={{position: 'relative', zIndex: 2}}>
                  <div className="mt-16">
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

          {/* Mobile Hero Layout */}
          <div className="block lg:hidden" style={{ height: 'auto', paddingBottom: '20px' }}>
            <div className="flex flex-col" style={{ height: 'auto' }}>
              {/* Mobile Hero Content */}
              <div className="flex flex-col justify-center px-6 py-4" style={{ minHeight: 'auto' }}>
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
                      Yapay zeka ile sektörleri<br />
                      dönüştürüyor, işletmeleri<br />
                      güçlendiriyor, geleceği<br />
                      şekillendiriyoruz
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
                      background: 'linear-gradient(135deg, #E1BEE7 0%, #BBDEFB 100%)',
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
                        Nasıl etki yaratıyoruz
                      </h3>
                      <div className="text-3xl font-bold text-purple-600 mb-2">500K</div>
                      <p
                        style={{
                          color: '#fff',
                          fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                          fontSize: '14px',
                          fontWeight: 500
                        }}
                      >
                        Her gün aktif kullanıcı
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
                      background: 'linear-gradient(135deg, #80CBC4 0%, #A5D6A7 100%)',
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
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Yapay zeka ve teknoloji"
                    fill
                    priority
                    className="object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-2xl font-bold leading-tight">
                      <div>Innovating</div>
                      <div>with Neural</div>
                      <div>Networks</div>
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
          {/* Mobile Top Spacing */}
          <div className="block lg:hidden h-4"></div>
          <div className="mb-16">
            <div className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(14px, 3vw, 14px)', paddingLeft: 'clamp(16px, 4vw, 0px)' }}>
              [özellikler]
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
              Yapay zeka ile güçlendirin ve yükseltin Sitenano Startup
            </h2>
          </div>

          {/* Features Grid - Updated 2024 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-12 lg:mb-24" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
            {/* Feature 1: AI Technology - Updated */}
            <div className="text-left space-y-4 lg:space-y-8">
              <div className="relative mb-8" style={{ width: 'clamp(40px, 8vw, 48px)', height: 'clamp(40px, 8vw, 48px)' }}>
                <svg className="text-gray-900" viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1" fill="none"/>
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
              }}>Yapay Zeka Teknolojisi</h3>
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
                Sinir ağları geliştirme ve uygulama konusundaki uzmanlığımızı ve bilgi birikimimizi vurguluyoruz
              </p>
            </div>

            {/* Feature 2: Tailored solutions - Updated */}
            <div className="text-left space-y-4 lg:space-y-8">
              <div className="relative mb-8" style={{ width: 'clamp(40px, 8vw, 48px)', height: 'clamp(40px, 8vw, 48px)' }}>
                <svg className="text-gray-900" viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1" fill="none"/>
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
              }}>Özel Çözümler</h3>
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
                Belirli iş gereksinimlerine göre çözümleri özelleştirme yeteneğimizi gösteriyoruz
              </p>
            </div>

            {/* Feature 3: Cutting-edge technology - Updated */}
            <div className="text-left space-y-4 lg:space-y-8">
              <div className="relative mb-8" style={{ width: 'clamp(40px, 8vw, 48px)', height: 'clamp(40px, 8vw, 48px)' }}>
                <svg className="text-gray-900" viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
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
              }}>En Güncel Teknoloji</h3>
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
                Sinir ağı geliştirmede en son araçları ve teknikleri kullanımımızı vurguluyoruz
              </p>
            </div>

            {/* Feature 4: Modern development - Updated */}
            <div className="text-left space-y-4 lg:space-y-8">
              <div className="relative mb-8" style={{ width: 'clamp(40px, 8vw, 48px)', height: 'clamp(40px, 8vw, 48px)' }}>
                <svg className="text-gray-900" viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
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
              }}>Modern Geliştirme</h3>
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
      <section className="bg-white relative neural-network-section" style={{ height: 'auto', minHeight: '890px', marginTop: '30px', overflow: 'visible' }}>
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
              Experiment with a{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #10B981, #00BCD4, #00D4AA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Neural Network</span>{' '}
              <br />
              directly in your browser.{' '}
              <br />
              No worries, you can't break{' '}
              <span>it—we promise</span>
            </h2>
            
            {/* Demo Logos */}
            <div className="flex items-center space-x-12">
              {/* MINIMIZE INTERIOR */}
              <div className="flex flex-col items-start" style={{ width: '220px' }}>
                <div className="font-bold text-2xl tracking-wider" style={{ color: '#B2B2B2' }}>M'N'MIZE</div>
                <div className="text-base" style={{ color: '#B2B2B2' }}>INTERIOR</div>
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
              Experiment with a{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #10B981, #00BCD4, #00D4AA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Neural Network</span>{' '}
              <br />
              directly in your browser.{' '}
              <br />
              No worries, you can't break{' '}
              <span>it—we promise</span>
            </h2>
          </div>
          
          {/* Mobile Demo Logos */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {/* MINIMIZE INTERIOR */}
            <div className="flex flex-col items-center">
              <div className="font-bold text-xl tracking-wider mb-4" style={{ color: '#B2B2B2' }}>M'N'MIZE</div>
              <div className="text-sm" style={{ color: '#B2B2B2' }}>INTERIOR</div>
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
            <div className="text-sm font-medium text-gray-600 mb-1 lg:mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(14px, 3vw, 14px)', paddingLeft: 'clamp(16px, 4vw, 0px)' }}>
              [hizmetler]
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
                  Özel sinir ağı özellikleri ile hizmetleriniz için
                </h2>
                <p className="text-gray-600 text-lg mb-6" style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  fontWeight: 500,
                  lineHeight: '1.5'
                }}>
                  İşletmenize yardımcı olmak için tüm hizmetlere sahibiz
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
            <div className="bg-white rounded-3xl shadow-lg relative overflow-hidden" style={{ width: '100%', maxWidth: '414px', height: 'clamp(400px, 60vh, 596px)', margin: '0 auto' }}>
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
                  Robotic Process<br/>Automation (RPA)
                </span>
              </div>
              <div className="absolute" style={{ right: '40px', bottom: '40px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Card 2: Data Analysis and Visualization */}
            <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-3xl shadow-lg relative overflow-hidden" style={{ width: '100%', maxWidth: '414px', height: 'clamp(400px, 60vh, 596px)', margin: '0 auto' }}>
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
                  Veri Analizi ve<br/>Görselleştirme
                </span>
              </div>
              <div className="absolute" style={{ right: '40px', bottom: '40px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            {/* Card 3: Market Research */}
            <div className="bg-gradient-to-b from-purple-400 to-purple-600 rounded-3xl shadow-lg relative overflow-hidden" style={{ width: '100%', maxWidth: '996px', height: 'clamp(400px, 60vh, 596px)', margin: '0 auto' }}>
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
                  Stratejik iş kararları<br/>için pazar araştırması
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
      <div className="block lg:hidden h-32"></div>

      {/* HİZMETLER BÖLÜMÜNÜN ALTINA YENİ SEKME YAPISI (belirtilen ölçülerle) */}
      <div className="mobile-section-spacing" style={{ width: 'clamp(320px, 95vw, 1865px)', margin: '0 auto', background: '#1F1F1F', borderRadius: '32px', minHeight: 'clamp(150px, 25vh, 1400px)', paddingLeft: 'clamp(16px, 4vw, 28px)', paddingRight: 'clamp(16px, 4vw, 28px)', marginTop: 'clamp(0px, 0vw, 0px)', paddingTop: 'clamp(0px, 0vw, 0px)', paddingBottom: 'clamp(0px, 0vw, 0px)' }}>
        <div className="block lg:hidden h-32"></div>
        <div className="hidden lg:block" style={{ height: '140px' }} />
        <div className="max-w-7xl mx-auto w-full" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
          <div className="mb-8">
            <div className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>[possibilities]</div>
            <h2 className="text-4xl md:text-5xl text-white mb-8" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontWeight: 400, letterSpacing: '-1px', lineHeight: '1.2', fontSize: 'clamp(32px, 8vw, 60px)' }}>
              Cutting-edge capabilities<br />of our AI solutions
            </h2>
            <TabsV2 />
          </div>
        </div>
        <div className="block lg:hidden h-32"></div>
        <div className="hidden lg:block" style={{ height: '160px' }} />
      </div>

      {/* YENİ BÖLÜM: AI SYSTEMS BLOCKS */}
      <section
        className="relative w-full flex items-center justify-center bg-white mobile-section-spacing ai-systems-blocks"
        style={{ height: 'clamp(600px, 80vh, 854px)', marginTop: 'clamp(160px, 20vw, 60px)', marginBottom: '80px' }}
      >
        <div className="w-full flex flex-col items-start" style={{ maxWidth: '1310px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(16px, 4vw, 32px)', paddingRight: 'clamp(16px, 4vw, 16px)', paddingTop: 'clamp(40px, 8vw, 0px)' }}>
          <div className="mb-8 lg:mb-16">
            <div className="text-sm font-medium text-gray-600 mb-2 lg:mb-4 uppercase tracking-wider" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>[how it works]</div>
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
              Essential building blocks<br />of artificial intelligence<br />(AI) systems
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-0" style={{maxWidth: '1310px'}}>
            {/* 1. Sütun */}
            <div className="flex-1 flex flex-col justify-start items-start px-4 lg:px-8 py-6 lg:py-8" style={{minWidth: '0'}}>
              {/* İKON */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{marginBottom: '40px', display: 'block'}} className="lg:w-16 lg:h-16">
                <defs>
                  <linearGradient id="icon-gradient-1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="0.5" stopColor="#00BCD4" />
                    <stop offset="1" stopColor="#00D4AA" />
                  </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="20" stroke="url(#icon-gradient-1)" strokeWidth="1.5" fill="none" />
                <path d="M24 14v10l7 7" stroke="url(#icon-gradient-1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <h3 className="text-gray-900" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 600, lineHeight: '1.3', marginBottom: '12px', textAlign: 'left', width: '100%' }}>Activation Function</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: 400, lineHeight: '1.5', width: '100%', textAlign: 'left' }}>
                Each neuron applies an activation function to the weighted sum of its inputs and produces an output
              </p>
            </div>
            {/* Dikey çizgi - Mobilde gizli */}
            <div className="hidden lg:block" style={{height: '300px', alignSelf: 'center', width: '1px', background: '#E5E7EB'}} />
            {/* 2. Sütun */}
            <div className="flex-1 flex flex-col justify-start items-start px-4 lg:px-8 py-6 lg:py-8" style={{minWidth: '0'}}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{marginBottom: '40px', display: 'block'}} className="lg:w-16 lg:h-16">
                <defs>
                  <linearGradient id="icon-gradient-2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="0.5" stopColor="#00BCD4" />
                    <stop offset="1" stopColor="#00D4AA" />
                  </linearGradient>
                </defs>
                <rect x="8" y="8" width="32" height="32" rx="8" stroke="url(#icon-gradient-2)" strokeWidth="1.5" fill="none" />
                <path d="M16 24h16" stroke="url(#icon-gradient-2)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M24 16v16" stroke="url(#icon-gradient-2)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className="text-gray-900" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 600, lineHeight: '1.3', marginBottom: '12px', textAlign: 'left', width: '100%' }}>Feedforward Process</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: 400, lineHeight: '1.5', width: '100%', textAlign: 'left' }}>
                The inputs are multiplied by their respective weights, summed up, and passed through the activation function.
              </p>
            </div>
            {/* Dikey çizgi - Mobilde gizli */}
            <div className="hidden lg:block" style={{height: '300px', alignSelf: 'center', width: '1px', background: '#E5E7EB'}} />
            {/* 3. Sütun */}
            <div className="flex-1 flex flex-col justify-start items-start px-4 lg:px-8 py-6 lg:py-8" style={{minWidth: '0'}}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{marginBottom: '40px', display: 'block'}} className="lg:w-16 lg:h-16">
                <defs>
                  <linearGradient id="icon-gradient-3" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="0.5" stopColor="#00BCD4" />
                    <stop offset="1" stopColor="#00D4AA" />
                  </linearGradient>
                </defs>
                <polygon points="24,8 40,40 8,40" stroke="url(#icon-gradient-3)" strokeWidth="1.5" fill="none" />
                <path d="M24 20v8" stroke="url(#icon-gradient-3)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className="text-gray-900" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 600, lineHeight: '1.3', marginBottom: '12px', textAlign: 'left', width: '100%' }}>Payment method</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: 400, lineHeight: '1.5', width: '100%', textAlign: 'left' }}>
                And passed through the activation function. The inputs are multiplied by their respective weights, summed up
              </p>
            </div>
            {/* Dikey çizgi - Mobilde gizli */}
            <div className="hidden lg:block" style={{height: '300px', alignSelf: 'center', width: '1px', background: '#E5E7EB'}} />
            {/* 4. Sütun */}
            <div className="flex-1 flex flex-col justify-start items-start px-4 lg:px-8 py-6 lg:py-8" style={{minWidth: '0'}}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{marginBottom: '40px', display: 'block'}} className="lg:w-16 lg:h-16">
                <defs>
                  <linearGradient id="icon-gradient-4" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="0.5" stopColor="#00BCD4" />
                    <stop offset="1" stopColor="#00D4AA" />
                  </linearGradient>
                </defs>
                <ellipse cx="24" cy="24" rx="16" ry="10" stroke="url(#icon-gradient-4)" strokeWidth="1.5" fill="none" />
                <path d="M24 14v20" stroke="url(#icon-gradient-4)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 className="text-gray-900" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: 600, lineHeight: '1.3', marginBottom: '12px', textAlign: 'left', width: '100%' }}>Activation Function</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: 400, lineHeight: '1.5', width: '100%', textAlign: 'left' }}>
                Each neuron applies an activation function to the weighted sum of its inputs and produces an output
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS BÖLÜMÜ */}
      <section className="w-full flex justify-center items-center mobile-section-spacing" style={{paddingLeft: '32px', paddingRight: '16px', marginTop: '160px', paddingTop: '60px', paddingBottom: '60px'}}>
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
              <p style={{color: '#fff', fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '25px', fontWeight: 400, lineHeight: '1.3', marginBottom: '40px'}}>
                Working with Aiero has been a game-changer for our business. Their AI solutions have revolutionized our operations, enabling us to automate repetitive tasks and make data-driven decisions with ease. We couldn't be happier with the results."
              </p>
              <div style={{color: '#fff', fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '18px', fontWeight: 400, marginTop: '24px', marginBottom: '40px'}}>
                - John Anderson, CEO of XYZ Company
              </div>
            </div>
          </div>
          {/* Sağ kutu */}
          <div style={{width: '735px', height: '720px', borderRadius: '32px', background: 'linear-gradient(120deg, #2e3192 0%, #1bffff 100%)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', overflow: 'hidden'}}>
            <div style={{padding: '0 60px'}}>
              <div className="text-sm font-medium text-white mb-4 uppercase tracking-wider" style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', marginTop: '40px'}}>[ testimonials ]</div>
              <h2 className="text-white" style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '54px', fontWeight: 400, lineHeight: '1.1', marginBottom: '40px', textAlign: 'left', width: '100%', maxWidth: '600px'}}>
                Discover what our clients have to say about our AI solutions
              </h2>
              <div style={{display: 'flex', alignItems: 'flex-end', gap: '24px', marginTop: '60px', marginBottom: '40px'}}>
                <span style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '80px', fontWeight: 400, lineHeight: '1', color: 'rgba(255,255,255,0.8)'}}>250+</span>
                <span style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '22px', fontWeight: 400, color: 'rgba(255,255,255,0.9)', marginBottom: '12px'}}>Happy clients</span>
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
          <div className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider" style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: 'clamp(12px, 3vw, 14px)'}}>[ blog ]</div>
          <h2 style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: 'clamp(20px, 5vw, 40px)', fontWeight: 400, lineHeight: '1.3', color: '#111', marginBottom: '20px'}}>
            Exploring the world of<br />artificial intelligence<br />with Aiero blogging
          </h2>
        </div>
        <div className="w-full flex flex-row items-start justify-between" style={{maxWidth: '1400px', margin: '0 auto', paddingLeft: '32px', paddingRight: '16px', marginBottom: '60px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <div className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider" style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', textAlign: 'left'}}>[ blog ]</div>
            <h2 style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '60px', fontWeight: 400, lineHeight: '1.1', color: '#111', textAlign: 'left', maxWidth: '700px', wordSpacing: '8px', marginTop: 0}}>
              Exploring the world of<br />artificial intelligence<br />with Aiero blogging
            </h2>
          </div>
          <button style={{height: '56px', padding: '0 36px', borderRadius: '18px', border: '1.5px solid #A7F3D0', background: 'white', color: '#232323', fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '18px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px', marginTop: '60px', position: 'relative', left: '-15px'}}>
            More articles
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#00BCD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="flex flex-row justify-center items-start" style={{gap: '40px', maxWidth: '1400px', margin: '0 auto'}}>
          {/* Kart 1 */}
          <div style={{width: '420px', height: '555px', background: '#fff', borderRadius: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="AI Blog 1" style={{width: '420px', height: '310px', objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}} />
            <div style={{padding: '28px 28px 0 28px', flex: 1, display: 'flex', flexDirection: 'column'}}>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#888', marginBottom: '18px'}}>How can I get started with Artificial Intelligence for my business?</div>
              <div style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '23px', fontWeight: 500, color: '#111', marginBottom: '18px', lineHeight: '1.3'}}>How can I get started with Artificial Intelligence for my business?</div>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#bbb', marginTop: 'auto', marginBottom: '18px'}}>/ AI Aiero / Technology /</div>
            </div>
          </div>
          {/* Kart 2 */}
          <div style={{width: '420px', height: '555px', background: '#fff', borderRadius: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="AI Blog 2" style={{width: '420px', height: '310px', objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}} />
            <div style={{padding: '28px 28px 0 28px', flex: 1, display: 'flex', flexDirection: 'column'}}>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#888', marginBottom: '18px'}}>AI and Robotics: Advancing Automation and Human-Robot Collaboration</div>
              <div style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '23px', fontWeight: 500, color: '#111', marginBottom: '18px', lineHeight: '1.3'}}>AI and Robotics: Advancing Automation and Human-Robot Collaboration</div>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#bbb', marginTop: 'auto', marginBottom: '18px'}}>/ AI / Neural Networks /</div>
            </div>
          </div>
          {/* Kart 3 */}
          <div style={{width: '420px', height: '555px', background: '#fff', borderRadius: '24px', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="AI Blog 3" style={{width: '420px', height: '310px', objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px'}} />
            <div style={{padding: '28px 28px 0 28px', flex: 1, display: 'flex', flexDirection: 'column'}}>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#888', marginBottom: '18px'}}>How Natural Language Processing is revolutionizing Text Analysis</div>
              <div style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '23px', fontWeight: 500, color: '#111', marginBottom: '18px', lineHeight: '1.3'}}>How Natural Language Processing is revolutionizing Text Analysis</div>
              <div style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '15px', color: '#bbb', marginTop: 'auto', marginBottom: '18px'}}>/ AI Services / AI Solutions /</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA HERO BÖLÜMÜ - Footer üstü */}
      <section className="mobile-section-spacing" style={{height: '662px', background: 'linear-gradient(120deg, #2e3192 0%, #1bffff 100%)', borderRadius: '32px 32px 0 0', margin: '0 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0}}>
        <div style={{width: '100%', maxWidth: '1866px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingLeft: '260px'}}>
            <div className="text-sm font-medium text-white mb-4 uppercase tracking-wider" style={{fontFamily: 'Manrope, Arial, Helvetica, sans-serif', textAlign: 'left'}}>[ cta ]</div>
            <h2 style={{fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '72px', fontWeight: 400, lineHeight: '1.1', color: '#fff', textAlign: 'left', maxWidth: '800px', wordSpacing: '8px', margin: 0}}>
              Elevate your business<br />with our innovative<br />solutions
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
              <span className="cta-getintouch-text" style={{zIndex: 2, position: 'relative'}}>Get in touch</span>
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