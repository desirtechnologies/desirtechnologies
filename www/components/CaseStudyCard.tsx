"use client"
import { Card, CardContent } from "@/components/elements/card"
import { Badge } from "@/components/elements/badge"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/elements/button"
import Image from "next/image"

interface CaseStudy {
  title: string
  client: string
  description: string
  image: string
  results: string[]
  link: string
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-primary/80 text-primary-foreground font-retro">Case Study</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-retro text-primary mb-1">{caseStudy.title}</h3>
        <p className="text-sm text-foreground/60 mb-3 font-retro">Client: {caseStudy.client}</p>
        <p className="text-sm text-foreground/70 mb-4 font-retro">{caseStudy.description}</p>

        <h4 className="text-sm font-medium mb-2 font-retro">Key Results:</h4>
        <ul className="space-y-2 mb-4">
          {caseStudy.results.map((result, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground/70 font-retro">{result}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-end">
          <Button asChild variant="outline" size="sm" className="rounded-full font-retro">
            <Link href={caseStudy.link}>
              Read Full Case Study <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

