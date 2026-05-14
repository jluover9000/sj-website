import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const highlights = [
  { en: 'Over 15 years of construction experience', zh: '超过15年建筑经验' },
  { en: 'Licensed & fully insured in British Columbia', zh: '持牌并全额投保' },
  { en: 'Residential, commercial & renovation experts', zh: '住宅、商业及翻新专家' },
  { en: 'Trusted by hundreds of satisfied clients', zh: '数百名满意客户的信任' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — image */}
          <div className="flex-1 w-full">
            <div className="relative h-[360px] lg:h-[460px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900"
                alt="SJ All-Pro team at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gold z-[-1]" />
              <div className="absolute -top-4 -right-4 w-14 h-14 border-4 border-navy z-[-1]" />
            </div>
          </div>

          {/* Right — content */}
          <div className="flex-1">
            <div className="w-12 h-1 bg-gold mb-5" />
            <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight mb-1 uppercase">
              About <span className="text-gold">SJ All-Pro</span>
            </h2>
            <p className="text-gold text-sm tracking-widest mb-6 font-semibold uppercase">关于我们</p>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              SJ All-Pro Construction Ltd. is a Vancouver-based general contractor delivering
              exceptional residential and commercial construction services. We combine craftsmanship,
              reliability, and transparent communication on every project.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              我们是一家总承包商，专注于为客户提供卓越的建筑服务，以诚信、精准和专业为核心价值。
            </p>

            <ul className="flex flex-col gap-4">
              {highlights.map((item) => (
                <li key={item.en} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-navy font-semibold text-sm">{item.en}</span>
                    <span className="text-gray-400 text-xs ml-2">{item.zh}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
