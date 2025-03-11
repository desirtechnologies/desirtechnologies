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
import { ArrowLeft, Check, Clock, Tag, Users, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TerminalSection from "@/components/TerminalSection"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import FAQAccordion from "@/components/FAQAccordion"
import CaseStudyCard from "@/components/CaseStudyCard"
import ITTriageReport from "@/components/ITTriageReport"

// Mock data for services
const servicesData = {
  "web-development": {
    "custom-website": {
      title: "Custom Website Development",
      description: "Bespoke website design and development tailored to your brand and business needs.",
      longDescription: `Our custom website development service delivers unique, high-performance websites designed specifically for your business goals and target audience. We combine stunning design with robust functionality to create websites that not only look great but also drive results.

Each website we build is crafted from scratch, ensuring a unique online presence that stands out from template-based solutions. Our development process focuses on user experience, performance, and search engine optimization to maximize your website's effectiveness.`,
      features: [
        "Responsive design for all devices",
        "Custom UI/UX design",
        "Content management system integration",
        "SEO optimization",
        "Performance optimization",
        "Analytics integration",
        "Security features",
        "Accessibility compliance",
      ],
      technologies: [
        "HTML5/CSS3",
        "JavaScript/TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "MongoDB/PostgreSQL",
        "AWS/Vercel hosting",
      ],
      process: [
        { title: "Discovery", description: "Understanding your business, goals, and target audience" },
        { title: "Planning", description: "Creating sitemaps, wireframes, and technical specifications" },
        { title: "Design", description: "Crafting visual designs and user interfaces" },
        { title: "Development", description: "Building the website with clean, efficient code" },
        { title: "Content", description: "Adding and optimizing content" },
        { title: "Testing", description: "Ensuring quality across browsers and devices" },
        { title: "Launch", description: "Deploying the website to production" },
        { title: "Support", description: "Ongoing maintenance and updates" },
      ],
      pricing: {
        basic: {
          name: "Basic",
          price: "$5,000",
          features: [
            "5-7 page website",
            "Responsive design",
            "Basic SEO",
            "Contact form",
            "Content management system",
            "3 rounds of revisions",
          ],
        },
        standard: {
          name: "Standard",
          price: "$10,000",
          features: [
            "10-15 page website",
            "Advanced responsive design",
            "Comprehensive SEO",
            "Custom forms and integrations",
            "Content management system",
            "E-commerce functionality",
            "5 rounds of revisions",
          ],
        },
        premium: {
          name: "Premium",
          price: "$20,000+",
          features: [
            "Unlimited pages",
            "Advanced UI/UX design",
            "Advanced SEO strategy",
            "Custom functionality",
            "Third-party integrations",
            "E-commerce with payment processing",
            "Unlimited revisions",
            "6 months of support",
          ],
        },
      },
      faqs: [
        {
          question: "How long does it take to build a custom website?",
          answer:
            "The timeline for a custom website depends on its complexity. A basic website might take 4-6 weeks, while more complex projects can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
        },
        {
          question: "Do you provide website hosting?",
          answer:
            "Yes, we offer hosting solutions as part of our service. We can also help you set up hosting with providers like AWS, Vercel, or Netlify depending on your needs.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "All our websites are built with responsive design principles, ensuring they look and function perfectly on all devices, from desktops to smartphones.",
        },
        {
          question: "Can I update the website myself after it's built?",
          answer:
            "Yes, we integrate content management systems that make it easy for you to update content, add pages, and make basic changes without technical knowledge.",
        },
        {
          question: "Do you provide SEO services with website development?",
          answer:
            "Yes, we implement SEO best practices during development and can provide additional SEO services to improve your website's visibility in search engines.",
        },
      ],
      caseStudies: [
        {
          title: "E-Commerce Website Redesign",
          client: "RetailPlus",
          description:
            "Redesigned an outdated e-commerce website, resulting in a 45% increase in conversion rate and 60% increase in mobile sales.",
          image: "/placeholder.svg?height=300&width=500",
          results: [
            "45% increase in conversion rate",
            "60% increase in mobile sales",
            "30% reduction in bounce rate",
            "25% increase in average order value",
          ],
          link: "/case-studies/retailplus",
        },
        {
          title: "Corporate Website Overhaul",
          client: "TechCorp Inc.",
          description:
            "Developed a modern, responsive website for a technology corporation, improving lead generation and brand perception.",
          image: "/placeholder.svg?height=300&width=500",
          results: [
            "200% increase in lead generation",
            "50% increase in time on site",
            "Improved brand perception",
            "Enhanced recruitment capabilities",
          ],
          link: "/case-studies/techcorp",
        },
      ],
      triageReports: [
        {
          title: "Website Performance Audit",
          date: "January 15, 2023",
          summary: "Comprehensive analysis of website performance issues and recommendations for improvement.",
          findings: [
            "Slow page load times (5.2s average)",
            "Unoptimized images increasing page weight",
            "Render-blocking JavaScript",
            "Poor mobile responsiveness",
            "Inadequate caching implementation",
          ],
          recommendations: [
            "Implement image optimization and lazy loading",
            "Minify and defer JavaScript",
            "Implement responsive design best practices",
            "Set up proper browser caching",
            "Utilize a content delivery network (CDN)",
          ],
          impact:
            "Implementing these recommendations can improve page load times by up to 70% and significantly enhance user experience.",
        },
        {
          title: "Website Security Assessment",
          date: "March 10, 2023",
          summary: "Evaluation of website security vulnerabilities and protective measures.",
          findings: [
            "Outdated CMS version with known vulnerabilities",
            "Insecure form handling",
            "Missing SSL certificate",
            "Weak password policies",
            "Inadequate backup procedures",
          ],
          recommendations: [
            "Update CMS to latest version",
            "Implement form validation and sanitization",
            "Install SSL certificate",
            "Enforce strong password policies",
            "Set up automated backup system",
          ],
          impact:
            "These security improvements will significantly reduce the risk of data breaches and unauthorized access.",
        },
      ],
    },
    // Add more web development services
  },
  "mobile-apps": {
    "ios-development": {
      title: "iOS App Development",
      description: "Native iOS applications built with Swift for iPhone and iPad.",
      longDescription: `Our iOS app development service delivers high-quality, native applications designed specifically for Apple's ecosystem. We leverage the latest iOS features and design guidelines to create intuitive, powerful apps that users love.

Each iOS app we develop is built with Swift, Apple's modern programming language, ensuring optimal performance and compatibility with the latest iOS versions. Our development process focuses on user experience, performance, and leveraging iOS-specific features to maximize your app's effectiveness.`,
      features: [
        "Native iOS development with Swift",
        "Intuitive UI/UX design following Apple guidelines",
        "Integration with iOS features (Face ID, Apple Pay, etc.)",
        "Push notifications",
        "Offline functionality",
        "Analytics integration",
        "App Store optimization",
        "Ongoing maintenance and updates",
      ],
      technologies: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "Firebase", "RESTful APIs", "GraphQL"],
      process: [
        { title: "Concept", description: "Defining the app concept and user stories" },
        { title: "Wireframing", description: "Creating the app structure and user flows" },
        { title: "UI/UX Design", description: "Designing intuitive interfaces following iOS guidelines" },
        { title: "Development", description: "Building the app with Swift" },
        { title: "Testing", description: "Ensuring quality across iOS devices" },
        { title: "Deployment", description: "Submitting to the App Store" },
        { title: "Marketing", description: "App Store optimization and promotion" },
        { title: "Support", description: "Ongoing maintenance and updates" },
      ],
      pricing: {
        basic: {
          name: "Basic",
          price: "$15,000",
          features: [
            "Simple functionality",
            "Standard UI components",
            "Basic user authentication",
            "Local data storage",
            "3 rounds of revisions",
          ],
        },
        standard: {
          name: "Standard",
          price: "$30,000",
          features: [
            "Moderate complexity",
            "Custom UI components",
            "User authentication with profiles",
            "Cloud data synchronization",
            "Push notifications",
            "In-app purchases",
            "5 rounds of revisions",
          ],
        },
        premium: {
          name: "Premium",
          price: "$50,000+",
          features: [
            "Complex functionality",
            "Advanced UI/UX design",
            "Social integration",
            "Offline mode",
            "Advanced analytics",
            "Multiple payment methods",
            "Unlimited revisions",
            "6 months of support",
          ],
        },
      },
      faqs: [
        {
          question: "How long does it take to develop an iOS app?",
          answer:
            "The timeline for iOS app development depends on its complexity. A basic app might take 2-3 months, while more complex apps can take 4-8 months or more. We'll provide a detailed timeline during our initial consultation.",
        },
        {
          question: "Will my app work on all iOS devices?",
          answer:
            "We develop apps to be compatible with the current iOS version and typically 2-3 versions back. We test on multiple device types (iPhone and iPad) to ensure compatibility.",
        },
        {
          question: "How do you handle App Store submission?",
          answer:
            "We manage the entire App Store submission process, including preparing all required assets, writing descriptions, and ensuring compliance with Apple's guidelines. We'll work with you to set up your Apple Developer account if needed.",
        },
        {
          question: "Do you provide app maintenance after launch?",
          answer:
            "Yes, we offer ongoing maintenance packages to keep your app updated with the latest iOS versions and to implement new features or fix issues as needed.",
        },
        {
          question: "Can you update my existing iOS app?",
          answer:
            "Yes, we can take over and update existing iOS apps. We'll perform a code review to assess the current state and recommend improvements or new features.",
        },
      ],
      caseStudies: [
        {
          title: "Fitness Tracking App",
          client: "HealthFit",
          description:
            "Developed a comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.",
          image: "/placeholder.svg?height=300&width=500",
          results: [
            "100,000+ downloads in first 3 months",
            "4.8/5 average App Store rating",
            "Featured in Apple's 'Apps We Love'",
            "85% user retention rate",
          ],
          link: "/case-studies/healthfit",
        },
        {
          title: "E-Commerce Mobile App",
          client: "ShopEasy",
          description:
            "Created a native iOS shopping app with personalized recommendations and seamless checkout experience.",
          image: "/placeholder.svg?height=300&width=500",
          results: [
            "50% of web customers adopted the app",
            "35% higher average order value compared to website",
            "Increased purchase frequency by 28%",
            "Improved customer loyalty metrics",
          ],
          link: "/case-studies/shopeasy",
        },
      ],
      triageReports: [
        {
          title: "iOS App Performance Audit",
          date: "February 20, 2023",
          summary: "Analysis of app performance issues and recommendations for improvement.",
          findings: [
            "Memory leaks in several view controllers",
            "Inefficient image loading causing UI lag",
            "Background processes consuming excessive battery",
            "Network requests not properly cached",
            "Slow app startup time",
          ],
          recommendations: [
            "Refactor view controllers to prevent memory leaks",
            "Implement efficient image caching",
            "Optimize background processes",
            "Implement proper network caching strategy",
            "Optimize app initialization sequence",
          ],
          impact:
            "These optimizations can improve app performance by up to 60% and significantly reduce battery consumption.",
        },
        {
          title: "iOS App UX Assessment",
          date: "April 5, 2023",
          summary: "Evaluation of user experience issues and recommendations for improvement.",
          findings: [
            "Confusing navigation structure",
            "Inconsistent UI elements",
            "Poor accessibility implementation",
            "Lengthy user flows for common tasks",
            "Inadequate error handling and feedback",
          ],
          recommendations: [
            "Redesign navigation based on user testing",
            "Standardize UI components across the app",
            "Implement proper accessibility support",
            "Streamline user flows for common tasks",
            "Improve error messages and user feedback",
          ],
          impact:
            "These UX improvements can increase user satisfaction, reduce support requests, and improve app store ratings.",
        },
      ],
    },
    // Add more mobile app services
  },
  // Add more service categories
}

