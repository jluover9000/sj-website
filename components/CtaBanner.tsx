import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function CtaBanner() {
  const t = await getTranslations('cta')

  return (
    <section className="bg-gray-100 flex flex-col lg:flex-row min-h-[240px]">
      {/* Left side — light background with subtle texture feel */}
      <div className="flex-1 hidden lg:block" />

      {/* Right side — dark navy panel */}
      <div className="flex-none lg:w-[42%] bg-navy px-8 sm:px-12 py-12 flex flex-col justify-center">
        <h2 className="text-white font-black text-3xl sm:text-4xl leading-tight mb-2">
          {t('headline1')}
          <br />
          {t('headline2')}
          <br />
          {t('headline3')}
        </h2>
        <p className="text-gold text-sm mt-2 mb-8 tracking-wide">
          {t('sub')}
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 border-2 border-gold text-gold font-bold px-6 py-3 text-sm tracking-widest hover:bg-gold hover:text-white transition-colors duration-200 self-start"
        >
          {t('button')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
