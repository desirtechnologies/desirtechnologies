"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Palette, Server, Database, Cpu, Cloud, Shield, BarChart } from "lucide-react"

interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  tags: string[]
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: <Code className="h-6 w-6 text-blue-500" />,
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <Palette className="h-6 w-6 text-purple-500" />,
    tags: ["React Native", "Flutter", "Swift"],
  },
  {
    id: "backend-systems",
    title: "Backend Systems",
    description: "Scalable server infrastructure and API development.",
    icon: <Server className="h-6 w-6 text-green-500" />,
    tags: ["Node.js", "Express", "Django"],
  },
  {
    id: "database-solutions",
    title: "Database Solutions",
    description: "Database design, optimization, and management services.",
    icon: <Database className="h-6 w-6 text-yellow-500" />,
    tags: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Intelligent applications and machine learning integration.",
    icon: <Cpu className="h-6 w-6 text-red-500" />,
    tags: ["Machine Learning", "NLP", "Computer Vision"],
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Cloud migration, deployment, and management solutions.",
    icon: <Cloud className="h-6 w-6 text-indigo-500" />,
    tags: ["AWS", "Azure", "GCP"],
  },
  {
    id: "security-consulting",
    title: "Security Consulting",
    description: "Comprehensive security audits and implementation services.",
    icon: <Shield className="h-6 w-6 text-teal-500" />,
    tags: ["Penetration Testing", "Compliance", "Security Audits"],
  },
  {
    id: "it-triage",
    title: "IT Triage",
    description: "Rapid assessment and resolution of critical IT issues.",
    icon: <BarChart className="h-6 w-6 text-orange-500" />,
    tags: ["Diagnostics", "Troubleshooting", "Recovery"],
  },
]

export default function ServiceCategoriesGrid() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceCategories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="h-full"
          onMouseEnter={() => setHoveredCategory(category.id)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <Link href={`/services/${category.id}`} className="block h-full">
            <Card className="h-full overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-retro text-primary mb-2">{category.title}</h3>
                    <p className="text-sm text-foreground/70 mb-3">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {category.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-retro">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end">
                  <motion.div className="flex items-center text-primary text-sm font-retro" whileHover={{ x: 5 }}>
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

