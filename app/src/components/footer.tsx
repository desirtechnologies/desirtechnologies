"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Book,
  Code2,
  Facebook,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Heart,
  Instagram,
  Library,
  Linkedin,
  Mail,
  MessageSquare,
  Newspaper,
  Phone,
  Rss,
  Share2,
  Shield,
  Terminal,
  Twitter,
  Users,
  Youtube,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#008000_1px,transparent_1px),linear-gradient(to_bottom,#008000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-5" />

      <div className="container relative">
        <div className="grid gap-8 py-16 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Terminal className="h-6 w-6" />
              <span className="font-bold">TechDocs</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The next generation documentation platform for developers and teams. Built with modern technologies and
              AI-powered features.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon">
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform</h3>
            {platformLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <link.icon className="h-4 w-4" />
                {link.title}
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            {resourceLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <link.icon className="h-4 w-4" />
                {link.title}
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Community</h3>
            {communityLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <link.icon className="h-4 w-4" />
                {link.title}
              </Link>
            ))}
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest updates and resources delivered to your inbox.
            </p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-sm" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2">
              {contactInfo.map((info) => (
                <p key={info.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <info.icon className="h-4 w-4" />
                  {info.label}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <div className="grid grid-cols-2 gap-2">
              {legalLinks.map((link) => (
                <Link key={link.title} href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Recognition</h4>
            <div className="flex flex-wrap gap-2">
              {awards.map((award) => (
                <div key={award.name} className="rounded-full bg-muted px-3 py-1 text-xs">
                  {award.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TechDocs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share TechDocs
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              Support Us
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
]

const platformLinks = [
  { title: "Documentation", icon: FileText, href: "/docs" },
  { title: "API Reference", icon: Code2, href: "/api" },
  { title: "Libraries", icon: Library, href: "/libraries" },
  { title: "Security", icon: Shield, href: "/security" },
  { title: "Integrations", icon: Share2, href: "/integrations" },
]

const resourceLinks = [
  { title: "Guides", icon: Book, href: "/guides" },
  { title: "Tutorials", icon: GraduationCap, href: "/tutorials" },
  { title: "Blog", icon: Newspaper, href: "/blog" },
  { title: "Examples", icon: Terminal, href: "/examples" },
  { title: "RSS Feed", icon: Rss, href: "/rss" },
]

const communityLinks = [
  { title: "Discord", icon: MessageSquare, href: "/discord" },
  { title: "GitHub", icon: Github, href: "/github" },
  { title: "Forum", icon: Users, href: "/forum" },
  { title: "Events", icon: Globe, href: "/events" },
]

const contactInfo = [
  { label: "contact@techdocs.com", icon: Mail },
  { label: "+1 (555) 123-4567", icon: Phone },
  { label: "San Francisco, CA", icon: Globe },
]

const legalLinks = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Cookie Policy", href: "/cookies" },
  { title: "Licenses", href: "/licenses" },
  { title: "Security", href: "/security" },
  { title: "Status", href: "/status" },
]

const awards = [
  { name: "AWWWARDS SOTD" },
  { name: "CSS Design Awards" },
  { name: "Product Hunt #1" },
  { name: "GitHub Trending" },
]

