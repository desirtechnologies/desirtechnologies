export interface ResourcePricing {
  type: "free" | "freemium" | "paid" | "subscription"
  startingPrice?: string
}

export interface ResourceFeature {
  id: string
  title: string
  description: string
  icon?: string
}

export interface ResourceReview {
  id: string
  author: string
  avatar?: string
  rating: number
  text: string
  date: string
}

export interface ResourceTag {
  id: string
  name: string
  slug: string
}

export interface Resource {
  id: string
  name: string
  slug: string
  category: string
  shortDescription: string
  description: string
  url: string
  coverImage?: string
  logo?: string
  dateAdded: string
  isFeatured: boolean
  rating: number
  pricing: ResourcePricing
  features: ResourceFeature[]
  reviews: ResourceReview[]
  tags: ResourceTag[]
}

export interface ResourceCategory {
  id: string
  name: string
  slug: string
  description: string
  count: number
  icon: string
  color: string
  keywords: string[]
}

// Mock data for resources
const resourcesData: Resource[] = [
  {
    id: "1",
    name: "VS Code",
    slug: "vs-code",
    category: "Development Tools",
    shortDescription: "A lightweight but powerful source code editor",
    description:
      "<p>Visual Studio Code is a free, open-source code editor developed by Microsoft. It has built-in debugging support, embedded Git control, syntax highlighting, code completion, integrated terminal, code refactoring, and snippets.</p><p>VS Code supports a wide variety of programming languages and frameworks, including JavaScript, TypeScript, Node.js, and React. It also has a rich ecosystem of extensions that can be used to add additional functionality.</p>",
    url: "https://code.visualstudio.com/",
    coverImage: "/placeholder.svg?height=600&width=1200",
    logo: "/placeholder.svg?height=200&width=200",
    dateAdded: "2023-01-15",
    isFeatured: true,
    rating: 4.8,
    pricing: {
      type: "free",
    },
    features: [
      {
        id: "f1",
        title: "IntelliSense",
        description: "Provides smart completions based on variable types, function definitions, and imported modules.",
        icon: "code",
      },
      {
        id: "f2",
        title: "Debugging",
        description: "Built-in debugging support helps accelerate your edit, compile, and debug cycle.",
        icon: "bug",
      },
      {
        id: "f3",
        title: "Extensions",
        description:
          "Rich ecosystem of extensions for languages, debuggers, and tools to support your development workflow.",
        icon: "puzzle",
      },
      {
        id: "f4",
        title: "Git Integration",
        description: "Work with Git and other SCM providers directly from the editor.",
        icon: "git-branch",
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Jane Developer",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: "VS Code has completely transformed my development workflow. The extensions ecosystem is incredible, and the performance is top-notch.",
        date: "2023-05-20",
      },
      {
        id: "r2",
        author: "John Coder",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 4,
        text: "Great editor with excellent features. The only downside is occasional performance issues with larger projects.",
        date: "2023-04-15",
      },
    ],
    tags: [
      { id: "t1", name: "Editor", slug: "editor" },
      { id: "t2", name: "Microsoft", slug: "microsoft" },
      { id: "t3", name: "Open Source", slug: "open-source" },
    ],
  },
  {
    id: "2",
    name: "Figma",
    slug: "figma",
    category: "Design Tools",
    shortDescription: "A collaborative interface design tool",
    description:
      "<p>Figma is a cloud-based design tool that is similar to Sketch in functionality and features, but with big differences that make Figma better for team collaboration.</p><p>It's available in the browser, on Windows, on Mac, and on Linux, and it has a free tier for small teams. Figma has powerful features for creating responsive designs, prototyping, and generating CSS code.</p>",
    url: "https://www.figma.com/",
    coverImage: "/placeholder.svg?height=600&width=1200",
    logo: "/placeholder.svg?height=200&width=200",
    dateAdded: "2023-02-10",
    isFeatured: true,
    rating: 4.9,
    pricing: {
      type: "freemium",
      startingPrice: "$12/month",
    },
    features: [
      {
        id: "f1",
        title: "Real-time Collaboration",
        description: "Multiple designers can work on the same file simultaneously.",
        icon: "users",
      },
      {
        id: "f2",
        title: "Component Libraries",
        description: "Create and maintain design systems with reusable components.",
        icon: "library",
      },
      {
        id: "f3",
        title: "Prototyping",
        description: "Create interactive prototypes to test user flows and interactions.",
        icon: "play",
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Sarah Designer",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: "Figma has revolutionized our design process. The collaboration features are unmatched.",
        date: "2023-06-05",
      },
    ],
    tags: [
      { id: "t1", name: "Design", slug: "design" },
      { id: "t2", name: "Collaboration", slug: "collaboration" },
      { id: "t3", name: "Prototyping", slug: "prototyping" },
    ],
  },
  {
    id: "3",
    name: "Next.js",
    slug: "nextjs",
    category: "Frameworks",
    shortDescription: "The React framework for production",
    description:
      "<p>Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations for React applications.</p><p>It provides a great developer experience with features like fast refresh, automatic routing, and built-in CSS support. Next.js is used by many large companies and is a popular choice for building modern web applications.</p>",
    url: "https://nextjs.org/",
    coverImage: "/placeholder.svg?height=600&width=1200",
    logo: "/placeholder.svg?height=200&width=200",
    dateAdded: "2023-03-05",
    isFeatured: true,
    rating: 4.7,
    pricing: {
      type: "free",
    },
    features: [
      {
        id: "f1",
        title: "Server-side Rendering",
        description: "Pre-render pages on the server for improved performance and SEO.",
        icon: "cpu",
      },
      {
        id: "f2",
        title: "Static Site Generation",
        description: "Generate static HTML at build time for even faster page loads.",
        icon: "zap",
      },
      {
        id: "f3",
        title: "API Routes",
        description: "Create API endpoints as part of your Next.js application.",
        icon: "code",
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Mike Frontend",
        avatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        text: "Next.js has made building React applications so much easier. The built-in features save a ton of configuration time.",
        date: "2023-05-12",
      },
    ],
    tags: [
      { id: "t1", name: "React", slug: "react" },
      { id: "t2", name: "JavaScript", slug: "javascript" },
      { id: "t3", name: "Framework", slug: "framework" },
    ],
  },
]

