import { ResourceCard } from "./ResourceCard"
import type { Resource } from "@/lib/resources"

interface ResourceFeaturedProps {
  resources?: Resource[]
}

export function ResourceFeatured({ resources = [] }: ResourceFeaturedProps) {
  // Check if resources exists and is an array before filtering
  if (!resources || !Array.isArray(resources) || resources.length === 0) {
    return null
  }

  // Filter to only featured resources and take the first 3
  const featuredResources = resources.filter((resource) => resource.isFeatured).slice(0, 3)

  if (featuredResources.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Featured Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  )
}

