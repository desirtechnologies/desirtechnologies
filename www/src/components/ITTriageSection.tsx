import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface TriageReport {
  id: string
  title: string
  date: string
  severity: "critical" | "high" | "medium" | "low" | "resolved"
  category: string
  summary: string
  findings: number
  recommendations: number
}

const triageReports: TriageReport[] = [
  {
    id: "security-vulnerability-2023",
    title: "Critical Security Vulnerability Assessment",
    date: "October 15, 2023",
    severity: "critical",
    category: "Security",
    summary:
      "Identification of multiple critical security vulnerabilities in the client's web application infrastructure.",
    findings: 8,
    recommendations: 12,
  },
  {
    id: "performance-optimization-2023",
    title: "Web Application Performance Analysis",
    date: "September 28, 2023",
    severity: "high",
    category: "Performance",
    summary:
      "Comprehensive analysis of performance bottlenecks in the client's e-commerce platform during peak traffic periods.",
    findings: 6,
    recommendations: 9,
  },
  {
    id: "database-optimization-2023",
    title: "Database Performance Optimization",
    date: "August 12, 2023",
    severity: "medium",
    category: "Database",
    summary: "Assessment of database architecture and query performance with recommendations for optimization.",
    findings: 5,
    recommendations: 7,
  },
  {
    id: "cloud-infrastructure-2023",
    title: "Cloud Infrastructure Audit",
    date: "July 5, 2023",
    severity: "low",
    category: "Cloud",
    summary: "Evaluation of cloud infrastructure setup with focus on cost optimization and resource allocation.",
    findings: 4,
    recommendations: 6,
  },
  {
    id: "security-remediation-2023",
    title: "Security Vulnerability Remediation Verification",
    date: "June 20, 2023",
    severity: "resolved",
    category: "Security",
    summary:
      "Follow-up assessment confirming successful remediation of previously identified security vulnerabilities.",
    findings: 0,
    recommendations: 2,
  },
]

export default function ITTriageSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {triageReports.slice(0, 4).map((report, index) => (
          <TriageReportCard key={report.id} report={report} index={index} />
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-foreground/60 font-retro mb-4">
          View our complete library of IT triage reports and case studies.
        </p>
        <Button asChild variant="outline" className="rounded-full font-retro">
          <Link href="/resources/triage-reports">View All Reports</Link>
        </Button>
      </div>
    </div>
  )
}

function TriageReportCard({ report, index }: { report: TriageReport; index: number }) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "high":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20"
      case "medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "low":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "resolved":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      default:
        return "bg-primary/10 text-primary border-primary/20"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
      case "high":
      case "medium":
      case "low":
        return <AlertTriangle className="h-4 w-4" />
      case "resolved":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className={`${getSeverityColor(report.severity)} font-retro flex items-center`}>
              {getSeverityIcon(report.severity)}
              <span className="ml-1">{report.severity.charAt(0).toUpperCase() + report.severity.slice(1)}</span>
            </Badge>
            <div className="flex items-center text-xs text-foreground/60 font-retro">
              <Clock className="h-3 w-3 mr-1" />
              {report.date}
            </div>
          </div>
          <h3 className="text-xl font-retro text-primary mb-2">{report.title}</h3>
          <Badge variant="secondary" className="mb-3 font-retro">
            {report.category}
          </Badge>
          <p className="text-sm text-foreground/70 mb-4 font-retro">{report.summary}</p>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-foreground/60 font-retro">
              <span className="font-medium">{report.findings}</span> findings
            </div>
            <div className="text-sm text-foreground/60 font-retro">
              <span className="font-medium">{report.recommendations}</span> recommendations
            </div>
          </div>
          <div className="flex justify-end">
            <Button asChild variant="outline" size="sm" className="rounded-full font-retro">
              <Link href={`/resources/triage-reports/${report.id}`}>
                View Full Report <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

