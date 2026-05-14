import { Building2, Building, Wrench, ClipboardList, Hammer } from 'lucide-react'

const services = [
  {
    icon: Building2,
    titleEn: 'Residential Construction',
    titleZh: '住宅建筑',
    desc: 'Custom homes, additions & renovations.',
  },
  {
    icon: Building,
    titleEn: 'Commercial Construction',
    titleZh: '商业建筑',
    desc: 'Office, retail, industrial & more.',
  },
  {
    icon: Wrench,
    titleEn: 'Design & Build',
    titleZh: '设计与建造',
    desc: 'From concept to completion.',
  },
  {
    icon: ClipboardList,
    titleEn: 'Project Management',
    titleZh: '项目管理',
    desc: 'On time, on budget, with quality.',
  },
  {
    icon: Hammer,
    titleEn: 'Renovations & Repairs',
    titleZh: '翻新与维修',
    desc: 'Upgrade, restore & improve.',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-200">
          {services.map(({ icon: Icon, titleEn, titleZh, desc }) => (
            <div
              key={titleEn}
              className="bg-white flex flex-col items-center text-center px-4 py-8 hover:bg-navy group transition-colors duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4 border-2 border-navy/20 group-hover:border-gold rounded-sm transition-colors duration-300">
                <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-navy text-sm leading-tight mb-1 group-hover:text-white transition-colors duration-300 uppercase tracking-wide">
                {titleEn}
              </h3>
              <p className="text-gold text-xs font-medium mb-3 tracking-wide">
                {titleZh}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
