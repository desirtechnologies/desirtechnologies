import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/elements/card"
import { Cpu, Bug, GitBranch, Puzzle, Users, Library, Play, Code } from "lucide-react"
import type { ResourceFeature } from "@/lib/resources"

interface ResourceFeaturesProps {
  features: ResourceFeature[]
  className?: string
}

export function ResourceFeatures({ features, className }: ResourceFeaturesProps) {
  if (!features || features.length === 0) {
    return null
  }

  // Map feature icons to Lucide components
  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case "cpu":
        return <Cpu className="h-5 w-5 text-primary" />
      case "bug":
        return <Bug className="h-5 w-5 text-primary" />
      case "git-branch":
        return <GitBranch className="h-5 w-5 text-primary" />
      case "puzzle":
        return <Puzzle className="h-5 w-5 text-primary" />
      case "users":
        return <Users className="h-5 w-5 text-primary" />
      case "library":
        return <Library className="h-5 w-5 text-primary" />
      case "play":
        return <Play className="h-5 w-5 text-primary" />
      case "code":
        return <Code className="h-5 w-5 text-primary" />
      default:
        return <Puzzle className="h-5 w-5 text-primary" />
    }
  }

  return (
    <div className={cn("", className)}>
      <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <Card key={feature.id} className="overflow-hidden">
            <CardContent className="p-4 flex items-start">
              <div className="mr-4 mt-1">{getIconComponent(feature.icon)}</div>
              <div>
                <h3 className="font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

