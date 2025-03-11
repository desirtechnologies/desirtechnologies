import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getResourcesByCategory, getResourceCategories } from "@/lib/resources"
import { ResourceGrid } from "@/components/resources/ResourceGrid"
import { ResourceCategoryInfo } from "@/components/resources/ResourceCategoryInfo"
import { Breadcrumbs } from "@/components/Breadcrumbs"

interface ResourceCategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: ResourceCategoryPageProps): Promise<Metadata> {
  const categorySlug = params.category
  const categories = await getResourceCategories()
  const category = categories.find((c) => c.slug === categorySlug)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${category.name} Resources | Desir Technologies`,
    description: category.description,
  }
}

export async function generateStaticParams() {
  const categories = await getResourceCategories()

  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function ResourceCategoryPage({ params }: ResourceCategoryPageProps) {
  const categorySlug = params.category
  const categories = await getResourceCategories()
  const category = categories.find((c) => c.slug === categorySlug)

  if (!category) {
    notFound()
  }

  const resources = await getResourcesByCategory(categorySlug)

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: category.name, href: `/resources/${categorySlug}`, active: true },
  ]

  return (
    <div className="container py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <ResourceCategoryInfo category={category} />

      <div className="mt-12">
        <ResourceGrid resources={resources} title={`${category.name} Resources`} filterByCategory={category.name} />
      </div>
    </div>
  )
}

