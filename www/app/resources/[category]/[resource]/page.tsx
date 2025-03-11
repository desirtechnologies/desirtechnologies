import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { getResourceBySlug, getResources, getResourceCategories } from "@/lib/resources"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ResourceMeta } from "@/components/resources/ResourceMeta"
import { ResourceFeatures } from "@/components/resources/ResourceFeatures"
import { ResourceActions } from "@/components/resources/ResourceActions"
import { ResourceReviews } from "@/components/resources/ResourceReviews"
import { ResourceRelated } from "@/components/resources/ResourceRelated"
import { ResourceTags } from "@/components/resources/ResourceTags"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star } from "lucide-react"

interface ResourcePageProps {
  params: {
    category: string
    resource: string
  }
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { category: categorySlug, resource: resourceSlug } = params
  const resource = await getResourceBySlug(categorySlug, resourceSlug)

  if (!resource) {
    return {
      title: "Resource Not Found",
    }
  }

  return {
    title: `${resource.name} | Desir Technologies Resources`,
    description: resource.shortDescription,
    openGraph: {
      images: [resource.coverImage],
    },
  }
}

export async function generateStaticParams() {
  const resources = await getResources()
  const categories = await getResourceCategories()

  return resources.map((resource) => {
    const category = categories.find((c) => c.name === resource.category)
    return {
      category: category?.slug || "",
      resource: resource.slug,
    }
  })
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { category: categorySlug, resource: resourceSlug } = params
  const resource = await getResourceBySlug(categorySlug, resourceSlug)

  if (!resource) {
    notFound()
  }

  const allResources = await getResources()
  const categories = await getResourceCategories()
  const category = categories.find((c) => c.slug === categorySlug)

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: category?.name || resource.category, href: `/resources/${categorySlug}` },
    { label: resource.name, href: `/resources/${categorySlug}/${resourceSlug}`, active: true },
  ]

  // Ensure tags are properly formatted
  const formattedTags = Array.isArray(resource.tags)
    ? resource.tags.map((tag) =>
        typeof tag === "string" ? { id: tag, name: tag, slug: tag.toLowerCase().replace(/\s+/g, "-") } : tag,
      )
    : []

  return (
    <div className="container py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={resource.coverImage || "/placeholder.svg?height=600&width=1200"}
                alt={resource.name}
                fill
                className="object-cover"
                priority
              />
              {resource.isFeatured && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Featured</Badge>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-muted relative">
                <Image
                  src={resource.logo || "/placeholder.svg?height=200&width=200"}
                  alt={`${resource.name} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{resource.name}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>{resource.category}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                    <span>{resource.rating.toFixed(1)}</span>
                  </div>
                  <span>•</span>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    Visit site
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <ResourceTags tags={formattedTags} />

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">{resource.description}</p>
            </div>
          </div>

          <ResourceFeatures features={resource.features} />

          <ResourceReviews reviews={resource.reviews} />
        </div>

        <div className="space-y-8">
          <ResourceActions resource={resource} />

          <ResourceMeta resource={resource} />
        </div>
      </div>

      <div className="mt-16">
        <ResourceRelated currentResource={resource} allResources={allResources} />
      </div>
    </div>
  )
}

