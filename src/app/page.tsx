import HeroBanner from '@/components/home/HeroBanner'
import SolutionCards from '@/components/home/SolutionCards'
import PartnersSection from '@/components/home/PartnersSection'
import NewsSection from '@/components/home/NewsSection'

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <SolutionCards />
      <PartnersSection />
      <NewsSection />
    </>
  )
}
