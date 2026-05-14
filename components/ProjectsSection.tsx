import Image from 'next/image'

const projects = [
  { src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800', titleEn: 'Luxury Residential Home',    titleZh: '豪华住宅',    category: 'RESIDENTIAL',   categoryZh: '住宅建筑', location: 'Vancouver, BC' },
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800', titleEn: 'Commercial Office Complex', titleZh: '商业办公大楼', category: 'COMMERCIAL',    categoryZh: '商业建筑', location: 'Burnaby, BC' },
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800', titleEn: 'Full Home Renovation',      titleZh: '全屋翻新',    category: 'RENOVATIONS',   categoryZh: '翻新与改造', location: 'Richmond, BC' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800', titleEn: 'Design & Build Project',    titleZh: '设计与建造',  category: 'DESIGN & BUILD', categoryZh: '设计与建造', location: 'Surrey, BC' },
  { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800', titleEn: 'Industrial Warehouse',      titleZh: '工业仓库',    category: 'COMMERCIAL',    categoryZh: '商业建筑', location: 'Delta, BC' },
  { src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800', titleEn: 'Kitchen & Bath Remodel',    titleZh: '厨卫改造',    category: 'RENOVATIONS',   categoryZh: '翻新与改造', location: 'North Vancouver, BC' },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-1 bg-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-1 uppercase">
            Our <span className="text-gold">Projects</span>
          </h2>
          <p className="text-gold text-sm tracking-widest font-semibold uppercase">工程案例</p>
        </div>

        {/* Grid — flush, no gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 bg-gray-200 border border-gray-200">
          {projects.map(({ src, titleEn, titleZh, category, categoryZh, location }) => (
            <div key={titleEn} className="relative overflow-hidden group h-48">
              <Image
                src={src}
                alt={titleEn}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/70 transition-colors duration-500" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gold text-white text-[10px] font-bold tracking-widest px-3 py-1 uppercase">
                  {category}
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gold text-xs tracking-widest font-semibold mb-1 uppercase">{categoryZh}</p>
                <h3 className="text-white font-bold text-lg leading-tight uppercase">{titleEn}</h3>
                <p className="text-gray-300 text-sm">{titleZh}</p>
                <p className="text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  📍 {location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
