import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

interface PlanetSpinnerProps {
  size?: number
  className?: string
}

export default function PlanetSpinner({ size = 120, className = "" }: PlanetSpinnerProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure theme is applied after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDarkTheme = resolvedTheme === "dark"

  // Colors based on theme
  const planetColor = isDarkTheme
    ? "radial-gradient(circle at 30% 30%, #00ff00, #008000 50%, #004000 100%)"
    : "radial-gradient(circle at 30% 30%, #00ff00, #008000 50%, #004000 100%)"

  const ringColor = isDarkTheme ? "rgba(0, 255, 0, 0.2)" : "rgba(0, 128, 0, 0.3)"
  const glowColor = isDarkTheme ? "0 0 20px rgba(0, 255, 0, 0.4)" : "0 0 15px rgba(0, 128, 0, 0.3)"
  const textColor = isDarkTheme ? "text-green-400" : "text-green-600"

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className="relative"
        style={{
          width: size,
          height: size,
        }}
      >
        {/* Planet */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size * 0.5,
            height: size * 0.5,
            top: "50%",
            left: "50%",
            marginLeft: -(size * 0.5) / 2,
            marginTop: -(size * 0.5) / 2,
            background: planetColor,
            boxShadow: glowColor,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {/* Surface details */}
          <div
            className="absolute rounded-full opacity-30"
            style={{
              width: "60%",
              height: "30%",
              top: "20%",
              left: "10%",
              background: "rgba(255, 255, 255, 0.2)",
              transform: "rotate(-20deg)",
            }}
          />
        </motion.div>

        {/* Orbiting moon */}
        <motion.div
          className="absolute"
          style={{
            width: size,
            height: size,
            top: 0,
            left: 0,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <motion.div
            className="absolute rounded-full bg-white"
            style={{
              width: size * 0.1,
              height: size * 0.1,
              top: 0,
              left: "50%",
              marginLeft: -(size * 0.1) / 2,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Rings */}
        <motion.div
          className="absolute rounded-full border-2 border-dashed"
          style={{
            width: size * 0.8,
            height: size * 0.8,
            top: "50%",
            left: "50%",
            marginLeft: -(size * 0.8) / 2,
            marginTop: -(size * 0.8) / 2,
            borderColor: ringColor,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute rounded-full border border-dashed"
          style={{
            width: size * 0.9,
            height: size * 0.9,
            top: "50%",
            left: "50%",
            marginLeft: -(size * 0.9) / 2,
            marginTop: -(size * 0.9) / 2,
            borderColor: ringColor,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute rounded-full border border-dashed"
          style={{
            width: size * 0.7,
            height: size * 0.7,
            top: "50%",
            left: "50%",
            marginLeft: -(size * 0.7) / 2,
            marginTop: -(size * 0.7) / 2,
            borderColor: ringColor,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-green-400 rounded-full"
            style={{
              width: 3,
              height: 3,
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [0, Math.cos((i * Math.PI) / 4) * (size / 2)],
              y: [0, Math.sin((i * Math.PI) / 4) * (size / 2)],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      <motion.div
        className={`mt-4 font-medium ${textColor}`}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        Loading...
      </motion.div>
    </div>
  )
}

