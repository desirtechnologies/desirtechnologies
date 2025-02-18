"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Book, Code2, FileText, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const docs = [
  {
    title: "Getting Started",
    description: "Quick start guides and tutorials for beginners",
    icon: GraduationCap,
    href: "/docs/getting-started",
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples",
    icon: Code2,
    href: "/docs/api",
  },
  {
    title: "Guides",
    description: "In-depth guides for advanced topics",
    icon: Book,
    href: "/docs/guides",
  },
  {
    title: "Best Practices",
    description: "Recommended patterns and practices",
    icon: FileText,
    href: "/docs/best-practices",
  },
]

export function DocumentationSection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
        className="grid gap-8 lg:grid-cols-2 lg:gap-12"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Documentation</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our platform, from getting started guides to advanced topics and API
            references.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Browse Docs</Button>
            <Button variant="outline" size="lg">
              View Examples
            </Button>
          </div>
        </motion.div>
        <motion.div variants={containerVariants} className="grid gap-6 sm:grid-cols-2">
          {docs.map((doc) => (
            <motion.a
              key={doc.title}
              href={doc.href}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                <doc.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{doc.title}</h3>
              <p className="mt-2 text-muted-foreground">{doc.description}</p>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

