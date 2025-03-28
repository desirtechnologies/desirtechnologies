import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Code, Briefcase, BookOpen, FileText, User, Mail, ChevronUp, Sparkles } from "lucide-react"

type SpeedDialAction = {
  id: string
  icon: React.ReactNode
  label: string
  href?: string
  onClick?: () => void
  color?: string
}

export default function FloatingSpeedDial() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; size: number; opacity: number; color?: string }>
  >([])
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  // Actions for the speed dial
  const actions: SpeedDialAction[] = [
    {
      id: "home",
      icon: <Home className="h-4 w-4" />,
      label: "Home",
      href: "/",
      color: "bg-green-600/90 hover:bg-green-600",
    },
    {
      id: "projects",
      icon: <Code className="h-4 w-4" />,
      label: "Projects",
      href: "/projects",
      color: "bg-green-600/90 hover:bg-green-600",
    },
    {
      id: "services",
      icon: <Briefcase className="h-4 w-4" />,
      label: "Services",
      href: "/services",
      color: "bg-green-600/90 hover:bg-green-600",
    },
    {
      id: "resources",
      icon: <BookOpen className="h-4 w-4" />,
      label: "Resources",
      href: "/resources",
      color: "bg-green-600/90 hover:bg-green-600",
    },
    {
      id: "blog",
      icon: <FileText className="h-4 w-4" />,
      label: "Blog",
      href: "/blog",
      color: "bg-green-600/90 hover:bg-green-600",
    },
    {
      id: "about",
      icon: <User className="h-4 w-4" />,
      label: "About",
      href: "/about",
      color: "bg-green-600/90 hover:bg-green-600",
    },
    {
      id: "contact",
      icon: <Mail className="h-4 w-4" />,
      label: "Contact",
      href: "/contact",
      color: "bg-green-600/90 hover:bg-green-600",
    },
    {
      id: "top",
      icon: <ChevronUp className="h-4 w-4" />,
      label: "Top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      color: "bg-green-600/90 hover:bg-green-600",
    },
  ]

  // Handle scroll to show/hide the speed dial
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false)
        setIsOpen(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Create sparkle effect
  const createSparkles = () => {
    const newSparkles = []
    const colors = ["#00ff00", "#00dd00", "#00aa00", "#008000", "#ffffff"]

    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2
      const distance = Math.random() * 60 + 20
      newSparkles.push({
        id: Date.now() + i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: Math.random() * 6 + 2,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    setSparkles(newSparkles)

    // Clear sparkles after animation
    setTimeout(() => setSparkles([]), 1200)
  }

  // Create hover sparkle effect for action buttons
  const createHoverSparkles = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newSparkles = []
    const colors = ["#00ff00", "#00dd00", "#00aa00", "#008000", "#ffffff"]

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const distance = Math.random() * 20 + 10
      newSparkles.push({
        id: Date.now() + i,
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    setSparkles((prev) => [...prev, ...newSparkles])

    // Clear sparkles after animation
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => !newSparkles.includes(s)))
    }, 800)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
    createSparkles()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-16 right-0 flex flex-col-reverse items-end space-y-reverse space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {actions.map((action, index) => (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    className="flex items-center space-x-2"
                  >
                    <motion.div
                      className="bg-background/90 dark:bg-background/90 backdrop-blur-md px-2 py-1 rounded-md shadow-md border border-border/30"
                      whileHover={{ x: -5 }}
                    >
                      <span className="text-sm font-medium">{action.label}</span>
                    </motion.div>
                    {action.href ? (
                      <a href={action.href}>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative"
                          onMouseEnter={(e) => {
                            setHoveredButton(action.id)
                            createHoverSparkles(e)
                          }}
                          onMouseLeave={() => setHoveredButton(null)}
                        >
                          {/* Magical background */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: "radial-gradient(circle at center, #00ff00 0%, #008000 50%, #004000 100%)",
                              opacity: 0.9,
                              boxShadow: "0 0 10px rgba(0, 128, 0, 0.5), 0 0 20px rgba(0, 128, 0, 0.3)",
                            }}
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              scale: {
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Number.POSITIVE_INFINITY,
                                delay: index * 0.2,
                              },
                            }}
                          />

                          {/* Rotating ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full border border-green-300/30"
                            style={{ borderRadius: "50%" }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                          />

                          {/* Pulsing glow */}
                          <motion.div
                            className="absolute inset-0 rounded-full bg-green-500"
                            animate={{
                              opacity: [0.1, 0.2, 0.1],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.1,
                            }}
                            style={{ filter: "blur(4px)" }}
                          />

                          {/* Button */}
                          <Button
                            size="icon"
                            className="rounded-full shadow-lg text-white relative overflow-hidden border border-green-500/20"
                            style={{ background: "transparent" }}
                          >
                            {/* Magical particles */}
                            {hoveredButton === action.id && (
                              <div className="absolute inset-0 overflow-hidden rounded-full">
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full bg-white"
                                    style={{
                                      left: "50%",
                                      top: "50%",
                                      x: "-50%",
                                      y: "-50%",
                                    }}
                                    animate={{
                                      x: ["-50%", `${Math.cos((i * Math.PI) / 2) * 15 - 50}%`],
                                      y: ["-50%", `${Math.sin((i * Math.PI) / 2) * 15 - 50}%`],
                                      opacity: [0, 1, 0],
                                      scale: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      ease: "easeInOut",
                                      repeat: Number.POSITIVE_INFINITY,
                                      delay: i * 0.1,
                                    }}
                                  />
                                ))}
                              </div>
                            )}

                            {/* Icon */}
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                scale: {
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                  delay: index * 0.1,
                                },
                              }}
                              className="relative z-10"
                            >
                              {action.icon}
                            </motion.div>
                          </Button>
                        </motion.div>
                      </a>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                        onMouseEnter={(e) => {
                          setHoveredButton(action.id)
                          createHoverSparkles(e)
                        }}
                        onMouseLeave={() => setHoveredButton(null)}
                      >
                        {/* Magical background */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: "radial-gradient(circle at center, #00ff00 0%, #008000 50%, #004000 100%)",
                            opacity: 0.9,
                            boxShadow: "0 0 10px rgba(0, 128, 0, 0.5), 0 0 20px rgba(0, 128, 0, 0.3)",
                          }}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            scale: {
                              duration: 3,
                              ease: "easeInOut",
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.2,
                            },
                          }}
                        />

                        {/* Rotating ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border border-green-300/30"
                          style={{ borderRadius: "50%" }}
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                        />

                        {/* Pulsing glow */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-green-500"
                          animate={{
                            opacity: [0.1, 0.2, 0.1],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.1,
                          }}
                          style={{ filter: "blur(4px)" }}
                        />

                        {/* Button */}
                        <Button
                          size="icon"
                          className="rounded-full shadow-lg text-white relative overflow-hidden border border-green-500/20"
                          onClick={action.onClick}
                          style={{ background: "transparent" }}
                        >
                          {/* Magical particles */}
                          {hoveredButton === action.id && (
                            <div className="absolute inset-0 overflow-hidden rounded-full">
                              {Array.from({ length: 4 }).map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 rounded-full bg-white"
                                  style={{
                                    left: "50%",
                                    top: "50%",
                                    x: "-50%",
                                    y: "-50%",
                                  }}
                                  animate={{
                                    x: ["-50%", `${Math.cos((i * Math.PI) / 2) * 15 - 50}%`],
                                    y: ["-50%", `${Math.sin((i * Math.PI) / 2) * 15 - 50}%`],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.1,
                                  }}
                                />
                              ))}
                            </div>
                          )}

                          {/* Icon */}
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              scale: {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.1,
                              },
                            }}
                            className="relative z-10"
                          >
                            {action.icon}
                          </motion.div>
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
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
                  <div className="w-full h-full rounded-full" style={{ backgroundColor: sparkle.color || "#00ff00" }} />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Main button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                size="icon"
                className="rounded-full h-14 w-14 shadow-lg text-white relative overflow-hidden border-2 border-transparent dark:border-green-500/20"
                onClick={handleToggle}
                style={{
                  background: "transparent",
                  boxShadow: "0 0 15px rgba(0, 128, 0, 0.5), 0 0 30px rgba(0, 128, 0, 0.3)",
                }}
              >
                {/* Magical rotating orb background */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle at center, #00ff00 0%, #008000 50%, #004000 100%)",
                    opacity: 0.9,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: { duration: 10, ease: "linear", repeat: Number.POSITIVE_INFINITY },
                    scale: { duration: 3, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
                  }}
                />

                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-500 dark:bg-green-400"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  style={{ filter: "blur(8px)" }}
                />

                {/* Magical particles */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-white"
                      style={{
                        left: "50%",
                        top: "50%",
                        x: "-50%",
                        y: "-50%",
                      }}
                      animate={{
                        x: ["-50%", `${Math.cos((i * Math.PI) / 4) * 30 - 50}%`],
                        y: ["-50%", `${Math.sin((i * Math.PI) / 4) * 30 - 50}%`],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* Rotating inner ring */}
                <motion.div
                  className="absolute inset-2 rounded-full border-2 border-white/30 border-dashed"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Icon with special effects */}
                <motion.div
                  className="relative z-10 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotateZ: isOpen ? [0, 90, 180] : [180, 90, 0],
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    rotateZ: { duration: 0.5, ease: "anticipate" },
                  }}
                >
                  {isOpen ? (
                    <Sparkles className="h-6 w-6 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]" />
                  ) : (
                    <Sparkles className="h-6 w-6 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

