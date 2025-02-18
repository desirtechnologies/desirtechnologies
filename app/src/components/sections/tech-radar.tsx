"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Cpu, Database, Globe, Layout, Server, Shield } from "lucide-react"

const technologies = [
  {
    name: "Frontend",
    icon: Layout,
    items: [
      { name: "Next.js", status: "adopt" },
      { name: "React", status: "adopt" },
      { name: "TypeScript", status: "adopt" },
      { name: "Tailwind CSS", status: "adopt" },
      { name: "Framer Motion", status: "trial" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", status: "adopt" },
      { name: "GraphQL", status: "trial" },
      { name: "tRPC", status: "assess" },
      { name: "Rust", status: "assess" },
    ],
  },
  {
    name: "Database",
    icon: Database,
    items: [
      { name: "PostgreSQL", status: "adopt" },
      { name: "MongoDB", status: "trial" },
      { name: "Redis", status: "adopt" },
      { name: "Prisma", status: "trial" },
    ],
  },
  {
    name: "Infrastructure",
    icon: Globe,
    items: [
      { name: "Vercel", status: "adopt" },
      { name: "Docker", status: "adopt" },
      { name: "Kubernetes", status: "trial" },
      { name: "AWS", status: "adopt" },
    ],
  },
  {
    name: "AI/ML",
    icon: Cpu,
    items: [
      { name: "TensorFlow", status: "trial" },
      { name: "PyTorch", status: "assess" },
      { name: "Hugging Face", status: "trial" },
      { name: "LangChain", status: "assess" },
    ],
  },
  {
    name: "Security",
    icon: Shield,
    items: [
      { name: "Auth.js", status: "adopt" },
      { name: "JWT", status: "adopt" },
      { name: "OAuth", status: "adopt" },
      { name: "HTTPS", status: "adopt" },
    ],
  },
]

const statusColors = {
  adopt: "bg-green-500",
  trial: "bg-yellow-500",
  assess: "bg-blue-500",
  hold: "bg-red-500",
}

export function TechRadarSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technology Radar</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Our assessment of various technologies in the ecosystem
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <tech.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{tech.name}</h3>
            </div>
            <div className="mt-6 space-y-4">
              {tech.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <span className="text-sm">{item.name}</span>
                  <span className={`h-2 w-2 rounded-full ${statusColors[item.status as keyof typeof statusColors]}`} />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center gap-8">
        {Object.entries(statusColors).map(([status, color]) => (
          <div key={status} className="flex items-center gap-2">
            <span className={`h-3 w-3 rounded-full ${color}`} />
            <span className="text-sm capitalize">{status}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

