import { Card } from "@components/ui/card";
import React from "react";

export default function Projects() {

    return (
            <section className="container mx-auto px-4 py-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
              PROJECT CATEGORIES
            </h2>
            <Link href="/projects" className="block">
              <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow mb-8">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-medium mb-4 font-retro">Explore Our Project Gallery</h3>
                  <p className="text-foreground/60 mb-6 font-retro">
                    Discover our portfolio organized by technology categories
                  </p>
                  <Button className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro">
                    View Project Categories <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </section>
    )
}