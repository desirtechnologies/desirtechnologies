import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

interface TerminalSectionProps {
  title?: string
  commands?: string[]
}

export default function TerminalSection({ title = "Terminal", commands = [] }: TerminalSectionProps) {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isBlinking, setIsBlinking] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Simplified typing effect
  useEffect(() => {
    if (commands.length === 0) return

    const typingSpeed = isMobile ? 30 : 40

    const typingInterval = setInterval(() => {
      if (lineIndex >= commands.length) {
        clearInterval(typingInterval)
        return
      }

      const currentCommand = commands[lineIndex]

      if (charIndex < currentCommand.length) {
        setCurrentLine((prev) => prev + currentCommand[charIndex])
        setCharIndex((prev) => prev + 1)
      } else {
        // Add a small pause at the end of each line
        setTimeout(() => {
          setLines((prev) => [...prev, currentLine])
          setCurrentLine("")
          setLineIndex((prev) => prev + 1)
          setCharIndex(0)
        }, 300)

        clearInterval(typingInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [commands, lineIndex, charIndex, currentLine, isMobile])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines, currentLine])

  // Simple blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 500)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        boxShadow: ["0 0 10px rgba(0, 255, 0, 0.3)", "0 0 15px rgba(0, 255, 0, 0.5)", "0 0 10px rgba(0, 255, 0, 0.3)"],
      }}
      transition={{
        duration: 0.5,
        boxShadow: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        },
      }}
      className="terminal scanlines relative overflow-hidden rounded-lg"
    >
      <div className="terminal-header">
        <span className="font-retro">{title}</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div
        className={`terminal-body font-retro ${isMobile ? "text-xs" : "text-sm"}`}
        ref={terminalRef}
        style={{ height: isMobile ? "180px" : "200px" }}
      >
        {lines.map((line, index) => (
          <div key={index} className="terminal-prompt">
            {line}
          </div>
        ))}
        {currentLine && (
          <div className="terminal-prompt">
            {currentLine}
            <span className={`terminal-cursor ${isBlinking ? "opacity-100" : "opacity-0"}`}></span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

