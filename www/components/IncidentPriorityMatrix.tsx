"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/elements/badge"

export default function IncidentPriorityMatrix() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)

  const impactLevels = ["High", "Medium", "Low"]
  const urgencyLevels = ["High", "Medium", "Low"]

  const getPriorityLevel = (impact: string, urgency: string) => {
    if (impact === "High" && urgency === "High") return { level: "Critical", color: "bg-red-500" }
    if (impact === "High" && urgency === "Medium") return { level: "High", color: "bg-amber-500" }
    if (impact === "Medium" && urgency === "High") return { level: "High", color: "bg-amber-500" }
    if (impact === "Medium" && urgency === "Medium") return { level: "Medium", color: "bg-yellow-500" }
    if (impact === "Low" && urgency === "High") return { level: "Medium", color: "bg-yellow-500" }
    if (impact === "High" && urgency === "Low") return { level: "Medium", color: "bg-yellow-500" }
    if (impact === "Medium" && urgency === "Low") return { level: "Low", color: "bg-green-500" }
    if (impact === "Low" && urgency === "Medium") return { level: "Low", color: "bg-green-500" }
    return { level: "Planning", color: "bg-blue-500" }
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div className="font-retro"></div>
        {urgencyLevels.map((urgency) => (
          <div key={urgency} className="text-center font-retro font-medium">
            Urgency: {urgency}
          </div>
        ))}
      </div>

      {impactLevels.map((impact) => (
        <div key={impact} className="grid grid-cols-4 gap-2 mb-2">
          <div className="flex items-center font-retro font-medium">Impact: {impact}</div>

          {urgencyLevels.map((urgency) => {
            const priority = getPriorityLevel(impact, urgency)
            const cellId = `${impact}-${urgency}`

            return (
              <motion.div
                key={cellId}
                className={`p-3 rounded-md ${priority.color} text-white text-center cursor-pointer transition-all duration-200`}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredCell(cellId)}
                onMouseLeave={() => setHoveredCell(null)}
              >
                <div className="font-retro font-bold">{priority.level}</div>

                {hoveredCell === cellId && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-10 w-64 mt-2 p-3 bg-background/95 backdrop-blur-sm border border-border/50 rounded-md shadow-lg"
                  >
                    <h4 className="font-retro font-bold mb-2">{priority.level} Priority</h4>
                    <p className="text-xs text-foreground/70 mb-2 font-retro">
                      {priority.level === "Critical" && "Severe business impact requiring immediate attention"}
                      {priority.level === "High" && "Significant business impact requiring urgent attention"}
                      {priority.level === "Medium" && "Moderate business impact requiring prompt attention"}
                      {priority.level === "Low" && "Minor business impact that can be scheduled"}
                      {priority.level === "Planning" && "No immediate impact, can be addressed in future planning"}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs font-retro">
                        Impact: {impact}
                      </Badge>
                      <Badge variant="outline" className="text-xs font-retro">
                        Urgency: {urgency}
                      </Badge>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      ))}

      <div className="mt-4 text-xs text-foreground/60 font-retro">
        <p>
          <strong>Impact</strong>: The effect an incident has on business processes, functionality, or users
        </p>
        <p>
          <strong>Urgency</strong>: The required speed of resolution based on business needs
        </p>
      </div>
    </div>
  )
}

