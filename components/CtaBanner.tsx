import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function CtaBanner() {
  const t = await getTranslations('cta')

  return (
    <section id="quote" className="flex flex-col lg:flex-row min-h-[320px]">
      {/* Left side — construction photo */}
      <div className="relative flex-1 min-h-[200px] lg:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200"
          alt="Construction site"
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover"
        />
        {/* dark overlay so it blends toward the navy panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 to-navy/60" />
      </div>

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
          className="inline-flex items-center gap-2 bg-gold text-white font-bold px-6 py-3 text-sm tracking-widest hover:bg-yellow-600 transition-colors duration-200 self-start uppercase"
        >
          {t('button')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
