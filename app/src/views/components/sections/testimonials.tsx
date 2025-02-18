"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "TechDocs has revolutionized how we handle our technical documentation. The AI-powered features are game-changing.",
    author: {
      name: "Alex Thompson",
      role: "CTO at TechCorp",
      image: "/placeholder.svg",
    },
  },
  {
    content:
      "The search capabilities and interactive examples have made our documentation much more accessible and useful.",
    author: {
      name: "Maria Garcia",
      role: "Lead Developer at WebScale",
      image: "/placeholder.svg",
    },
  },
  {
    content: "We've seen a significant improvement in developer productivity since implementing TechDocs.",
    author: {
      name: "James Wilson",
      role: "Engineering Manager at DevFlow",
      image: "/placeholder.svg",
    },
  },
]

export function TestimonialsSection() {
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Developers</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">See what others are saying about TechDocs</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <Quote className="h-8 w-8 text-primary opacity-50" />
            <p className="mt-4 text-lg">{testimonial.content}</p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src={testimonial.author.image || "/placeholder.svg"}
                alt={testimonial.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{testimonial.author.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