// Default service data for services not explicitly defined
const defaultServiceData = {
  title: "Professional Service",
  description: "Expert service tailored to your business needs.",
  longDescription:
    "Our professional service is designed to help businesses achieve their goals through expert consultation and implementation.",
  features: ["Customized solutions", "Expert team", "Proven methodology", "Ongoing support"],
  technologies: ["Industry-standard tools", "Best practices", "Innovative approaches"],
  process: [
    { title: "Consultation", description: "Understanding your requirements" },
    { title: "Planning", description: "Creating a tailored solution" },
    { title: "Implementation", description: "Delivering the service" },
    { title: "Review", description: "Ensuring satisfaction and quality" },
  ],
  pricing: {
    basic: {
      name: "Basic",
      price: "Contact for pricing",
      features: ["Essential features", "Standard support", "Basic implementation"],
    },
    standard: {
      name: "Standard",
      price: "Contact for pricing",
      features: ["Enhanced features", "Priority support", "Comprehensive implementation"],
    },
    premium: {
      name: "Premium",
      price: "Contact for pricing",
      features: ["All features", "24/7 support", "Premium implementation", "Ongoing consultation"],
    },
  },
  faqs: [
    {
      question: "What is included in this service?",
      answer:
        "Our service includes consultation, implementation, and ongoing support tailored to your specific business needs.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The timeline varies depending on the scope and complexity of your project. We'll provide a detailed timeline during our initial consultation.",
    },
  ],
  caseStudies: [
    {
      title: "Client Success Story",
      client: "Example Company",
      description: "Helped a client achieve significant improvements in their business operations.",
      image: "/placeholder.svg?height=300&width=500",
      results: ["Improved efficiency", "Reduced costs", "Enhanced customer satisfaction"],
      link: "/case-studies/example",
    },
  ],
  triageReports: [
    {
      title: "Service Assessment",
      date: "Recent",
      summary: "Analysis of current state and recommendations for improvement.",
      findings: ["Areas for improvement identified", "Opportunities for optimization", "Potential risks assessed"],
      recommendations: ["Strategic improvements", "Process optimization", "Risk mitigation strategies"],
      impact: "Implementation of recommendations can lead to significant improvements in efficiency and effectiveness.",
    },
  ],
}

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const categoryId = params?.category as string
  const serviceId = params?.service as string
  const [mounted, setMounted] = useState(false)

  // Format names for display
  const formatName = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Get service data or use default if not found
  const categoryServices = servicesData[categoryId as keyof typeof servicesData] || {}
  const serviceData = (categoryServices as any)[serviceId] || {
    ...defaultServiceData,
    title: formatName(serviceId),
  }

  // Create breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: formatName(categoryId), href: `/services/${categoryId}` },
    { label: serviceData.title, href: `/services/${categoryId}/${serviceId}` },
  ]

  // Terminal commands for the tech stack section
  const terminalCommands = [
    `$ cd /services/${categoryId}/${serviceId}`,
    "$ cat features.txt",
    serviceData.features.join("\n"),
    "$ cat technologies.txt",
    serviceData.technologies.join("\n"),
    "$ ./estimate.sh",
    "Generating service estimate...",
    "Basic package: " + serviceData.pricing.basic.price,
    "Standard package: " + serviceData.pricing.standard.price,
    "Premium package: " + serviceData.pricing.premium.price,
    "$ echo 'Ready to help with your project!'",
    "Ready to help with your project!",
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
          <section className="container mx-auto px-4 pt-32 pb-8 relative z-10">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="flex items-center mb-8 mt-4">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href={`/services/${categoryId}`} className="flex items-center font-retro">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to {formatName(categoryId)}
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-retro">
                    {serviceData.title}
                  </span>
                </h1>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-foreground/60 font-retro">
                    <Tag className="h-4 w-4 mr-2" />
                    {formatName(categoryId)}
                  </div>
                  <div className="flex items-center text-foreground/60 font-retro">
                    <Users className="h-4 w-4 mr-2" />
                    For businesses of all sizes
                  </div>
                  <div className="flex items-center text-foreground/60 font-retro">
                    <Clock className="h-4 w-4 mr-2" />
                    Custom timeline
                  </div>
                </div>

                <p className="text-lg text-foreground/80 dark:text-foreground/80 mb-8 font-retro">
                  {serviceData.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button asChild className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
                    <Link href="/contact" className="flex items-center">
                      Request a Quote
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full font-retro">
                    <Link href="/contact" className="flex items-center">
                      Schedule Consultation
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-border/50 shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt={serviceData.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/80 dark:bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/50">
                    <h3 className="text-xl font-medium mb-2 font-retro">Expert {serviceData.title}</h3>
                    <p className="text-sm text-foreground/70 dark:text-foreground/70 font-retro">
                      Tailored solutions for your business needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Terminal Section */}
          <section className="container mx-auto px-4 py-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <TerminalSection title={`${serviceData.title} Details`} commands={terminalCommands} />
            </div>
          </section>

          {/* Service Details */}
          <section className="container mx-auto px-4 py-16 relative z-10">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-8">
                <TabsTrigger value="overview" className="font-retro">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="features" className="font-retro">
                  Features
                </TabsTrigger>
                <TabsTrigger value="process" className="font-retro">
                  Process
                </TabsTrigger>
                <TabsTrigger value="pricing" className="font-retro">
                  Pricing
                </TabsTrigger>
                <TabsTrigger value="faq" className="font-retro">
                  FAQ
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      About Our {serviceData.title}
                    </h2>
                    <p className="text-foreground/70 dark:text-foreground/70 whitespace-pre-line font-retro mb-8">
                      {serviceData.longDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-medium mb-4 flex items-center font-retro">
                          <Zap className="h-5 w-5 text-primary mr-2" /> Technologies
                        </h3>
                        <ul className="space-y-2">
                          {serviceData.technologies.map((tech: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 dark:text-foreground/70 font-retro">{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium mb-4 flex items-center font-retro">
                          <Shield className="h-5 w-5 text-primary mr-2" /> Why Choose Us
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/70 dark:text-foreground/70 font-retro">
                              Expert team with years of experience
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/70 dark:text-foreground/70 font-retro">
                              Proven methodology and best practices
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/70 dark:text-foreground/70 font-retro">
                              Tailored solutions for your specific needs
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/70 dark:text-foreground/70 font-retro">
                              Ongoing support and maintenance
                            </span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/70 dark:text-foreground/70 font-retro">
                              Transparent communication throughout the process
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features">
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {serviceData.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-1 mr-3 text-primary">
                            <Check className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-foreground/70 font-retro">{feature}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process">
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      Our Process
                    </h2>
                    <div className="relative max-w-3xl mx-auto">
                      {/* Timeline line */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>

                      {serviceData.process.map((step: any, index: number) => (
                        <motion.div
                          key={step.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className={`relative mb-12 ${index % 2 === 0 ? "text-right mr-auto pr-12" : "text-left ml-auto pl-12"}`}
                          style={{ width: "calc(50% - 20px)" }}
                        >
                          <div
                            className={`absolute top-0 ${index % 2 === 0 ? "right-0" : "left-0"} transform ${index % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"} -translate-y-1/4`}
                          >
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                          </div>
                          <div className="bg-card/50 dark:bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                            <h3 className="text-xl font-medium mb-2 font-retro">{step.title}</h3>
                            <p className="text-foreground/60 font-retro">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pricing">
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      Pricing Plans
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.values(serviceData.pricing).map((plan: any, index: number) => (
                        <Card
                          key={index}
                          className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm"
                        >
                          <CardContent className="p-6">
                            <h3 className="text-xl font-medium mb-2 font-retro">{plan.name}</h3>
                            <div className="text-3xl font-bold text-primary mb-4 font-retro">{plan.price}</div>
                            <ul className="space-y-2 mb-6">
                              {plan.features.map((feature: string, featureIndex: number) => (
                                <li key={featureIndex} className="flex items-start">
                                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-foreground/70 dark:text-foreground/70 font-retro">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              asChild
                              className="w-full rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro"
                            >
                              <Link href="/contact">Get Started</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <p className="text-center mt-6 text-foreground/60 font-retro">
                      Need a custom solution?{" "}
                      <Link href="/contact" className="text-primary hover:underline">
                        Contact us
                      </Link>{" "}
                      for a personalized quote.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq">
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                      Frequently Asked Questions
                    </h2>
                    <FAQAccordion faqs={serviceData.faqs} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          {/* Case Studies Section */}
          <section className="container mx-auto px-4 py-16 relative z-10">
            <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
              Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.caseStudies.map((caseStudy: any, index: number) => (
                <CaseStudyCard key={index} caseStudy={caseStudy} />
              ))}
            </div>
          </section>

          {/* IT Triage Reports Section */}
          <section className="container mx-auto px-4 py-16 relative z-10">
            <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
              IT Triage Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceData.triageReports.map((report: any, index: number) => (
                <ITTriageReport key={index} report={report} />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 relative z-10">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                Ready to Get Started?
              </h2>
              <p className="text-foreground/70 dark:text-foreground/70 max-w-2xl mx-auto mb-6 font-retro">
                Contact us today to discuss your {serviceData.title.toLowerCase()} needs and how we can help your
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

