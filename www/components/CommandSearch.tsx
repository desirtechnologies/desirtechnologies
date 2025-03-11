"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Home,
  Briefcase,
  FileText,
  BookOpen,
  Code,
  User,
  Mail,
  Lightbulb,
  Layers,
  Palette,
  Zap,
  Laptop,
  Server,
  Database,
  Cloud,
  Globe,
  Smartphone,
  Clock,
  Github,
  Moon,
  Search,
  Star,
  Heart,
  Users,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

interface CommandSearchProps {
  open: boolean
  setOpen: (open: boolean) => void
}

// Reusable command item component for better performance
const CommandMenuItem = ({ icon: Icon, onSelect, children }) => (
  <CommandItem onSelect={onSelect} className="flex items-center gap-2 px-2 py-1.5 cursor-pointer transition-colors">
    <Icon className="h-4 w-4 text-primary/70" />
    <span>{children}</span>
  </CommandItem>
)

export function CommandSearch({ open, setOpen }: CommandSearchProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  // Only load recent searches after component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true)
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches))
      } catch (e) {
        console.error("Failed to parse recent searches", e)
        setRecentSearches([])
      }
    }
  }, [])

  const saveRecentSearch = useCallback(
    (query: string) => {
      if (!query.trim()) return

      const updatedSearches = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 5)

      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    },
    [recentSearches],
  )

  const handleSelect = useCallback(
    (path: string) => {
      if (searchQuery) {
        saveRecentSearch(searchQuery)
      }
      setOpen(false)

      // Small delay for better UX - allows the dialog to close smoothly before navigation
      setTimeout(() => {
        router.push(path)
      }, 10)
    },
    [searchQuery, saveRecentSearch, setOpen, router],
  )

  // Memoize these arrays to prevent unnecessary re-renders
  const pages = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Resources", path: "/resources", icon: BookOpen },
    { name: "Blog", path: "/blog", icon: FileText },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Mail },
  ]

  const services = [
    { name: "Web Development", path: "/services/web-development", icon: Globe },
    { name: "Mobile Apps", path: "/services/mobile-apps", icon: Smartphone },
    { name: "UI/UX Design", path: "/services/ui-ux-design", icon: Palette },
    { name: "Cloud Solutions", path: "/services/cloud-solutions", icon: Cloud },
    { name: "IT Consulting", path: "/services/it-consulting", icon: Lightbulb },
    { name: "IT Triage", path: "/services/it-triage", icon: Zap },
  ]

  const resources = [
    { name: "Development Tools", path: "/resources/development-tools", icon: Laptop },
    { name: "Design Tools", path: "/resources/design-tools", icon: Palette },
    { name: "Frameworks", path: "/resources/frameworks", icon: Layers },
    { name: "Databases", path: "/resources/databases", icon: Database },
    { name: "Hosting", path: "/resources/hosting", icon: Server },
  ]

  const quickActions = [
    { name: "Contact Us", path: "/contact", icon: Mail },
    { name: "Visit GitHub", action: () => window.open("https://github.com", "_blank"), icon: Github },
    {
      name: "Toggle Theme",
      action: () => {
        document.documentElement.classList.toggle("dark")
        setOpen(false)
      },
      icon: Moon,
    },
    { name: "Featured Projects", path: "/projects/featured", icon: Star },
    { name: "Our Team", path: "/about/team", icon: Users },
    { name: "Support Us", path: "/support", icon: Heart },
  ]

  // Handle keyboard shortcuts
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setOpen])

  return (
    <AnimatePresence>
      {open && (
        <CommandDialog open={open} onOpenChange={setOpen}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
              <CommandInput
                placeholder="Type a command or search..."
                value={searchQuery}
                onValueChange={setSearchQuery}
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <CommandList className="max-h-[300px] overflow-y-auto">
              <CommandEmpty>No results found.</CommandEmpty>

              {mounted && recentSearches.length > 0 && (
                <>
                  <CommandGroup heading="Recent Searches">
                    {recentSearches.map((search, index) => (
                      <CommandMenuItem key={`recent-${index}`} icon={Clock} onSelect={() => setSearchQuery(search)}>
                        {search}
                      </CommandMenuItem>
                    ))}
                  </CommandGroup>
                  <CommandSeparator />
                </>
              )}

              <CommandGroup heading="Pages">
                {pages.map((page) => (
                  <CommandMenuItem key={page.path} icon={page.icon} onSelect={() => handleSelect(page.path)}>
                    {page.name}
                  </CommandMenuItem>
                ))}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Services">
                {services.map((service) => (
                  <CommandMenuItem key={service.path} icon={service.icon} onSelect={() => handleSelect(service.path)}>
                    {service.name}
                  </CommandMenuItem>
                ))}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Resources">
                {resources.map((resource) => (
                  <CommandMenuItem
                    key={resource.path}
                    icon={resource.icon}
                    onSelect={() => handleSelect(resource.path)}
                  >
                    {resource.name}
                  </CommandMenuItem>
                ))}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Quick Actions">
                {quickActions.map((action, index) => (
                  <CommandMenuItem
                    key={`action-${index}`}
                    icon={action.icon}
                    onSelect={action.action || (() => handleSelect(action.path))}
                  >
                    {action.name}
                  </CommandMenuItem>
                ))}
              </CommandGroup>
            </CommandList>

            <div className="border-t px-3 py-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span>Press</span>
                  <kbd className="rounded border bg-muted px-1 font-mono">↑</kbd>
                  <kbd className="rounded border bg-muted px-1 font-mono">↓</kbd>
                  <span>to navigate</span>
                </div>
                <div className="flex items-center gap-1">
                  <kbd className="rounded border bg-muted px-1 font-mono">esc</kbd>
                  <span>to close</span>
                </div>
              </div>
            </div>
          </motion.div>
        </CommandDialog>
      )}
    </AnimatePresence>
  )
}

