"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg",
    bio: "10+ years of experience in developer tooling and documentation",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg",
    bio: "Former Tech Lead at major tech companies",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    image: "/placeholder.svg",
    bio: "Product strategy and user experience expert",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "David Kim",
    role: "Lead Engineer",
    image: "/placeholder.svg",
    bio: "Full-stack developer with focus on performance",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
]

export function TeamSection() {
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">The passionate individuals behind TechDocs</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-lg border bg-background p-6"
          >
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={300}
              height={300}
              className="mx-auto h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mt-6 text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-primary">{member.role}</p>
            <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
            <div className="mt-6 flex justify-center gap-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

