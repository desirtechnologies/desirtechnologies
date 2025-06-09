"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, ExternalLink, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Resource {
  id: string
  title: string
  description: string
  type: "whitepaper" | "guide" | "template" | "tool"
  downloadUrl: string
  readTime?: string
  tags: string[]
}

const resources: Resource[] = [
  {
    id: "cloud-migration-guide",
    title: "Cloud Migration Strategy Guide",
    description: "A comprehensive guide to planning and executing a successful cloud migration for your business.",
    type: "guide",
    downloadUrl: "/resources/cloud-migration-guide.pdf",
    readTime: "15 min read",
    tags: ["Cloud", "Migration", "Strategy"],
  },
  {
    id: "security-audit-template",
    title: "IT Security Audit Template",
    description: "A ready-to-use template for conducting thorough security audits of your IT infrastructure.",
    type: "template",
    downloadUrl: "/resources/security-audit-template.xlsx",
    tags: ["Security", "Audit", "Compliance"],
  },
  {
    id: "ai-implementation-whitepaper",
    title: "AI Implementation in Business Whitepaper",
    description: "Research-based insights on successfully implementing AI solutions in various business contexts.",
    type: "whitepaper",
    downloadUrl: "/resources/ai-implementation-whitepaper.pdf",
    readTime: "25 min read",
    tags: ["AI", "Machine Learning", "Business Intelligence"],
  },
  {
    id: "code-quality-checker",
    title: "Code Quality Assessment Tool",
    description: "An online tool to analyze and improve the quality of your codebase with actionable recommendations.",
    type: "tool",
    downloadUrl: "https://tools.desirtechnologies.com/code-quality",
    tags: ["Development", "Code Quality", "Best Practices"],
  },
  {
    id: "web-performance-guide",
    title: "Web Performance Optimization Guide",
    description: "Learn how to significantly improve your website's loading speed and overall performance.",
    type: "guide",
    downloadUrl: "/resources/web-performance-guide.pdf",
    readTime: "20 min read",
    tags: ["Web Development", "Performance", "Optimization"],
  },
  {
    id: "data-backup-template",
    title: "Data Backup and Recovery Plan Template",
    description: "A comprehensive template for creating a robust data backup and disaster recovery strategy.",
    type: "template",
    downloadUrl: "/resources/data-backup-template.docx",
    tags: ["Data Management", "Backup", "Disaster Recovery"],
  },
]

export default function ResourcesSection() {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
          <TabsTrigger value="all" className="font-retro">
            All
          </TabsTrigger>
          <TabsTrigger value="guides" className="font-retro">
            Guides
          </TabsTrigger>
          <TabsTrigger value="whitepapers" className="font-retro">
            Whitepapers
          </TabsTrigger>
          <TabsTrigger value="templates" className="font-retro">
            Templates
          </TabsTrigger>
          <TabsTrigger value="tools" className="font-retro">
            Tools
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guides">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((r) => r.type === "guide")
              .map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="whitepapers">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((r) => r.type === "whitepaper")
              .map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((r) => r.type === "template")
              .map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="tools">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((r) => r.type === "tool")
              .map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-8">
        <p className="text-foreground/60 font-retro mb-4">
          Looking for something specific? Browse our complete resource library.
        </p>
        <Button asChild variant="outline" className="rounded-full font-retro">
          <Link href="/resources">View All Resources</Link>
        </Button>
      </div>
    </div>
  )
}

function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "guide":
        return <FileText className="h-6 w-6 text-blue-500" />
      case "whitepaper":
        return <FileText className="h-6 w-6 text-purple-500" />
      case "template":
        return <FileText className="h-6 w-6 text-green-500" />
      case "tool":
        return <ExternalLink className="h-6 w-6 text-orange-500" />
      default:
        return <FileText className="h-6 w-6 text-primary" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "guide":
        return "Guide"
      case "whitepaper":
        return "Whitepaper"
      case "template":
        return "Template"
      case "tool":
        return "Tool"
      default:
        return "Resource"
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
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              {getTypeIcon(resource.type)}
            </div>
            <div>
              <Badge variant="outline" className="mb-2 font-retro">
                {getTypeLabel(resource.type)}
              </Badge>
              <h3 className="text-xl font-retro text-primary mb-2">{resource.title}</h3>
              {resource.readTime && (
                <div className="flex items-center text-xs text-foreground/60 mb-2 font-retro">
                  <Clock className="h-3 w-3 mr-1" />
                  {resource.readTime}
                </div>
              )}
              <p className="text-sm text-foreground/70 mb-3 font-retro">{resource.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {resource.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-retro">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex justify-end">
            <Button asChild variant="outline" size="sm" className="rounded-full font-retro">
              <Link href={resource.downloadUrl} target={resource.type === "tool" ? "_blank" : undefined}>
                <Download className="mr-2 h-4 w-4" />
                {resource.type === "tool" ? "Access Tool" : "Download"}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

