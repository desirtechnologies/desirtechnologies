import type { ResourceFeature } from "@/lib/resources"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import * as Icons from "lucide-react"

interface ResourceFeaturesProps {
  features: ResourceFeature[] | undefined
}

export function ResourceFeatures({ features }: ResourceFeaturesProps) {
  // If features is undefined or empty, return null or a placeholder
  if (!features || features.length === 0) {
    return null
  }

  // Function to dynamically get icon component
  const getIconComponent = (iconName: string): LucideIcon => {
    // Default to a generic icon if the requested one doesn't exist
    return (Icons as any)[iconName] || Icons.CircleDot
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => {
          const IconComponent = feature.icon ? getIconComponent(feature.icon) : Icons.Check

          return (
            <Card key={feature.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

