import type { Resource } from "@/lib/resources"
import { ResourceCard } from "./ResourceCard"

interface ResourceGridProps {
  resources: Resource[] | null | undefined
  title?: string
  filterByCategory?: string
}

export function ResourceGrid({ resources, title, filterByCategory }: ResourceGridProps) {
  // Add default empty array if resources is null or undefined
  const resourceList = resources || []

  // Filter by category if provided
  const filteredResources = filterByCategory
    ? resourceList.filter((resource) => resource.category === filterByCategory)
    : resourceList

  return (
    <div className="space-y-6">
      {title && <h2 className="text-2xl font-bold">{title}</h2>}

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No resources found</p>
        </div>
      )}
    </div>
  )
}

