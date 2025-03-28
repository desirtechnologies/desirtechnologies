import React from "react"

import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  Globe,
  Smartphone,
  Headphones,
  Server,
  Database,
  Cloud,
  Shield,
  Cpu,
  Code,
  Palette,
  BookOpen,
  FileText,
  Briefcase,
  User,
  Phone,
  MapPin,
  Clock,
  Home,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [randomChars, setRandomChars] = useState<Array<{ id: number; char: string; x: number; y: number }>>([])
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  // Matrix-like random characters animation
  useEffect(() => {
    try {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/"
      const footerElement = document.getElementById("animated-footer")

      if (!footerElement) return

      const footerRect = footerElement.getBoundingClientRect()
      const width = footerRect.width
      const height = footerRect.height

      // Create initial random characters
      const initialChars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        char: chars.charAt(Math.floor(Math.random() * chars.length)),
        x: Math.random() * width,
        y: Math.random() * height,
      }))

      setRandomChars(initialChars)

      // Update characters periodically
      const interval = setInterval(() => {
        setRandomChars((prev) =>
          prev.map((item) => ({
            ...item,
            char: Math.random() > 0.7 ? chars.charAt(Math.floor(Math.random() * chars.length)) : item.char,
            x: item.x + (Math.random() * 2 - 1) * 2,
            y: item.y + (Math.random() * 2 - 1) * 2,
          })),
        )
      }, 500)

      return () => clearInterval(interval)
    } catch (error) {
      console.error("Error in matrix animation:", error)
      return () => {}
    }
  }, [])

  // Section header animation variants
  const sectionHeaderVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    hover: {
      backgroundPosition: "100% 50%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  }

  return (
    <footer className="w-full border-t bg-background relative overflow-hidden" id="animated-footer">
      {/* Matrix-like random characters */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {randomChars.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-primary/20 font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], x: item.x, y: item.y }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          >
            {item.char}
          </motion.div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/70 to-background pointer-events-none"></div>

      <div className="container py-20 relative z-10">
        {/* Company Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="inline-block mb-2 group">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <span className="font-retro text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary group-hover:from-primary/80 group-hover:via-primary group-hover:to-primary/80 transition-all duration-500">
                  Desir Technologies
                </span>
              </motion.div>
            </Link>
            <p className="text-base leading-relaxed text-muted-foreground max-w-md">
              Empowering businesses with innovative technology solutions to drive growth and success. We specialize in
              web development, mobile apps, cloud solutions, and IT consulting.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
                { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
                { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", label: "Facebook" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full h-12 w-12 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all shadow-sm hover:shadow-md hover:shadow-primary/20"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div
                onHoverStart={() => setHoveredSection("contact")}
                onHoverEnd={() => setHoveredSection(null)}
                animate={hoveredSection === "contact" ? "hover" : "initial"}
                variants={sectionHeaderVariants}
                className="inline-block"
              >
                <h3 className="font-medium text-xl flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 hover:from-primary/70 hover:via-primary hover:to-primary/70">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Contact Us
                </h3>
              </motion.div>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors pt-1.5">
                    123 Tech Avenue
                    <br />
                    San Francisco, CA 94107
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <a
                    href="tel:+15551234567"
                    className="text-muted-foreground group-hover:text-foreground transition-colors pt-1"
                  >
                    +1 (555) 123-4567
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <a
                    href="mailto:info@desirtechnologies.com"
                    className="text-muted-foreground group-hover:text-foreground transition-colors pt-1"
                  >
                    info@desirtechnologies.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors pt-1">
                    Mon-Fri: 9AM-6PM (PST)
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                onHoverStart={() => setHoveredSection("newsletter")}
                onHoverEnd={() => setHoveredSection(null)}
                animate={hoveredSection === "newsletter" ? "hover" : "initial"}
                variants={sectionHeaderVariants}
                className="inline-block"
              >
                <h3 className="font-medium text-xl flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 hover:from-primary/70 hover:via-primary hover:to-primary/70">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Newsletter
                </h3>
              </motion.div>
              <div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Stay updated with our latest news, articles, and special offers.
                </p>
                <form className="space-y-4">
                  <div className="relative group">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pr-12 py-6 rounded-full border-primary/20 focus:border-primary/50 text-base group-hover:border-primary/30 transition-colors"
                      required
                    />
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        size="icon"
                        className="absolute right-1 top-1 h-10 w-10 rounded-full bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/90 transition-all"
                      >
                        <ArrowRight className="h-5 w-5" />
                        <span className="sr-only">Subscribe</span>
                      </Button>
                    </motion.div>
                  </div>
                  <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Separator className="mb-20 opacity-30" />
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-background px-4">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary/30"></div>
            </div>
          </div>
        </div>

        {/* Links Section - Desktop */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              onHoverStart={() => setHoveredSection("services")}
              onHoverEnd={() => setHoveredSection(null)}
              animate={hoveredSection === "services" ? "hover" : "initial"}
              variants={sectionHeaderVariants}
              className="inline-block"
            >
              <h3 className="font-medium text-xl flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 hover:from-primary/70 hover:via-primary hover:to-primary/70">
                <Briefcase className="h-5 w-5 mr-2 text-primary" />
                Services
              </h3>
            </motion.div>
            <ul className="space-y-4">
              {[
                { icon: <Globe />, label: "Web Development", href: "/services/web-development" },
                { icon: <Smartphone />, label: "Mobile Apps", href: "/services/mobile-apps" },
                { icon: <Palette />, label: "UI/UX Design", href: "/services/ui-ux-design" },
                { icon: <Cloud />, label: "Cloud Solutions", href: "/services/cloud-solutions" },
                { icon: <Headphones />, label: "IT Consulting", href: "/services/it-consulting" },
                { icon: <Shield />, label: "IT Triage", href: "/services/it-triage" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center group relative overflow-hidden rounded-lg p-2 -ml-2"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <div className="mr-3 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      {React.cloneElement(item.icon, {
                        className: "h-4 w-4 text-primary/70 group-hover:text-primary transition-colors",
                      })}
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <motion.div
              onHoverStart={() => setHoveredSection("resources")}
              onHoverEnd={() => setHoveredSection(null)}
              animate={hoveredSection === "resources" ? "hover" : "initial"}
              variants={sectionHeaderVariants}
              className="inline-block"
            >
              <h3 className="font-medium text-xl flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 hover:from-primary/70 hover:via-primary hover:to-primary/70">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Resources
              </h3>
            </motion.div>
            <ul className="space-y-4">
              {[
                { icon: <Code />, label: "Development Tools", href: "/resources/development-tools" },
                { icon: <Palette />, label: "Design Tools", href: "/resources/design-tools" },
                { icon: <Cpu />, label: "Frameworks", href: "/resources/frameworks" },
                { icon: <Database />, label: "Databases", href: "/resources/databases" },
                { icon: <Server />, label: "Hosting", href: "/resources/hosting" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center group relative overflow-hidden rounded-lg p-2 -ml-2"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <div className="mr-3 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      {React.cloneElement(item.icon, {
                        className: "h-4 w-4 text-primary/70 group-hover:text-primary transition-colors",
                      })}
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <motion.div
              onHoverStart={() => setHoveredSection("quicklinks")}
              onHoverEnd={() => setHoveredSection(null)}
              animate={hoveredSection === "quicklinks" ? "hover" : "initial"}
              variants={sectionHeaderVariants}
              className="inline-block"
            >
              <h3 className="font-medium text-xl flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 hover:from-primary/70 hover:via-primary hover:to-primary/70">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Quick Links
              </h3>
            </motion.div>
            <ul className="space-y-4">
              {[
                { icon: <Home />, label: "Home", href: "/" },
                { icon: <Code />, label: "Projects", href: "/projects" },
                { icon: <Briefcase />, label: "Services", href: "/services" },
                { icon: <BookOpen />, label: "Resources", href: "/resources" },
                { icon: <FileText />, label: "Blog", href: "/blog" },
                { icon: <User />, label: "About", href: "/about" },
                { icon: <Mail />, label: "Contact", href: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center group relative overflow-hidden rounded-lg p-2 -ml-2"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/5 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <div className="mr-3 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      {React.cloneElement(item.icon, {
                        className: "h-4 w-4 text-primary/70 group-hover:text-primary transition-colors",
                      })}
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <motion.div
              onHoverStart={() => setHoveredSection("updates")}
              onHoverEnd={() => setHoveredSection(null)}
              animate={hoveredSection === "updates" ? "hover" : "initial"}
              variants={sectionHeaderVariants}
              className="inline-block"
            >
              <h3 className="font-medium text-xl flex items-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 hover:from-primary/70 hover:via-primary hover:to-primary/70">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Latest Updates
              </h3>
            </motion.div>
            <div className="space-y-6">
              <motion.div
                className="p-5 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-colors relative overflow-hidden group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -z-10 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <h4 className="text-base font-medium mb-3 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-primary" />
                  Latest Blog Post
                </h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  10 Essential Developer Tools for 2025 - Boost your productivity with these cutting-edge tools.
                </p>
                <Link
                  href="/blog/essential-developer-tools-2025"
                  className="text-sm text-primary hover:text-primary/80 flex items-center group/link"
                >
                  Read more
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  >
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                className="p-5 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-colors relative overflow-hidden group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -z-10 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <h4 className="text-base font-medium mb-3 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-primary" />
                  New Service
                </h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  AI-Powered Development Solutions - Leverage the power of artificial intelligence in your next project.
                </p>
                <Link
                  href="/services/ai-development"
                  className="text-sm text-primary hover:text-primary/80 flex items-center group/link"
                >
                  Learn more
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                  >
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Links Section - Mobile Accordion */}
        <div className="md:hidden mb-12 space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services" className="border-primary/10 px-2">
              <AccordionTrigger className="rounded-lg px-4 py-3 hover:bg-accent data-[state=open]:bg-accent/50">
                <span className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-3 text-primary" />
                  <span className="text-base">Services</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2 px-2">
                <ul className="space-y-4 pl-4">
                  {[
                    { icon: <Globe />, label: "Web Development", href: "/services/web-development" },
                    { icon: <Smartphone />, label: "Mobile Apps", href: "/services/mobile-apps" },
                    { icon: <Palette />, label: "UI/UX Design", href: "/services/ui-ux-design" },
                    { icon: <Cloud />, label: "Cloud Solutions", href: "/services/cloud-solutions" },
                    { icon: <Headphones />, label: "IT Consulting", href: "/services/it-consulting" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center py-2 px-3 rounded-md hover:bg-accent/50 group"
                      >
                        <div className="mr-3 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          {React.cloneElement(item.icon, {
                            className: "h-4 w-4 text-primary/70 group-hover:text-primary transition-colors",
                          })}
                        </div>
                        {item.label}
                        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources" className="border-primary/10 px-2">
              <AccordionTrigger className="rounded-lg px-4 py-3 hover:bg-accent data-[state=open]:bg-accent/50">
                <span className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-3 text-primary" />
                  <span className="text-base">Resources</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2 px-2">
                <ul className="space-y-4 pl-4">
                  {[
                    { icon: <Code />, label: "Development Tools", href: "/resources/development-tools" },
                    { icon: <Palette />, label: "Design Tools", href: "/resources/design-tools" },
                    { icon: <Cpu />, label: "Frameworks", href: "/resources/frameworks" },
                    { icon: <Database />, label: "Databases", href: "/resources/databases" },
                    { icon: <Server />, label: "Hosting", href: "/resources/hosting" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center py-2 px-3 rounded-md hover:bg-accent/50 group"
                      >
                        <div className="mr-3 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          {React.cloneElement(item.icon, {
                            className: "h-4 w-4 text-primary/70 group-hover:text-primary transition-colors",
                          })}
                        </div>
                        {item.label}
                        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="quick-links" className="border-primary/10 px-2">
              <AccordionTrigger className="rounded-lg px-4 py-3 hover:bg-accent data-[state=open]:bg-accent/50">
                <span className="flex items-center">
                  <FileText className="h-5 w-5 mr-3 text-primary" />
                  <span className="text-base">Quick Links</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2 px-2">
                <ul className="space-y-4 pl-4">
                  {[
                    { icon: <Home />, label: "Home", href: "/" },
                    { icon: <Code />, label: "Projects", href: "/projects" },
                    { icon: <Briefcase />, label: "Services", href: "/services" },
                    { icon: <BookOpen />, label: "Resources", href: "/resources" },
                    { icon: <Mail />, label: "Contact", href: "/contact" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center py-2 px-3 rounded-md hover:bg-accent/50 group"
                      >
                        <div className="mr-3 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          {React.cloneElement(item.icon, {
                            className: "h-4 w-4 text-primary/70 group-hover:text-primary transition-colors",
                          })}
                        </div>
                        {item.label}
                        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Mobile Latest Updates */}
          <div className="space-y-4 px-2 mt-8">
            <h3 className="font-medium text-lg flex items-center px-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              Latest Updates
            </h3>
            <motion.div
              className="p-5 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 relative overflow-hidden group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -z-10 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <h4 className="text-base font-medium mb-3 flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-primary" />
                Latest Blog Post
              </h4>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                10 Essential Developer Tools for 2025 - Boost your productivity with these cutting-edge tools.
              </p>
              <Link
                href="/blog/essential-developer-tools-2025"
                className="text-sm text-primary hover:text-primary/80 flex items-center group/link"
              >
                Read more
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                >
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <Separator className="mb-8 opacity-30" />
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-background px-4">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary/30"></div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Desir Technologies. All rights reserved.
              </p>
              <div className="hidden sm:block text-muted-foreground/30">|</div>
              <p className="text-xs text-muted-foreground/70">
                Designed with <span className="text-red-400">♥</span> in San Francisco
              </p>
            </div>
            <div className="flex items-center flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors hover:underline">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-foreground transition-colors hover:underline">
                Sitemap
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

