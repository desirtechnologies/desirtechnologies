import type { Resource } from "@/lib/resources"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, DollarSign, Star } from "lucide-react"

interface ResourceMetaProps {
  resource: Resource
}

export function ResourceMeta({ resource }: ResourceMetaProps) {
  if (!resource) {
    return null
  }

  // Format date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    } catch (error) {
      return "Unknown date"
    }
  }

  // Get pricing label
  const getPricingLabel = () => {
    if (!resource.pricing) return "Unknown"

    switch (resource.pricing.type) {
      case "free":
        return "Free"
      case "freemium":
        return `Freemium (${resource.pricing.startingPrice || "Pricing varies"})`
      case "paid":
        return resource.pricing.startingPrice || "Paid"
      default:
        return "Unknown"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Resource Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            Added
          </div>
          <div>{formatDate(resource.dateAdded)}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="h-4 w-4 mr-2" />
            Pricing
          </div>
          <div>{getPricingLabel()}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-muted-foreground">
            <Star className="h-4 w-4 mr-2" />
            Rating
          </div>
          <div>{resource.rating.toFixed(1)} / 5.0</div>
        </div>
      </CardContent>
    </Card>
  )
}

