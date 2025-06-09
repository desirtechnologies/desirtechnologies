export interface Tag {
  id: string
  name: string
  slug: string
}

export interface ResourceCategory {
  id: string
  name: string
  slug: string
  description: string
  count: number
  icon: string
  color: string
}

export interface ResourceReview {
  id: string
  author: string
  rating: number
  comment: string
  date: string
}

export interface ResourceFeature {
  id: string
  title: string
  description: string
  icon?: string
}

export interface Resource {
  id: string
  name: string
  slug: string
  category: string
  shortDescription: string
  description: string
  coverImage: string
  logo: string
  url: string
  tags: Array<Tag | string>
  rating: number
  reviews: ResourceReview[]
  features: ResourceFeature[]
  pricing: {
    type: "free" | "freemium" | "paid"
    startingPrice?: string
  }
  isFeatured: boolean
}

// Mock data
const resources: Resource[] = [
  {
    id: "1",
    name: "Figma",
    slug: "figma",
    category: "Design Tools",
    shortDescription: "Collaborative interface design tool",
    description:
      "Figma is a cloud-based design tool that is similar to Sketch in functionality and features, but with big differences that make Figma better for team collaboration. It's built for teams to collaborate in real-time on interface design projects.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    logo: "/placeholder.svg?height=200&width=200",
    url: "https://figma.com",
    tags: [
      { id: "1", name: "UI Design", slug: "ui-design" },
      { id: "2", name: "Collaboration", slug: "collaboration" },
      { id: "3", name: "Prototyping", slug: "prototyping" },
    ],
    rating: 4.8,
    reviews: [
      {
        id: "1",
        author: "Jane Smith",
        rating: 5,
        comment: "Figma has completely transformed our design workflow. The collaboration features are unmatched.",
        date: "2023-05-15",
      },
      {
        id: "2",
        author: "John Doe",
        rating: 4.5,
        comment: "Great tool for UI design, but could use some improvements in the prototyping features.",
        date: "2023-04-22",
      },
    ],
    features: [
      {
        id: "1",
        title: "Real-time Collaboration",
        description: "Work together with your team in real-time, seeing changes as they happen.",
        icon: "users",
      },
      {
        id: "2",
        title: "Prototyping",
        description: "Create interactive prototypes to test your designs before development.",
        icon: "play",
      },
      {
        id: "3",
        title: "Design Systems",
        description: "Build and maintain design systems for consistent user experiences.",
        icon: "layout",
      },
    ],
    pricing: {
      type: "freemium",
      startingPrice: "$12/month",
    },
    isFeatured: true,
  },
  {
    id: "2",
    name: "VS Code",
    slug: "vs-code",
    category: "Development Tools",
    shortDescription: "Powerful code editor with extensive plugin ecosystem",
    description:
      "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    logo: "/placeholder.svg?height=200&width=200",
    url: "https://code.visualstudio.com",
    tags: [
      { id: "4", name: "Code Editor", slug: "code-editor" },
      { id: "5", name: "Extensions", slug: "extensions" },
      { id: "6", name: "Development", slug: "development" },
    ],
    rating: 4.9,
    reviews: [
      {
        id: "3",
        author: "Alex Johnson",
        rating: 5,
        comment: "The best code editor I've ever used. The extension ecosystem is incredible.",
        date: "2023-06-01",
      },
    ],
    features: [
      {
        id: "4",
        title: "IntelliSense",
        description: "Smart code completion based on variable types, function definitions, and imported modules.",
        icon: "code",
      },
      {
        id: "5",
        title: "Debugging",
        description: "Built-in debugging support for Node.js, Python, and many other languages.",
        icon: "bug",
      },
      {
        id: "6",
        title: "Extensions",
        description: "Rich ecosystem of extensions for languages, themes, debuggers, and more.",
        icon: "package",
      },
    ],
    pricing: {
      type: "free",
    },
    isFeatured: true,
  },
  {
    id: "3",
    name: "Vercel",
    slug: "vercel",
    category: "Hosting",
    shortDescription: "Platform for frontend frameworks and static sites",
    description:
      "Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database. We provide a frictionless developer experience to take care of the hard things: deploying instantly, scaling automatically, and serving personalized content around the globe.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    logo: "/placeholder.svg?height=200&width=200",
    url: "https://vercel.com",
    tags: [
      { id: "7", name: "Hosting", slug: "hosting" },
      { id: "8", name: "Deployment", slug: "deployment" },
      { id: "9", name: "Serverless", slug: "serverless" },
    ],
    rating: 4.7,
    reviews: [
      {
        id: "4",
        author: "Sarah Williams",
        rating: 4.5,
        comment: "Vercel makes deployment so easy. Perfect for my Next.js projects.",
        date: "2023-05-10",
      },
    ],
    features: [
      {
        id: "7",
        title: "Global CDN",
        description: "Automatically distributed deployments to ensure low latency and high availability.",
        icon: "globe",
      },
      {
        id: "8",
        title: "Serverless Functions",
        description: "Deploy backend code without managing servers or infrastructure.",
        icon: "server",
      },
      {
        id: "9",
        title: "Preview Deployments",
        description: "Every pull request gets its own preview deployment for easy testing and collaboration.",
        icon: "eye",
      },
    ],
    pricing: {
      type: "freemium",
      startingPrice: "$20/month",
    },
    isFeatured: true,
  },
  // Add more resources as needed
]

