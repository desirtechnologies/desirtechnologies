"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, BarChart, Code, Cpu, Database, Globe, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"


export default function Services() {
    return (
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
    )
}