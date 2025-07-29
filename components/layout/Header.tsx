'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname();

  const navigation = [
    { name: 'ANASAYFA', href: '/' },
    { name: 'HAKKIMIZDA', href: '/hakkimizda' },
    { name: 'HİZMETLER', href: '/hizmetler' },
    { name: 'PROJELER', href: '/projeler' },
  ]

  return (
    <header className="relative z-50" style={{background: 'none', marginTop: '12px'}}>
      <div
        style={{
          marginLeft: '20px',
          marginRight: '20px',
          marginBottom: '6px',
          marginTop: '10px',
          height: '36px',
          borderRadius: '13px',
          background: '#111',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '30px',
          zIndex: 100,
          width: 'calc(100% - 40px)',
          boxSizing: 'border-box',
        }}
      >
        <span style={{ color: '#bbb', fontSize: '13px', marginRight: '8px', fontFamily: 'Manrope, Arial, Helvetica, sans-serif' }}>Tel:</span>
        <span
          style={{ color: '#fff', fontSize: '13px', marginRight: '40px', fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontWeight: 500, cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#1EBBBC')}
          onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
        >
          +90 212 2129990
        </span>
        <span style={{ color: '#bbb', fontSize: '13px', marginRight: '8px', fontFamily: 'Manrope, Arial, Helvetica, sans-serif' }}>E-posta:</span>
        <span
          style={{ color: '#fff', fontSize: '13px', fontFamily: 'Manrope, Arial, Helvetica, sans-serif', fontWeight: 500, cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#1EBBBC')}
          onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
        >
          info@sitenano.com
        </span>
      </div>
      <div
        className="flex items-center justify-between"
        style={{
          width: 'calc(100% - 40px)',
          height: '102px',
          minHeight: '102px',
          maxHeight: '102px',
          borderRadius: '20px',
          border: '0.3px solid #C8C8C8 !important',
          background: 'none',
          marginTop: '0px',
          marginBottom: '15px',
          marginLeft: '20px',
          marginRight: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div className="flex flex-row items-center w-full relative h-full" style={{height: '102px', paddingLeft: '76px'}}>
          {/* Logo */}
          <Link href="/" className="flex items-center h-full" style={{ position: 'relative', zIndex: 10 }}>
            <Image
              src="/images/logos/sitenano-siyah.svg"
              alt="Sitenano Logo"
              width={179}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </Link>
          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center justify-center w-full h-full"
            style={{ position: 'absolute', top: 0, left: 0, right: 0, margin: '0 auto', height: '102px', justifyContent: 'flex-end', zIndex: 1, paddingRight: '300px' }}
          >
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={styles['header-nav-link']}
                style={{
                  fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  lineHeight: '102px',
                  letterSpacing: '-0.5px',
                  wordSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  height: '102px',
                  marginLeft: index === 0 ? '24px' : '24px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  whiteSpace: 'nowrap',
                  overflowWrap: 'break-word',
                  textSizeAdjust: '100%',
                  color: '#111',
                  position: 'relative',
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Bize Ulaşın Butonu */}
          <div className="hidden lg:flex items-center" style={{ position: 'absolute', right: '50px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
            <Link 
              href="/iletisim" 
              className="flex items-center justify-center"
              style={{
                width: '180px',
                height: '60px',
                borderRadius: '31px',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #00D4AA, #00B4D8, #0096C7) border-box',
                border: '2px solid transparent',
                textDecoration: 'none',
                fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '30.8571px',
                letterSpacing: 'normal',
                color: '#111',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.background = 'linear-gradient(45deg, rgba(0, 212, 170, 0.8), rgba(0, 180, 216, 0.8), rgba(0, 150, 199, 0.8))';
                (e.target as HTMLAnchorElement).style.color = '#111';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.background = 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #00D4AA, #00B4D8, #0096C7) border-box';
                (e.target as HTMLAnchorElement).style.color = '#111';
              }}
            >
              Bize Ulaşın
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary transition-all duration-200 uppercase"
                  style={{
                    fontFamily: 'Manrope, Arial, Helvetica, sans-serif',
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '34px',
                    letterSpacing: '-0.5px',
                    wordSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'block',
                    height: '34px',
                    marginTop: index === 0 ? '0px' : '20px',
                    textDecoration: 'none',
                    textAlign: 'left',
                    verticalAlign: 'baseline',
                    whiteSpace: 'nowrap',
                    overflowWrap: 'break-word',
                    textSizeAdjust: '100%'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 