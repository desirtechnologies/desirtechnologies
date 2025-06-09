import React from "react"
import { Button } from "@/components/ui/button"


export function CallToAction() {
  return (
    <section className="container mx-auto px-4 py-16 relative z-10">
    <div className="bg-desir-500/10 backdrop-blur-sm border border-desir-500/20 rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-4 font-retro">
        READY TO TRANSFORM YOUR BUSINESS?
      </h2>
      <p className="text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto mb-8 font-retro">
        Let's discuss how Desir Technologies can help you achieve your digital goals.
      </p>
      <Button asChild size="lg" className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
        <a href="/contact">GET IN TOUCH</a>
      </Button>
    </div>
  </section>
  );
}

