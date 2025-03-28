import Link from "next/link"
import Image from "next/image"
import type { Resource } from "@/lib/resources"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ResourceFeaturedProps {
  resources: Resource[] | undefined
}

export function ResourceFeatured({ resources }: ResourceFeaturedProps) {
  // If resources is undefined or empty, return null or a placeholder
  if (!resources || resources.length === 0) {
    return null
  }

  // Get featured resources
  const featuredResources = resources.filter((resource) => resource.isFeatured).slice(0, 3)

  if (featuredResources.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Resources</h2>
        <Link href="/resources">
          <Button variant="ghost" className="gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featuredResources.map((resource) => {
          // Safely extract category slug
          const categorySlug = resource.category ? resource.category.toLowerCase().replace(/\s+/g, "-") : ""

          return (
            <Card key={resource.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative aspect-video">
                <Image
                  src={resource.coverImage || "/placeholder.svg?height=600&width=1200"}
                  alt={resource.name}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Featured</Badge>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="font-semibold text-lg mb-2">{resource.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{resource.shortDescription}</p>
                <Link
                  href={`/resources/${categorySlug}/${resource.slug}`}
                  className="text-sm font-medium text-primary hover:underline mt-auto"
                >
                  Learn more
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

