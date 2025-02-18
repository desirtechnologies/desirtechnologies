"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Bot, Code2, Cpu, Database, Globe, Shield } from "lucide-react"

const features = [
  {
    name: "AI-Powered Search",
    description: "Intelligent search across all documentation and resources",
    icon: Bot,
  },
  {
    name: "Interactive Code Examples",
    description: "Live code editing and execution in your browser",
    icon: Code2,
  },
  {
    name: "Performance Metrics",
    description: "Real-time performance monitoring and optimization",
    icon: Cpu,
  },
  {
    name: "Data Management",
    description: "Efficient data handling and storage solutions",
    icon: Database,
  },
  {
    name: "Global CDN",
    description: "Lightning-fast content delivery worldwide",
    icon: Globe,
  },
  {
    name: "Network Security",
    description: "Enterprise-grade security protocols",
    icon: Shield,
  },
]

export function FeaturesSection() {
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to build</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Comprehensive tools and resources for modern development
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto mt-16 max-w-7xl"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              className="relative overflow-hidden rounded-lg border bg-background p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{feature.name}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

