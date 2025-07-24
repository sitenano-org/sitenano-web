import React from 'react';
import Image from 'next/image';

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO BÖLÜMÜ */}
      <section
        className="relative w-full flex items-center overflow-hidden"
        style={{ minHeight: '520px', height: '520px', background: 'none', position: 'relative', marginTop: '12px' }}
      >
        {/* Arka plan görseli (Unsplash demo) */}
        <img
          src="/images/top-hero-bg.jpg"
          alt="Hakkımızda Hero Background"
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
            / Hakkımızda /
          </h1>
        </div>
      </section>

      {/* HERO ALTINDA YENİ BÖLÜM */}
      <section
        className="bg-white w-full flex flex-col items-start justify-center"
        style={{ height: '460px', marginTop: '190px' }}
      >
        <div className="w-full" style={{ maxWidth: '1200px', paddingLeft: '310px', paddingRight: '24px' }}>
          <div className="mb-4 text-sm font-medium text-gray-600 uppercase tracking-wider" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', letterSpacing: '0.5px' }}>
            [ hakkımızda ]
          </div>
          <h2
            className="text-gray-900"
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
            Awesome things in working<br />with Aiero WordPress theme
          </h2>
          <div className="mt-[160px] flex justify-end w-full" style={{ minHeight: '1px', height: 'auto' }}>
            <div style={{ width: '610px', textAlign: 'left', marginRight: '-420px' }}>
              <p className="text-gray-800 mb-6" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '17px', fontWeight: 500, lineHeight: '1.7' }}>
                At XXLando, we are a leading AI services provider dedicated to delivering innovative solutions that leverage artificial intelligence to transform businesses.
              </p>
              <p className="text-gray-700 mb-4" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px', lineHeight: '1.7' }}>
                Our team of experts specializes in cutting-edge AI technologies, offering customized strategies and implementations to help you stay ahead in today’s data-driven world. Unlock the full potential of AI with us.
              </p>
              <p className="text-gray-700" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px', lineHeight: '1.7' }}>
                XXLando, your trusted partner in the future of intelligent technology. Stay ahead in today’s data-driven world. Unlock the full potential of AI with XXLando, your trusted partner in the future of intelligent technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & AI PRODUCT BÖLÜMÜ */}
      <section
        className="bg-white flex flex-row justify-center items-center"
        style={{
          height: '600px',
          marginLeft: '14px',
          marginRight: '14px',
          marginTop: '200px',
          marginBottom: '60px',
          borderRadius: '24px',
        }}
      >
        {/* Sol Bölüm */}
        <div
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
          <h2 style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '64px', fontWeight: 400, color: '#fff', margin: 0, lineHeight: '1.1' }}>Mission</h2>
          <p style={{
            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            color: '#fff',
            margin: 0,
            marginTop: '20px',
            marginBottom: '32px',
            height: '180px',
            letterSpacing: 'normal',
            lineHeight: '30px',
          }}>
            Certainly, crafting a clear and inspiring mission statement is essential for a development company. It should reflect your company’s values, purpose, and long-term objectives. Here’s a sample mission statement for a development company,
          </p>
          <p style={{
            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            color: '#fff',
            margin: 0,
            marginTop: '-20px',
            marginBottom: '32px',
            height: '224px',
            letterSpacing: '-0.5px',
            lineHeight: '28px',
          }}>
            At XXLando our mission is to empower businesses and organizations through innovative development solutions. We are committed to delivering exceptional, tailored software, websites, and applications that not only meet or exceed our clients.
          </p>
          <img src="/images/s-logo.svg" alt="Sitenano S Logo" style={{ position: 'absolute', right: '32px', bottom: '24px', height: '92px', width: 'auto', display: 'block', zIndex: 3, pointerEvents: 'none' }} />
        </div>
        {/* Sağ Bölüm */}
        <div
          style={{
            width: '1230px',
            height: '592px',
            borderRadius: '24px',
            background: 'linear-gradient(120deg, #b6eaff 0%, #e0e7ff 100%)',
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
            <div style={{ position: 'absolute', left: 0, bottom: '66px', width: '100%', textAlign: 'left', paddingLeft: '80px', zIndex: 3 }}>
              <h3 style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '40px', fontWeight: 400, color: '#fff', lineHeight: '1.2', margin: 0 }}>
                we create a professional<br />product using artificial<br />intelligence
              </h3>
            </div>
            <div style={{ position: 'absolute', right: '60px', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', zIndex: 3 }}>
              <span style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '120px', fontWeight: 700, color: '#fff', opacity: 0.9, letterSpacing: '-4px', lineHeight: '1' }}>500+</span>
              <div style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '20px', color: '#fff', opacity: 0.8, marginTop: '8px' }}>Created<br />projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT - GRADIENT TEXT BÖLÜMÜ */}
      <section
        className="flex flex-row items-center"
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
        {/* Sol görsel */}
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', marginLeft: '-20px' }}>
          <img src="/images/about-elements-1.png" alt="About Elements" style={{ height: '700px', width: '500px', display: 'block' }} />
        </div>
        {/* Sağ yazı */}
        <div
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
            Tinker with a <span style={{
              background: 'linear-gradient(90deg, #1EBBBC 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline',
            }}>Neural Network right here</span> in your browser.<br />Don’t worry, you can’t break it. We Promise.
          </h2>
        </div>
      </section>
      {/* ALTINA MARGIN EKLE */}
      <div style={{ marginBottom: '200px' }} />

      {/* YENİ BÖLÜM - GÖRSELDEKİ GİBİ */}
      <section
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
                It's blow your mind!<br />Meet Neural Networks
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
              Get a Quote
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