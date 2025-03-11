"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import TopNav from "@/components/TopNav"
import BottomNav from "@/components/BottomNav"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, Calendar, Clock, Tag, CheckCircle, Code, Server, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TerminalSection from "@/components/TerminalSection"
import MatrixParticles from "@/components/MatrixParticles"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import Head from "next/head"

// Mock data for projects - same as the file you provided
const projectsData = {
  "web-development": {
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      client: "RetailTech Inc.",
      date: "January 2023",
      duration: "3 months",
      description:
        "A comprehensive e-commerce solution built for a retail client, featuring product management, inventory tracking, secure checkout, and customer accounts.",
      longDescription:
        "This e-commerce platform was designed to provide a seamless shopping experience while giving the client powerful tools to manage their online store. The solution includes advanced product filtering, real-time inventory updates, secure payment processing with Stripe, and a customer account system with order history and saved payment methods.\n\nThe admin dashboard provides comprehensive analytics, order management, and product catalog tools. The platform was built with performance and SEO in mind, achieving excellent Core Web Vitals scores and high search engine rankings.",
      challenge:
        "The client needed a solution that could handle their extensive product catalog (10,000+ SKUs) while maintaining fast load times and providing a smooth user experience across all devices.",
      solution:
        "We implemented a hybrid rendering approach with Next.js, using static generation for product category pages and server-side rendering for individual product pages. This, combined with efficient data fetching patterns and image optimization, resulted in excellent performance metrics.",
      results: [
        "40% increase in conversion rate compared to the client's previous platform",
        "65% improvement in page load times",
        "25% reduction in cart abandonment",
        "Seamless integration with existing inventory management systems",
      ],
      technologies: {
        frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        backend: ["Node.js", "Express", "PostgreSQL"],
        infrastructure: ["Vercel", "AWS S3", "Redis", "GitHub Actions"],
      },
      features: [
        "Responsive design optimized for all devices",
        "Advanced product filtering and search",
        "Secure payment processing with Stripe",
        "Customer accounts with order history",
        "Admin dashboard with analytics",
        "Inventory management system",
        "SEO optimization",
      ],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      videoSrc: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
      testimonial: {
        quote:
          "The e-commerce platform developed by Desir Technologies has transformed our online business. The attention to detail and focus on performance has resulted in a significant increase in sales and customer satisfaction.",
        author: "Sarah Johnson",
        position: "CTO, RetailTech Inc.",
      },
    },
    // Other projects...
  },
  "mobile-apps": {
    "fitness-tracker": {
      title: "Fitness Tracker App",
      client: "HealthFit",
      date: "March 2023",
      duration: "4 months",
      description:
        "A comprehensive fitness tracking mobile application for iOS and Android that helps users monitor workouts, nutrition, and health metrics.",
      longDescription:
        "The Fitness Tracker app was designed to provide users with a complete health and fitness solution in one application. It allows users to track workouts with detailed exercise instructions, monitor nutrition with a food database and barcode scanner, and record health metrics like weight, body measurements, and sleep quality.\n\nThe app integrates with HealthKit on iOS and Google Fit on Android to provide a comprehensive view of the user's health data. It also includes social features that allow users to connect with friends, share achievements, and participate in challenges.",
      challenge:
        "Creating a cross-platform solution that provides a native-feeling experience while maintaining consistent functionality across iOS and Android, with seamless health data integration.",
      solution:
        "We used React Native with TypeScript to build a performant cross-platform application, with native modules for platform-specific integrations. Custom UI components were created to ensure a native feel on each platform while maintaining a consistent brand identity. We implemented efficient state management with Redux and optimized data synchronization to work well even with intermittent connectivity.",
      results: [
        "85,000+ downloads within the first three months",
        "4.8/5 average rating on both App Store and Google Play",
        "78% user retention rate after 30 days",
        "Featured in the 'Health & Fitness' category on both app stores",
      ],
      technologies: {
        frontend: ["React Native", "TypeScript", "Redux", "Styled Components"],
        backend: ["Node.js", "Express", "MongoDB", "Socket.IO"],
        infrastructure: ["AWS Amplify", "Firebase", "App Center", "GitHub Actions"],
      },
      features: [
        "Workout tracking with 500+ exercises",
        "Nutrition tracking with barcode scanner",
        "Health metrics monitoring",
        "Social features and challenges",
        "Personalized workout recommendations",
        "Progress visualization with charts",
        "Offline functionality",
      ],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
      liveUrl: "https://example.com/app",
      githubUrl: "https://github.com/example/fitness-app",
      testimonial: {
        quote:
          "Working with Desir Technologies on our fitness app was a game-changer. Their technical expertise and understanding of the fitness industry resulted in an app that our users love.",
        author: "Michael Chen",
        position: "CEO, HealthFit",
      },
    },
    // Other projects...
  },
  // Other categories...
}

