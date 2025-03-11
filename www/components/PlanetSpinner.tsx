"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function PlanetSpinner() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div className="relative w-24 h-24">
        {/* Planet */}
        <motion.div
          className={`absolute w-16 h-16 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
            ${
              isDark
                ? "bg-gradient-to-br from-green-300 via-green-500 to-green-900"
                : "bg-gradient-to-br from-green-200 via-green-400 to-green-700"
            }`}
          animate={{
            rotate: 360,
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            rotate: { duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY },
            backgroundPosition: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        >
          {/* Surface details */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
            <div className="absolute w-3 h-2 bg-green-100 rounded-full left-[20%] top-[30%]"></div>
            <div className="absolute w-4 h-2 bg-green-100 rounded-full right-[25%] top-[60%]"></div>
            <div className="absolute w-2 h-2 bg-green-100 rounded-full left-[40%] bottom-[20%]"></div>
          </div>
        </motion.div>

        {/* Orbiting moon */}
        <motion.div
          className="absolute w-full h-full left-0 top-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className={`absolute w-4 h-4 rounded-full 
              ${isDark ? "bg-gray-300" : "bg-gray-400"}`}
            style={{ left: "calc(50% + 40px)", top: "calc(50% - 2px)" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Inner ring */}
        <motion.div
          className={`absolute w-20 h-20 rounded-full border-2 border-dashed 
            ${isDark ? "border-green-500/40" : "border-green-600/40"} 
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          style={{ borderRadius: "100%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Outer ring */}
        <motion.div
          className={`absolute w-24 h-24 rounded-full border-2 border-dashed 
            ${isDark ? "border-green-400/30" : "border-green-500/30"} 
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          style={{ borderRadius: "100%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Glow effect */}
        <div
          className={`absolute w-16 h-16 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          ${isDark ? "bg-green-500" : "bg-green-400"} blur-xl opacity-20 z-0`}
        ></div>

        {/* Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full 
              ${isDark ? "bg-green-300" : "bg-green-500"} 
              left-1/2 top-1/2`}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: [0, Math.cos((i * Math.PI) / 4) * 50, 0],
              y: [0, Math.sin((i * Math.PI) / 4) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute mt-32">
        <motion.p
          className="text-center text-sm text-muted-foreground font-retro"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

