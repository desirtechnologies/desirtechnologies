import { cn } from "@/lib/utils"
import { Badge } from "@/components/elements/badge"
import { Code, PenTool, Zap, TrendingUp, Rocket, Cpu } from "lucide-react"
import type { ResourceCategory } from "@/lib/resources"

interface ResourceCategoryInfoProps {
  category: ResourceCategory
  className?: string
}

export function ResourceCategoryInfo({ category, className }: ResourceCategoryInfoProps) {
  // Map category icons to Lucide components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-6 w-6 text-white" />
      case "pen-tool":
        return <PenTool className="h-6 w-6 text-white" />
      case "zap":
        return <Zap className="h-6 w-6 text-white" />
      case "trending-up":
        return <TrendingUp className="h-6 w-6 text-white" />
      case "rocket":
        return <Rocket className="h-6 w-6 text-white" />
      case "cpu":
        return <Cpu className="h-6 w-6 text-white" />
      default:
        return <Code className="h-6 w-6 text-white" />
    }
  }

  return (
    <div className={cn("", className)}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
          {getIconComponent(category.icon)}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{category.name}</h1>
          <div className="text-muted-foreground">{category.count} resources</div>
        </div>
      </div>

      <p className="text-lg mb-6">{category.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {category.keywords.map((keyword, index) => (
          <Badge key={index} variant="secondary" className="font-normal">
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  )
}

