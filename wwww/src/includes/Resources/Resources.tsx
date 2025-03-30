import React from "react"

// Assume these utility and UI component imports are available and work statically
// If using Shadcn UI, these would typically work outside Next.js
// Make sure these libraries/components are installed and imported correctly in your project
import { cn } from "@/lib/utils" // Utility for class names
import { Button } from "@/components/ui/button" // Button component
import { Card, CardContent } from "@/components/ui/card" // Card components
import { Badge } from "@/components/ui/badge" // Badge component
import { ChevronRight, ArrowRight } from "lucide-react" // Icons

// --- Data Structure Definition ---

// Define the structure for a single resource item
// Added 'url' for direct linking without Next.js routing logic
export interface Resource {
  id: string | number
  name: string
  shortDescription: string
  coverImage?: string // URL for the cover image
  category?: string // Optional category name
  isFeatured: boolean // Flag for featured resources
  url: string // Direct URL to the resource detail page/external link
}

// --- Presentational Components ---

// Props for the Featured Resource Card component
interface ResourceCardProps {
  resource: Resource
}

/**
 * ResourceCard Component: Renders a single resource card.
 * It is purely presentational and receives all data via props.
 */
export function ResourceCard({ resource }: ResourceCardProps) {
  // Use a placeholder image if coverImage is not provided
  const imageSrc = resource.coverImage || "/placeholder.svg?height=600&width=1200" // Adjust placeholder as needed

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      {/* Image Container with aspect ratio */}
      <div className="relative aspect-video">
        {/* Use standard img tag */}
        <img
          src={imageSrc}
          alt={resource.name}
          // Apply styles directly or via CSS classes to mimic fill and object-cover
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy" // Add lazy loading for performance
        />
        {/* Display Badge if the resource is featured */}
        {resource.isFeatured && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-2">{resource.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {resource.shortDescription}
        </p>
        {/* Use standard anchor tag for navigation */}
        <a
          href={resource.url}
          target="_blank" // Optional: open in new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className="text-sm font-medium text-primary hover:underline mt-auto inline-flex items-center" // Added inline-flex for alignment
        >
          Learn more
          {/* Optional: Add an arrow icon */}
          {/* <ArrowRight className="ml-1 h-4 w-4" /> */}
        </a>
      </CardContent>
    </Card>
  )
}

// Props for the Featured Resources Grid component
interface ResourceFeaturedProps {
  featuredResources: Resource[] // Expects an array of resources already filtered
  allResourcesUrl: string // URL for the "View all" link
}

/**
 * ResourceFeatured Component: Renders a grid of featured resource cards.
 * It is purely presentational.
 */
export function ResourceFeatured({ featuredResources, allResourcesUrl }: ResourceFeaturedProps) {
  // If no featured resources are provided, render nothing or a placeholder
  if (!featuredResources || featuredResources.length === 0) {
    // Optionally return a message or null
    // return <p className="text-muted-foreground">No featured resources available.</p>;
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Resources</h2>
        {/* Use standard anchor tag for navigation */}
        <a href={allResourcesUrl}>
          <Button variant="ghost" className="gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>

      {/* Grid layout for resource cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map over the featured resources and render a ResourceCard for each */}
        {featuredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  )
}

// Props for the main Resources Section component
interface ResourcesSectionHomeProps {
  featuredResources: Resource[] // Pass the pre-filtered featured resources
  allResourcesUrl: string // URL for the "Browse All Resources" button/link
  className?: string
}

/**
 * ResourcesSectionHome Component: Renders the entire developer resources section.
 * Contains title, description, a link to all resources, and the featured resources grid.
 * It is purely presentational.
 */
export function ResourcesSectionHome({
  featuredResources,
  allResourcesUrl,
  className,
}: ResourcesSectionHomeProps) {
  return (
    <section className={cn("py-12", className)}>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Developer Resources</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover curated tools, libraries, and services to enhance your development workflow and boost
              productivity.
            </p>
          </div>
          {/* Use standard anchor tag wrapped in Button component styling */}
          <Button asChild className="mt-4 md:mt-0">
            {/* The 'asChild' prop on Button often works by rendering its child directly,
                so we provide an anchor tag here. Ensure your Button component supports this.
                If not, you might need to style an anchor tag like a button. */}
            <a href={allResourcesUrl}>
              Browse All Resources
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Render the featured resources grid, passing down the necessary props */}
        <ResourceFeatured
            featuredResources={featuredResources}
            allResourcesUrl={allResourcesUrl}
        />
      </div>
    </section>
  )
}

// --- Example Usage (Illustrative) ---

/*
// This is how you might use the ResourcesSectionHome component in a static setup
// or within a framework component that fetches/defines the data.

// 1. Define your static data (or fetch it elsewhere)
const sampleResources: Resource[] = [
  {
    id: 1,
    name: "Awesome Tool A",
    shortDescription: "A fantastic tool that does amazing things for developers.",
    coverImage: "https://via.placeholder.com/1200x600/aabbcc/ffffff?text=Tool+A",
    category: "Tools",
    isFeatured: true,
    url: "/resource-details/tool-a", // Example static URL
  },
  {
    id: 2,
    name: "Helpful Library B",
    shortDescription: "Streamline your workflow with this essential library.",
    coverImage: "https://via.placeholder.com/1200x600/ddeeff/000000?text=Library+B",
    category: "Libraries",
    isFeatured: true,
    url: "/resource-details/library-b",
  },
  {
    id: 3,
    name: "Cloud Service C",
    shortDescription: "Deploy and scale applications effortlessly.",
    // No cover image - will use placeholder
    category: "Services",
    isFeatured: true,
    url: "https://example.com/service-c", // Example external URL
  },
   {
    id: 4,
    name: "Documentation Site D",
    shortDescription: "Comprehensive guides and API references.",
    category: "Documentation",
    isFeatured: false, // Not featured
    url: "/resource-details/docs-d",
  },
];

// 2. Filter featured resources (this logic lives outside the presentational components)
const featured = sampleResources.filter(res => res.isFeatured).slice(0, 3);

// 3. Define the URL for the main resources page
const allResourcesPageUrl = "/all-resources"; // Example static URL

// 4. Render the main section component, passing the data as props
function App() {
  return (
    <div>
      { // Other page content }
      <ResourcesSectionHome
        featuredResources={featured}
        allResourcesUrl={allResourcesPageUrl}
        className="bg-gray-50" // Optional custom styling
      />
      { // Other page content }
    </div>
  );
}

*/