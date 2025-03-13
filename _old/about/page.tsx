"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import TopNav from "@/components/TopNav"
import BottomNav from "@/components/BottomNav"
import SpeedDial from "@/components/SpeedDial"
import PageTransition from "@/components/PageTransition"
import { motion } from "framer-motion"
import Image from "next/image"
import { Zap, Award, Users, Clock, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 transition-colors duration-300">
        <TopNav />

        <PageTransition>
          {/* Hero Section */}
          <section className="container mx-auto px-4 pt-32 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Us</span>
              </h1>
              <p className="text-lg text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto">
                We're a team of passionate technologists dedicated to creating innovative digital solutions.
              </p>
            </div>
          </section>

          {/* Company Story */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-foreground/70 dark:text-foreground/70">
                  <p>
                    Founded in 2018, Desir Technologies began with a simple mission: to create technology that makes a
                    difference. What started as a small team of three developers has grown into a diverse group of
                    technologists, designers, and strategists united by a passion for innovation.
                  </p>
                  <p>
                    Over the years, we've partnered with startups, enterprises, and everything in between to build
                    digital products that solve real problems. Our approach combines technical excellence with creative
                    thinking, ensuring that every solution we deliver is not just functional but also forward-thinking.
                  </p>
                  <p>
                    Today, Desir Technologies stands at the forefront of digital transformation, helping businesses
                    navigate the ever-evolving technological landscape with confidence and clarity.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-foreground/60">Clients Worldwide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">200+</div>
                    <div className="text-sm text-foreground/60">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">25+</div>
                    <div className="text-sm text-foreground/60">Team Members</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[500px] rounded-2xl overflow-hidden border border-border/50 shadow-xl"
              >
                <Image src="/placeholder.svg?height=1000&width=800" alt="Our Team" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-background/80 dark:bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/50">
                    <h3 className="text-xl font-medium mb-2">Our Headquarters</h3>
                    <p className="text-sm text-foreground/70 dark:text-foreground/70">San Francisco, California</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Our Values */}
          <section className="container mx-auto px-4 py-16 bg-primary/5 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Innovation",
                  description:
                    "We constantly push boundaries and explore new technologies to create cutting-edge solutions.",
                  icon: <Zap className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Excellence",
                  description:
                    "We hold ourselves to the highest standards in everything we do, from code quality to client communication.",
                  icon: <Award className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe the best results come from working together—with our team and with our clients.",
                  icon: <Users className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Adaptability",
                  description: "We embrace change and continuously evolve our skills and approaches to stay ahead.",
                  icon: <Target className="h-8 w-8 text-primary" />,
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-full bg-primary/10">{value.icon}</div>
                      <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                      <p className="text-foreground/60">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center">
              Meet Our Team
            </h2>

            <Tabs defaultValue="leadership" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>

              <TabsContent value="leadership">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Alex Johnson",
                      role: "CEO & Founder",
                      bio: "With over 15 years of experience in tech, Alex leads our vision and strategy.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Sarah Chen",
                      role: "CTO",
                      bio: "Sarah oversees our technical direction and ensures we stay at the cutting edge.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Michael Rodriguez",
                      role: "COO",
                      bio: "Michael manages our operations and ensures we deliver excellence to every client.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                        <div className="relative h-64 w-full">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                          <p className="text-primary font-medium mb-3">{member.role}</p>
                          <p className="text-foreground/60">{member.bio}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="engineering">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "David Kim",
                      role: "Lead Developer",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Emma Wilson",
                      role: "Backend Engineer",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "James Lee",
                      role: "Frontend Developer",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Olivia Martinez",
                      role: "DevOps Engineer",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                        <div className="relative h-48 w-full">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4 text-center">
                          <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                          <p className="text-primary text-sm">{member.role}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="design">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Sophia Taylor",
                      role: "Design Director",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Ethan Brown",
                      role: "UI/UX Designer",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Isabella Garcia",
                      role: "Product Designer",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Noah Williams",
                      role: "Motion Designer",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                        <div className="relative h-48 w-full">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4 text-center">
                          <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                          <p className="text-primary text-sm">{member.role}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Timeline */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center">
              Our Journey
            </h2>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>

              {[
                {
                  year: "2018",
                  title: "Founded",
                  description: "Desir Technologies was founded with a mission to create innovative digital solutions.",
                },
                {
                  year: "2019",
                  title: "First Major Client",
                  description: "Secured our first enterprise client and expanded the team to 10 members.",
                },
                {
                  year: "2020",
                  title: "Remote Transformation",
                  description:
                    "Successfully transitioned to a fully remote company while maintaining productivity and culture.",
                },
                {
                  year: "2021",
                  title: "International Expansion",
                  description:
                    "Opened our first international office and began serving clients across Europe and Asia.",
                },
                {
                  year: "2022",
                  title: "Product Launch",
                  description: "Launched our first SaaS product, expanding beyond client services.",
                },
                {
                  year: "2023",
                  title: "Today",
                  description: "Continuing to grow and innovate with a team of 25+ professionals across the globe.",
                },
              ].map((event, index) => (
                <motion.div
                  key={event.year}
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
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="bg-card/50 dark:bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                    <div className="text-primary font-bold text-lg mb-2">{event.year}</div>
                    <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                    <p className="text-foreground/60">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <BottomNav />
          <SpeedDial />
        </PageTransition>
      </div>
    </ThemeProvider>
  )
}

