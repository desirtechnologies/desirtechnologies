"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import TopNav from "@/components/TopNav"
import BottomNav from "@/components/BottomNav"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import ProjectCategoriesGrid from "@/components/ProjectCategoriesGrid"
import TerminalSection from "@/components/TerminalSection"
import MatrixParticles from "@/components/MatrixParticles"

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)

  // Terminal commands for the tech stack section
  const terminalCommands = [
    "$ cd /projects",
    "$ ls -la",
    "total 9",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 web-development",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 mobile-apps",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ui-design",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ai-solutions",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 blockchain",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 data-visualization",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ecommerce",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ar-vr",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 iot",
    "$ cat technologies.json",
    JSON.stringify(
      {
        languages: ["JavaScript", "TypeScript", "Python", "Rust", "Go", "Solidity"],
        frontend: ["React", "Next.js", "Vue", "Svelte", "Angular", "Tailwind CSS"],
        backend: ["Node.js", "Express", "Django", "Flask", "NestJS", "GraphQL"],
        mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
        databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
        cloud: ["AWS", "GCP", "Azure", "Vercel", "Netlify", "Digital Ocean"],
        tools: ["Git", "Docker", "Kubernetes", "CI/CD", "Terraform"],
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
                  Projects
                </span>
              </h1>
              <p className="text-lg text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto mb-8 font-retro">
                Explore our portfolio of innovative digital solutions across various technology domains.
              </p>
            </div>
          </section>

          {/* Terminal Section */}
          <section className="container mx-auto px-4 pb-16 relative z-10">
            <div className="max-w-4xl mx-auto mb-12">
              <TerminalSection title="Project Technologies" commands={terminalCommands} />
            </div>
          </section>

          {/* Project Categories Grid */}
          <section className="container mx-auto px-4 pb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
              Project Categories
            </h2>
            <ProjectCategoriesGrid />
          </section>

          <Footer />
          <BottomNav />
        </PageTransition>
      </div>
    </ThemeProvider>
  )
}

