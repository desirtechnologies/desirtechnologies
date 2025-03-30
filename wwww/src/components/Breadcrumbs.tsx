import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
}

export function Breadcrumbs({ items = [] }: BreadcrumbsProps) {
  // If no items provided, return null
  if (!items || items.length === 0) {
    return null
  }

  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}

            {isLast || item.active ? (
              <span className="font-medium text-foreground">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