// Default project data for projects not explicitly defined
const defaultProjectData = {
  title: "Project Details",
  client: "Client Name",
  date: "2023",
  duration: "3 months",
  description: "A showcase of our capabilities in this field.",
  longDescription: "This project demonstrates our expertise and innovative approach to solving complex problems.",
  challenge: "The client faced specific challenges that required a custom solution.",
  solution: "We developed a tailored approach that addressed all the client's requirements.",
  results: [
    "Successful implementation with positive client feedback",
    "Improved efficiency and performance",
    "Enhanced user experience",
  ],
  technologies: {
    frontend: ["React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express", "MongoDB"],
    infrastructure: ["Vercel", "AWS", "Docker"],
  },
  features: ["Responsive design", "Intuitive user interface", "Scalable architecture"],
  images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
  videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example/project",
  testimonial: {
    quote: "Desir Technologies delivered an exceptional solution that exceeded our expectations.",
    author: "Client Name",
    position: "Position, Company",
  },
}

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const categoryId = params?.category as string
  const projectId = params?.project as string
  const [mounted, setMounted] = useState(false)

  // Format names for display
  const formatName = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Get project data or use default if not found
  const categoryProjects = projectsData[categoryId as keyof typeof projectsData] || {}
  const projectData = (categoryProjects as any)[projectId] || {
    ...defaultProjectData,
    title: formatName(projectId),
  }

  // Terminal commands for the tech stack section
  const terminalCommands = [
    `$ cd /projects/${categoryId}/${projectId}`,
    "$ cat package.json",
    JSON.stringify(
      {
        name: projectId,
        version: "1.0.0",
        dependencies: Object.entries(projectData.technologies).reduce(
          (acc, [key, value]) => {
            ;(value as string[]).forEach((tech) => {
              acc[tech.toLowerCase().replace(/\s/g, "-")] = "^1.0.0"
            })
            return acc
          },
          {} as Record<string, string>,
        ),
      },
      null,
      2,
    ),
    "$ git log --oneline -5",
    "a1b2c3d Deploy production build",
    "e4f5g6h Fix responsive layout issues",
    "i7j8k9l Add new feature: user profiles",
    "m0n1o2p Optimize database queries",
    "q3r4s5t Initial commit",
  ]

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Create breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: formatName(categoryId), href: `/projects/${categoryId}` },
    { label: projectData.title, href: `/projects/${categoryId}/${projectId}` },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Head>
        <title>
          {projectData.title} | {formatName(categoryId)} Projects | Desir Technologies
        </title>
        <meta name="description" content={projectData.description} />
        <meta
          property="og:title"
          content={`${projectData.title} | ${formatName(categoryId)} Projects | Desir Technologies`}
        />
        <meta property="og:description" content={projectData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://desirtechnologies.com/projects/${categoryId}/${projectId}`} />
        <meta property="og:image" content="https://desirtechnologies.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${projectData.title} | Desir Technologies`} />
        <meta name="twitter:description" content={projectData.description} />
        <meta name="twitter:image" content="https://desirtechnologies.com/twitter-image.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 transition-colors duration-300 binary-bg">
        <TopNav />
        <MatrixParticles />

        <PageTransition>
          {/* Hero Section */}
          <section className="container mx-auto px-4 pt-32 pb-8 relative z-10">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="flex items-center mb-8 mt-4">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href={`/projects/${categoryId}`} className="flex items-center font-retro">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to {formatName(categoryId)}
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-retro">
                    {projectData.title}
                  </span>
                </h1>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-foreground/60 font-retro">
                    <Calendar className="h-4 w-4 mr-2" />
                    {projectData.date}
                  </div>
                  <div className="flex items-center text-foreground/60 font-retro">
                    <Clock className="h-4 w-4 mr-2" />
                    {projectData.duration}
                  </div>
                  <div className="flex items-center text-foreground/60 font-retro">
                    <Tag className="h-4 w-4 mr-2" />
                    {formatName(categoryId)} Project
                  </div>
                </div>

                <p className="text-lg text-foreground/80 dark:text-foreground/80 mb-8 font-retro">
                  {projectData.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {projectData.liveUrl && (
                    <Button asChild className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
                      <a
                        href={projectData.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Globe className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                  {projectData.githubUrl && (
                    <Button asChild variant="outline" className="rounded-full font-retro">
                      <a
                        href={projectData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-border/50 shadow-xl">
                <video
                  src={projectData.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/80 dark:bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/50">
                    <h3 className="text-xl font-medium mb-2 font-retro">Client: {projectData.client}</h3>
                    <p className="text-sm text-foreground/70 dark:text-foreground/70 font-retro">
                      {formatName(categoryId)} Project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="container mx-auto px-4 py-16 relative z-10">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8">
                <TabsTrigger value="overview" className="font-retro">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="tech-stack" className="font-retro">
                  Tech Stack
                </TabsTrigger>
                <TabsTrigger value="features" className="font-retro">
                  Features
                </TabsTrigger>
                <TabsTrigger value="gallery" className="font-retro">
                  Gallery
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                        Project Overview
                      </h2>
                      <p className="text-foreground/70 dark:text-foreground/70 whitespace-pre-line font-retro">
                        {projectData.longDescription}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                        Challenge
                      </h2>
                      <p className="text-foreground/70 dark:text-foreground/70 font-retro">{projectData.challenge}</p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                        Solution
                      </h2>
                      <p className="text-foreground/70 dark:text-foreground/70 font-retro">{projectData.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                        Results
                      </h2>
                      <ul className="space-y-2">
                        {projectData.results.map((result: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/70 dark:text-foreground/70 font-retro">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {projectData.testimonial && (
                      <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-6 border border-primary/20">
                        <blockquote className="text-foreground/80 dark:text-foreground/80 italic mb-4 font-retro">
                          "{projectData.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                            <span className="text-primary font-bold">{projectData.testimonial.author.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium font-retro">{projectData.testimonial.author}</p>
                            <p className="text-sm text-foreground/60 dark:text-foreground/60 font-retro">
                              {projectData.testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tech-stack">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      Technologies Used
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium mb-4 flex items-center font-retro">
                          <Code className="h-5 w-5 text-primary mr-2" /> Frontend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {projectData.technologies.frontend.map((tech: string) => (
                            <Badge key={tech} className="bg-primary/10 text-primary border-primary/20 font-retro">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium mb-4 flex items-center font-retro">
                          <Server className="h-5 w-5 text-primary mr-2" /> Backend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {projectData.technologies.backend.map((tech: string) => (
                            <Badge key={tech} className="bg-primary/10 text-primary border-primary/20 font-retro">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium mb-4 flex items-center font-retro">
                          <Database className="h-5 w-5 text-primary mr-2" /> Infrastructure
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {projectData.technologies.infrastructure.map((tech: string) => (
                            <Badge key={tech} className="bg-primary/10 text-primary border-primary/20 font-retro">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      Project Repository
                    </h2>
                    <TerminalSection title={`${projectData.title} Repository`} commands={terminalCommands} />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features">
                <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 text-center font-retro">
                  Key Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectData.features.map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-medium mb-2 font-retro">{feature}</h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gallery">
                <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 text-center font-retro">
                  Project Gallery
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectData.images.map((image: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative aspect-video rounded-xl overflow-hidden border border-border/50"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${projectData.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Next Project */}
          <section className="container mx-auto px-4 py-16 relative z-10">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                Explore More Projects
              </h2>
              <p className="text-foreground/70 dark:text-foreground/70 max-w-2xl mx-auto mb-6 font-retro">
                Discover our other innovative solutions in various technology domains.
              </p>
              <Button asChild className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
                <Link href={`/projects/${categoryId}`} className="flex items-center">
                  View All {formatName(categoryId)} Projects
                </Link>
              </Button>
            </div>
          </section>

          <Footer />
          <BottomNav />
        </PageTransition>
      </div>
    </ThemeProvider>
  )
}

