import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { CheckCircle } from 'lucide-react'

const projectPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600',
    labelEn: 'RESIDENTIAL',
    labelZh: '住宅建筑',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600',
    labelEn: 'COMMERCIAL',
    labelZh: '商业建筑',
  },
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
    labelEn: 'RENOVATIONS',
    labelZh: '翻新与改造',
  },
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600',
    labelEn: 'DESIGN & BUILD',
    labelZh: '设计与建造',
  },
]

export default async function WhyChooseUs() {
  const t = await getTranslations('why')
  const points = t.raw('points') as string[]

  return (
    <section id="why" className="flex flex-col lg:flex-row min-h-[400px]">
      {/* Left — dark navy */}
      <div className="flex-none lg:w-[38%] bg-navy px-8 sm:px-12 py-14 flex flex-col justify-center">
        <h2 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-1 uppercase">
          Why Choose{' '}
          <span className="text-gold">SJ All-Pro?</span>
        </h2>
        <p className="text-gold text-sm mb-8 tracking-widest font-semibold uppercase">{t('titleZh')}</p>

        <ul className="flex flex-col gap-5">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-white text-sm font-medium leading-snug">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right — 2x2 photo grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2">
        {projectPhotos.map(({ src, labelEn, labelZh }) => (
          <div key={labelEn} className="relative overflow-hidden group">
            <Image
              src={src}
              alt={labelEn}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-white font-bold text-xs tracking-widest uppercase">{labelEn}</div>
              <div className="text-gold text-xs mt-0.5">{labelZh}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
