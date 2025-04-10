import Link from "next/link"
import type { ResourceCategory } from "@/lib/resources"
import { Card, CardContent } from "@/components/ui/card"
import * as Icons from "lucide-react"

interface ResourceCategoriesProps {
  categories: ResourceCategory[] | undefined
}

export function ResourceCategories({ categories }: ResourceCategoriesProps) {
  // If categories is undefined or empty, return a placeholder
  if (!categories || categories.length === 0) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-muted-foreground">No categories found</p>
      </div>
    )
  }

  // Function to dynamically get icon component
  const getIconComponent = (iconName: string) => {
    // Default to a generic icon if the requested one doesn't exist
    return (Icons as any)[iconName] || Icons.Folder
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => {
          const IconComponent = getIconComponent(category.icon)

          return (
            <Link key={category.id} href={`/resources/${category.slug}`}>
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${category.color}`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{category.count} resources</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

