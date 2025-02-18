"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/views/components/ui/button"
import { Input } from "@/views/components/ui/input"

const papers = [
  {
    title: "Advanced Machine Learning Techniques",
    author: "Dr. Jane Smith",
    date: "2024-02-16",
    category: "Machine Learning",
    abstract: "An in-depth analysis of modern machine learning approaches...",
  },
  {
    title: "Distributed Systems Architecture",
    author: "Prof. John Doe",
    date: "2024-02-15",
    category: "Systems",
    abstract: "Exploring scalable distributed systems design patterns...",
  },
  {
    title: "Quantum Computing Applications",
    author: "Dr. Alice Johnson",
    date: "2024-02-14",
    category: "Quantum Computing",
    abstract: "Practical applications of quantum computing in modern software...",
  },
]

export function ResearchSection() {
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
        className="mx-auto max-w-2xl"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Research Papers</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Latest research papers and technical publications
        </p>
        <div className="mt-8 flex gap-4">
          <Input placeholder="Search papers..." className="max-w-sm" />
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto mt-16 max-w-7xl"
      >
        <div className="grid gap-8">
          {papers.map((paper) => (
            <motion.div
              key={paper.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{paper.category}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{new Date(paper.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary">{paper.title}</h3>
                  <p className="text-muted-foreground">{paper.abstract}</p>
                  <p className="text-sm text-muted-foreground">By {paper.author}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

