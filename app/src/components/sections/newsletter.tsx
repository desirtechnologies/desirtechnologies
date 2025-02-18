"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
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
        className="relative isolate overflow-hidden rounded-lg bg-primary/5 px-6 py-24 shadow-2xl sm:px-24 xl:py-32"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(0,128,0,0.1)_50%,transparent_75%)] bg-[length:500px_500px] opacity-50" />
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stay Updated
          </motion.h2>
          <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Get the latest updates on new features, documentation, and technical resources delivered straight to your
            inbox.
          </motion.p>
          <motion.form variants={itemVariants} className="mx-auto mt-10 flex max-w-md gap-4">
            <Input type="email" placeholder="Enter your email" className="min-w-0 flex-auto" required />
            <Button type="submit">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

