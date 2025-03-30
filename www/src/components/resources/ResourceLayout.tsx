import type React from "react"
import { cn } from "@/lib/utils"
import { ResourceSidebar } from "./ResourceSidebar"

interface ResourceLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
  className?: string
}

export function ResourceLayout({ children, sidebar, className }: ResourceLayoutProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-6", className)}>
      <div className="md:col-span-3">{children}</div>
      <div className="md:col-span-1">{sidebar || <ResourceSidebar />}</div>
    </div>
  )
}

