"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Building2, Globe, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const caseStudies = [
  {
    title: "Enterprise Scale Migration",
    company: "TechCorp Industries",
    description: "How TechCorp migrated their legacy system to a modern cloud architecture",
    metrics: {
      performance: "+150% faster",
      cost: "-40% costs",
      uptime: "99.99%",
    },
    icon: Building2,
  },
  {
    title: "Global CDN Implementation",
    company: "WorldWeb Solutions",
    description: "Implementing a worldwide content delivery network for improved performance",
    metrics: {
      latency: "-75% latency",
      reach: "200+ regions",
      traffic: "10x capacity",
    },
    icon: Globe,
  },
  {
    title: "Microservices Architecture",
    company: "DataFlow Systems",
    description: "Transitioning from monolith to microservices architecture",
    metrics: {
      deployment: "10x faster",
      scalability: "100x easier",
      maintenance: "-60% time",
    },
    icon: Server,
  },
]

export function CaseStudiesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section ref={ref} className="container py-24 sm:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Real-world examples of successful implementations and transformations
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {caseStudies.map((study) => (
          <motion.div key={study.title} variants={itemVariants}>
            <Card className="group relative h-full overflow-hidden">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                  <study.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">{study.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{study.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{study.description}</p>
                <div className="space-y-2">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground capitalize">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="mt-4 w-full justify-between">
                  Read Case Study
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

