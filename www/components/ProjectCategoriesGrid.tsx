"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { FrameComponent } from "./FrameComponent"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ProjectCategory {
  id: string
  title: string
  description: string
  videoSrc: string
  projectCount: number
  tags: string[]
  corner: string
  edgeHorizontal: string
  edgeVertical: string
}

const projectCategories: ProjectCategory[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive websites and web applications",
    videoSrc: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    projectCount: 12,
    tags: ["React", "Next.js", "TypeScript"],
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    projectCount: 8,
    tags: ["React Native", "Flutter", "iOS/Android"],
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
  },
  {
    id: "ui-design",
    title: "UI/UX Design",
    description: "User-centered design solutions and interfaces",
    videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    projectCount: 15,
    tags: ["Figma", "Adobe XD", "Prototyping"],
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Intelligent applications and machine learning",
    videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    projectCount: 6,
    tags: ["Machine Learning", "NLP", "Computer Vision"],
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
  },
  {
    id: "blockchain",
    title: "Blockchain",
    description: "Web3 applications and blockchain solutions",
    videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    projectCount: 4,
    tags: ["Ethereum", "Smart Contracts", "DApps"],
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    description: "Interactive data dashboards and visualizations",
    videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    projectCount: 7,
    tags: ["D3.js", "Tableau", "Data Analysis"],
    corner: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png",
    edgeVertical: "https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Online stores and shopping experiences",
    videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    projectCount: 9,
    tags: ["Shopify", "WooCommerce", "Custom Solutions"],
    corner: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_vert.png",
  },
  {
    id: "ar-vr",
    title: "AR/VR",
    description: "Augmented and virtual reality experiences",
    videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    projectCount: 5,
    tags: ["Unity", "ARKit", "VR Development"],
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/8_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/8_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/8_verticle.png",
  },
  {
    id: "iot",
    title: "IoT Solutions",
    description: "Connected devices and smart systems",
    videoSrc: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    projectCount: 3,
    tags: ["Embedded Systems", "Smart Home", "Industrial IoT"],
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/9_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/9_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/9_vert.png",
  },
]

export default function ProjectCategoriesGrid() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)")

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {projectCategories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="h-full"
          onMouseEnter={() => setHoveredCategory(category.id)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <Link href={`/projects/${category.id}`} className="block h-full">
            <Card className="h-full overflow-hidden border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
              <div className="relative h-36 sm:h-48 w-full">
                <FrameComponent
                  video={category.videoSrc}
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  corner={category.corner}
                  edgeHorizontal={category.edgeHorizontal}
                  edgeVertical={category.edgeVertical}
                  mediaSize={1}
                  borderThickness={0}
                  borderSize={80}
                  onMediaSizeChange={() => {}}
                  onBorderThicknessChange={() => {}}
                  onBorderSizeChange={() => {}}
                  showControls={false}
                  label={category.title}
                  showFrame={true}
                  autoplayMode="hover"
                  isHovered={hoveredCategory === category.id}
                />
              </div>
              <CardContent className="p-3 sm:p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg sm:text-xl font-retro text-primary">{category.title}</h3>
                  <Badge variant="outline" className="font-retro text-xs">
                    {category.projectCount} Projects
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-foreground/70 mb-3">{category.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                  {category.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-retro">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end">
                  <motion.div
                    className="flex items-center text-primary text-xs sm:text-sm font-retro"
                    whileHover={{ x: 5 }}
                  >
                    View Projects <ArrowRight className="ml-1 h-3 w-3" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

