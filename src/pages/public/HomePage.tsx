/**
 * HomePage
 * Main landing page with all sections
 */

import { PageWrapper } from '@/components/layout/PageWrapper'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'
import { NewsSection } from '@/components/sections/NewsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { MembersSection } from '@/components/sections/MembersSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <NewsSection />
      <GallerySection />
      <MembersSection />
      <PartnersSection />
      <ContactSection />
    </PageWrapper>
  )
}
