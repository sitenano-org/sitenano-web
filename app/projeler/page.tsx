"use client"

import Link from 'next/link'

export default function ProjelerPage() {
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
          minHeight: '800px', 
          height: '800px', 
          background: 'white', 
          position: 'relative', 
          marginTop: '12px' 
        }}
      >
        <div className="w-full h-full flex items-center justify-center relative z-10" style={{ padding: '0 20px' }}>
          <div className="text-center" style={{ width: '1200px', margin: '0 auto' }}>
            <h1
              style={{
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: '80px',
                fontStyle: 'normal',
                fontWeight: 400,
                height: '270px',
                letterSpacing: '-2.4px',
                lineHeight: '90px',
                margin: 0,
                marginTop: '40px',
                marginBottom: '40px',
                textAlign: 'center',
                display: 'block',
                width: '100%',
                background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Bridging top talent with<br />
              innovative opportunities at the Sitenano
            </h1>
            <p
              className="text-gray-600"
              style={{
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                letterSpacing: 'normal',
                lineHeight: '30px',
                maxWidth: '720px',
                width: '720px',
                margin: 0,
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '220px',
              }}
            >
              Our startup development services are designed to accelerate your journey from concept to launch, providing you with the technical expertise and strategic guidance needed to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* MULTI-PANEL SECTION */}
      <section style={{ 
        background: 'white', 
        padding: '0px 0 0px 0',
        marginTop: '0px',
        minHeight: 'auto'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '360px 360px 360px 360px 360px', 
          gridTemplateRows: 'auto auto auto auto auto auto auto',
          columnGap: '15px',
          rowGap: '15px',
          margin: '0 20px 0px 20px',
          justifyContent: 'center'
        }}>
          
          {/* 1. Panel - Achievements */}
          <div style={{
            background: 'linear-gradient(135deg, #E1BEE7 0%, #BBDEFB 100%)',
            borderRadius: '20px',
            padding: '30px',
            height: '570px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            position: 'relative',
            overflow: 'hidden',
            gridColumn: '1',
            gridRow: '1'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '80px',
              height: '80px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              transform: 'translate(20px, -20px)'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '50%',
              transform: 'translate(-15px, 15px)'
            }}></div>
            <h3 style={{
              color: 'white',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '24px',
              fontWeight: '400',
              margin: 0,
              paddingLeft: '10px',
              paddingBottom: '40px',
              zIndex: 10,
              position: 'relative'
            }}>
              Achievements of our startup
            </h3>
          </div>

          {/* 2. Panel - Stats */}
          <div style={{
            background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 100%)',
            borderRadius: '20px',
            padding: '30px',
            height: '275px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            color: 'white',
            gridColumn: '2',
            gridRow: '1',
            marginTop: '295px'
          }}>
            <div style={{
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '5px',
              paddingLeft: '10px',
              paddingTop: '30px'
            }}>
              150K
            </div>
            <div style={{
              fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              textAlign: 'left',
              paddingLeft: '10px',
              paddingBottom: '130px'
            }}>
              Active users every day
            </div>
          </div>

          {/* 3. Panel - Sitenano */}
          <div style={{
            background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 100%)',
            borderRadius: '20px',
            padding: '20px 0px 20px 20px',
            height: '498px',
            position: 'relative',
            overflow: 'hidden',
            gridColumn: '2',
            gridRow: '1',
            marginTop: '-218px'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-35px',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '72px',
              fontWeight: '800',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              letterSpacing: '5px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F8F0 40%, #00D4AA 80%, #1EBBBC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: '0.8'
            }}>
              SITENANO
            </div>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%'
            }}></div>
          </div>

          {/* 4. Panel - Abstract Cell (yazısız) */}
          <div style={{
            background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            borderRadius: '20px',
            padding: '20px',
            height: '275px',
            position: 'relative',
            overflow: 'hidden',
            gridColumn: '3',
            gridRow: '1',
            marginTop: '-95px'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '50%'
            }}></div>
          </div>

          {/* 5. Panel - Professional Team */}
          <div style={{
            background: 'linear-gradient(135deg, #00BCD4 0%, #009688 100%)',
            borderRadius: '20px',
            padding: '20px',
            height: '375px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gridColumn: '3',
            gridRow: '1',
            marginTop: '195px'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '100px',
              height: '2px',
              background: 'rgba(255,255,255,0.3)'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '20px',
              width: '80px',
              height: '2px',
              background: 'rgba(255,255,255,0.2)'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '60px',
              left: '20px',
              width: '60px',
              height: '2px',
              background: 'rgba(255,255,255,0.1)'
            }}></div>
            <h3 style={{
              color: 'white',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: '400',
              height: '70px',
              letterSpacing: '-0.75px',
              lineHeight: '35px',
              margin: 0,
              marginBottom: '50px',
              paddingLeft: '10px',
              zIndex: 10,
              position: 'relative'
            }}>
              Professional team<br />
              & tech
            </h3>
          </div>

          {/* 6. Panel - Programming */}
          <div style={{
            background: 'linear-gradient(135deg, #00BCD4 0%, #009688 100%)',
            borderRadius: '20px',
            padding: '30px',
            height: '742px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            gridColumn: '4',
            gridRow: '1',
            marginTop: '-172px'
          }}>
            <h3 style={{
              color: 'white',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '24px',
              fontWeight: '400',
              margin: 0,
              paddingLeft: '10px',
              paddingTop: '50px',
              zIndex: 10,
              position: 'relative'
            }}>
              Programming & development
            </h3>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '120px',
              height: '80px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              padding: '10px'
            }}>
              {[...Array(4)].map((_, i) => (
                <div key={i} style={{
                  width: '100%',
                  height: '2px',
                  background: 'rgba(255,255,255,0.3)',
                  borderRadius: '1px'
                }}></div>
              ))}
            </div>
          </div>

          {/* 7. Panel - AI Solutions */}
          <div style={{
            background: 'linear-gradient(135deg, #1EBBBC 0%, #00D4AA 100%)',
            borderRadius: '20px',
            padding: '30px',
            height: '564px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
            gridColumn: '5',
            gridRow: '1 / 3'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '40px',
              height: '40px',
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '50%'
            }}></div>
            <h3 style={{
              color: 'white',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '24px',
              fontWeight: '400',
              margin: 0,
              paddingLeft: '10px',
              paddingTop: '50px',
              textAlign: 'left',
              zIndex: 10,
              position: 'relative'
            }}>
              AI Solutions & Innovation
            </h3>
          </div>
        </div>
      </section>

      {/* YENİ PROJELER BÖLÜMÜ */}
      <section style={{
        background: '#1a1a1a',
        height: '2400px',
        padding: '150px 20px 120px 20px',
        position: 'relative',
        borderRadius: '20px',
        margin: '0px 20px 120px 20px'
      }}>
        <div style={{
          marginLeft: '0px',
          marginRight: '0px',
          paddingBottom: '120px' // alt padding artırıldı
        }}>
          {/* Başlık Bölümü */}
          <div style={{
            marginBottom: '120px'
          }}>
            <div style={{
              color: '#909090',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '16px',
              fontWeight: '400',
              marginBottom: '20px',
              paddingLeft: '260px'
            }}>
              (Ürünlerimiz)
            </div>
            <h2 style={{
              color: 'white',
              fontFamily: 'Sora, Arial, Helvetica, sans-serif',
              fontSize: '60px',
              fontStyle: 'normal',
              fontWeight: '400',
              height: 'auto',
              letterSpacing: '-3px',
              lineHeight: '69.9996px',
              margin: 0,
              width: '1288px',
              paddingLeft: '260px',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              we kindly invite you to review the outcomes of our dedicated efforts and see the results of our hard work in delivering top-tier solutions
          </h2>
          </div>

          {/* Proje Kartları */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            position: 'relative',
            height: '2000px' // Yeterli yükseklik
          }}>
            {/* Proje 1 */}
            <div style={{
              width: '1785px',
              height: '418px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              position: 'relative',
              overflow: 'hidden',
              padding: '76px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{
                  color: '#606060',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  marginBottom: '20px',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box',
                  border: '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLDivElement).style.background = 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)';
                  (e.target as HTMLDivElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLDivElement).style.background = 'linear-gradient(transparent, transparent) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box';
                  (e.target as HTMLDivElement).style.color = '#606060';
                }}>
                  Development
                </div>
                <div style={{
                  color: 'white',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: 'auto',
                  letterSpacing: '1.2px',
                  lineHeight: '45px',
                  maxWidth: '800px'
                }}>
                  DeepVision: Enhancing Image Recognition with Neural Networks
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                color: 'white',
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                cursor: 'pointer',
                position: 'relative'
              }}>
                <div style={{ marginBottom: '8px' }}>
                  Explore more <span style={{ fontSize: '20px', marginLeft: '5px' }}>↗</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'white',
                  marginTop: '4px'
                }}></div>
              </div>
            </div>

            {/* Proje 2 */}
            <div style={{
              width: '1785px',
              height: '418px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              position: 'relative',
              overflow: 'hidden',
              padding: '76px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{
                  color: '#606060',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  marginBottom: '20px',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box',
                  border: '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLDivElement).style.background = 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)';
                  (e.target as HTMLDivElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLDivElement).style.background = 'linear-gradient(transparent, transparent) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box';
                  (e.target as HTMLDivElement).style.color = '#606060';
                }}>
                  Integration
                </div>
                <div style={{
                  color: 'white',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: 'auto',
                  letterSpacing: '1.2px',
                  lineHeight: '45px',
                  maxWidth: '800px'
                }}>
                  NLPGenius: Natural Language Processing Powered by Neural Networks
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                color: 'white',
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                cursor: 'pointer',
                position: 'relative'
              }}>
                <div style={{ marginBottom: '8px' }}>
                  Explore more <span style={{ fontSize: '20px', marginLeft: '5px' }}>↗</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'white',
                  marginTop: '4px'
                }}></div>
              </div>
            </div>

            {/* Proje 3 */}
            <div style={{
              width: '1785px',
              height: '418px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              position: 'relative',
              overflow: 'hidden',
              padding: '76px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{
                  color: '#606060',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  marginBottom: '20px',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box',
                  border: '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLDivElement).style.background = 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)';
                  (e.target as HTMLDivElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLDivElement).style.background = 'linear-gradient(transparent, transparent) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box';
                  (e.target as HTMLDivElement).style.color = '#606060';
                }}>
                  Development
                </div>
                <div style={{
                  color: 'white',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: 'auto',
                  letterSpacing: '1.2px',
                  lineHeight: '45px',
                  maxWidth: '800px'
                }}>
                  SmartAnalytics: Advanced Data Analytics Platform
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                color: 'white',
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                cursor: 'pointer',
                position: 'relative'
              }}>
                <div style={{ marginBottom: '8px' }}>
                  Explore more <span style={{ fontSize: '20px', marginLeft: '5px' }}>↗</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'white',
                  marginTop: '4px'
                }}></div>
              </div>
            </div>

            {/* Proje 4 */}
            <div style={{
              width: '1785px',
              height: '418px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              position: 'relative',
              overflow: 'hidden',
              padding: '76px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{
                  color: '#606060',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  marginBottom: '20px',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box',
                  border: '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLDivElement).style.background = 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)';
                  (e.target as HTMLDivElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLDivElement).style.background = 'linear-gradient(transparent, transparent) padding-box, linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%) border-box';
                  (e.target as HTMLDivElement).style.color = '#606060';
                }}>
                  Integration
                </div>
                <div style={{
                  color: 'white',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: 'auto',
                  letterSpacing: '1.2px',
                  lineHeight: '45px',
                  maxWidth: '800px'
                }}>
                  CloudConnect: Seamless Cloud Integration Solutions
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                color: 'white',
                fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                cursor: 'pointer',
                position: 'relative'
              }}>
                <div style={{ marginBottom: '8px' }}>
                  Explore more <span style={{ fontSize: '20px', marginLeft: '5px' }}>↗</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'white',
                  marginTop: '4px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YENİ BÖLÜM - 200+ BAŞLIKLI PROJE KARTLARI */}
      <section style={{
        background: '#F0F2F4',
        height: '5255px', // 5225px + 30px (ekstra alan)
        padding: '0px 20px 30px 20px',
        position: 'relative',
        borderRadius: '20px',
        margin: '0px 20px 80px 20px'
      }}>
        <div style={{
          marginLeft: '0px',
          marginRight: '0px'
        }}>
          {/* Başlık Bölümü */}
          <div style={{
            marginBottom: '72px',
            paddingLeft: '190px',
            paddingTop: '96px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '270px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  color: '#1a1a1a',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  marginBottom: '10px'
                }}>
                  Completed Projects
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #1EBBBC 0%, #00BCD4 50%, #00D4AA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '150px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  letterSpacing: '-7.5px',
                  lineHeight: '150px',
                  height: '150px',
                  margin: 0,
                  display: 'block',
                  textAlign: 'start',
                  textTransform: 'none',
                  wordSpacing: '0px',
                  width: 'auto'
                }}>
                  200+
                </div>
              </div>
              <div style={{
                flex: 1,
                paddingTop: '0px'
              }}>
                <div style={{
                  color: '#909090',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  marginBottom: '20px'
                }}>
                  (Projelerimiz)
                </div>
                <h2 style={{
                  color: '#1a1a1a',
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '48px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  letterSpacing: '-2px',
                  lineHeight: '56px',
                  margin: 0,
                  maxWidth: '600px'
                }}>
                  The distinctive benefits and competitive advantages that set our service apart
                </h2>
              </div>
            </div>
          </div>

          {/* Proje Kartları */}
          <div style={{
            paddingLeft: '190px',
            marginTop: '120px'
          }}>
            {/* Görseller Yan Yana */}
            <div style={{
              position: 'relative',
              marginBottom: '60px'
            }}>
              {/* Kart 1 */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* 1. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Kart 2 - 1. görselin yanında */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '20px',
                position: 'absolute',
                left: '835px', // 650px (1. görsel genişliği) + 185px (boşluk)
                top: '102px', // 1. görselin başladığı yerden 102px aşağı
                overflow: 'hidden'
              }}>
                {/* 2. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              {/* 1. Görsel Altındaki Metinler */}
              <div style={{
                marginTop: '60px',
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  Aigency | Building and renovation website develoment
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.
                </p>
              </div>

              {/* 2. Görsel Altındaki Metinler */}
              <div style={{
                position: 'absolute',
                left: '835px',
                top: '762px', // 102px (görsel başlangıcı) + 600px (görsel yüksekliği) + 60px (boşluk)
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  Aigency | Building and renovation website develoment
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.
                </p>
              </div>

              {/* 3. Görsel - Sol */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '20px',
                position: 'absolute',
                left: '0px',
                top: '1100px', // 762px (2. görsel metinleri) + 70px (başlık) + 90px (metin) + 180px (margin)
                overflow: 'hidden'
              }}>
                {/* 3. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 3. Görsel Altındaki Metinler - Sol */}
              <div style={{
                position: 'absolute',
                left: '0px',
                top: '1760px', // 1100px + 600px + 60px
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  SmartAnalytics | Advanced Data Analytics Platform
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  Advanced analytics platform providing real-time insights and predictive modeling capabilities.
                </p>
              </div>

              {/* 3. Görsel - Sağ */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                borderRadius: '20px',
                position: 'absolute',
                left: '835px',
                top: '1202px', // 1100px + 102px (sağdaki resim soldakinden 102px aşağıda)
                overflow: 'hidden'
              }}>
                {/* 8. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 3. Görsel Altındaki Metinler - Sağ */}
              <div style={{
                position: 'absolute',
                left: '835px',
                top: '1862px', // 1202px + 600px + 60px
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  CloudConnect | Seamless Cloud Integration Solutions
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  Comprehensive cloud integration platform for seamless data synchronization and management.
                </p>
              </div>

              {/* 4. Görsel - Sol */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                position: 'absolute',
                left: '0px',
                top: '2000px', // 1862px (3. görsel sağ metinleri) + 140px (margin)
                overflow: 'hidden'
              }}>
                {/* 4. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 4. Görsel Altındaki Metinler - Sol */}
              <div style={{
                position: 'absolute',
                left: '0px',
                top: '2660px', // 2000px + 600px + 60px
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  DeepVision | AI-Powered Image Recognition System
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  Advanced computer vision system with neural network-based image processing capabilities.
                </p>
              </div>

              {/* 4. Görsel - Sağ */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '20px',
                position: 'absolute',
                left: '835px',
                top: '2102px', // 2000px + 102px
                overflow: 'hidden'
              }}>
                {/* 5. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 4. Görsel Altındaki Metinler - Sağ */}
              <div style={{
                position: 'absolute',
                left: '835px',
                top: '2762px', // 2102px + 600px + 60px
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  NLPGenius | Natural Language Processing Platform
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  Intelligent language processing system with advanced text analysis and generation features.
                </p>
              </div>

              {/* 5. Görsel - Sol */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                borderRadius: '20px',
                position: 'absolute',
                left: '0px',
                top: '2900px', // 2762px (4. görsel sağ metinleri) + 140px (margin)
                overflow: 'hidden'
              }}>
                {/* 9. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 5. Görsel Altındaki Metinler - Sol */}
              <div style={{
                position: 'absolute',
                left: '0px',
                top: '3560px', // 2900px + 600px + 60px
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  SecureNet | Cybersecurity & Threat Detection
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  Comprehensive security platform with real-time threat detection and response capabilities.
                </p>
              </div>

              {/* 5. Görsel - Sağ */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '20px',
                position: 'absolute',
                left: '835px',
                top: '3002px', // 2900px + 102px
                overflow: 'hidden'
              }}>
                {/* 10. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 5. Görsel Altındaki Metinler - Sağ */}
              <div style={{
                position: 'absolute',
                left: '835px',
                top: '3662px', // 3002px + 600px + 60px
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  DataFlow | Real-time Data Processing Engine
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  High-performance data processing engine for real-time analytics and insights.
                </p>
              </div>

              {/* 6. Görsel - Sol */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '20px',
                position: 'absolute',
                left: '0px',
                top: '3800px', // 3662px (5. görsel sağ metinleri) + 140px (margin)
                overflow: 'hidden'
              }}>
                {/* 6. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 6. Görsel Altındaki Metinler - Sol */}
              <div style={{
                position: 'absolute',
                left: '0px',
                top: '4460px', // 3800px + 600px + 60px
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  MobileFirst | Cross-Platform App Development
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  Comprehensive mobile development platform for iOS and Android applications.
                </p>
              </div>

              {/* 6. Görsel - Sağ */}
              <div style={{
                width: '650px',
                height: '600px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                position: 'absolute',
                left: '835px',
                top: '3902px', // 3800px + 102px
                overflow: 'hidden'
              }}>
                {/* 7. Ok İkonu */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* 6. Görsel Altındaki Metinler - Sağ */}
              <div style={{
                position: 'absolute',
                left: '835px',
                top: '4562px', // 3902px + 600px + 60px
                width: '402px'
              }}>
                <h3 style={{
                  fontFamily: 'Sora, Arial, Helvetica, sans-serif',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  height: '70px',
                  letterSpacing: '-0.75px',
                  lineHeight: '35px',
                  margin: '0 0 20px 0',
                  color: '#1a1a1a'
                }}>
                  WebFlow | Modern Web Development Framework
                </h3>
                <p style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  height: '90px',
                  letterSpacing: 'normal',
                  lineHeight: '30px',
                  margin: '0',
                  color: '#606060'
                }}>
                  Advanced web development framework with modern UI/UX design capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  )
} 