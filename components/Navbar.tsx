'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Phone, Menu, X, Home } from 'lucide-react'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const [mobileOpen, setMobileOpen] = useState(false)

  const otherLocale = locale === 'en' ? 'zh' : 'en'
  const localeLinkLabel = locale === 'en' ? '中文' : 'EN'

  const navLinks = [
    { key: 'home', href: `/${locale}` },
    { key: 'about', href: `/${locale}#about` },
    { key: 'services', href: `/${locale}#services` },
    { key: 'projects', href: `/${locale}#projects` },
    { key: 'whyUs', href: `/${locale}#why` },
  ] as const

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center justify-center w-10 h-10 bg-navy rounded-sm relative">
              <Home className="w-5 h-5 text-gold absolute" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-black text-navy text-base tracking-wider">
                SJ <span className="text-gold">ALL-PRO</span>
              </span>
              <span className="text-navy text-[10px] tracking-widest font-semibold uppercase">
                Construction Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="text-navy text-sm font-semibold tracking-wide hover:text-gold transition-colors duration-200 border-b-2 border-transparent hover:border-gold pb-0.5"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right side: get a quote + phone + lang switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`/${locale}#quote`}
              className="bg-gold text-white text-sm font-bold px-4 py-2 tracking-widest hover:bg-yellow-600 transition-colors duration-200"
            >
              GET A QUOTE
            </Link>
            <a
              href="tel:1234567890"
              className="flex items-center gap-2 border border-gold text-navy px-4 py-2 rounded text-sm font-semibold hover:bg-gold hover:text-white transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-gold" />
              123-456-7890
            </a>
            <Link
              href={`/${otherLocale}`}
              className="text-navy text-sm font-semibold hover:text-gold transition-colors"
            >
              {localeLinkLabel}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-navy text-sm font-semibold tracking-wide py-3 border-b border-gray-100 hover:text-gold transition-colors"
              >
                {t(key)}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4">
              <a
                href="tel:1234567890"
                className="flex items-center gap-2 border border-gold text-navy px-4 py-2 rounded text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-gold" />
                123-456-7890
              </a>
              <Link
                href={`/${otherLocale}`}
                className="text-navy text-sm font-semibold hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {localeLinkLabel}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
