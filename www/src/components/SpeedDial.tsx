"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import {
  Settings,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  Download,
  Sparkles,
  Lightbulb,
  Rss,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SpeedDialAction {
  icon: React.ReactNode
  label: string
  href?: string
  onClick?: () => void
  color?: string
}

export default function SpeedDial() {
  const [isOpen, setIsOpen] = useState(false)
  const controls = useAnimation()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>(
    [],
  )

  const actions: SpeedDialAction[] = [
    {
      icon: <Settings className="h-4 w-4" />,
      label: "Settings",
      href: "/settings",
      color: "bg-desir-500 hover:bg-desir-600",
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Contact",
      href: "/contact",
      color: "bg-desir-500 hover:bg-desir-600",
    },
    {
      icon: <Github className="h-4 w-4" />,
      label: "GitHub",
      href: "https://github.com",
      color: "bg-desir-500 hover:bg-desir-600",
    },
    {
      icon: <Twitter className="h-4 w-4" />,
      label: "Twitter",
      href: "https://twitter.com",
      color: "bg-desir-500 hover:bg-desir-600",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "bg-desir-500 hover:bg-desir-600",
    },
    {
      icon: <Rss className="h-4 w-4" />,
      label: "Blog",
      href: "/blog",
      color: "bg-desir-500 hover:bg-desir-600",
    },
    {
      icon: <Lightbulb className="h-4 w-4" />,
      label: "Services",
      href: "/services",
      color: "bg-desir-500 hover:bg-desir-600",
    },
    {
      icon: <Share2 className="h-4 w-4" />,
      label: "Share",
      onClick: () => {
        if (navigator.share) {
          navigator.share({
            title: "Desir Technologies",
            text: "Check out this amazing tech company!",
            url: window.location.href,
          })
        }
      },
      color: "bg-desir-500 hover:bg-desir-600",
    },
    {
      icon: <Download className="h-4 w-4" />,
      label: "Resume",
      href: "/resume.pdf",
      color: "bg-desir-500 hover:bg-desir-600",
    },
    {
      icon: <ArrowUp className="h-4 w-4" />,
      label: "Top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      color: "bg-desir-500 hover:bg-desir-600",
    },
  ]

  useEffect(() => {
    // Continuous subtle animation
    const interval = setInterval(() => {
      controls.start({
        scale: [1, 1.05, 1],
        rotate: [0, 5, 0, -5, 0],
        transition: { duration: 2, ease: "easeInOut" },
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [controls])

  const createSparkles = () => {
    const newSparkles = []
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const distance = Math.random() * 30 + 20
      newSparkles.push({
        id: Date.now() + i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.5 + 0.5,
      })
    }
    setSparkles(newSparkles)

    // Clear sparkles after animation
    setTimeout(() => setSparkles([]), 1000)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
    createSparkles()
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 md:bottom-6">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col-reverse items-end space-y-reverse space-y-2">
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center space-x-2"
              >
                <motion.div
                  className="bg-background/80 dark:bg-background/80 backdrop-blur-md px-2 py-1 rounded-md shadow-md border border-border/30"
                  whileHover={{ x: -5 }}
                >
                  <span className="text-sm font-medium">{action.label}</span>
                </motion.div>
                {action.href ? (
                  <Link
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="icon"
                        className={`rounded-full shadow-lg ${action.color || "bg-primary hover:bg-primary/90"} text-white green-glow`}
                      >
                        {action.icon}
                      </Button>
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="icon"
                      className={`rounded-full shadow-lg ${action.color || "bg-primary hover:bg-primary/90"} text-white green-glow`}
                      onClick={action.onClick}
                    >
                      {action.icon}
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Sparkles */}
        <AnimatePresence>
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                opacity: sparkle.opacity,
              }}
              animate={{
                x: sparkle.x,
                y: sparkle.y,
                scale: 1,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{ width: sparkle.size, height: sparkle.size }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400 to-green-600" />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Main button */}
        <motion.div animate={controls} className="relative">
          <Button
            ref={buttonRef}
            size="icon"
            className="rounded-full h-14 w-14 shadow-lg bg-gradient-to-r from-green-600 via-green-500 to-green-400 hover:from-green-700 hover:via-green-600 hover:to-green-500 text-white relative overflow-hidden green-glow animate-pulse-green"
            onClick={handleToggle}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md transform scale-110" />

            {/* Icon */}
            <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="relative z-10">
              <Sparkles className="h-6 w-6" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

