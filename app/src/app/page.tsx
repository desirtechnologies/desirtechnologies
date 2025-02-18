import { HeroSection } from "@/views/components/sections/hero"
import { FeaturesSection } from "@/views/components/sections/features"
import { DocumentationSection } from "@/views/components/sections/documentation"
import { ResourcesSection } from "@/views/components/sections/resources"
import { ResearchSection } from "@/views/components/sections/research"
import { CaseStudiesSection } from "@/views/components/sections/case-studies"
import { TechRadarSection } from "@/views/components/sections/tech-radar"
import { NewsletterSection } from "@/views/components/sections/newsletter"
import { StatsSection } from "@/views/components/sections/stats"
import { TeamSection } from "@/views/components/sections/team"
import { TestimonialsSection } from "@/views/components/sections/testimonials"
import { IntegrationsSection } from "@/views/components/sections/integrations"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <DocumentationSection />
      <TechRadarSection />
      <ResourcesSection />
      <IntegrationsSection />
      <ResearchSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TeamSection />
      <NewsletterSection />
    </div>
  )
}

