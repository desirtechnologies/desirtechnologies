"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import TopNav from "@/components/TopNav"
import BottomNav from "@/components/BottomNav"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import ServiceCategoriesGrid from "@/components/ServiceCategoriesGrid"
import TerminalSection from "@/components/TerminalSection"
import MatrixParticles from "@/components/MatrixParticles"
import PricingSection from "@/components/PricingSection"
import ResourcesSection from "@/components/ResourcesSection"
import ITTriageSection from "@/components/ITTriageSection"

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false)

  // Terminal commands for the tech stack section
  const terminalCommands = [
    "$ cd /services",
    "$ ls -la",
    "total 9",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 web-development",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 mobile-apps",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ui-design",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 cloud-services",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ai-solutions",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 security-consulting",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 it-triage",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 devops",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 data-analytics",
    "$ cat service-offerings.json",
    JSON.stringify(
      {
        expertise: ["Frontend", "Backend", "Mobile", "Cloud", "DevOps", "Security", "AI/ML", "Data Analytics"],
        technologies: {
          frontend: ["React", "Next.js", "Vue", "Angular", "Tailwind CSS"],
          backend: ["Node.js", "Express", "Django", "Laravel", "Spring Boot"],
          mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
          cloud: ["AWS", "Azure", "GCP", "Vercel", "Netlify"],
          devops: ["Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"],
          security: ["Penetration Testing", "Security Audits", "Compliance", "Authentication"],
          ai: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
          data: ["Data Warehousing", "ETL", "Business Intelligence", "Data Visualization"],
        },
        pricing: {
          hourly: "$150-$250",
          project: "Custom quote based on requirements",
          retainer: "Monthly packages starting at $5,000",
        },
      },
      null,
      2,
    ),
  ]

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 transition-colors duration-300 binary-bg">
        <TopNav />
        <MatrixParticles />

        <PageTransition>
          {/* Hero Section */}
          <section className="container mx-auto px-4 pt-32 pb-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-retro">
                  Services
                </span>
              </h1>
              <p className="text-lg text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto mb-8 font-retro">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
          </section>

          {/* Terminal Section */}
          <section className="container mx-auto px-4 pb-16 relative z-10">
            <div className="max-w-4xl mx-auto mb-12">
              <TerminalSection title="Service Offerings" commands={terminalCommands} />
            </div>
          </section>

          {/* Service Categories Grid */}
          <section className="container mx-auto px-4 pb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
              Service Categories
            </h2>
            <ServiceCategoriesGrid />
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
              Pricing Plans
            </h2>
            <PricingSection />
          </section>

          {/* Resources Section */}
          <section className="container mx-auto px-4 py-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
              Resources
            </h2>
            <ResourcesSection />
          </section>

          {/* IT Triage Section */}
          <section className="container mx-auto px-4 py-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
              IT Triage Reports
            </h2>
            <ITTriageSection />
          </section>

          <Footer />
          <BottomNav />
        </PageTransition>
      </div>
    </ThemeProvider>
  )
}

