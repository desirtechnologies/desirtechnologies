"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FrameComponent } from "./FrameComponent"
import { Switch } from "@/components/elements/switch"
import { Badge } from "@/components/elements/badge"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  video: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  autoplayMode: "all" | "hover"
  isHovered: boolean
  url: string
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    url: "#project1",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Leveraging OpenAI to create dynamic content",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    url: "#project2",
  },
  {
    id: 3,
    title: "3D Product Visualizer",
    description: "Interactive 3D product showcase with Three.js",
    tags: ["Three.js", "WebGL", "React"],
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    url: "#project3",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard",
    tags: ["D3.js", "Firebase", "TypeScript"],
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    url: "#project4",
  },
  {
    id: 5,
    title: "Mobile App Design",
    description: "UI/UX design for a fitness tracking app",
    tags: ["Figma", "UI/UX", "Prototyping"],
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    url: "#project5",
  },
  {
    id: 6,
    title: "Blockchain Explorer",
    description: "Visualize and explore blockchain transactions",
    tags: ["Web3", "Ethereum", "React"],
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png",
    edgeVertical: "https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
    url: "#project6",
  },
]

export default function ProjectShowcase() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize, setHoverSize] = useState(6)
  const [gapSize, setGapSize] = useState(8)
  const [showFrames, setShowFrames] = useState(true)
  const [autoplayMode, setAutoplayMode] = useState<"all" | "hover">("hover")
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)")

  // Responsive grid configuration
  const getGridConfig = () => {
    if (isMobile) {
      return {
        rows: 6,
        cols: 1,
        heights: hovered ? `${hoverSize}fr ${12 - hoverSize}fr` : "1fr 1fr 1fr 1fr 1fr 1fr",
        widths: "1fr",
      }
    } else if (isTablet) {
      return {
        rows: 3,
        cols: 2,
        heights: hovered ? `${hoverSize}fr ${12 - hoverSize}fr ${12 - hoverSize}fr` : "1fr 1fr 1fr",
        widths: hovered ? `${hoverSize}fr ${12 - hoverSize}fr` : "1fr 1fr",
      }
    } else {
      return {
        rows: 2,
        cols: 3,
        heights: hovered ? `${hoverSize}fr ${12 - hoverSize}fr` : "1fr 1fr",
        widths: hovered ? `${hoverSize}fr ${(12 - hoverSize) / 2}fr ${(12 - hoverSize) / 2}fr` : "1fr 1fr 1fr",
      }
    }
  }

  const gridConfig = getGridConfig()

  const handleProjectHover = (project: Project, row: number, col: number) => {
    setHovered({ row, col })
    setActiveProject(project)
  }

  return (
    <div className="space-y-4 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch id="frame-toggle" checked={showFrames} onCheckedChange={setShowFrames} />
            <label htmlFor="frame-toggle" className="text-sm text-foreground/70 dark:text-foreground/70">
              {showFrames ? "Hide Frames" : "Show Frames"}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="autoplay-toggle"
              checked={autoplayMode === "all"}
              onCheckedChange={(checked) => setAutoplayMode(checked ? "all" : "hover")}
            />
            <label htmlFor="autoplay-toggle" className="text-sm text-foreground/70 dark:text-foreground/70">
              {autoplayMode === "all" ? "Autoplay All" : "Hover Autoplay"}
            </label>
          </div>
        </div>
      </div>

      {/* Project Info Overlay */}
      {activeProject && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 z-10 p-4 bg-background/80 dark:bg-background/80 backdrop-blur-md rounded-xl border border-border/50 shadow-lg"
        >
          <h3 className="text-xl font-medium text-foreground dark:text-foreground">{activeProject.title}</h3>
          <p className="text-foreground/70 dark:text-foreground/70 mb-2">{activeProject.description}</p>
          <div className="flex flex-wrap gap-2">
            {activeProject.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>
      )}

      <div
        className="relative w-full h-full rounded-xl overflow-hidden border border-border/20 shadow-xl"
        style={{
          display: "grid",
          gridTemplateRows: gridConfig.heights,
          gridTemplateColumns: gridConfig.widths,
          gap: `${gapSize}px`,
          transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {projects.map((project, index) => {
          const row = Math.floor(index / gridConfig.cols)
          const col = index % gridConfig.cols

          return (
            <motion.div
              key={project.id}
              className="relative rounded-lg overflow-hidden"
              style={{
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => handleProjectHover(project, row, col)}
              onMouseLeave={() => {
                setHovered(null)
                setActiveProject(null)
              }}
            >
              <FrameComponent
                video={project.video}
                width="100%"
                height="100%"
                className="absolute inset-0"
                corner={project.corner}
                edgeHorizontal={project.edgeHorizontal}
                edgeVertical={project.edgeVertical}
                mediaSize={project.mediaSize}
                borderThickness={project.borderThickness}
                borderSize={project.borderSize}
                onMediaSizeChange={() => {}}
                onBorderThicknessChange={() => {}}
                onBorderSizeChange={() => {}}
                showControls={false}
                label={project.title}
                showFrame={showFrames}
                autoplayMode={autoplayMode}
                isHovered={hovered?.row === row && hovered?.col === col}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

