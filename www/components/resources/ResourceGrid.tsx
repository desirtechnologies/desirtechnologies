"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import type { Resource } from "@/lib/resources"
import { ResourceCard } from "./ResourceCard"

interface ResourceGridProps {
  resources?: Resource[]
  title?: string
  showFilters?: boolean
  filterByCategory?: string
  className?: string
  columns?: 1 | 2 | 3 | 4
}

export function ResourceGrid({
  resources = [],
  title,
  showFilters = true,
  filterByCategory,
  className,
  columns = 3,
}: ResourceGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [filteredTags, setFilteredTags] = useState<string[]>([])

  // Extract all unique tags from resources
  const allTags = Array.from(new Set(resources.flatMap((resource) => resource.tags)))

  // Filter and sort resources
  const filteredResources = resources
    .filter((resource) => {
      // Filter by search query
      const matchesSearch =
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      // Filter by category if specified
      const matchesCategory = filterByCategory ? resource.category === filterByCategory : true

      // Filter by selected tags
      const matchesTags = filteredTags.length === 0 || filteredTags.some((tag) => resource.tags.includes(tag))

      return matchesSearch && matchesCategory && matchesTags
    })
    .sort((a, b) => {
      if (sortBy === "featured") {
        // Featured resources first, then by rating
        if (a.isFeatured && !b.isFeatured) return -1
        if (!a.isFeatured && b.isFeatured) return 1
        return b.rating - a.rating
      } else if (sortBy === "rating") {
        // Sort by rating (highest first)
        return b.rating - a.rating
      } else {
        // Sort alphabetically by title
        return a.name.localeCompare(b.name)
      }
    })

  const toggleTag = (tag: string) => {
    setFilteredTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const getGridCols = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1"
      case 2:
        return "grid-cols-1 sm:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    }
  }

  // Check if resources exists and is an array
  if (!resources || !Array.isArray(resources) || resources.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-muted-foreground">No resources found.</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-full overflow-hidden">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}

      {showFilters && (
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 rounded-full w-full"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px] rounded-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-sm text-muted-foreground mr-2">Filter:</span>
              {allTags.slice(0, 10).map((tag) => (
                <Button
                  key={tag}
                  variant={filteredTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  className="rounded-full text-xs h-7"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Button>
              ))}
              {allTags.length > 10 && (
                <Button variant="ghost" size="sm" className="text-xs">
                  +{allTags.length - 10} more
                </Button>
              )}
            </div>
          )}
        </div>
      )}

      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No resources found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4 rounded-full"
            onClick={() => {
              setSearchQuery("")
              setFilteredTags([])
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className={cn(`grid ${getGridCols()} gap-6 w-full max-w-full`, className)}>
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  )
}