const categoriesData: ResourceCategory[] = [
  {
    id: "1",
    name: "Development Tools",
    slug: "development-tools",
    description: "Software and applications that help developers write, test, and debug code more efficiently.",
    count: 12,
    icon: "code",
    color: "bg-blue-600",
    keywords: ["IDE", "Code Editor", "Version Control", "Terminal", "Debugging"],
  },
  {
    id: "2",
    name: "Design Tools",
    slug: "design-tools",
    description: "Applications for creating user interfaces, graphics, and visual assets for web and mobile projects.",
    count: 8,
    icon: "pen-tool",
    color: "bg-purple-600",
    keywords: ["UI Design", "Prototyping", "Wireframing", "Graphics", "Illustration"],
  },
  {
    id: "3",
    name: "Frameworks",
    slug: "frameworks",
    description: "Libraries and platforms that provide structure and functionality for building web applications.",
    count: 15,
    icon: "zap",
    color: "bg-green-600",
    keywords: ["React", "Vue", "Angular", "Next.js", "Svelte"],
  },
  {
    id: "4",
    name: "Productivity",
    slug: "productivity",
    description: "Tools to help developers and teams work more efficiently and stay organized.",
    count: 10,
    icon: "trending-up",
    color: "bg-amber-600",
    keywords: ["Project Management", "Time Tracking", "Documentation", "Collaboration"],
  },
  {
    id: "5",
    name: "Deployment",
    slug: "deployment",
    description: "Services and platforms for hosting, deploying, and managing web applications.",
    count: 7,
    icon: "rocket",
    color: "bg-red-600",
    keywords: ["Hosting", "CI/CD", "Serverless", "Containers", "Cloud"],
  },
  {
    id: "6",
    name: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description: "Tools and services for integrating artificial intelligence and machine learning into applications.",
    count: 5,
    icon: "cpu",
    color: "bg-indigo-600",
    keywords: ["AI", "ML", "NLP", "Computer Vision", "Data Science"],
  },
]

// Helper functions to simulate API calls
export async function getResourceCategories(): Promise<ResourceCategory[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return categoriesData
}

export async function getFeaturedResources(limit = 6): Promise<Resource[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return resourcesData.filter((resource) => resource.isFeatured).slice(0, limit)
}

export async function getAllTags(): Promise<ResourceTag[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  const allTags: ResourceTag[] = []
  const tagIds = new Set()

  resourcesData.forEach((resource) => {
    resource.tags.forEach((tag) => {
      if (!tagIds.has(tag.id)) {
        tagIds.add(tag.id)
        allTags.push(tag)
      }
    })
  })

  return allTags
}

export async function getResources(): Promise<Resource[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return resourcesData
}

export async function getResourcesByCategory(categorySlug: string): Promise<Resource[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  const category = categoriesData.find((cat) => cat.slug === categorySlug)
  if (!category) return []

  return resourcesData.filter((resource) => resource.category.toLowerCase().replace(/\s+/g, "-") === categorySlug)
}

export async function getResourceBySlug(categorySlug: string, resourceSlug: string): Promise<Resource | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return resourcesData.find(
    (resource) =>
      resource.slug === resourceSlug && resource.category.toLowerCase().replace(/\s+/g, "-") === categorySlug,
  )
}

export type { ResourceTag, Resource, ResourceCategory, ResourceFeature, ResourceReview }

