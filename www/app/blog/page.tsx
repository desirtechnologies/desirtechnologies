"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import TopNav from "@/components/TopNav"
import BottomNav from "@/components/BottomNav"
import SpeedDial from "@/components/SpeedDial"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  tags: string[]
  slug: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Neumorphic UI Components with Tailwind CSS",
    excerpt: "Learn how to create modern neumorphic UI elements using Tailwind CSS utility classes and custom shadows.",
    date: "March 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI Design", "Tailwind CSS", "Frontend"],
    slug: "building-neumorphic-ui-components",
    featured: true,
  },
  {
    id: 2,
    title: "Optimizing React Performance with Memo and useCallback",
    excerpt:
      "Discover techniques to improve your React application's performance by preventing unnecessary re-renders.",
    date: "February 28, 2023",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Performance", "JavaScript"],
    slug: "optimizing-react-performance",
  },
  {
    id: 3,
    title: "Creating Animated Layouts with Framer Motion",
    excerpt:
      "A comprehensive guide to building smooth, physics-based animations in your React applications using Framer Motion.",
    date: "January 10, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Animation", "Framer Motion", "React"],
    slug: "creating-animated-layouts",
  },
  {
    id: 4,
    title: "The Future of Web Development: WebAssembly and WASM",
    excerpt: "Exploring how WebAssembly is changing the landscape of web development and enabling new possibilities.",
    date: "December 5, 2022",
    readTime: "15 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["WebAssembly", "Future Tech", "Performance"],
    slug: "future-of-web-development-wasm",
  },
  {
    id: 5,
    title: "Building a Serverless API with Next.js and Vercel",
    excerpt: "Step-by-step guide to creating a serverless API using Next.js API routes and deploying it on Vercel.",
    date: "November 18, 2022",
    readTime: "11 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Serverless", "Vercel"],
    slug: "serverless-api-nextjs-vercel",
    featured: true,
  },
  {
    id: 6,
    title: "Implementing Dark Mode in Your Web Application",
    excerpt: "Learn different strategies for adding dark mode support to your website or web application.",
    date: "October 22, 2022",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["CSS", "UX Design", "Accessibility"],
    slug: "implementing-dark-mode",
  },
  {
    id: 7,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt: "A beginner-friendly guide to TypeScript for developers already familiar with JavaScript.",
    date: "September 14, 2022",
    readTime: "14 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    slug: "introduction-to-typescript",
  },
  {
    id: 8,
    title: "Mastering CSS Grid Layout",
    excerpt: "Deep dive into CSS Grid Layout and how it can revolutionize your web design approach.",
    date: "August 30, 2022",
    readTime: "13 min read",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["CSS", "Web Design", "Layout"],
    slug: "mastering-css-grid-layout",
  },
]

export default function BlogPage() {
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  // Filter posts based on search term and active tag
  useEffect(() => {
    let filtered = blogPosts

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (activeTag) {
      filtered = filtered.filter((post) => post.tags.includes(activeTag))
    }

    setFilteredPosts(filtered)
  }, [searchTerm, activeTag])

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Find featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 transition-colors duration-300">
        <TopNav />

        <PageTransition>
          {/* Hero Section */}
          <section className="container mx-auto px-4 pt-32 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Blog</span>
              </h1>
              <p className="text-lg text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto">
                Insights, tutorials, and thoughts on web development, design, and technology.
              </p>
            </div>
          </section>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="container mx-auto px-4 pb-16">
              <h2 className="text-2xl md:text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-8">
                Featured Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <Card className="h-full overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
                        <div className="relative h-60 w-full overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-primary/80 text-primary-foreground">Featured</Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {post.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="bg-primary/10 text-primary border-primary/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <CardTitle className="line-clamp-2 text-2xl">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Search and Filter */}
          <section className="container mx-auto px-4 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant={activeTag === null ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setActiveTag(null)}
                >
                  All
                </Button>
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={activeTag === tag ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </section>

          {/* All Posts */}
          <section className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <Card className="h-full overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <Footer />
          <BottomNav />
          <SpeedDial />
        </PageTransition>
      </div>
    </ThemeProvider>
  )
}

