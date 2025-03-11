import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Calendar, Link2, ExternalLink } from "lucide-react"
import type { Resource } from "@/lib/resources"

interface ResourceMetaProps {
  resource: Resource
  className?: string
}

export function ResourceMeta({ resource, className }: ResourceMetaProps) {
  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground", className)}>
      <div className="flex items-center">
        <Calendar className="h-4 w-4 mr-2" />
        <span>Added on {formatDate(resource.dateAdded)}</span>
      </div>

      <div className="flex items-center">
        <Link2 className="h-4 w-4 mr-2" />
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary flex items-center"
        >
          {new URL(resource.url).hostname.replace("www.", "")}
          <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </div>

      <div className="flex items-center">
        {resource.pricing.type === "free" ? (
          <Badge variant="outline" className="font-normal">
            Free
          </Badge>
        ) : resource.pricing.type === "freemium" ? (
          <Badge variant="outline" className="font-normal">
            Freemium
          </Badge>
        ) : resource.pricing.type === "subscription" ? (
          <Badge variant="outline" className="font-normal">
            Subscription {resource.pricing.startingPrice && `(from ${resource.pricing.startingPrice})`}
          </Badge>
        ) : (
          <Badge variant="outline" className="font-normal">
            Paid {resource.pricing.startingPrice && `(from ${resource.pricing.startingPrice})`}
          </Badge>
        )}
      </div>
    </div>
  )
}

