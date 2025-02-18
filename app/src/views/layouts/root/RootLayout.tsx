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


export function RootLayout() {

    const jetbrainsMono = JetBrains_Mono({
        subsets: ["latin"],
        variable: "--font-mono",
      })
      
      const inter = Inter({
        subsets: ["latin"],
        variable: "--font-sans",
      })
      

    return (    <html lang="en" suppressHydrationWarning>
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
        </html>)
}