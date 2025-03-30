import React from "react"; // Import React explicitly for clarity in a static context
import { cn } from "@/lib/utils"; // Assuming path alias is set up
import { Button } from "@/components/ui/button"; // Shadcn component
import { ThemeToggle } from "@/components/theme-toggle"; // Assuming this is relatively static or client:only later
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Shadcn components
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Shadcn components (used statically for structure)
import { Menu, X, Home, Briefcase, FileText, BookOpen, Code, User, Mail, Search } from "lucide-react"; // Icons

// Static navigation items
const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
  { name: "Projects", href: "/projects", icon: <Code className="h-4 w-4" /> },
  { name: "Services", href: "/services", icon: <Briefcase className="h-4 w-4" /> },
  { name: "Resources", href: "/resources", icon: <BookOpen className="h-4 w-4" /> },
  { name: "Blog", href: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "About", href: "/about", icon: <User className="h-4 w-4" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" /> },
];

// No props needed for this static version
export default function StaticHeader() {

  // No state (useState)
  // No effects (useEffect)
  // No event handlers (onClick, onKeyDown, etc.)
  // No dynamic active state logic
  // No media query hook usage

  return (
    <>
      {/* CommandSearch component removed as it implies interactivity */}

      {/* Header structure remains fixed */}
      <header className="fixed top-4 z-50 w-full">
        <div className="mx-auto max-w-screen-xl px-4">
          {/* Replaced motion.div with regular div, removed animation props and dynamic padding */}
          <div
            className={cn(
              "rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 neumorphic-pill",
              "py-3", // Use a static padding value
              // Removed transition classes as they applied to dynamic changes
            )}
          >
            <div className="flex h-full items-center justify-between px-4">

              {/* Left Side: Mobile Menu Trigger (Visual Only) + Logo */}
              <div className="flex items-center gap-2">
                {/* Mobile menu structure included but non-functional */}
                {/* Use CSS classes (lg:hidden) to control visibility */}
                <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                    {/* Button is visible but won't open the sheet without JS */}
                    <Button variant="ghost" size="icon" className="rounded-full" disabled> {/* Mark as disabled */}
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  {/* SheetContent structure can be kept for layout purposes if needed, or removed */}
                  {/* <SheetContent side="left" className="w-[240px] sm:w-[300px]"> */}
                    {/* Static placeholder content or structure */}
                  {/* </SheetContent> */}
                </Sheet>

                {/* Logo */}
                <a href="/" className="flex items-center gap-2 font-bold">
                  <span className="font-retro text-lg">Desir Technologies</span>
                </a>
              </div>

              {/* Center: Desktop Navigation */}
              {/* Use CSS classes (hidden lg:flex) to control visibility */}
              <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
                <NavigationMenu>
                  <NavigationMenuList className="space-x-1">
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink asChild // Use asChild for the underlying <a>
                           className={cn(
                              navigationMenuTriggerStyle(),
                              "rounded-full px-4",
                              // Removed active state class
                           )}
                        >
                            {/* Standard link for Astro/HTML navigation */}
                            <a href={item.href}>
                               <span className="flex items-center gap-2">
                                  {item.icon}
                                  {item.name}
                                  {/* Removed new feature indicator span */}
                               </span>
                            </a>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>

              {/* Right Side: Search (Visual Only), Theme, Contact Button */}
              <div className="flex items-center gap-2">
                {/* Search button is visual only, won't trigger search */}
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent" disabled> {/* Mark as disabled */}
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                {/* ThemeToggle might still need client-side JS depending on its implementation */}
                {/* If it must work, it needs to be handled separately with a client directive */}
                <ThemeToggle />
                {/* Static contact button, visibility controlled by CSS */}
                <Button asChild className="hidden sm:inline-flex rounded-full">
                  <a href="/contact">Get in Touch</a>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}

/*
======================================================================
HOW TO USE IN ASTRO (Example: src/layouts/Layout.astro)
======================================================================
*/
/*
---
// No need to pass props anymore
import StaticHeader from '@/includes/Header/StaticHeader.tsx'; // Adjust path
---
<!doctype html>
<html lang="en">
<head>
  {/* ... head content ... *}
  <title>My Static Site</title>
</head>
<body>
  {/*
    Render the static React header component.
    No client directive needed unless a child component like ThemeToggle requires it.
    If ThemeToggle *does* need JS, it might be better to make *it* a separate
    client component or use `client:only="react"` on it if possible.
    Rendering the whole header client-side for just the ThemeToggle is inefficient.
  *}
  <StaticHeader />

  <main>
    <slot />
  </main>

  <footer>
    {/* ... footer ... *}
  </footer>
</body>
</html>
*/