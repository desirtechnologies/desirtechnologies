import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRender) {
      setIsFirstRender(false)
    }
  }, [isFirstRender])

  // macOS-like transition variants
  const variants = {
    initial: {
      opacity: 0,
      scale: isFirstRender ? 1 : 0.98,
      filter: "blur(8px)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for macOS-like spring
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      filter: "blur(8px)",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div key={pathname} initial="initial" animate="animate" exit="exit" variants={variants} className="w-full">
      {children}
    </motion.div>
  )
}

