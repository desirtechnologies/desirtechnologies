"use client"

import { motion } from "framer-motion"
import { Button } from "@/views/components/ui/button"
import { CommandPalette } from "@/views/components/command-palette"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#008000_1px,transparent_1px),linear-gradient(to_bottom,#008000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="mx-auto max-w-2xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Technical Documentation, <span className="text-primary">Reimagined</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive technical documentation platform powered by AI. Search, learn, and build with confidence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <CommandPalette />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

