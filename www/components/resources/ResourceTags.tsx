import Link from "next/link"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/elements/badge"
import type { ResourceTag } from "@/lib/resources"

interface ResourceTagsProps {
  tags: ResourceTag[] | string[]
  className?: string
}

export function ResourceTags({ tags, className }: ResourceTagsProps) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => {
        // Check if tag is an object or a string
        if (typeof tag === "object" && tag !== null) {
          return (
            <Link key={tag.id} href={`/resources/tags/${tag.slug}`}>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                {tag.name}
              </Badge>
            </Link>
          )
        } else {
          // Handle string tags
          return (
            <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
              {tag}
            </Badge>
          )
        }
      })}
    </div>
  )
}

