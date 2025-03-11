import Link from "next/link"
import type { ResourceCategory } from "@/lib/resources"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import * as Icons from "lucide-react"

interface ResourceCategoriesProps {
  categories?: ResourceCategory[]
}

export function ResourceCategories({ categories = [] }: ResourceCategoriesProps) {
  // Check if categories exists and is an array
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Browse by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => {
          // Dynamically get the icon component
          const IconComponent =
            (Icons as Record<string, LucideIcon>)[category.icon.charAt(0).toUpperCase() + category.icon.slice(1)] ||
            Icons.Folder

          return (
            <Link
              key={category.id}
              href={`/resources/${category.slug}`}
              className={cn(
                "flex items-center p-4 rounded-lg transition-colors",
                "bg-card hover:bg-card/80 border border-border",
              )}
            >
              <div className={cn("p-2 rounded-md mr-4", category.color)}>
                <IconComponent className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} resources</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

