"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, User, Mail, Briefcase, Code } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
  { name: "Projects", href: "/projects", icon: <Code className="h-5 w-5" /> },
  { name: "Services", href: "/services", icon: <Briefcase className="h-5 w-5" /> },
  { name: "Blog", href: "/blog", icon: <FileText className="h-5 w-5" /> },
  { name: "About", href: "/about", icon: <User className="h-5 w-5" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="h-5 w-5" /> },
]

export default function BottomNav() {
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 container mx-auto px-4"
    >
      <div className="flex justify-center">
        <motion.nav
          className="flex items-center justify-center px-2 py-1.5 rounded-full bg-background/80 dark:bg-background/80 backdrop-blur-md border border-border/30 shadow-lg neumorphic-pill"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ul className="flex items-center">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href

              return (
                <motion.li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`
                      relative flex flex-col items-center justify-center ${isMobile ? "w-12 h-12" : "w-16 h-14"} rounded-full
                      ${
                        isActive
                          ? "text-primary"
                          : "text-foreground/60 hover:text-foreground/80 dark:text-foreground/60 dark:hover:text-foreground/80"
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="bottomNavIndicator"
                        className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    {!isMobile && <span className="relative z-10 text-xs mt-1">{item.name}</span>}

                    {/* Decorative elements */}
                    {isActive && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute top-1 right-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute bottom-2 left-3 w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        />
                      </>
                    )}
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        </motion.nav>
      </div>
    </motion.div>
  )
}

