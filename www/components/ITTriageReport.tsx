"use client"

import { Card, CardContent } from "@/components/elements/card"
import { Badge } from "@/components/elements/badge"
import { AlertTriangle, CheckCircle, Clock, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/elements/button"
import Link from "next/link"

interface TriageReportData {
  title: string
  date: string
  summary: string
  findings: string[]
  recommendations: string[]
  impact: string
}

interface ITTriageReportProps {
  report: TriageReportData
}

export default function ITTriageReport({ report }: ITTriageReportProps) {
  return (
    <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-retro">
            <FileText className="h-4 w-4 mr-1" />
            Triage Report
          </Badge>
          <div className="flex items-center text-xs text-foreground/60 font-retro">
            <Clock className="h-3 w-3 mr-1" />
            {report.date}
          </div>
        </div>

        <h3 className="text-xl font-retro text-primary mb-3">{report.title}</h3>
        <p className="text-sm text-foreground/70 mb-4 font-retro">{report.summary}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 font-retro flex items-center">
            <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
            Key Findings
          </h4>
          <ul className="space-y-1 pl-6 list-disc text-sm text-foreground/70 font-retro">
            {report.findings.slice(0, 3).map((finding, index) => (
              <li key={index}>{finding}</li>
            ))}
            {report.findings.length > 3 && (
              <li className="text-foreground/50">+{report.findings.length - 3} more findings</li>
            )}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 font-retro flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            Recommendations
          </h4>
          <ul className="space-y-1 pl-6 list-disc text-sm text-foreground/70 font-retro">
            {report.recommendations.slice(0, 3).map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
            {report.recommendations.length > 3 && (
              <li className="text-foreground/50">+{report.recommendations.length - 3} more recommendations</li>
            )}
          </ul>
        </div>

        <div className="bg-primary/5 p-3 rounded-lg mb-4">
          <h4 className="text-sm font-medium mb-1 font-retro">Impact</h4>
          <p className="text-sm text-foreground/70 font-retro">{report.impact}</p>
        </div>

        <div className="flex justify-end">
          <Button asChild variant="outline" size="sm" className="rounded-full font-retro">
            <Link href={`/resources/triage-reports/${report.title.toLowerCase().replace(/\s+/g, "-")}`}>
              View Full Report <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

