import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import TopNav from "@/components/TopNav"
import Footer from "@/components/Footer"
import FloatingSpeedDial from "@/components/FloatingSpeedDial"
import { inter, vt323 } from "@/app/fonts"
import "./globals.css"



export const metadata: Metadata = {
  title: "Desir Technologies",
  description: "Empowering businesses with innovative technology solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${vt323.variable} font-sans overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex bg-white dark:bg-black min-h-screen flex-col overflow-x-hidden">
            <TopNav />
            <main className="flex-1 pt-20 w-full max-w-full overflow-x-hidden">{children}</main>
            <Footer />
            <FloatingSpeedDial />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

