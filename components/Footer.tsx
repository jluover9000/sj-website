import { getTranslations } from 'next-intl/server'
import { Phone, Mail, Globe, MapPin, Share2, AtSign, Link2 } from 'lucide-react'

export default async function Footer() {
  const t = await getTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-navy">
      {/* Main row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${t('phone').replace(/-/g, '')}`}
              className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              {t('phone')}
            </a>
            <a
              href={`mailto:${t('email')}`}
              className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              {t('email')}
            </a>
            <a
              href={`https://${t('website')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors text-sm"
            >
              <Globe className="w-4 h-4 text-gold flex-shrink-0" />
              {t('website')}
            </a>
            <span className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
              {t('address')}
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:border-gold hover:text-gold transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:border-gold hover:text-gold transition-colors"
            >
              <AtSign className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:border-gold hover:text-gold transition-colors"
            >
              <Link2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            &copy; {year} SJ All-Pro Construction Ltd. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            版权所有 &copy; {year} SJ All-Pro Construction Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
