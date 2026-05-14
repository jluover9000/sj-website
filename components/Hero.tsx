import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, ShieldCheck, Handshake, Award } from 'lucide-react'

const cards = [
  { icon: ShieldCheck, label: 'QUALITY',    labelZh: '建造品质' },
  { icon: Handshake,   label: 'TRUST',      labelZh: '建立信任' },
  { icon: Award,       label: 'EXCELLENCE', labelZh: '追求卓越' },
]

export default async function Hero() {
  const t = await getTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600"
          alt="Construction site"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* Left: Headline + CTA */}
          <div className="flex-1 max-w-2xl">
            <div className="w-16 h-1 bg-gold mb-6" />

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 whitespace-nowrap">
              <span className="text-white">BUILDING </span>
              <span className="text-gold">QUALITY.</span>
              <br />
              <span className="text-white">BUILDING </span>
              <span className="text-gold">TRUST.</span>
              <br />
              <span className="text-white">BUILDING </span>
              <span className="text-gold">EXCELLENCE.</span>
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-md">
              {t('sub')}
            </p>

            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-gold text-white font-bold px-8 py-4 text-sm tracking-widest hover:bg-yellow-600 transition-colors duration-200"
            >
              {t('cta')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Value cards */}
          <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-auto">
            {cards.map(({ icon: Icon, label, labelZh }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 bg-navy/70 backdrop-blur-sm border border-gold/30 px-2 sm:px-4 py-3 flex-1 lg:flex-none lg:min-w-[160px]"
              >
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm tracking-wider">{label}</div>
                  <div className="text-gold text-xs">{labelZh}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
