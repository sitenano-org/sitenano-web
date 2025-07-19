'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Yapay Zeka', href: '/yapay-zeka' },
    { name: 'Web Tasarım', href: '/web-tasarim' },
    { name: 'Online Sipariş Sistemi', href: '/online-siparis-sistemi' },
    { name: 'E-Ticaret', href: '/e-ticaret' },
    { name: 'Hizmetler', href: '/hizmetler' },
    { name: 'Projeler', href: '/projeler' },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="w-full px-8 lg:px-16">
        <div className="flex justify-between items-center py-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/sitenano-logo-beyaz.svg"
              alt="Sitenano Logo"
              width={179}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center ml-auto">
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
                  marginLeft: index === 0 ? '0px' : '32px',
                  textDecoration: 'none',
                  textAlign: 'left',
                  verticalAlign: 'baseline',
                  whiteSpace: 'nowrap',
                  overflowWrap: 'break-word',
                  textSizeAdjust: '100%'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

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