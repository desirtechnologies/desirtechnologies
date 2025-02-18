"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/views/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/views/components/ui/command"
import { Bot, Book, Code2, FileText, Laptop, Moon, Search, Sun, Terminal, Brain, Users, Video } from "lucide-react"

export function CommandPalette() {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const commandRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} >
        <CommandInput placeholder="Type a command or search..." value={search} onValueChange={setSearch} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <AnimatePresence>
            <CommandGroup heading="Suggestions">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <CommandItem onSelect={() => runCommand(() => router.push("/docs"))}>
                  <FileText className="mr-2 h-4 w-4" />
                  Search Documentation
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => router.push("/tutorials"))}>
                  <Video className="mr-2 h-4 w-4" />
                  Browse Tutorials
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => router.push("/playground"))}>
                  <Terminal className="mr-2 h-4 w-4" />
                  Open Code Playground
                </CommandItem>
              </motion.div>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="AI Assistant">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <CommandItem
                  onSelect={() => {
                    runCommand(() => {
                      // Implement AI assistant action
                    })
                  }}
                >
                  <Bot className="mr-2 h-4 w-4" />
                  Ask AI Assistant
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    runCommand(() => {
                      // Implement code analysis
                    })
                  }}
                >
                  <Brain className="mr-2 h-4 w-4" />
                  Analyze Code
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    runCommand(() => {
                      // Implement technical search
                    })
                  }}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Technical Search
                </CommandItem>
              </motion.div>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Resources">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <CommandItem onSelect={() => runCommand(() => router.push("/api"))}>
                  <Code2 className="mr-2 h-4 w-4" />
                  API Reference
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => router.push("/examples"))}>
                  <Book className="mr-2 h-4 w-4" />
                  Examples
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => router.push("/community"))}>
                  <Users className="mr-2 h-4 w-4" />
                  Community
                </CommandItem>
              </motion.div>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
                  <Laptop className="mr-2 h-4 w-4" />
                  System
                </CommandItem>
              </motion.div>
            </CommandGroup>
          </AnimatePresence>
        </CommandList>
      </CommandDialog>
    </>
  )
}

