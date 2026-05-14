import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServicesGrid from '@/components/ServicesGrid'
import ProjectsSection from '@/components/ProjectsSection'
import CtaBanner from '@/components/CtaBanner'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <ProjectsSection />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
