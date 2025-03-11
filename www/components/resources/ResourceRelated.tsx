import { ResourceCard } from "./ResourceCard"
import type { Resource } from "@/lib/resources"

interface ResourceRelatedProps {
  currentResource: Resource
  allResources: Resource[]
  maxItems?: number
}

export function ResourceRelated({ currentResource, allResources, maxItems = 3 }: ResourceRelatedProps) {
  // Find resources with similar tags or in the same category
  const relatedResources = allResources
    .filter(
      (resource) =>
        // Don't include the current resource
        resource.id !== currentResource.id &&
        // Include if in same category or has at least one matching tag
        (resource.category === currentResource.category ||
          resource.tags.some((tag) => currentResource.tags.includes(tag))),
    )
    // Sort by number of matching tags (most matches first)
    .sort((a, b) => {
      const aMatches = a.tags.filter((tag) => currentResource.tags.includes(tag)).length
      const bMatches = b.tags.filter((tag) => currentResource.tags.includes(tag)).length
      return bMatches - aMatches
    })
    // Take only the specified number of items
    .slice(0, maxItems)

  if (relatedResources.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Related Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  )
}

