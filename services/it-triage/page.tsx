"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import TopNav from "@/components/TopNav"
import BottomNav from "@/components/BottomNav"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  Users,
  Zap,
  Shield,
  AlertTriangle,
  Activity,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import TriageResourceAllocation from "@/components/TriageResourceAllocation"
import IncidentPriorityMatrix from "@/components/IncidentPriorityMatrix"
import TriageStatusBoard from "@/components/TriageStatusBoard"

export default function ITTriagePage() {
  const [mounted, setMounted] = useState(false)

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
                  IT Triage Services
                </span>
              </h1>
            </div>
            <p className="text-lg text-foreground/60 dark:text-foreground/60 max-w-3xl mb-8 font-retro">
              Rapid response and prioritization for IT issues and incidents to minimize downtime and business impact.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  title: "Average Response Time",
                  value: "15 min",
                  description: "For critical incidents",
                  icon: <Clock className="h-8 w-8 text-primary" />,
                  progress: 85,
                },
                {
                  title: "First-Call Resolution",
                  value: "78%",
                  description: "Issues resolved on first contact",
                  icon: <Check className="h-8 w-8 text-primary" />,
                  progress: 78,
                },
                {
                  title: "Customer Satisfaction",
                  value: "96%",
                  description: "Based on post-incident surveys",
                  icon: <Users className="h-8 w-8 text-primary" />,
                  progress: 96,
                },
                {
                  title: "Incident Reduction",
                  value: "32%",
                  description: "Year-over-year improvement",
                  icon: <Activity className="h-8 w-8 text-primary" />,
                  progress: 32,
                },
              ].map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-primary/10 mr-4">{metric.icon}</div>
                        <div>
                          <h3 className="text-xl font-medium font-retro">{metric.value}</h3>
                          <p className="text-sm text-foreground/60 font-retro">{metric.title}</p>
                        </div>
                      </div>
                      <Progress value={metric.progress} className="h-2 mb-2" />
                      <p className="text-xs text-foreground/60 font-retro">{metric.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Triage Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                Our Triage Process
              </h2>
              <Tabs defaultValue="identification" className="w-full">
                <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-5 mb-8">
                  <TabsTrigger value="identification" className="font-retro">
                    Identification
                  </TabsTrigger>
                  <TabsTrigger value="prioritization" className="font-retro">
                    Prioritization
                  </TabsTrigger>
                  <TabsTrigger value="assignment" className="font-retro">
                    Assignment
                  </TabsTrigger>
                  <TabsTrigger value="resolution" className="font-retro">
                    Resolution
                  </TabsTrigger>
                  <TabsTrigger value="prevention" className="font-retro">
                    Prevention
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="identification">
                  <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                          <AlertTriangle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-retro">Incident Identification</h3>
                          <p className="text-foreground/70 font-retro">
                            The first step in our triage process is to identify and document the incident. This involves
                            gathering information about the issue, affected systems, and initial impact assessment.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">
                                Multi-channel incident reporting (phone, email, chat, automated alerts)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">
                                Initial data collection and documentation
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Preliminary impact assessment</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Incident categorization</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="prioritization">
                  <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                          <Activity className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-retro">Incident Prioritization</h3>
                          <p className="text-foreground/70 font-retro">
                            We assess the severity and impact of the incident to determine its priority level. This
                            ensures that critical issues are addressed first to minimize business disruption.
                          </p>
                          <div className="mt-4">
                            <IncidentPriorityMatrix />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="assignment">
                  <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-retro">Resource Assignment</h3>
                          <p className="text-foreground/70 font-retro">
                            Based on the priority and nature of the incident, we assign the appropriate resources with
                            the right skills and expertise to address the issue efficiently.
                          </p>
                          <div className="mt-4">
                            <TriageResourceAllocation />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="resolution">
                  <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-retro">Incident Resolution</h3>
                          <p className="text-foreground/70 font-retro">
                            Our technical experts work to resolve the incident as quickly as possible, following
                            established procedures and best practices. We keep stakeholders informed throughout the
                            process.
                          </p>
                          <div className="mt-4">
                            <TriageStatusBoard />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="prevention">
                  <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2 font-retro">Prevention & Improvement</h3>
                          <p className="text-foreground/70 font-retro">
                            After resolving the incident, we conduct a post-incident review to identify root causes and
                            implement measures to prevent similar issues in the future.
                          </p>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Root cause analysis</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">
                                Trend analysis and pattern recognition
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">Preventive measures implementation</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 font-retro">
                                Knowledge base updates and documentation
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

            {/* Service Level Agreements */}
            <div className="mb-12">
              <h2 className="text-3xl font-light text-foreground/90 dark:text-foreground/90 mb-6 font-retro">
                Service Level Agreements
              </h2>
              <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-medium mb-4 font-retro text-red-500">Critical Priority</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">
                            Response Time: <strong>15 minutes</strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Activity className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">
                            Resolution Time: <strong>4 hours</strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">
                            Updates: <strong>Every 30 minutes</strong>
                          </span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-foreground/60 font-retro">
                        System-wide outages or issues affecting critical business functions
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-4 font-retro text-amber-500">High Priority</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">
                            Response Time: <strong>1 hour</strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Activity className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">
                            Resolution Time: <strong>8 hours</strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">
                            Updates: <strong>Every 2 hours</strong>
                          </span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-foreground/60 font-retro">
                        Significant impact on business operations affecting multiple users
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-4 font-retro text-green-500">Standard Priority</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">
                            Response Time: <strong>4 hours</strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Activity className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">
                            Resolution Time: <strong>24 hours</strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FileText className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/70 font-retro">
                            Updates: <strong>Daily</strong>
                          </span>
                        </li>
                      </ul>
                      <p className="mt-4 text-sm text-foreground/60 font-retro">
                        Limited impact on business operations affecting individual users
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
                Need Immediate IT Support?
              </h2>
              <p className="text-foreground/70 dark:text-foreground/70 max-w-2xl mx-auto mb-6 font-retro">
                Our IT Triage team is ready to help you resolve your technology issues quickly and efficiently.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
                  <Link href="/contact" className="flex items-center">
                    Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-retro">
                  <Link href="/services/it-triage/emergency">Emergency Support Line</Link>
                </Button>
              </div>
            </div>
          </section>

          <Footer />
          <BottomNav />
        </PageTransition>
      </div>
    </ThemeProvider>
  )
}

