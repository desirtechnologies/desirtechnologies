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
import Image from "next/image"
import { ArrowLeft, Check, FileText, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/Breadcrumbs"

// Mock data for service details
const serviceDetailsData = {
  "web-development": {
    "responsive-websites": {
      title: "Responsive Websites",
      description: "Mobile-friendly websites that adapt to any screen size.",
      longDescription:
        "Our responsive website development service ensures your site looks and functions perfectly on all devices, from desktops to smartphones. We use modern technologies and best practices to create websites that automatically adjust their layout based on the user's screen size, providing an optimal viewing experience.",
      benefits: [
        "Improved user experience across all devices",
        "Higher search engine rankings (Google prioritizes mobile-friendly sites)",
        "Increased conversion rates and engagement",
        "Reduced maintenance costs (one website instead of separate mobile and desktop versions)",
        "Future-proof design that adapts to new device sizes",
      ],
      process: [
        {
          title: "Discovery & Planning",
          description:
            "We begin by understanding your business goals, target audience, and content requirements. This phase includes competitive analysis, user research, and defining the site architecture.",
        },
        {
          title: "Design & Prototyping",
          description:
            "Our designers create wireframes and visual designs for key pages across different device sizes. We develop interactive prototypes to demonstrate how the site will function.",
        },
        {
          title: "Development",
          description:
            "Our developers build the responsive website using modern HTML5, CSS3, and JavaScript. We implement a mobile-first approach, ensuring the site works perfectly on all devices.",
        },
        {
          title: "Testing & Quality Assurance",
          description:
            "We rigorously test the website across multiple devices, browsers, and screen sizes to ensure consistent functionality and appearance.",
        },
        {
          title: "Launch & Support",
          description:
            "After final approval, we deploy the website to your hosting environment and provide training on content management. We offer ongoing support and maintenance packages.",
        },
      ],
      technologies: [
        "HTML5 & CSS3",
        "JavaScript & jQuery",
        "Bootstrap or Tailwind CSS",
        "Responsive Images & Media",
        "CSS Grid & Flexbox",
        "Mobile-First Design",
      ],
      deliverables: [
        "Responsive website design files",
        "Fully functional responsive website",
        "Cross-browser and cross-device testing report",
        "Content management system (if applicable)",
        "Documentation and training",
        "Post-launch support",
      ],
      caseStudies: [
        {
          title: "E-commerce Website Redesign",
          description: "Increased mobile conversions by 45% through responsive redesign",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Corporate Website Overhaul",
          description: "Reduced bounce rate by 30% with mobile-optimized experience",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      faq: [
        {
          question: "How long does it take to develop a responsive website?",
          answer:
            "The timeline depends on the complexity of the website. A simple responsive website can be completed in 4-6 weeks, while more complex sites may take 8-12 weeks or longer.",
        },
        {
          question: "Will my existing website content work with a responsive design?",
          answer:
            "Yes, we can migrate your existing content to the new responsive design. However, some content may need to be restructured or reformatted to work optimally across different screen sizes.",
        },
        {
          question: "Do I need separate mobile and desktop websites?",
          answer:
            "No, that's the beauty of responsive design. A single responsive website adapts to all screen sizes, eliminating the need for separate mobile and desktop versions.",
        },
        {
          question: "How do you ensure the website looks good on all devices?",
          answer:
            "We use a mobile-first approach and test on a wide range of devices and screen sizes. We also use responsive design techniques like fluid grids, flexible images, and media queries to ensure optimal display across devices.",
        },
      ],
      resources: [
        {
          title: "Responsive Web Design Guide",
          description: "A comprehensive guide to responsive web design principles",
          type: "PDF",
          url: "#",
        },
        {
          title: "Mobile Optimization Checklist",
          description: "Ensure your website is fully optimized for mobile users",
          type: "PDF",
          url: "#",
        },
      ],
    },
    // Add more web development service details as needed
  },
  "it-triage": {
    "incident-response": {
      title: "Incident Response",
      description: "Rapid response to critical IT incidents and outages.",
      longDescription:
        "Our Incident Response service provides immediate attention to critical IT issues that impact your business operations. Our team of experts is available 24/7 to quickly identify, contain, and resolve incidents to minimize downtime and business impact.",
      benefits: [
        "Minimized downtime and business disruption",
        "Rapid containment and resolution of critical incidents",
        "Reduced financial impact of IT outages",
        "Expert handling of complex technical issues",
        "Comprehensive post-incident analysis and reporting",
      ],
      process: [
        {
          title: "Incident Detection & Reporting",
          description:
            "Incidents can be reported through multiple channels including phone, email, portal, or automated monitoring alerts. Our team acknowledges receipt immediately.",
        },
        {
          title: "Triage & Prioritization",
          description:
            "We assess the severity and impact of the incident to determine its priority level and required response time according to agreed SLAs.",
        },
        {
          title: "Containment & Mitigation",
          description:
            "Our experts take immediate actions to contain the incident and implement temporary workarounds to minimize business impact while a permanent solution is developed.",
        },
        {
          title: "Resolution & Recovery",
          description:
            "We work to fully resolve the incident and restore normal operations as quickly as possible, following established procedures and best practices.",
        },
        {
          title: "Post-Incident Analysis",
          description:
            "After resolution, we conduct a thorough analysis to identify root causes and develop recommendations to prevent similar incidents in the future.",
        },
      ],
      technologies: [
        "Incident Management Systems",
        "Remote Monitoring Tools",
        "Diagnostic Utilities",
        "Network Analysis Tools",
        "System Recovery Solutions",
        "Documentation Platforms",
      ],
      deliverables: [
        "24/7 incident response coverage",
        "Defined response times based on priority",
        "Regular status updates during incident resolution",
        "Detailed incident reports",
        "Root cause analysis documentation",
        "Preventive recommendations",
      ],
      caseStudies: [
        {
          title: "Financial Services Data Center Outage",
          description: "Restored critical systems within 45 minutes, preventing $2M in potential losses",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Healthcare Provider Ransomware Attack",
          description: "Contained attack within 30 minutes and restored systems with zero data loss",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      faq: [
        {
          question: "What types of incidents do you handle?",
          answer:
            "We handle a wide range of IT incidents including system outages, network failures, security breaches, application errors, hardware failures, and performance issues.",
        },
        {
          question: "What are your response times?",
          answer:
            "Response times vary based on incident priority: Critical (15 minutes), High (1 hour), Medium (4 hours), and Low (8 hours).",
        },
        {
          question: "How do I report an incident?",
          answer:
            "Incidents can be reported through our 24/7 hotline, email, web portal, or through integrated monitoring systems that automatically generate alerts.",
        },
        {
          question: "What information should I provide when reporting an incident?",
          answer:
            "Please provide a description of the issue, when it started, systems affected, business impact, any error messages, and steps to reproduce the issue if applicable.",
        },
      ],
      resources: [
        {
          title: "Incident Response Playbook",
          description: "Step-by-step guide for handling common IT incidents",
          type: "PDF",
          url: "#",
        },
        {
          title: "Incident Severity Classification Guide",
          description: "How to determine the priority level of IT incidents",
          type: "PDF",
          url: "#",
        },
      ],
    },
    // Add more IT triage service details as needed
  },
  // Add more service categories as needed
}

// Default data for services not explicitly defined
const defaultServiceDetailData = {
  title: "Professional Service",
  description: "Tailored solutions to meet your business needs.",
  longDescription:
    "Our professional services are designed to help your business succeed with customized technology solutions that address your specific challenges and requirements.",
  benefits: [
    "Customized solutions tailored to your needs",
    "Expert implementation and support",
    "Improved efficiency and productivity",
    "Reduced costs and technical debt",
    "Ongoing maintenance and optimization",
  ],
  process: [
    {
      title: "Discovery & Assessment",
      description:
        "We begin by understanding your business goals, challenges, and requirements through stakeholder interviews and analysis.",
    },
    {
      title: "Solution Design",
      description:
        "Our experts design a customized solution that addresses your specific needs and aligns with your business objectives.",
    },
    {
      title: "Implementation",
      description:
        "We implement the solution following best practices and industry standards, with regular updates and feedback sessions.",
    },
    {
      title: "Testing & Quality Assurance",
      description: "We rigorously test the solution to ensure it meets all requirements and functions as expected.",
    },
    {
      title: "Deployment & Training",
      description: "We deploy the solution to your environment and provide comprehensive training to your team.",
    },
  ],
  technologies: [
    "Industry-standard technologies",
    "Best-in-class tools and platforms",
    "Scalable and secure solutions",
    "Integration capabilities",
    "Modern architecture",
  ],
  deliverables: [
    "Customized solution",
    "Documentation and training materials",
    "Implementation support",
    "Quality assurance testing",
    "Post-implementation support",
  ],
  caseStudies: [
    {
      title: "Client Success Story",
      description: "How we helped a client achieve their business objectives",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  faq: [
    {
      question: "How long does the process take?",
      answer:
        "The timeline depends on the complexity of your requirements. We'll provide a detailed timeline during the discovery phase.",
    },
    {
      question: "What support do you provide after implementation?",
      answer:
        "We offer various support packages to ensure your solution continues to meet your needs and operates optimally.",
    },
  ],
  resources: [
    {
      title: "Service Overview",
      description: "A comprehensive overview of our service offerings",
      type: "PDF",
      url: "#",
    },
  ],
}

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = params?.service as string
  const detailId = params?.detail as string
  const [mounted, setMounted] = useState(false)

  // Format names for display
  const formatName = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Get service detail data or use default if not found
  const serviceCategory = serviceDetailsData[serviceId as keyof typeof serviceDetailsData] || {}
  const serviceDetail = (serviceCategory as any)[detailId] || {
    ...defaultServiceDetailData,
    title: formatName(detailId),
  }

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Create breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: formatName(serviceId), href: `/services/${serviceId}` },
    { label: serviceDetail.title, href: `/services/${serviceId}/${detailId}` },
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
                <Link href={`/services/${serviceId}`} className="flex items-center font-retro">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to {formatName(serviceId)}
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-light text-foreground/90 dark:text-foreground/90">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-retro">
                  {serviceDetail.title}
                </span>
              </h1>
            </div>
            <p className="text-lg text-foreground/60 dark:text-foreground/60 max-w-3xl mb-8 font-retro">
              {serviceDetail.description}
            </p>

            {/* Service Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                      Overview
                    </h2>
                    <p className="text-foreground/70 dark:text-foreground/70 mb-6 font-retro">
                      {serviceDetail.longDescription}
                    </p>

                    <h3 className="text-xl font-medium mb-4 font-retro">Key Benefits</h3>
                    <ul className="space-y-2 mb-6">
                      {serviceDetail.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-medium mb-4 font-retro">Our Process</h3>
                    <div className="space-y-4 mb-6">
                      {serviceDetail.process.map((step, index) => (
                        <div key={index} className="flex">
                          <div className="mr-4 flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-retro">
                              {index + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1 font-retro">{step.title}</h4>
                            <p className="text-sm text-foreground/70 font-retro">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-medium mb-4 font-retro">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {serviceDetail.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="font-retro">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-medium mb-4 font-retro">Deliverables</h3>
                    <ul className="space-y-2">
                      {serviceDetail.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4 font-retro">Request Information</h3>
                    <p className="text-sm text-foreground/70 mb-4 font-retro">
                      Interested in our {serviceDetail.title} service? Contact us to learn more or request a
                      consultation.
                    </p>
                    <Button
                      asChild
                      className="w-full rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro"
                    >
                      <Link href="/contact">Request a Consultation</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4 font-retro">Resources</h3>
                    <div className="space-y-4">
                      {serviceDetail.resources.map((resource, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1 font-retro">{resource.title}</h4>
                            <p className="text-xs text-foreground/70 mb-2 font-retro">{resource.description}</p>
                            <Button asChild variant="outline" size="sm" className="rounded-full text-xs font-retro">
                              <Link href={resource.url}>
                                <Download className="h-3 w-3 mr-1" /> Download {resource.type}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Case Studies */}
            <div className="mb-12">
              <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                Case Studies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceDetail.caseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 w-full">
                        <Image
                          src={caseStudy.image || "/placeholder.svg"}
                          alt={caseStudy.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-medium mb-2 font-retro">{caseStudy.title}</h3>
                        <p className="text-foreground/70 mb-4 font-retro">{caseStudy.description}</p>
                        <Button asChild variant="outline" className="rounded-full font-retro">
                          <Link href="#">
                            Read Case Study <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceDetail.faq.map((item, index) => (
                  <Card key={index} className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-2 font-retro">{item.question}</h3>
                      <p className="text-foreground/70 font-retro">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                Ready to Get Started?
              </h2>
              <p className="text-foreground/70 dark:text-foreground/70 max-w-2xl mx-auto mb-6 font-retro">
                Contact us today to discuss how our {serviceDetail.title} service can help your business succeed.
              </p>
              <Button asChild className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
                <Link href="/contact">Request a Consultation</Link>
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

