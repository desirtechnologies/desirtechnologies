"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import TopNav from "@/components/TopNav"
import BottomNav from "@/components/BottomNav"
import SpeedDial from "@/components/SpeedDial"
import PageTransition from "@/components/PageTransition"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/elements/card"
import { Input } from "@/components/elements/input"
import { Textarea } from "@/components/elements/textarea"
import { Button } from "@/components/elements/button"
import { Label } from "@/components/elements/label"
import { RadioGroup, RadioGroupItem } from "@/components/elements/radio-group"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactPreference: "email",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, contactPreference: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        contactPreference: "email",
      })
    }, 1500)
  }

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 transition-colors duration-300">

        <PageTransition>
          {/* Hero Section */}
          <section className="container mx-auto px-4 pt-32 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
                Get in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  Touch
                </span>
              </h1>
              <p className="text-lg text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto">
                Have a question or want to work with us? We'd love to hear from you.
              </p>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Email Us",
                  info: "contact@desirtechnologies.com",
                  description: "For general inquiries and information",
                  icon: <Mail className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Call Us",
                  info: "+1 (555) 123-4567",
                  description: "Monday to Friday, 9am to 5pm PST",
                  icon: <Phone className="h-8 w-8 text-primary" />,
                },
                {
                  title: "Visit Us",
                  info: "San Francisco, CA",
                  description: "123 Tech Street, Suite 456",
                  icon: <MapPin className="h-8 w-8 text-primary" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-full bg-primary/10">{item.icon}</div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-primary font-medium mb-2">{item.info}</p>
                      <p className="text-foreground/60">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <h2 className="text-2xl md:text-3xl font-light mb-4">Send Us a Message</h2>
                      <p className="text-foreground/60">
                        Fill out the form and our team will get back to you as soon as possible.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <MessageSquare className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Quick Response</h3>
                            <p className="text-sm text-foreground/60">We respond within 24 hours</p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Business Hours</h3>
                            <p className="text-sm text-foreground/60">Mon-Fri: 9am - 5pm PST</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-3">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Your email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone (Optional)</Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="Your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                              id="subject"
                              name="subject"
                              placeholder="Subject of your message"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Preferred contact method</Label>
                          <RadioGroup
                            value={formData.contactPreference}
                            onValueChange={handleRadioChange}
                            className="flex space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email-preference" />
                              <Label htmlFor="email-preference">Email</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone-preference" />
                              <Label htmlFor="phone-preference">Phone</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <Button
                          type="submit"
                          className="w-full rounded-full bg-desir-500 hover:bg-desir-600 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>Sending...</>
                          ) : (
                            <>
                              Send Message <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Map Section */}
          <section className="container mx-auto px-4 pb-16">
            <div className="relative h-96 rounded-xl overflow-hidden border border-border/50 shadow-lg">
              <div className="absolute inset-0 bg-card/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8 bg-background/80 backdrop-blur-md rounded-xl border border-border/50 max-w-md">
                  <h3 className="text-2xl font-medium mb-2">Visit Our Office</h3>
                  <p className="text-foreground/60 mb-4">
                    123 Tech Street, Suite 456
                    <br />
                    San Francisco, CA 94105
                  </p>
                  <Button className="rounded-full bg-desir-500 hover:bg-desir-600 text-white">Get Directions</Button>
                </div>
              </div>
              {/* This would be replaced with an actual map component in production */}
              <div className="h-full w-full bg-gradient-to-r from-desir-500/20 to-desir-600/20"></div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 pb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "What services do you offer?",
                  answer:
                    "We offer a wide range of services including web development, mobile app development, UI/UX design, cloud solutions, and digital strategy consulting.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take several months.",
                },
                {
                  question: "Do you work with startups?",
                  answer:
                    "We love working with startups and can tailor our services to fit your budget and growth stage.",
                },
                {
                  question: "What is your pricing model?",
                  answer:
                    "We offer both fixed-price and time-and-materials pricing models depending on the project requirements and client preferences.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                      <p className="text-foreground/60">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

        
        </PageTransition>
      </div>
    </ThemeProvider>
  )
}

