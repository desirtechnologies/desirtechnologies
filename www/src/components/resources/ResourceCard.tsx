import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, ExternalLink } from "lucide-react"
import type { Resource } from "@/lib/resources"

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  if (!resource) {
    return null
  }

  // Safely extract category slug
  const categorySlug = resource.category ? resource.category.toLowerCase().replace(/\s+/g, "-") : ""

  // Ensure tags is an array
  const tags = Array.isArray(resource.tags) ? resource.tags : []

  // Format tags to ensure they all have the correct structure
  const formattedTags = tags.map((tag) => {
    if (typeof tag === "string") {
      return { id: tag, name: tag, slug: tag.toLowerCase().replace(/\s+/g, "-") }
    }
    return tag
  })

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={resource.coverImage || "/placeholder.svg?height=600&width=1200"}
          alt={resource.name}
          fill
          className="object-cover"
        />
        {resource.isFeatured && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Featured</Badge>
        )}
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{resource.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
            <span className="text-sm">{resource.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{resource.shortDescription}</p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {formattedTags.slice(0, 3).map((tag) => (
            <Badge key={tag.id} variant="outline" className="text-xs">
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <Link
          href={`/resources/${categorySlug}/${resource.slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          View Details
        </Link>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary flex items-center"
        >
          Visit <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </CardFooter>
    </Card>
  )
}

