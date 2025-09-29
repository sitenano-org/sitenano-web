"use client"

import Link from 'next/link'
import { notFound } from 'next/navigation'

// Proje verilerini burada tanımlayacağız
const projectData = {
  'lojistik-yuk-yol-optimizasyonlari': {
    title: 'Yük & Yol Optimizasyon Yazılımı',
    category: 'Lojistik',
    heroImage: '/images/lojistik-yuk-yol-optimizasyon.jpg',
    mainImage: '/images/lojistik-yuk-yol-optimizasyon.jpg',
    sections: [
      {
        title: 'Projeye Genel Bakış',
        content: 'Bu proje, kara taşımacılığı yapan firmaların operasyonel maliyetlerini azaltmak ve rota verimliliğini artırmak üzere geliştirilmiş dinamik bir yazılım çözümüdür. Gerçek zamanlı veri ile çalışan sistem, hem yük dağılımı hem de güzergâh planlaması açısından akıllı karar destek araçları sunar.',
        subsections: [
          {
            title: 'Kimler İçin Tasarlandı?',
            content: 'Lojistik, taşımacılık ve dağıtım alanında faaliyet gösteren; filosunu daha etkin kullanmak ve zaman-maliyet dengesini iyileştirmek isteyen orta ve büyük ölçekli işletmeler.'
          },
          {
            title: 'Projenin Amacı:',
            content: 'Manuel planlamadan kaynaklanan zaman kaybını ve kaynak israfını önleyerek, her araç için en uygun rota ve yük planını önermek. Bu sayede yakıt tüketimini, boş kilometre oranlarını ve gecikmeleri azaltmak.'
          }
        ]
      },
      {
        title: 'Planlamadan Uygulamaya',
        subtitle: 'Her başarılı proje, planlı ve öngörülebilir bir süreçle şekillenir.',
        hasImage: true,
        subsections: [
          {
            title: 'İhtiyaç Analizi & Veri Toplama',
            content: 'Projenin ilk adımında, müşteriyle yakın iş birliği içinde mevcut taşıma süreçleri detaylı şekilde incelendi. Araç kapasiteleri, rota verileri, teslimat süreleri ve yük türleri gibi operasyonel parametreler analiz edildi. Ayrıca sistemin entegre edileceği altyapılar (ERP, CRM vb.) belirlendi.'
          },
          {
            title: 'Modelleme & Optimizasyon Kriterlerinin Tanımlanması',
            content: 'Toplanan verilere dayanarak, sistemin çalışacağı optimizasyon kuralları ve öncelikler belirlendi. Bu aşamada boş kilometrelerin azaltılması, teslimat süresinin kısaltılması ve yakıt tüketiminin düşürülmesi gibi hedefler teknik modellerle eşleştirildi.'
          },
          {
            title: 'Altyapı Geliştirme',
            content: 'Rota planlama algoritmaları, trafik verisi entegrasyonu ve araç-yük eşleştirme modülleri geliştirildi. Proje, API tabanlı bir mimariyle tasarlanarak esnek entegrasyon imkânı sağladı. Arayüzler hem operasyon ekibi hem de şoförler için mobil uyumlu olacak şekilde kurgulandı.'
          },
          {
            title: 'Test Süreci & Senaryo Simülasyonları',
            content: 'Gerçek veri üzerinden oluşturulan senaryolarla sistemin çıktıları test edildi. Bu testlerde, sistemin hız, doğruluk ve tepki süreleri ölçüldü. Ayrıca saha testleriyle, önerilen rotaların pratikteki uygulanabilirliği kontrol edildi.'
          },
          {
            title: 'Test Süreci (Fonksiyonel + Kullanıcı Testleri)',
            content: 'Geliştirilen sistem, test senaryolarına göre hem teknik ekip hem de müşteri tarafında test edildi. Olası hatalar, kullanıcı deneyimi zorlukları ve performans sorunları bu aşamada giderildi.'
          },
          {
            title: 'Canlıya Geçiş ve Eğitim',
            content: 'Sistem, kademeli bir geçiş planıyla canlı ortama alındı. Operasyon ekibi, yöneticiler ve şoförler için kullanıcı dostu dokümantasyon ve eğitim içerikleri hazırlandı. İlk dönem boyunca sistemin davranışı sürekli izlenerek gerekli ayarlamalar yapıldı.'
          },
          {
            title: 'İzleme, Raporlama ve İyileştirme',
            content: 'Sistemin aktif kullanımı süresince performans metrikleri takip edilerek iyileştirme alanları belirlendi. Geliştirilen raporlama modülleri sayesinde yönetim birimleri, teslimat verimliliği ve maliyet kazanımlarını düzenli olarak izlenebildi.'
          }
        ]
      },
      {
        title: 'Öne Çıkan Fonksiyonlar',
        subsections: [
          {
            title: 'Yük Planlama Modülü',
            content: 'Taşıma kapasitesine göre en uygun araç-yük eşleştirmesi yapılır.',
            icon: '📦'
          },
          {
            title: 'Rota Optimizasyonu',
            content: 'Trafik, yol durumu ve teslimat zamanına göre en kısa ve en verimli güzergâh hesaplanır.',
            icon: '🗺️'
          },
          {
            title: 'Yeniden Planlama Yeteneği',
            content: 'Ani değişikliklerde (araç arızası, teslimat iptali vb.) sistem yeni rota ve dağılım önerileri üretir.',
            icon: '🔄'
          },
          {
            title: 'Gerçek Zamanlı Takip',
            content: 'Araç konumları ve planlanan rotalara bağlı performans sürekli izlenebilir.',
            icon: '📍'
          }
        ]
      },
      {
        title: 'Performans Sonuçları',
        content: 'Proje devreye alındıktan sonra elde edilen veriler, optimizasyon sisteminin taşıma operasyonlarına doğrudan ve ölçülebilir katkı sağladığını ortaya koydu.',
        results: [
          {
            metric: 'Boş kilometre oranında %18 azalma',
            description: 'Araçların daha verimli yüklenmesi ve akıllı rota planlaması sayesinde gereksiz yol kat etme oranı önemli ölçüde düştü.'
          },
          {
            metric: 'Teslimat gecikmelerinde %30 azalma',
            description: 'Gerçek zamanlı trafik verileri ve yeniden planlama algoritmaları, gecikmeleri en aza indirdi.'
          },
          {
            metric: 'Araç başına günlük ortalama yakıt tüketiminde %12 tasarruf',
            description: 'Daha kısa ve optimize rotalar sayesinde yakıt kullanımı azaldı.'
          },
          {
            metric: 'Planlama süresi %40 kısaldı',
            description: 'Önceden manuel yürütülen rota ve yük planlama işlemleri, sistem üzerinden otomatik ve daha hızlı şekilde tamamlanmaya başlandı.'
          },
          {
            metric: 'İş gücü verimliliğinde artış',
            description: 'Şoförler daha öngörülebilir rotalarla çalıştıkları için iş günü planlaması daha verimli hâle geldi.'
          },
          {
            metric: 'Operasyonel karar süreçlerinde veri temelli yaklaşım',
            description: 'Raporlama modülü sayesinde filo yönetimi artık geçmiş veriye dayalı analizlerle destekleniyor.'
          }
        ]
      }
    ]
  }
}

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params
  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white" style={{ 
      margin: '0', 
      padding: '0', 
      width: '100vw', 
      maxWidth: 'none', 
      overflowX: 'hidden',
      position: 'relative',
      left: '0',
      right: '0'
    }}>
      {/* HERO BÖLÜMÜ */}
      <section
        className="relative w-full flex items-center overflow-hidden"
        style={{ 
          minHeight: '450px', 
          height: '450px', 
          background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/images/project-detail-top-bg.jpg")`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative', 
          marginTop: '12px' 
        }}
      >
        <div className="w-full h-full flex items-center justify-center relative z-10" style={{ padding: '0 20px' }}>
          <div className="text-center" style={{ width: '1200px', margin: '0 auto' }}>
            <div style={{
              color: 'white',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              marginBottom: '20px',
              padding: '8px 20px',
              borderRadius: '20px',
              background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box',
              border: '2px solid transparent',
              display: 'inline-block',
            }}>
              {project.category}
            </div>
            <h1
              style={{
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: '64px',
                fontStyle: 'normal',
                fontWeight: 400,
                height: 'auto',
                letterSpacing: '-2.4px',
                lineHeight: '72px',
                margin: 0,
                marginBottom: '20px',
                textAlign: 'center',
                display: 'block',
                width: '100%',
                color: 'white',
              }}
            >
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ANA İÇERİK */}
      <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* DETAY BÖLÜMLERİ */}
        {project.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ marginBottom: '80px' }}>
            {/* Projeye Genel Bakış için özel layout */}
            {section.title === 'Projeye Genel Bakış' ? (
              <div style={{
                display: 'flex',
                gap: '60px',
                alignItems: 'flex-start'
              }}>
                {/* Sol taraf - Resim */}
                <div style={{
                  width: '500px',
                  height: '400px',
                  background: `url("${project.mainImage}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '20px',
                  filter: 'grayscale(100%)',
                  flexShrink: 0
                }}></div>

                {/* Sağ taraf - Yazılar */}
                <div style={{ flex: 1 }}>
                  {/* Bölüm Başlığı */}
                  <h2 style={{
                    fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    letterSpacing: '-0.5px',
                    lineHeight: '32px',
                    margin: '0 0 30px 0',
                    color: '#1a1a1a'
                  }}>
                    {section.title}
                  </h2>

                  {/* Bölüm İçeriği */}
                  {section.content && (
                    <p style={{
                      fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '30px',
                      margin: '0 0 40px 0',
                      color: '#606060'
                    }}>
                      {section.content}
                    </p>
                  )}


                </div>
              </div>
            ) : (
                              /* Diğer bölümler için normal layout */
                <>
                  {/* Bölüm Başlığı */}
                  <h2 style={{
                    fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                    fontSize: '48px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    letterSpacing: '-2px',
                    lineHeight: '56px',
                    margin: '140px 0 30px 0',
                    color: '#1a1a1a'
                  }}>
                    {section.title}
                  </h2>

                {/* Bölüm Alt Başlığı (varsa) */}
                {section.subtitle && (
                  <p style={{
                    fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '30px',
                    margin: '0 0 40px 0',
                    color: '#606060'
                  }}>
                    {section.subtitle}
                  </p>
                )}

                {/* Bölüm İçeriği (varsa) */}
                {section.content && (
                  <p style={{
                    fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '30px',
                    margin: '0 0 40px 0',
                    color: '#606060'
                  }}>
                    {section.content}
                  </p>
                )}
              </>
            )}

            {/* Ek Görsel (varsa) */}
            {section.hasImage && (
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                borderRadius: '20px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #dee2e6'
              }}>
                <span style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '14px',
                  color: '#6c757d'
                }}>
                  Süreç Görseli Placeholder
                </span>
              </div>
            )}

                        {/* Alt Bölümler */}
            {section.subsections && (
              <div style={{ marginTop: '40px' }}>
                {/* Planlamadan Uygulamaya için özel tasarım */}
                {section.title === 'Planlamadan Uygulamaya' ? (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '24px',
                    marginTop: '40px'
                  }}>
                    {section.subsections.map((subsection, subIndex) => (
                                             <div key={subIndex} style={{
                         background: subIndex % 2 === 0 ? '#f8f9fa' : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                         borderRadius: '20px',
                         padding: '32px',
                         position: 'relative',
                         transition: 'transform 0.3s ease',
                         cursor: 'default'
                       }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLDivElement).style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLDivElement).style.transform = 'translateY(0px)';
                      }}>
                        {/* Step Number */}
                        <div style={{
                          position: 'absolute',
                          top: '-12px',
                          left: '32px',
                          width: '32px',
                          height: '32px',
                          background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 100%)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'white'
                        }}>
                          {subIndex + 1}
                        </div>

                        

                        <div style={{ marginTop: '20px' }}>
                          <h3 style={{
                            fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                            fontSize: '20px',
                            fontWeight: '500',
                            lineHeight: '28px',
                            margin: '0 0 16px 0',
                            color: '#1a1a1a'
                          }}>
                            {subsection.title}
                          </h3>
                          <p style={{
                            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                            fontSize: '14px',
                            lineHeight: '24px',
                            margin: '0',
                            color: '#606060'
                          }}>
                            {subsection.content}
                          </p>
                        </div>

                        {/* Dekoratif element */}
                        <div style={{
                          position: 'absolute',
                          bottom: '16px',
                          right: '16px',
                          width: '6px',
                          height: '6px',
                          background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 100%)',
                          borderRadius: '50%',
                          opacity: '0.7'
                        }}></div>
                      </div>
                    ))}
                  </div>
                ) : 
                /* Öne Çıkan Fonksiyonlar için özel tasarım */
                section.title === 'Öne Çıkan Fonksiyonlar' ? (
                   <div style={{
                     display: 'grid',
                     gridTemplateColumns: '1fr 1fr',
                     gridTemplateRows: 'auto auto',
                     gap: '20px'
                   }}>
                     {section.subsections.map((subsection, subIndex) => {
                       const cardStyles = [
                         // Kart 1 - Sol üst
                         {
                           background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 100%)',
                           color: 'white',
                           gridColumn: '1',
                           gridRow: '1'
                         },
                         // Kart 2 - Sağ üst
                         {
                           background: '#f8f9fa',
                           color: '#1a1a1a',
                           border: '2px solid #e9ecef',
                           gridColumn: '2',
                           gridRow: '1'
                         },
                         // Kart 3 - Sol alt
                         {
                           background: 'linear-gradient(135deg, #00D4AA 0%, #1EBBBC 100%)',
                           color: 'white',
                           gridColumn: '1',
                           gridRow: '2'
                         },
                         // Kart 4 - Sağ alt
                         {
                           background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%)',
                           color: 'white',
                           gridColumn: '2',
                           gridRow: '2'
                         }
                       ];

                       const style = cardStyles[subIndex];
                       
                       return (
                         <div key={subIndex} style={{
                           ...style,
                           borderRadius: '24px',
                           padding: '32px',
                           display: 'flex',
                           flexDirection: 'column',
                           justifyContent: 'center',
                           position: 'relative',
                           overflow: 'hidden',
                           minHeight: '220px'
                         }}>
                           <div>
                             <div style={{
                               width: '60px',
                               height: '4px',
                               background: subIndex === 1 ? '#00BCD4' : 'rgba(255,255,255,0.4)',
                               borderRadius: '2px',
                               marginBottom: '24px'
                             }}></div>
                             <h3 style={{
                               fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                               fontSize: '26px',
                               fontWeight: '500',
                               lineHeight: '34px',
                               margin: '0 0 16px 0',
                               color: style?.color || '#1a1a1a'
                             }}>
                               {subsection.title}
                             </h3>
                             <p style={{
                               fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                               fontSize: '15px',
                               lineHeight: '24px',
                               margin: '0',
                               color: subIndex === 1 ? '#606060' : 'rgba(255,255,255,0.9)'
                             }}>
                               {subsection.content}
                             </p>
                           </div>

                           {/* Dekoratif elementler */}
                           <div style={{
                             position: 'absolute',
                             top: '-20px',
                             right: '-20px',
                             width: '80px',
                             height: '80px',
                             background: subIndex === 1 ? 'rgba(30, 187, 188, 0.1)' : 'rgba(255,255,255,0.15)',
                             borderRadius: '50%'
                           }}></div>
                           <div style={{
                             position: 'absolute',
                             bottom: '20px',
                             right: '20px',
                             width: '8px',
                             height: '8px',
                             background: subIndex === 1 ? 'rgba(30, 187, 188, 0.3)' : 'rgba(255,255,255,0.5)',
                             borderRadius: '50%'
                           }}></div>
                         </div>
                       );
                     })}
                   </div>
                ) : (
                  /* Diğer bölümler için normal tasarım */
                  section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} style={{ marginBottom: '40px' }}>
                                             <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                         {/* İkon (varsa) */}
                         {'icon' in subsection && subsection.icon && (
                           <div style={{
                             fontSize: '24px',
                             marginTop: '5px',
                             flexShrink: 0
                           }}>
                             {subsection.icon}
                           </div>
                         )}
                        <div style={{ flex: 1 }}>
                          <h3 style={{
                            fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            letterSpacing: '-0.5px',
                            lineHeight: '32px',
                            margin: '0 0 15px 0',
                            color: '#1a1a1a'
                          }}>
                            {subsection.title}
                          </h3>
                          <p style={{
                            fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '28px',
                            margin: '0',
                            color: '#606060'
                          }}>
                            {subsection.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Performans Sonuçları */}
            {section.results && (
              <div style={{ marginTop: '40px' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '30px'
                }}>
                  {section.results.map((result, resultIndex) => (
                    <div key={resultIndex} style={{
                      padding: '30px',
                      background: '#f8f9fa',
                      borderRadius: '20px',
                      border: '1px solid #e9ecef'
                    }}>
                      <h4 style={{
                        fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                        fontSize: '20px',
                        fontWeight: '600',
                        margin: '0 0 15px 0',
                        color: '#1a1a1a'
                      }}>
                        {result.metric}
                      </h4>
                      <p style={{
                        fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                        fontSize: '14px',
                        lineHeight: '24px',
                        margin: '0',
                        color: '#606060'
                      }}>
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* GERİ DÖN BUTONU */}
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <Link href="/projeler">
            <button style={{
              border: '2px solid transparent',
              borderRadius: '15px',
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box',
              color: '#1a1a1a',
              fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
              fontSize: '14px',
              fontWeight: '500',
              height: '55px',
              padding: '0 32px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              margin: '0 auto'
            }}>
              ← Tüm Projelere Dön
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
} 