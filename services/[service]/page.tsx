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
import { ArrowLeft, ArrowRight, Check, Clock, Calendar, Users, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FrameComponent } from "@/components/FrameComponent"
import TerminalSection from "@/components/TerminalSection"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import PricingTable from "@/components/PricingTable"

// Mock data for service categories and their offerings
const servicesData = {
  "web-development": {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: "Code",
    offerings: [
      {
        id: "responsive-websites",
        title: "Responsive Websites",
        description: "Mobile-friendly websites that adapt to any screen size.",
        videoSrc: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
        tags: ["HTML5", "CSS3", "JavaScript"],
        corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
        edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
        edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
      },
      {
        id: "web-applications",
        title: "Web Applications",
        description: "Interactive web applications with complex functionality.",
        videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
        tags: ["React", "Next.js", "Node.js"],
        corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
        edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
        edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
      },
      {
        id: "e-commerce",
        title: "E-Commerce Solutions",
        description: "Online stores with secure payment processing and inventory management.",
        videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
        tags: ["Shopify", "WooCommerce", "Custom"],
        corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
        edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
        edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
      },
      {
        id: "cms-development",
        title: "CMS Development",
        description: "Content management systems for easy website updates.",
        videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
        tags: ["WordPress", "Strapi", "Contentful"],
        corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
        edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
        edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
      },
    ],
    pricing: [
      {
        name: "Basic",
        price: "$2,500",
        description: "Simple responsive website with up to 5 pages",
        features: [
          "Responsive Design",
          "Content Management System",
          "Contact Form",
          "Basic SEO Setup",
          "3 Rounds of Revisions",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$5,000",
        description: "Advanced website with custom features",
        features: [
          "Everything in Basic",
          "Custom Design",
          "Up to 10 Pages",
          "Blog Integration",
          "Social Media Integration",
          "Advanced SEO",
          "5 Rounds of Revisions",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Complex web applications with advanced functionality",
        features: [
          "Everything in Professional",
          "Custom Web Application",
          "API Development",
          "Third-party Integrations",
          "User Authentication",
          "Database Design",
          "Unlimited Revisions",
        ],
        popular: false,
      },
    ],
  },
  "it-triage": {
    title: "IT Triage Services",
    description: "Rapid response and prioritization for IT issues and incidents.",
    icon: "Headphones",
    offerings: [
      {
        id: "incident-response",
        title: "Incident Response",
        description: "Rapid response to critical IT incidents and outages.",
        videoSrc: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
        tags: ["24/7 Support", "SLA", "Critical Response"],
        corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
        edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
        edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
      },
      {
        id: "service-desk",
        title: "Service Desk",
        description: "Comprehensive IT support for your organization.",
        videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
        tags: ["Ticketing", "Knowledge Base", "User Support"],
        corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
        edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
        edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
      },
      {
        id: "problem-management",
        title: "Problem Management",
        description: "Identify and resolve underlying issues to prevent recurrence.",
        videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
        tags: ["Root Cause Analysis", "Trend Analysis", "Prevention"],
        corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
        edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
        edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
      },
      {
        id: "it-monitoring",
        title: "IT Monitoring",
        description: "Proactive monitoring of IT systems and infrastructure.",
        videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
        tags: ["24/7 Monitoring", "Alerts", "Performance"],
        corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
        edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
        edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
      },
    ],
    pricing: [
      {
        name: "Basic Triage",
        price: "$1,500/mo",
        description: "Essential IT support for small businesses",
        features: [
          "Business Hours Support (9-5)",
          "Email & Phone Support",
          "4-Hour Response Time",
          "Basic Incident Management",
          "Monthly Reports",
        ],
        popular: false,
      },
      {
        name: "Professional Triage",
        price: "$3,500/mo",
        description: "Comprehensive IT support with faster response times",
        features: [
          "Extended Hours Support (7AM-7PM)",
          "Email, Phone & Chat Support",
          "2-Hour Response Time",
          "Dedicated Support Team",
          "Problem Management",
          "Weekly Reports",
          "Knowledge Base Access",
        ],
        popular: true,
      },
      {
        name: "Enterprise Triage",
        price: "$7,500/mo",
        description: "Premium 24/7 IT support for mission-critical systems",
        features: [
          "24/7/365 Support",
          "Email, Phone, Chat & On-site Support",
          "30-Minute Response Time",
          "Dedicated Support Manager",
          "Comprehensive Problem Management",
          "Root Cause Analysis",
          "Daily Reports",
          "Custom SLAs",
          "Proactive Monitoring",
        ],
        popular: false,
      },
    ],
  },
  // Add more service categories as needed
}

// Default data for categories not explicitly defined
const defaultCategoryData = {
  title: "Services",
  description: "Explore our professional technology services in this category.",
  icon: "Code",
  offerings: [
    {
      id: "default-offering",
      title: "Professional Services",
      description: "Tailored solutions to meet your business needs.",
      videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
      tags: ["Professional", "Reliable", "Scalable"],
      corner: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_corner.png",
      edgeHorizontal: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_hori.png",
      edgeVertical: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_vert.png",
    },
  ],
  pricing: [
    {
      name: "Basic",
      price: "Contact Us",
      description: "Tailored solutions for your business",
      features: ["Professional Service", "Expert Consultation", "Quality Assurance", "Ongoing Support"],
      popular: false,
    },
  ],
}

export default function ServicePage() {
  const params = useParams()
  const serviceId = params?.service as string
  const [mounted, setMounted] = useState(false)
  const [hoveredOffering, setHoveredOffering] = useState<string | null>(null)

  // Format service name for display
  const formatServiceName = (serviceId: string) => {
    return serviceId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Get service data or use default if not found
  const serviceData = servicesData[serviceId as keyof typeof servicesData] || {
    ...defaultCategoryData,
    title: formatServiceName(serviceId),
  }

  // Terminal commands for the tech stack section
  const terminalCommands = [
    `$ cd /services/${serviceId}`,
    "$ ls -la",
    "total " + serviceData.offerings.length,
    ...serviceData.offerings.map(
      (offering) => `drwxr-xr-x  2 desir  staff  ${Math.floor(Math.random() * 1000)}  Mar 9 14:32 ${offering.id}`,
    ),
    "$ cat service-details.json",
    JSON.stringify(
      {
        name: serviceData.title,
        description: serviceData.description,
        expertise: ["Senior Consultants", "Technical Architects", "Project Managers", "Quality Assurance"],
        methodologies: ["Agile", "Scrum", "Kanban", "Waterfall"],
        deliverables: [
          "Requirements Documentation",
          "Design Specifications",
          "Implementation",
          "Testing",
          "Deployment",
          "Training",
          "Support",
        ],
      },
      null,
      2,
    ),
  ]

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 transition-colors duration-300 binary-bg">
        <TopNav />

        <PageTransition>
          {/* Hero Section */}
          <section className="container mx-auto px-4 pt-32 pb-8">
            <Breadcrumbs />

            <div className="flex items-center mb-8 mt-4">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/services" className="flex items-center font-retro">
                  <ArrowLeft className="mr-2 h-4 w-4" /> All Services
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-light text-foreground/90 dark:text-foreground/90">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-retro">
                  {serviceData.title}
                </span>
              </h1>
            </div>
            <p className="text-lg text-foreground/60 dark:text-foreground/60 max-w-3xl mb-8 font-retro">
              {serviceData.description}
            </p>

            {/* Terminal Section */}
            <div className="mb-12">
              <TerminalSection title={`${serviceData.title} Details`} commands={terminalCommands} />
            </div>

            {/* Service Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  title: "Expert Team",
                  description: "Experienced professionals with deep domain knowledge",
                  icon: <Users className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Fast Delivery",
                  description: "Efficient processes to deliver on time and within budget",
                  icon: <Clock className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous testing and quality control standards",
                  icon: <Check className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Ongoing Support",
                  description: "Continuous assistance and maintenance after delivery",
                  icon: <Zap className="h-8 w-8 text-primary" />,
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-full bg-primary/10">{benefit.icon}</div>
                      <h3 className="text-xl font-medium mb-2 font-retro">{benefit.title}</h3>
                      <p className="text-foreground/60 text-sm font-retro">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Service Offerings Grid */}
            <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
              Our Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {serviceData.offerings.map((offering, index) => (
                <motion.div
                  key={offering.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => setHoveredOffering(offering.id)}
                  onMouseLeave={() => setHoveredOffering(null)}
                  className="h-full"
                >
                  <Link href={`/services/${serviceId}/${offering.id}`} className="block h-full">
                    <Card className="h-full overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
                      <div className="relative h-48 w-full">
                        <FrameComponent
                          video={offering.videoSrc}
                          width="100%"
                          height="100%"
                          className="absolute inset-0"
                          corner={offering.corner}
                          edgeHorizontal={offering.edgeHorizontal}
                          edgeVertical={offering.edgeVertical}
                          mediaSize={1}
                          borderThickness={0}
                          borderSize={80}
                          onMediaSizeChange={() => {}}
                          onBorderThicknessChange={() => {}}
                          onBorderSizeChange={() => {}}
                          showControls={false}
                          label={offering.title}
                          showFrame={true}
                          autoplayMode="hover"
                          isHovered={hoveredOffering === offering.id}
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-xl font-retro text-primary mb-2">{offering.title}</h3>
                        <p className="text-sm text-foreground/70 mb-3">{offering.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {offering.tags.map((tag) => (
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
                            View Details <ArrowRight className="ml-1 h-3 w-3" />
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pricing Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-6 text-center font-retro">
                Pricing
              </h2>
              <PricingTable plans={serviceData.pricing} />
            </div>

            {/* Process Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                Our Process
              </h2>
              <Tabs defaultValue="discovery" className="w-full">
                <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8">
                  <TabsTrigger value="discovery" className="font-retro">
                    Discovery
                  </TabsTrigger>
                  <TabsTrigger value="planning" className="font-retro">
                    Planning
                  </TabsTrigger>
                  <TabsTrigger value="execution" className="font-retro">
                    Execution
                  </TabsTrigger>
                  <TabsTrigger value="support" className="font-retro">
                    Support
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="discovery">
                  <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-retro">Discovery Phase</h3>
                          <p className="text-foreground/70 font-retro">
                            We begin by understanding your business goals, challenges, and requirements. This involves
                            stakeholder interviews, requirements gathering, and analysis of your current systems and
                            processes.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">
                                Stakeholder interviews and workshops
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Requirements documentation</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Current state assessment</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Opportunity identification</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="planning">
                  <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-retro">Planning Phase</h3>
                          <p className="text-foreground/70 font-retro">
                            Based on the discovery findings, we develop a detailed project plan, including scope,
                            timeline, resource allocation, and deliverables. We also establish communication protocols
                            and project governance.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Project scope definition</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Timeline and milestone planning</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Resource allocation</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Risk assessment and mitigation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="execution">
                  <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-retro">Execution Phase</h3>
                          <p className="text-foreground/70 font-retro">
                            This is where we implement the solution according to the project plan. We follow agile
                            methodologies with regular sprints, demos, and feedback cycles to ensure alignment with your
                            expectations.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Agile development sprints</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Regular progress updates</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Quality assurance and testing</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Deployment and implementation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="support">
                  <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-retro">Support Phase</h3>
                          <p className="text-foreground/70 font-retro">
                            After implementation, we provide ongoing support and maintenance to ensure the solution
                            continues to meet your needs. We also offer training and knowledge transfer to your team.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">User training and documentation</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Ongoing technical support</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Maintenance and updates</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">
                                Performance monitoring and optimization
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* CTA Section */}
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                Ready to Get Started?
              </h2>
              <p className="text-foreground/70 dark:text-foreground/70 max-w-2xl mx-auto mb-6 font-retro">
                Contact us today to discuss how our {serviceData.title} services can help your business succeed.
              </p>
              <Button asChild className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
                <Link href="/contact" className="flex items-center">
                  Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
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

