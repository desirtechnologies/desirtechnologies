"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Share2 } from "lucide-react"

const integrations = [
  {
    title: "GitHub",
    description: "Seamless integration with GitHub for version control and collaboration",
    icon: Share2,
    href: "#",
  },
  {
    title: "Slack",
    description: "Real-time notifications and updates in your Slack workspace",
    icon: Share2,
    href: "#",
  },
  {
    title: "Jira",
    description: "Integrate with Jira for issue tracking and project management",
    icon: Share2,
    href: "#",
  },
  {
    title: "Google Docs",
    description: "Import and export documentation from Google Docs",
    icon: Share2,
    href: "#",
  },
]

export function IntegrationsSection() {
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
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Integrations</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Seamlessly integrate with your favorite tools and platforms
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {integrations.map((integration) => (
          <motion.a
            key={integration.title}
            href={integration.href}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
              <integration.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{integration.title}</h3>
            <p className="mt-2 text-muted-foreground">{integration.description}</p>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

