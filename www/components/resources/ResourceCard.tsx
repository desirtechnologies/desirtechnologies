import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/elements/card"
import { Badge } from "@/components/elements/badge"
import { ExternalLink, Star } from "lucide-react"
import { ResourceTags } from "./ResourceTags"
import type { Resource } from "@/lib/resources"

interface ResourceCardProps {
  resource: Resource
  className?: string
}

export function ResourceCard({ resource, className }: ResourceCardProps) {
  const categorySlug = resource.category.toLowerCase().replace(/\s+/g, "-")

  // Ensure tags are properly formatted
  const formattedTags = Array.isArray(resource.tags)
    ? resource.tags.map((tag) =>
        typeof tag === "string" ? { id: tag, name: tag, slug: tag.toLowerCase().replace(/\s+/g, "-") } : tag,
      )
    : []

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md rounded-xl neumorphic", className)}>
      <div className="aspect-video relative overflow-hidden bg-muted">
        <Image
          src={resource.coverImage || "/placeholder.svg?height=600&width=1200"}
          alt={resource.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {resource.isFeatured && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Featured</Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-8 w-8 rounded-full overflow-hidden bg-muted relative flex-shrink-0">
            <Image
              src={resource.logo || "/placeholder.svg?height=200&width=200"}
              alt={`${resource.name} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Link
              href={`/resources/${categorySlug}/${resource.slug}`}
              className="font-medium hover:text-primary transition-colors line-clamp-1"
            >
              {resource.name}
            </Link>
            <div className="text-xs text-muted-foreground">
              <Link href={`/resources/${categorySlug}`} className="hover:text-foreground">
                {resource.category}
              </Link>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{resource.shortDescription}</p>

        <ResourceTags tags={formattedTags.slice(0, 3)} className="mb-2" />

        <div className="flex items-center text-sm text-muted-foreground mt-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-500 mr-1" />
            <span>{resource.rating.toFixed(1)}</span>
          </div>
          <span className="mx-2">•</span>
          <div>
            {resource.pricing.type === "free" ? (
              <Badge variant="outline" className="font-normal text-xs rounded-full">
                Free
              </Badge>
            ) : resource.pricing.type === "freemium" ? (
              <Badge variant="outline" className="font-normal text-xs rounded-full">
                Freemium
              </Badge>
            ) : (
              <Badge variant="outline" className="font-normal text-xs rounded-full">
                {resource.pricing.startingPrice ? `From ${resource.pricing.startingPrice}` : "Paid"}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link href={`/resources/${categorySlug}/${resource.slug}`} className="text-xs text-primary hover:underline">
          View details
        </Link>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs flex items-center text-muted-foreground hover:text-primary"
        >
          Visit site
          <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </CardFooter>
    </Card>
  )
}

