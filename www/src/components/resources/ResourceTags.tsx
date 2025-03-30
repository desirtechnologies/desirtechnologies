import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { ResourceTag } from "@/lib/resources"

interface ResourceTagsProps {
  tags: (ResourceTag | string)[] | undefined
  className?: string
}

export function ResourceTags({ tags, className = "" }: ResourceTagsProps) {
  // If tags is undefined or empty, return null
  if (!tags || tags.length === 0) {
    return null
  }

  // Format tags to ensure they all have the correct structure
  const formattedTags = tags.map((tag) => {
    if (typeof tag === "string") {
      return { id: tag, name: tag, slug: tag.toLowerCase().replace(/\s+/g, "-") }
    }
    return tag
  })

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {formattedTags.map((tag) => (
        <Link key={tag.id} href={`/resources/tags/${tag.slug}`}>
          <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
            {tag.name}
          </Badge>
        </Link>
      ))}
    </div>
  )
}

