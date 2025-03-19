import { cn } from "@/lib/utils"
import { Button } from "@/components/elements/button"
import { ExternalLink, Share2, Bookmark, Heart } from "lucide-react"
import type { Resource } from "@/lib/resources"

interface ResourceActionsProps {
  resource: Resource
  className?: string
}

export function ResourceActions({ resource, className }: ResourceActionsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <Button asChild className="flex-1">
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4 mr-2" />
          Visit Website
        </a>
      </Button>

      <Button variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
        <span className="sr-only">Share</span>
      </Button>

      <Button variant="outline" size="icon">
        <Bookmark className="h-4 w-4" />
        <span className="sr-only">Save</span>
      </Button>

      <Button variant="outline" size="icon">
        <Heart className="h-4 w-4" />
        <span className="sr-only">Like</span>
      </Button>
    </div>
  )
}