const categories: ResourceCategory[] = [
  {
    id: "1",
    name: "Design Tools",
    slug: "design-tools",
    description: "Tools for UI/UX design, prototyping, and graphic design",
    count: 1,
    icon: "palette",
    color: "bg-purple-500",
  },
  {
    id: "2",
    name: "Development Tools",
    slug: "development-tools",
    description: "Code editors, IDEs, and other tools for software development",
    count: 1,
    icon: "code",
    color: "bg-blue-500",
  },
  {
    id: "3",
    name: "Hosting",
    slug: "hosting",
    description: "Platforms for hosting websites, applications, and services",
    count: 1,
    icon: "server",
    color: "bg-green-500",
  },
  {
    id: "4",
    name: "Frameworks",
    slug: "frameworks",
    description: "Frontend and backend frameworks for building applications",
    count: 0,
    icon: "layers",
    color: "bg-red-500",
  },
  {
    id: "5",
    name: "Databases",
    slug: "databases",
    description: "Database systems and management tools",
    count: 0,
    icon: "database",
    color: "bg-yellow-500",
  },
]

// Mock API functions with error handling
export async function getResources(): Promise<Resource[]> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    return resources
  } catch (error) {
    console.error("Error fetching resources:", error)
    return []
  }
}

export async function getResourcesByCategory(categorySlug: string): Promise<Resource[]> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    const category = categories.find((c) => c.slug === categorySlug)
    if (!category) return []
    return resources.filter((resource) => resource.category === category.name)
  } catch (error) {
    console.error(`Error fetching resources for category ${categorySlug}:`, error)
    return []
  }
}

export async function getResourceBySlug(categorySlug: string, resourceSlug: string): Promise<Resource | null> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    const category = categories.find((c) => c.slug === categorySlug)
    if (!category) return null
    return resources.find((resource) => resource.slug === resourceSlug && resource.category === category.name) || null
  } catch (error) {
    console.error(`Error fetching resource ${resourceSlug} in category ${categorySlug}:`, error)
    return null
  }
}

export async function getResourceCategories(): Promise<ResourceCategory[]> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    return categories
  } catch (error) {
    console.error("Error fetching resource categories:", error)
    return []
  }
}

export async function getFeaturedResources(limit = 3): Promise<Resource[]> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    return resources.filter((resource) => resource.isFeatured).slice(0, limit)
  } catch (error) {
    console.error("Error fetching featured resources:", error)
    return []
  }
}

export async function getAllTags(): Promise<Tag[]> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    const allTags = resources.flatMap((resource) => resource.tags)
    const uniqueTags = Array.from(
      new Map(
        allTags.map((tag) => {
          const tagObj =
            typeof tag === "string" ? { id: tag, name: tag, slug: tag.toLowerCase().replace(/\s+/g, "-") } : tag
          return [tagObj.id, tagObj]
        }),
      ).values(),
    )
    return uniqueTags
  } catch (error) {
    console.error("Error fetching all tags:", error)
    return []
  }
}

export type { Tag as ResourceTag, Resource, ResourceCategory, ResourceFeature, ResourceReview }

