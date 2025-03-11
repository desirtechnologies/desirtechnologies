"use client"

import { useState, useEffect } from "react"
import BlogPreview from "@/components/BlogPreview"
import AboutSection from "@/components/AboutSection"
import MatrixParticles from "@/components/MatrixParticles"
import PageTransition from "@/components/PageTransition"
import TerminalSection from "@/components/TerminalSection"
import { motion } from "framer-motion"
import { ArrowRight, Code, Zap, Server, Database, Globe, Shield, BarChart, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import PricingSection from "@/components/PricingSection"
import ResourcesSection from "@/components/ResourcesSection"
import ITTriageSection from "@/components/ITTriageSection"
import { ResourcesSectionHome } from "@/components/resources/ResourcesSectionHome"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  // Terminal commands for the hero section
  const terminalCommands = [
    "$ whoami",
    "desir-technologies",
    "$ cat mission.txt",
    "Building immersive digital experiences and innovative solutions for the modern world.",
    "$ ls -la services/",
    "total 8",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 web-development",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 mobile-apps",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ui-design",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 cloud-services",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ai-solutions",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 security-consulting",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 it-triage",
    "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 data-analytics",
    "$ ./start-project.sh",
    "Initializing new project...",
    "Ready to build something amazing!",
  ]

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 transition-colors duration-300 relative">
      <MatrixParticles />

      <PageTransition>
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-retro">
                  DESIR TECHNOLOGIES
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 dark:text-foreground/60 mb-8 font-retro">
                Building immersive digital experiences and innovative solutions for the modern world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro"
                >
                  <Link href="/contact">
                    GET STARTED <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full font-retro">
                  <Link href="/projects">EXPLORE PROJECTS</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TerminalSection title="DESIR TECHNOLOGIES" commands={terminalCommands} />
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-4 text-center font-retro">
            OUR SERVICES
          </h2>
          <p className="text-center text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto mb-12 font-retro">
            We provide comprehensive technology solutions to help businesses thrive in the digital age.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies.",
                icon: <Code className="h-10 w-10 text-desir-500" />,
                link: "/services/web-development",
              },
              {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android.",
                icon: <Zap className="h-10 w-10 text-desir-500" />,
                link: "/services/mobile-apps",
              },
              {
                title: "Backend Systems",
                description: "Scalable server infrastructure and API development.",
                icon: <Server className="h-10 w-10 text-desir-500" />,
                link: "/services/backend-systems",
              },
              {
                title: "Database Solutions",
                description: "Database design, optimization, and management services.",
                icon: <Database className="h-10 w-10 text-desir-500" />,
                link: "/services/database-solutions",
              },
              {
                title: "Cloud Services",
                description: "Cloud migration, deployment, and management solutions.",
                icon: <Globe className="h-10 w-10 text-desir-500" />,
                link: "/services/cloud-services",
              },
              {
                title: "Security Consulting",
                description: "Comprehensive security audits and implementation services.",
                icon: <Shield className="h-10 w-10 text-desir-500" />,
                link: "/services/security-consulting",
              },
              {
                title: "IT Triage",
                description: "Rapid assessment and resolution of critical IT issues.",
                icon: <BarChart className="h-10 w-10 text-desir-500" />,
                link: "/services/it-triage",
              },
              {
                title: "AI Solutions",
                description: "Intelligent applications and machine learning integration.",
                icon: <Cpu className="h-10 w-10 text-desir-500" />,
                link: "/services/ai-solutions",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={service.link} className="block h-full">
                  <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-full bg-primary/10">{service.icon}</div>
                      <h3 className="text-xl font-medium mb-2 font-retro">{service.title}</h3>
                      <p className="text-foreground/60 font-retro">{service.description}</p>
                      <div className="mt-auto pt-4">
                        <motion.div
                          className="flex items-center justify-center text-primary text-sm font-retro"
                          whileHover={{ x: 5 }}
                        >
                          Learn More <ArrowRight className="ml-1 h-3 w-3" />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="rounded-full font-retro">
              <Link href="/services">VIEW ALL SERVICES</Link>
            </Button>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
            PRICING PLANS
          </h2>
          <PricingSection />
        </section>

        {/* Resources Section */}
        <ResourcesSectionHome />

        <section className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
            RESOURCES
          </h2>
          <ResourcesSection />
        </section>

        {/* IT Triage Section */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
            IT TRIAGE REPORTS
          </h2>
          <ITTriageSection />
        </section>

        {/* Project Categories Section */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
            PROJECT CATEGORIES
          </h2>
          <Link href="/projects" className="block">
            <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow mb-8">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-medium mb-4 font-retro">Explore Our Project Gallery</h3>
                <p className="text-foreground/60 mb-6 font-retro">
                  Discover our portfolio organized by technology categories
                </p>
                <Button className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
                  View Project Categories <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* Blog Preview Section */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
            LATEST ARTICLES
          </h2>
          <BlogPreview />

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="rounded-full font-retro">
              <Link href="/blog">VIEW ALL ARTICLES</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <AboutSection />
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <div className="bg-desir-500/10 backdrop-blur-sm border border-desir-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
              READY TO TRANSFORM YOUR BUSINESS?
            </h2>
            <p className="text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto mb-8 font-retro">
              Let's discuss how Desir Technologies can help you achieve your digital goals.
            </p>
            <Button asChild size="lg" className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
              <Link href="/contact">GET IN TOUCH</Link>
            </Button>
          </div>
        </section>
      </PageTransition>
    </div>
  )
}

