import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Palette, Globe, Database, Cpu, LineChart, Zap, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Skill {
  name: string
  icon: React.ReactNode
  description: string
}

const skills: Skill[] = [
  {
    name: "Frontend Development",
    icon: <Code className="h-6 w-6 text-blue-500" />,
    description: "React, Next.js, Vue, Svelte",
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="h-6 w-6 text-purple-500" />,
    description: "Figma, Adobe XD, Responsive Design",
  },
  {
    name: "Backend Development",
    icon: <Database className="h-6 w-6 text-green-500" />,
    description: "Node.js, Express, Django, Laravel",
  },
  {
    name: "Web Performance",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    description: "Optimization, Caching, Lazy Loading",
  },
  {
    name: "Global Deployment",
    icon: <Globe className="h-6 w-6 text-indigo-500" />,
    description: "Vercel, Netlify, AWS, Docker",
  },
  {
    name: "Data Visualization",
    icon: <LineChart className="h-6 w-6 text-red-500" />,
    description: "D3.js, Chart.js, Three.js",
  },
  {
    name: "AI Integration",
    icon: <Cpu className="h-6 w-6 text-teal-500" />,
    description: "OpenAI, TensorFlow.js, Hugging Face",
  },
  {
    name: "Accessibility",
    icon: <Award className="h-6 w-6 text-orange-500" />,
    description: "WCAG, Semantic HTML, ARIA",
  },
]

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-6">About Me</h2>
        <div className="space-y-4 text-foreground/70 dark:text-foreground/70">
          <p>
            I'm a passionate web developer and tech blogger with over 8 years of experience building modern, responsive,
            and accessible web applications. My expertise spans across frontend and backend technologies, with a special
            focus on creating intuitive user experiences.
          </p>
          <p>
            When I'm not coding, I'm writing technical articles, speaking at conferences, or exploring emerging
            technologies. I believe in sharing knowledge and contributing to the developer community through open-source
            projects and educational content.
          </p>
          <p>
            My approach combines technical excellence with creative problem-solving, ensuring that every project I work
            on is not just functional but also visually appealing and user-friendly.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="mb-2 p-2 rounded-full bg-background dark:bg-background">{skill.icon}</div>
                  <h3 className="text-sm font-medium mb-1">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden border border-border/50 shadow-xl"
      >
        <Image src="/placeholder.svg?height=1000&width=800" alt="Developer Portrait" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-background/80 dark:bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/50">
            <h3 className="text-xl font-medium mb-2">John Developer</h3>
            <p className="text-sm text-foreground/70 dark:text-foreground/70">
              Senior Web Developer & Technical Writer
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

