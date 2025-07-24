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
      <div style={{ marginBottom: '120px' }} />

      {/* VİZYON & MİSYON */}
      <section className="bg-white py-24">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gray-900 mb-6" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '38px', fontWeight: 400, letterSpacing: '-0.5px', lineHeight: '1.2' }}>Vizyonumuz</h2>
            <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
              Dijital dönüşümde öncü olmak, müşterilerimizin iş süreçlerini yapay zeka ve modern web teknolojileriyle güçlendirmek.
            </p>
          </div>
          <div>
            <h2 className="text-gray-900 mb-6" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '38px', fontWeight: 400, letterSpacing: '-0.5px', lineHeight: '1.2' }}>Misyonumuz</h2>
            <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
              Yenilikçi, güvenilir ve sürdürülebilir çözümlerle müşterilerimizin dijital dünyada rekabet avantajı elde etmesini sağlamak.
            </p>
          </div>
        </div>
      </section>

      {/* DEĞERLERİMİZ */}
      <section className="bg-gray-50 py-24">
        <div className="container-custom">
          <h2 className="text-gray-900 mb-16 text-center" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '38px', fontWeight: 400, letterSpacing: '-0.5px', lineHeight: '1.2' }}>Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2" /><path d="M8 12l2 2 4-4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h3 className="text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '22px', fontWeight: 600 }}>Güvenilirlik</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px' }}>Müşterilerimize her zaman şeffaf ve güvenilir hizmet sunarız.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#00BCD4" strokeWidth="2" /><path d="M8 12h8" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round"/></svg>
              <h3 className="text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '22px', fontWeight: 600 }}>Yenilikçilik</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px' }}>Teknolojideki en son gelişmeleri yakından takip eder, yenilikçi çözümler sunarız.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><polygon points="12,2 22,22 2,22" stroke="#00D4AA" strokeWidth="2" fill="none" /><path d="M12 8v6" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round"/></svg>
              <h3 className="text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '22px', fontWeight: 600 }}>Takım Ruhu</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px' }}>Başarıya birlikte ulaşmak için ekip olarak çalışırız.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="8" ry="5" stroke="#10B981" strokeWidth="2" /><path d="M12 7v10" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/></svg>
              <h3 className="text-gray-900 mt-6 mb-3" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '22px', fontWeight: 600 }}>Sürekli Gelişim</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px' }}>Kendimizi ve hizmetlerimizi sürekli geliştiririz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FARKIMIZ */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <h2 className="text-gray-900 mb-16 text-center" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '38px', fontWeight: 400, letterSpacing: '-0.5px', lineHeight: '1.2' }}>Neden Sitenano?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-gray-50 rounded-2xl shadow p-8 flex flex-col items-center text-center">
              <h3 className="text-gray-900 mb-3" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '20px', fontWeight: 600 }}>Uzman Kadro</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px' }}>Alanında deneyimli ve tutkulu bir ekibe sahibiz.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow p-8 flex flex-col items-center text-center">
              <h3 className="text-gray-900 mb-3" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '20px', fontWeight: 600 }}>Müşteri Odaklılık</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px' }}>Her projede müşteri memnuniyetini ön planda tutarız.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow p-8 flex flex-col items-center text-center">
              <h3 className="text-gray-900 mb-3" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '20px', fontWeight: 600 }}>Teknolojiye Yatırım</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px' }}>En yeni teknolojilere yatırım yapar, projelerimize entegre ederiz.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow p-8 flex flex-col items-center text-center">
              <h3 className="text-gray-900 mb-3" style={{ fontFamily: 'Sora, Arial, Helvetica, sans-serif', fontSize: '20px', fontWeight: 600 }}>Sürdürülebilirlik</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontSize: '16px' }}>Uzun vadeli ve sürdürülebilir çözümler sunarız.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 