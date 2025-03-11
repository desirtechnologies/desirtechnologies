"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Clock, RefreshCcw, UserCheck } from "lucide-react"

interface IncidentType {
  id: string
  title: string
  priority: "Critical" | "High" | "Medium" | "Low"
  status: "New" | "In Progress" | "Pending" | "Resolved"
  timeElapsed: string
  assignedTo: string
  updates: { time: string; message: string }[]
}

export default function TriageStatusBoard() {
  const [expandedIncident, setExpandedIncident] = useState<string | null>(null)

  const incidents: IncidentType[] = [
    {
      id: "INC-001",
      title: "Network Outage - East Data Center",
      priority: "Critical",
      status: "In Progress",
      timeElapsed: "1h 23m",
      assignedTo: "Network Team",
      updates: [
        { time: "09:15", message: "Incident reported and triaged as Critical" },
        { time: "09:20", message: "Assigned to Network Team" },
        { time: "09:35", message: "Initial diagnosis: Router failure in East Data Center" },
        { time: "10:10", message: "Replacement hardware being installed" },
      ],
    },
    {
      id: "INC-002",
      title: "CRM Application Error",
      priority: "High",
      status: "Pending",
      timeElapsed: "3h 45m",
      assignedTo: "Application Team",
      updates: [
        { time: "08:00", message: "Incident reported and triaged as High" },
        { time: "08:15", message: "Assigned to Application Team" },
        { time: "09:30", message: "Initial diagnosis: Database connection issue" },
        { time: "10:45", message: "Waiting for database team to verify connection settings" },
      ],
    },
    {
      id: "INC-003",
      title: "Email Delivery Delays",
      priority: "Medium",
      status: "Resolved",
      timeElapsed: "5h 10m",
      assignedTo: "Server Team",
      updates: [
        { time: "06:30", message: "Incident reported and triaged as Medium" },
        { time: "06:45", message: "Assigned to Server Team" },
        { time: "07:30", message: "Initial diagnosis: Mail server queue backlog" },
        { time: "09:15", message: "Increased server resources to process backlog" },
        { time: "11:40", message: "Queue cleared, email delivery resumed to normal" },
      ],
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-500 text-white"
      case "High":
        return "bg-amber-500 text-white"
      case "Medium":
        return "bg-yellow-500 text-white"
      case "Low":
        return "bg-green-500 text-white"
      default:
        return "bg-blue-500 text-white"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "New":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />
      case "In Progress":
        return <RefreshCcw className="h-4 w-4 text-blue-500" />
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Resolved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <motion.div
          key={incident.id}
          whileHover={{ scale: 1.01 }}
          className="cursor-pointer"
          onClick={() => setExpandedIncident(expandedIncident === incident.id ? null : incident.id)}
        >
          <Card
            className={`border ${expandedIncident === incident.id ? "border-primary" : "border-border/50"} bg-card/50 dark:bg-card/50 backdrop-blur-sm`}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <Badge className={`mr-2 font-retro ${getPriorityColor(incident.priority)}`}>
                    {incident.priority}
                  </Badge>
                  <h4 className="font-medium font-retro">{incident.title}</h4>
                </div>
                <Badge variant="outline" className="flex items-center font-retro">
                  {getStatusIcon(incident.status)}
                  <span className="ml-1">{incident.status}</span>
                </Badge>
              </div>

              <div className="flex justify-between text-xs text-foreground/60 font-retro mb-2">
                <div>ID: {incident.id}</div>
                <div>Time Elapsed: {incident.timeElapsed}</div>
              </div>

              <div className="flex items-center text-xs font-retro">
                <UserCheck className="h-4 w-4 mr-1 text-primary" />
                <span>Assigned to: {incident.assignedTo}</span>
              </div>

              {expandedIncident === incident.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 pt-4 border-t border-border/30"
                >
                  <h5 className="text-sm font-medium mb-2 font-retro">Incident Updates</h5>
                  <div className="space-y-2">
                    {incident.updates.map((update, index) => (
                      <div key={index} className="text-xs">
                        <span className="font-medium text-primary font-retro">{update.time}</span>
                        <span className="mx-2">-</span>
                        <span className="text-foreground/70 font-retro">{update.message}</span>
                      </div>
                    ))}
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

