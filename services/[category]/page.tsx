"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import TopNav from "@/components/TopNav"
import BottomNav from "@/components/BottomNav"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TerminalSection from "@/components/TerminalSection"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import PricingTable from "@/components/PricingTable"
import ServiceProcessTimeline from "@/components/ServiceProcessTimeline"
import TestimonialCarousel from "@/components/TestimonialCarousel"

// Mock data for service categories
const servicesData = {
  "web-development": {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    services: [
      {
        id: "custom-website",
        title: "Custom Website Development",
        description: "Bespoke website design and development tailored to your brand and business needs.",
        icon: "/placeholder.svg?height=64&width=64",
        tags: ["React", "Next.js", "Tailwind CSS"],
      },
      {
        id: "ecommerce",
        title: "E-Commerce Solutions",
        description: "Powerful online stores with secure payment processing and inventory management.",
        icon: "/placeholder.svg?height=64&width=64",
        tags: ["Shopify", "WooCommerce", "Stripe"],
      },
      {
        id: "web-app",
        title: "Web Application Development",
        description: "Complex web applications with advanced functionality and user authentication.",
        icon: "/placeholder.svg?height=64&width=64",
        tags: ["React", "Node.js", "MongoDB"],
      },
      {
        id: "cms",
        title: "Content Management Systems",
        description: "Easy-to-use CMS solutions for managing your website content.",
        icon: "/placeholder.svg?height=64&width=64",
        tags: ["WordPress", "Strapi", "Contentful"],
      },
    ],
    benefits: [
      "Increased online visibility and brand awareness",
      "Improved user experience and engagement",
      "Higher conversion rates and sales",
      "Scalable solutions that grow with your business",
      "SEO-friendly architecture for better search rankings",
    ],
    process: [
      { title: "Discovery", description: "Understanding your business goals and requirements" },
      { title: "Planning", description: "Creating a roadmap and technical specifications" },
      { title: "Design", description: "Crafting user interfaces and experiences" },
      { title: "Development", description: "Building the solution with clean, efficient code" },
      { title: "Testing", description: "Ensuring quality and performance across devices" },
      { title: "Deployment", description: "Launching your solution to the world" },
      { title: "Support", description: "Ongoing maintenance and updates" },
    ],
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    testimonials: [
      {
        quote:
          "Desir Technologies transformed our online presence with a stunning website that perfectly captures our brand identity.",
        author: "Sarah Johnson",
        position: "Marketing Director, TechCorp",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        quote:
          "The e-commerce platform they built for us has significantly increased our online sales and streamlined our operations.",
        author: "Michael Chen",
        position: "CEO, RetailPlus",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  "mobile-apps": {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    services: [
      {
        id: "ios-development",
        title: "iOS App Development",
        description: "Native iOS applications built with Swift for iPhone and iPad.",
        icon: "/placeholder.svg?height=64&width=64",
        tags: ["Swift", "SwiftUI", "iOS"],
      },
      {
        id: "android-development",
        title: "Android App Development",
        description: "Native Android applications built with Kotlin for the Google Play Store.",
        icon: "/placeholder.svg?height=64&width=64",
        tags: ["Kotlin", "Jetpack Compose", "Android"],
      },
      {
        id: "cross-platform",
        title: "Cross-Platform Development",
        description: "Build once, deploy everywhere with React Native or Flutter.",
        icon: "/placeholder.svg?height=64&width=64",
        tags: ["React Native", "Flutter", "Cross-Platform"],
      },
      {
        id: "app-maintenance",
        title: "App Maintenance & Updates",
        description: "Ongoing support, updates, and feature enhancements for existing apps.",
        icon: "/placeholder.svg?height=64&width=64",
        tags: ["Support", "Updates", "Optimization"],
      },
    ],
    benefits: [
      "Reach users on their preferred devices",
      "Create engaging mobile experiences",
      "Leverage device features like camera and GPS",
      "Build brand loyalty through mobile presence",
      "Generate revenue through app stores or in-app purchases",
    ],
    process: [
      { title: "Concept", description: "Defining the app concept and user stories" },
      { title: "Wireframing", description: "Creating the app structure and user flows" },
      { title: "UI/UX Design", description: "Designing intuitive and attractive interfaces" },
      { title: "Development", description: "Building the app with clean, efficient code" },
      { title: "Testing", description: "Ensuring quality across devices and OS versions" },
      { title: "Deployment", description: "Publishing to app stores" },
      { title: "Marketing", description: "Promoting your app to target users" },
    ],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "Redux", "MobX", "GraphQL", "REST APIs"],
    testimonials: [
      {
        quote:
          "The mobile app Desir Technologies created for us has received outstanding feedback from our users and significantly improved our customer engagement.",
        author: "David Wilson",
        position: "Product Manager, MobileFirst",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        quote:
          "Their cross-platform approach saved us time and money while delivering a consistent experience across iOS and Android.",
        author: "Jennifer Lee",
        position: "CTO, AppInnovate",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  // Add more service categories as needed
}

// Default data for categories not explicitly defined
const defaultCategoryData = {
  title: "Services",
  description: "Explore our professional services in this category.",
  services: [
    {
      id: "default-service",
      title: "Professional Service",
      description: "A showcase of our capabilities in this field.",
      icon: "/placeholder.svg?height=64&width=64",
      tags: ["Innovation", "Technology", "Expertise"],
    },
  ],
  benefits: [
    "Customized solutions for your business needs",
    "Expert team with years of experience",
    "Cutting-edge technologies and methodologies",
    "Ongoing support and maintenance",
  ],
  process: [
    { title: "Consultation", description: "Understanding your requirements" },
    { title: "Proposal", description: "Creating a tailored solution" },
    { title: "Implementation", description: "Delivering the service" },
    { title: "Review", description: "Ensuring satisfaction and quality" },
  ],
  technologies: ["Latest Industry Tools", "Best Practices", "Innovative Approaches"],
  testimonials: [
    {
      quote: "Desir Technologies provided exceptional service that exceeded our expectations.",
      author: "Client Name",
      position: "Position, Company",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
}

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params?.category as string
  const [mounted, setMounted] = useState(false)

  // Format category name for display
  const formatCategoryName = (categoryId: string) => {
    return categoryId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Get category data or use default if not found
  const categoryData = servicesData[categoryId as keyof typeof servicesData] || {
    ...defaultCategoryData,
    title: formatCategoryName(categoryId),
  }

  // Terminal commands for the tech stack section
  const terminalCommands = [
    `$ cd /services/${categoryId}`,
    "$ ls -la",
    "total " + categoryData.services.length,
    ...categoryData.services.map(
      (service) => `drwxr-xr-x  2 desir  staff  ${Math.floor(Math.random() * 1000)}  Mar 9 14:32 ${service.id}`,
    ),
    "$ cat technologies.txt",
    categoryData.technologies.join(", "),
    "$ cat benefits.txt",
    categoryData.benefits.join("\n"),
  ]

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Create breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: formatCategoryName(categoryId), href: `/services/${categoryId}` },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 transition-colors duration-300 binary-bg">
        <TopNav />

        <PageTransition>
          {/* Hero Section */}
          <section className="container mx-auto px-4 pt-32 pb-8">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="flex items-center mb-8 mt-4">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/services" className="flex items-center font-retro">
                  <ArrowLeft className="mr-2 h-4 w-4" /> All Services
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-light text-foreground/90 dark:text-foreground/90">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-retro">
                  {categoryData.title}
                </span>
              </h1>
            </div>
            <p className="text-lg text-foreground/60 dark:text-foreground/60 max-w-3xl mb-8 font-retro">
              {categoryData.description}
            </p>

            {/* Terminal Section */}
            <div className="mb-12">
              <TerminalSection title={`${categoryData.title} Technologies`} commands={terminalCommands} />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
              {categoryData.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Link href={`/services/${categoryId}/${service.id}`} className="block h-full">
                    <Card className="h-full overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
                      <CardContent className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <img src={service.icon || "/placeholder.svg"} alt={service.title} className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-retro text-primary mb-2">{service.title}</h3>
                            <p className="text-sm text-foreground/70 mb-3">{service.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {service.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs font-retro">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <motion.div
                            className="flex items-center text-primary text-sm font-retro"
                            whileHover={{ x: 5 }}
                          >
                            Learn More <ArrowRight className="ml-1 h-3 w-3" />
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tabs Section */}
          <section className="container mx-auto px-4 py-8">
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="benefits" className="font-retro">
                  Benefits
                </TabsTrigger>
                <TabsTrigger value="process" className="font-retro">
                  Our Process
                </TabsTrigger>
                <TabsTrigger value="pricing" className="font-retro">
                  Pricing
                </TabsTrigger>
              </TabsList>

              <TabsContent value="benefits">
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      Why Choose Our {categoryData.title} Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {categoryData.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-1 mr-3 text-primary">
                            <Check className="h-5 w-5" />
                          </div>
                          <p className="text-foreground/70 font-retro">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process">
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      Our {categoryData.title} Process
                    </h3>
                    <ServiceProcessTimeline process={categoryData.process} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pricing">
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      {categoryData.title} Pricing
                    </h3>
                    <PricingTable category={categoryId} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Testimonials Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
              Client Testimonials
            </h2>
            <TestimonialCarousel testimonials={categoryData.testimonials} />
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                Ready to Get Started?
              </h2>
              <p className="text-foreground/70 dark:text-foreground/70 max-w-2xl mx-auto mb-6 font-retro">
                Contact us today to discuss your {categoryData.title.toLowerCase()} needs and how we can help your
                business succeed.
              </p>
              <Button asChild className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
                <Link href="/contact" className="flex items-center">
                  Request a Consultation
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

