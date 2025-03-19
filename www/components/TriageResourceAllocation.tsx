"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/elements/card"
import { Badge } from "@/components/elements/badge"
import { Progress } from "@/components/elements/progress"
import { Users, Server, Shield, Database, Code, Globe } from "lucide-react"

interface ResourceType {
  id: string
  name: string
  icon: React.ReactNode
  availability: number
  skills: string[]
  activeIncidents: number
}

export default function TriageResourceAllocation() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null)

  const resources: ResourceType[] = [
    {
      id: "network",
      name: "Network Team",
      icon: <Globe className="h-5 w-5 text-blue-500" />,
      availability: 65,
      skills: ["Network Infrastructure", "Firewall", "VPN", "Load Balancing"],
      activeIncidents: 3,
    },
    {
      id: "server",
      name: "Server Team",
      icon: <Server className="h-5 w-5 text-green-500" />,
      availability: 80,
      skills: ["Windows Server", "Linux", "Virtualization", "Cloud Infrastructure"],
      activeIncidents: 2,
    },
    {
      id: "security",
      name: "Security Team",
      icon: <Shield className="h-5 w-5 text-red-500" />,
      availability: 90,
      skills: ["Threat Detection", "Vulnerability Management", "Security Audits"],
      activeIncidents: 1,
    },
    {
      id: "database",
      name: "Database Team",
      icon: <Database className="h-5 w-5 text-purple-500" />,
      availability: 75,
      skills: ["SQL Server", "Oracle", "MongoDB", "Database Optimization"],
      activeIncidents: 2,
    },
    {
      id: "application",
      name: "Application Team",
      icon: <Code className="h-5 w-5 text-amber-500" />,
      availability: 60,
      skills: ["Web Applications", "APIs", "Microservices", "Legacy Systems"],
      activeIncidents: 4,
    },
    {
      id: "helpdesk",
      name: "Help Desk",
      icon: <Users className="h-5 w-5 text-indigo-500" />,
      availability: 40,
      skills: ["User Support", "Troubleshooting", "Hardware Issues", "Software Issues"],
      activeIncidents: 8,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {resources.map((resource) => (
        <motion.div
          key={resource.id}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer"
          onClick={() => setSelectedResource(selectedResource === resource.id ? null : resource.id)}
        >
          <Card
            className={`border ${selectedResource === resource.id ? "border-primary" : "border-border/50"} bg-card/50 dark:bg-card/50 backdrop-blur-sm`}
          >
            <CardContent className="p-4">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-primary/10 mr-3">{resource.icon}</div>
                <div>
                  <h4 className="font-medium font-retro">{resource.name}</h4>
                  <div className="flex items-center text-xs text-foreground/60 font-retro">
                    <span className="mr-2">Active: {resource.activeIncidents}</span>
                    <span>Availability:</span>
                  </div>
                </div>
              </div>

              <Progress
                value={resource.availability}
                className="h-2 mb-2"
                indicatorClassName={
                  resource.availability > 70
                    ? "bg-green-500"
                    : resource.availability > 40
                      ? "bg-amber-500"
                      : "bg-red-500"
                }
              />

              {selectedResource === resource.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3"
                >
                  <div className="text-xs font-medium mb-2 font-retro">Specializations:</div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {resource.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs font-retro">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-foreground/60 font-retro">
                    {resource.availability > 70
                      ? "Available for new incidents"
                      : resource.availability > 40
                        ? "Limited availability"
                        : "High workload - limited capacity"}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

