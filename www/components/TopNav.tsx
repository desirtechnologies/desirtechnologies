"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Home, Briefcase, FileText, BookOpen, Code, User, Mail, Search } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { CommandSearch } from "@/components/CommandSearch"

const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-4 w-4" />, hasNewFeature: false },
  { name: "Projects", href: "/projects", icon: <Code className="h-4 w-4" />, hasNewFeature: true },
  { name: "Services", href: "/services", icon: <Briefcase className="h-4 w-4" />, hasNewFeature: false },
  { name: "Resources", href: "/resources", icon: <BookOpen className="h-4 w-4" />, hasNewFeature: true },
  { name: "Blog", href: "/blog", icon: <FileText className="h-4 w-4" />, hasNewFeature: false },
  { name: "About", href: "/about", icon: <User className="h-4 w-4" />, hasNewFeature: false },
  { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" />, hasNewFeature: false },
]

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)") || false

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(path)
  }

  return (
    <>
      <CommandSearch open={searchOpen} setOpen={setSearchOpen} />

      <header className="fixed top-4 z-50 w-full">
        <div className="mx-auto max-w-screen-xl px-4">
          <motion.div
            className={cn(
              "rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 neumorphic-pill",
              scrolled ? "py-2" : "py-3",
              "transition-all duration-200",
            )}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                    <div className="flex h-full flex-col">
                      <div className="flex items-center justify-between border-b px-2 py-4">
                        <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                          Desir Technologies
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                          <X className="h-5 w-5" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </div>
                      <nav className="flex-1 overflow-auto py-4">
                        <ul className="grid gap-2 px-2">
                          {navItems.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={cn(
                                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                                  isActive(item.href) ? "bg-accent text-accent-foreground" : "transparent",
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                {item.icon}
                                {item.name}
                                {item.hasNewFeature && (
                                  <span className="ml-auto flex h-2 w-2 rounded-full bg-primary"></span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
                <Link href="/" className="flex items-center gap-2 font-bold">
                  <span className="font-retro text-lg">Desir Technologies</span>
                </Link>
              </div>
              <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
                <NavigationMenu>
                  <NavigationMenuList className="space-x-1">
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.href}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "rounded-full px-4",
                              isActive(item.href) ? "bg-accent text-accent-foreground" : "",
                            )}
                          >
                            <span className="flex items-center gap-2">
                              {item.icon}
                              {item.name}
                              {item.hasNewFeature && <span className="flex h-2 w-2 rounded-full bg-primary"></span>}
                            </span>
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-accent"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <ThemeToggle />
                <Button asChild className="hidden sm:inline-flex rounded-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  )
}

