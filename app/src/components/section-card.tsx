import type React from "react"
interface SectionCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export function SectionCard({ title, description, icon, href }: SectionCardProps) {
  return (
    <a href={href} className="group relative rounded-lg border p-6 hover:border-primary">
      <div className="animate-border absolute inset-0 rounded-lg border border-transparent" />
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-primary/10 p-2 text-primary">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </a>
  )
}

