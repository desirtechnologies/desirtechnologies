"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { CommandPalette } from "@/views/components/command-palette"
import { DarkModeToggle } from "@/views/components/dark-mode-toggle"
import { Button } from "@/views/components/ui/button"
import { Badge } from "@/views/components/ui/badge"
import {
  Terminal,
  Sparkles,
  Zap,
  BookOpen,
  Code2,
  FlaskRoundIcon as Flask,
  LayoutGrid,
  Library,
  Rocket,
  Users,
  Workflow,
} from "lucide-react"
import { cn } from "@/controllers/lib/utils"

const navItems = [
  {
    title: "Documentation",
    icon: BookOpen,
    href: "/docs",
    badge: "New",
  },
  {
    title: "API",
    icon: Code2,
    href: "/api",
  },
  {
    title: "Examples",
    icon: LayoutGrid,
    href: "/examples",
  },
  {
    title: "Resources",
    icon: Library,
    href: "/resources",
  },
  {
    title: "Community",
    icon: Users,
    href: "/community",
  },
]

const quickLinks = [
  {
    title: "Playground",
    icon: Flask,
    href: "/playground",
    color: "text-purple-500",
  },
  {
    title: "Deploy",
    icon: Rocket,
    href: "/deploy",
    color: "text-green-500",
  },
  {
    title: "Status",
    icon: Workflow,
    href: "/status",
    color: "text-blue-500",
  },
]

export function Header() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"])
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(8px)"])
  const scale = useTransform(scrollY, [0, 50], [1, 0.95])

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b supports-[backdrop-filter]:bg-background/60",
        pathname === "/" && "border-transparent",
      )}
      style={{
        backgroundColor: pathname === "/" ? backgroundColor : undefined,
        backdropFilter: pathname === "/" ? backdropBlur : undefined,
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div className="flex items-center gap-6" style={{ scale }}>
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-primary/10 p-2"
            >
              <Terminal className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.span className="hidden font-bold sm:inline-block" whileHover={{ scale: 1.05 }}>
              TechDocs
            </motion.span>
            <Badge variant="secondary" className="hidden lg:inline-flex">
              <Sparkles className="mr-1 h-3 w-3" />
              v2.0
            </Badge>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div key={item.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                className={cn(
                  "group relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.title}
                  {item.badge && (
                    <Badge variant="secondary" className="h-4 px-1 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </div>
                {pathname === item.href && (
                  <motion.div className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" layoutId="activeNav" />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="hidden lg:flex items-center gap-2">
            {quickLinks.map((link) => (
              <motion.div key={link.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={link.href}>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <link.icon className={cn("h-4 w-4", link.color)} />
                    {link.title}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="group relative gap-2">
                <Zap className="h-4 w-4 transition-transform group-hover:scale-125" />
                Pro
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
              </Button>
            </motion.div>
            <CommandPalette />
            <DarkModeToggle />
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden overflow-x-auto flex items-center gap-2 px-4 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {navItems.map((item) => (
          <motion.div key={item.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent whitespace-nowrap",
                pathname === item.href ? "text-primary bg-accent" : "text-muted-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
              {item.badge && (
                <Badge variant="secondary" className="h-4 px-1 text-xs">
                  {item.badge}
                </Badge>
              )}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.header>
  )
}

