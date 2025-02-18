"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, FlaskRoundIcon as Flask, Library, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const resources = [
  {
    title: "Video Tutorials",
    description: "Learn through comprehensive video tutorials",
    icon: Video,
    count: 150,
  },
  {
    title: "Code Examples",
    description: "Ready-to-use code snippets and examples",
    icon: Code2,
    count: 300,
  },
  {
    title: "Libraries",
    description: "Curated collection of useful libraries",
    icon: Library,
    count: 50,
  },
  {
    title: "Experiments",
    description: "Cutting-edge experimental projects",
    icon: Flask,
    count: 25,
  },
]

export function ResourcesSection() {
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Learning Resources</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Comprehensive collection of resources to help you learn and build
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {resources.map((resource) => (
          <motion.div key={resource.title} variants={itemVariants}>
            <Card className="group relative overflow-hidden">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                  <resource.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{resource.count}+</p>
                <p className="text-xs text-muted-foreground">Available items</p>
              </CardContent>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-16 flex justify-center">
        <Button size="lg">Browse All Resources</Button>
      </div>
    </section>
  )
}

