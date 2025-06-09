import React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { Button } from "../../components/ui/button"
import { useTheme } from "next-themes"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet"
import { Menu, X, Home, Briefcase, FileText, BookOpen, Code, User, Mail, Search, Moon, Sun } from "lucide-react"
import { useMediaQuery } from "../../hooks/use-media-query"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip"

const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-4 w-4" />, hasNewFeature: false },
  { name: "Projects", href: "/projects", icon: <Code className="h-4 w-4" />, hasNewFeature: true },
  { name: "Services", href: "/services", icon: <Briefcase className="h-4 w-4" />, hasNewFeature: false },
  { name: "Resources", href: "/resources", icon: <BookOpen className="h-4 w-4" />, hasNewFeature: true },
  { name: "Blog", href: "/blog", icon: <FileText className="h-4 w-4" />, hasNewFeature: false },
  { name: "About", href: "/about", icon: <User className="h-4 w-4" />, hasNewFeature: false },
  { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" />, hasNewFeature: false },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)") || false
  const isActive = true
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
 
    <header className="fixed top-4 z-50 w-full">
    <div className="mx-auto max-w-screen-xl px-4">
      <motion.div
        className={cn(
          "rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 neumorphic-pill",
          true ? "py-2" : "py-3",
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
                    <a href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                      Desir Technologies
                    </a>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex-1 overflow-auto py-4">
                    <ul className="grid gap-2 px-2">
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className={cn(
                              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                       
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.icon}
                            {item.name}
                            {item.hasNewFeature && (
                              <span className="ml-auto flex h-2 w-2 rounded-full bg-primary"></span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <a href="/" className="flex items-center gap-2 font-bold">
              <span className="font-retro text-lg">Desir Technologies</span>
            </a>
          </div>
          <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <a href={item.href} >
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "rounded-full px-4",
                   "bg-accent text-accent-foreground"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          {item.icon}
                          {item.name}
                          {item.hasNewFeature && <span className="flex h-2 w-2 rounded-full bg-primary"></span>}
                        </span>
                      </NavigationMenuLink>
                    </a>
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
      
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="rounded-full h-8 w-8 p-1.5 bg-background/50 dark:bg-background/50 backdrop-blur-sm border border-border/30"
                  >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-xs">
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button asChild className="hidden sm:inline-flex rounded-full">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </header>
  )
}
