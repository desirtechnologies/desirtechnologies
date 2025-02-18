import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { DocumentationSection } from "@/components/sections/documentation"
import { ResourcesSection } from "@/components/sections/resources"
import { ResearchSection } from "@/components/sections/research"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { TechRadarSection } from "@/components/sections/tech-radar"
import { NewsletterSection } from "@/components/sections/newsletter"
import { StatsSection } from "@/components/sections/stats"
import { TeamSection } from "@/components/sections/team"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { IntegrationsSection } from "@/components/sections/integrations"

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

