import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { ResourceFeatured } from "./ResourceFeatured"

interface ResourcesSectionHomeProps {
  className?: string
}

export function ResourcesSectionHome({ className }: ResourcesSectionHomeProps) {
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
          <Button asChild className="mt-4 md:mt-0">
            <Link href="/resources">
              Browse All Resources
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <ResourceFeatured />
      </div>
    </section>
  )
}

