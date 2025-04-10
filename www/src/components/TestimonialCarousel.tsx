import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  position: string
  image?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/50 dark:bg-background/50 backdrop-blur-sm border border-border/30 h-10 w-10"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg?height=100&width=100"}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <p className="text-lg text-foreground/80 italic mb-6 font-retro">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <p className="font-medium text-foreground font-retro">{testimonials[currentIndex].author}</p>
                      <p className="text-sm text-foreground/60 font-retro">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/50 dark:bg-background/50 backdrop-blur-sm border border-border/30 h-10 w-10"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-foreground/20"
            } transition-colors duration-300`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

