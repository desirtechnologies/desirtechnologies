"use client"

import { motion } from "framer-motion"

interface ProcessStep {
  title: string
  description: string
}

interface ServiceProcessTimelineProps {
  process: ProcessStep[]
}

export default function ServiceProcessTimeline({ process }: ServiceProcessTimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>

      {process.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`relative mb-12 ${index % 2 === 0 ? "text-right mr-auto pr-12" : "text-left ml-auto pl-12"}`}
          style={{ width: "calc(50% - 20px)" }}
        >
          <div
            className={`absolute top-0 ${index % 2 === 0 ? "right-0" : "left-0"} transform ${index % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"} -translate-y-1/4`}
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
          </div>
          <div className="bg-card/50 dark:bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
            <h3 className="text-xl font-medium mb-2 font-retro">{step.title}</h3>
            <p className="text-foreground/60 font-retro">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

