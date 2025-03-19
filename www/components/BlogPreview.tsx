"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/elements/card"
import { Badge } from "@/components/elements/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  tags: string[]
  slug: string
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
]

export default function BlogPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link href={`/blog/${post.slug}`} className="block h-full">
            <Card className="h-full overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-border/80">
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
  )
}

