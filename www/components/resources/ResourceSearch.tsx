"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface ResourceSearchProps {
  category?: string
  className?: string
}

export function ResourceSearch({ category, className }: ResourceSearchProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams?.get("q") || "")

  useEffect(() => {
    // Update search query when URL changes
    const query = searchParams?.get("q")
    if (query !== null && query !== searchQuery) {
      setSearchQuery(query || "")
    }
  }, [searchParams, searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Construct the search URL
    let url = category ? `/resources/${category.toLowerCase().replace(/\s+/g, "-")}` : "/resources"

    if (searchQuery) {
      url += `?q=${encodeURIComponent(searchQuery)}`
    }

    router.push(url)
  }

  const clearSearch = () => {
    setSearchQuery("")

    // Navigate to the base URL without query
    const url = category ? `/resources/${category.toLowerCase().replace(/\s+/g, "-")}` : "/resources"

    router.push(url)
  }

  return (
    <form onSubmit={handleSearch} className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={category ? `Search in ${category}...` : "Search resources..."}
          className="pl-10 pr-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-12 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
      <Button type="submit" size="sm" className="absolute right-0 top-0 h-full rounded-l-none">
        Search
      </Button>
    </form>
  )
}

