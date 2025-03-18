import { ThemeProvider } from "@/components/theme-provider"
import type { ReactComponent } from "@/typings"


export default function RootLayout({ children }: { children: ReactComponent}) {

  const configs = {
    supressHydrationWarning: true,
    lang: "en",
    className: "",
    enableSystem: true,
    disableTransitionOnChange: true,
    attribute: "class",
    defaultTheme: "system",
  }
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={``}>
        <ThemeProvider defaultTheme={configs.defaultTheme} enableSystem={configs.enableSystem} disableTransitionOnChange={configs.disableTransitionOnChange}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}