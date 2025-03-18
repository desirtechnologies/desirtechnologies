import type { Metadata } from "next"
import { getResources, getResourceCategories } from "@/lib/resources"
import { ResourceGrid } from "@/components/resources/ResourceGrid"
import { ResourceFeatured } from "@/components/resources/ResourceFeatured"
import { ResourceCategories } from "@/components/resources/ResourceCategories"

export const metadata: Metadata = {
  title: "Developer Resources | Desir Technologies",
  description: "Discover the best tools, libraries, and resources for developers, designers, and tech professionals.",
}

export default async function ResourcesPage() {
  try {

    return (
      <div className="container py-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Developer Resources</h1>
          <p className="text-xl text-muted-foreground">
            Discover the best tools, libraries, and resources for developers, designers, and tech professionals.
          </p>
        </div>

     

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">All Resources</h2>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error loading resources:", error)
    return (
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-4">Developer Resources</h1>
        <p>There was an error loading the resources. Please try again later.</p>
      </div>
    )
  }
}

