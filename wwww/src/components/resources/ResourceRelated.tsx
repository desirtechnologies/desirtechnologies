import type { Resource } from "@/lib/resources"
import { ResourceCard } from "./ResourceCard"

interface ResourceRelatedProps {
  currentResource: Resource
  allResources: Resource[] | undefined
}

export function ResourceRelated({ currentResource, allResources }: ResourceRelatedProps) {
  // If allResources is undefined or empty, return null
  if (!allResources || allResources.length === 0) {
    return null
  }

  // Get related resources based on category and tags
  const relatedResources = allResources
    .filter((resource) => {
      // Skip the current resource
      if (resource.id === currentResource.id) return false

      // Check if category matches
      const categoryMatch = resource.category === currentResource.category

      // Check if any tags match
      const currentTags = currentResource.tags.map((tag) => (typeof tag === "string" ? tag : tag.name))

      const resourceTags = resource.tags.map((tag) => (typeof tag === "string" ? tag : tag.name))

      const tagMatch = currentTags.some((tag) => resourceTags.includes(tag))

      // Return true if either category or tags match
      return categoryMatch || tagMatch
    })
    .slice(0, 3) // Limit to 3 related resources

  if (relatedResources.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Related Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  )
}

