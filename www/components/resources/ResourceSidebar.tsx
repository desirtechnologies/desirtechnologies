import Link from "next/link"
import { getResourceCategories, getFeaturedResources, getAllTags } from "@/lib/resources"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Folder, Tag, Star } from "lucide-react"

export async function ResourceSidebar() {
  const categories = await getResourceCategories()
  const featuredResources = await getFeaturedResources(3)
  const tags = await getAllTags()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Folder className="h-5 w-5 mr-2 text-primary" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/resources/${category.slug}`}
                  className="text-sm hover:text-primary flex items-center justify-between group"
                >
                  <span>{category.name}</span>
                  <Badge variant="outline" className="text-xs group-hover:bg-primary/10">
                    {category.count}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Star className="h-5 w-5 mr-2 text-primary" />
            Featured
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {featuredResources.map((resource) => (
              <li key={resource.id}>
                <Link
                  href={`/resources/${resource.category.toLowerCase().replace(/\s+/g, "-")}/${resource.slug}`}
                  className="text-sm hover:text-primary block"
                >
                  <div className="font-medium">{resource.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{resource.shortDescription}</div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Tag className="h-5 w-5 mr-2 text-primary" />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 10).map((tag) => (
              <Link key={tag.id} href={`/resources/tags/${tag.slug}`}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  {tag.name}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

