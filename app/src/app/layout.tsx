import type React from "react"
import { ThemeProvider } from "@/views/components/theme-provider"
import { CommandPalette } from "@/views/components/command-palette"
import { ParticleEffect } from "@/views/components/effects/particles"
import { Header } from "@/views/components/header"
import { Footer } from "@/views/components/footer"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import { Toaster } from "@/views/components/ui/toaster"
import { cn } from "@/controllers/lib/utils"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "TechDocs - Advanced Technical Documentation Platform",
    template: "%s | TechDocs",
  },
  description: "Next-generation technical documentation platform with AI-powered features",
  openGraph: {
    title: "TechDocs - Advanced Technical Documentation Platform",
    description: "Next-generation technical documentation platform with AI-powered features",
    url: "https://techdocs.blog",
    siteName: "TechDocs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechDocs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechDocs",
    description: "Next-generation documentation platform",
    images: ["/og-image.png"],
    creator: "@techdocs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "technical documentation",
    "programming",
    "software development",
    "research",
    "tutorials",
    "learning platform",
    "AI documentation",
    "code examples",
  ],
  authors: [{ name: "Jeffrey Desir" }],
  creator: "Jeffrey Desir",
  publisher: "Desir Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, jetbrainsMono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ParticleEffect />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CommandPalette />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

