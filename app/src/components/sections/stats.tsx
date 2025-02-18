"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Book, Code, Users, Star } from "lucide-react"

const stats = [
  {
    name: "Active Users",
    value: "100K+",
    icon: Users,
    description: "Developers worldwide",
  },
  {
    name: "Documentation Pages",
    value: "50K+",
    icon: Book,
    description: "Comprehensive guides",
  },
  {
    name: "Code Examples",
    value: "25K+",
    icon: Code,
    description: "Ready to use snippets",
  },
  {
    name: "GitHub Stars",
    value: "15K+",
    icon: Star,
    description: "Open source love",
  },
]

export function StatsSection() {
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
    <section ref={ref} className="container py-12 sm:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-2xl font-bold tracking-tight"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{stat.description}</p>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

