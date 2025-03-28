"use client"

import type React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  character: string
  size: number
  speed: number
  opacity: number
  lifespan: number
  color: string
}

export default function MatrixParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)

  // Binary and Greek math characters
  const matrixChars = "01ΣΔΘΩπλμ∞∫√∂≈≠≤≥±÷×"

  // Optimized particle creation function
  const createParticle = useCallback(
    (x: number, y: number, fromMouse = false) => {
      const id = Date.now() + Math.random()
      const character = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length))
      const size = Math.random() * 16 + 10
      const speed = Math.random() * 3 + 1
      const opacity = Math.random() * 0.7 + 0.3
      const lifespan = Math.random() * 3000 + 2000

      // Occasionally use different colors for Greek/math symbols
      const isGreekOrMath = character !== "0" && character !== "1"
      const color = isGreekOrMath && Math.random() > 0.7 ? (Math.random() > 0.5 ? "#00ffaa" : "#88ff00") : "#00ff00"

      return {
        id,
        x: fromMouse ? x : Math.random() * (containerRef.current?.offsetWidth || window.innerWidth),
        y: fromMouse ? y : -50,
        character,
        size,
        speed,
        opacity,
        lifespan,
        color,
      }
    },
    [matrixChars],
  )

  // Initialize particles and set up animation loop
  useEffect(() => {
    // Initial particles - reduced count for better performance
    const initialParticles = Array.from({ length: 30 }, () => createParticle(0, 0, false))
    setParticles(initialParticles)

    // Optimized animation frame using requestAnimationFrame
    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time
      const deltaTime = time - lastTimeRef.current
      lastTimeRef.current = time

      setParticles((prevParticles) => {
        // Remove expired particles
        const filtered = prevParticles.filter((p) => p.lifespan > 0)

        // Update remaining particles
        const updated = filtered.map((p) => ({
          ...p,
          y: p.y + p.speed,
          lifespan: p.lifespan - deltaTime,
        }))

        // Add new particles occasionally but limit total count
        if (Math.random() > 0.9 && updated.length < 50) {
          updated.push(createParticle(0, 0, false))
        }

        // Add particles around mouse if hovering (limited)
        if (isHovering && Math.random() > 0.7 && updated.length < 60) {
          const offsetX = (Math.random() - 0.5) * 100
          const offsetY = (Math.random() - 0.5) * 100
          updated.push(createParticle(mousePosition.x + offsetX, mousePosition.y + offsetY, true))
        }

        return updated
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    // Cleanup animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovering, mousePosition, createParticle])

  // Optimized mouse event handlers with throttling
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return

    // Throttle mouse move updates
    if (!lastTimeRef.current || Date.now() - lastTimeRef.current > 50) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      lastTimeRef.current = Date.now()
    }
  }, [])

  // Create a burst of particles on click
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Create a burst of particles
      const burstParticles = []
      for (let i = 0; i < 15; i++) {
        // Reduced count for better performance
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 80 + 40
        burstParticles.push(createParticle(x + Math.cos(angle) * distance, y + Math.sin(angle) * distance, true))
      }

      setParticles((prev) => [...prev, ...burstParticles].slice(0, 80)) // Limit total particles
    },
    [createParticle],
  )

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto z-0"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
      style={{ willChange: "contents" }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="matrix-particle absolute font-retro"
          initial={{ opacity: 0 }}
          animate={{ opacity: particle.opacity * (particle.lifespan / 5000) }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            fontSize: `${particle.size}px`,
            color: particle.color,
            willChange: "transform, opacity",
          }}
        >
          {particle.character}
        </motion.div>
      ))}
    </div>
  )
}

