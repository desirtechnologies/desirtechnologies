import React, { useState, useEffect } from "react"; // Use React import
import { motion } from "framer-motion";
// Removed: import Link from "next/link"
// Removed: import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"; // Assuming this utility exists
import { Button } from "@/components/ui/button"; // Assuming these components exist
import { ThemeToggle } from "@/components/theme-toggle"; // Assuming this component exists
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Assuming these components exist
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Assuming these components exist
import { Menu, X, Home, Briefcase, FileText, BookOpen, Code, User, Mail, Search } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query"; // Assuming this hook exists and uses window.matchMedia
import { CommandSearch } from "@/components/CommandSearch"; // Assuming this component exists

// --- Data ---
const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-4 w-4" />, hasNewFeature: false },
  { name: "Projects", href: "/projects", icon: <Code className="h-4 w-4" />, hasNewFeature: true },
  { name: "Services", href: "/services", icon: <Briefcase className="h-4 w-4" />, hasNewFeature: false },
  { name: "Resources", href: "/resources", icon: <BookOpen className="h-4 w-4" />, hasNewFeature: true },
  { name: "Blog", href: "/blog", icon: <FileText className="h-4 w-4" />, hasNewFeature: false },
  { name: "About", href: "/about", icon: <User className="h-4 w-4" />, hasNewFeature: false },
  { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" />, hasNewFeature: false },
];

// --- Presentation Component ---
export default function TopNav() {
  // --- State and Hooks ---
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  // Use a fallback for SSR or environments where window might not be immediately ready
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isMobile = useMediaQuery("(max-width: 768px)") || false; // Keep using the hook

  // --- Effects ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check if window is defined before adding listener
    if (typeof window !== 'undefined') {
        window.addEventListener("scroll", handleScroll);
        // Initial check in case the page is already scrolled
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
     // Check if window is defined before adding listener
    if (typeof window !== 'undefined') {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  // --- Logic ---
  const isActive = (path: string) => {
    // Use the state variable holding the current pathname
    if (path === "/") {
      return currentPathname === "/";
    }
    // Ensure comparison handles potential trailing slashes if necessary
    return currentPathname.startsWith(path);
  };

  // --- Render ---
  return (
    <>
      {/* Assuming CommandSearch works independently */}
      <CommandSearch open={searchOpen} setOpen={setSearchOpen} />

      <header className="fixed top-4 z-50 w-full">
        <div className="mx-auto max-w-screen-xl px-4">
          <motion.div
            className={cn(
              "rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 neumorphic-pill", // Ensure neumorphic-pill class is defined in your CSS
              scrolled ? "py-2" : "py-3",
              "transition-all duration-200",
            )}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-full items-center justify-between px-4">
              {/* Mobile Menu Toggle and Logo */}
              <div className="flex items-center gap-2">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                    <div className="flex h-full flex-col">
                      <div className="flex items-center justify-between border-b px-2 py-4">
                        {/* Use standard <a> tag for navigation */}
                        <a href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                          Desir Technologies
                        </a>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                          <X className="h-5 w-5" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </div>
                      <nav className="flex-1 overflow-auto py-4">
                        <ul className="grid gap-2 px-2">
                          {navItems.map((item) => (
                            <li key={item.href}>
                              {/* Use standard <a> tag */}
                              <a
                                href={item.href}
                                className={cn(
                                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                                  isActive(item.href) ? "bg-accent text-accent-foreground" : "transparent",
                                )}
                                onClick={() => setIsOpen(false)} // Close sheet on click
                              >
                                {item.icon}
                                {item.name}
                                {item.hasNewFeature && (
                                  <span className="ml-auto flex h-2 w-2 rounded-full bg-primary"></span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
                {/* Use standard <a> tag for logo link */}
                <a href="/" className="flex items-center gap-2 font-bold">
                  {/* Assuming font-retro class is defined in your CSS */}
                  <span className="font-retro text-lg">Desir Technologies</span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
                <NavigationMenu>
                  <NavigationMenuList className="space-x-1">
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.href}>
                        {/* Pass href directly to NavigationMenuLink. Assumes it renders an <a> */}
                        {/* Remove legacyBehavior and passHref */}
                        <NavigationMenuLink
                           href={item.href}
                           className={cn(
                             navigationMenuTriggerStyle(),
                             "rounded-full px-4",
                             isActive(item.href) ? "bg-accent text-accent-foreground" : "",
                           )}
                        >
                          <span className="flex items-center gap-2">
                            {item.icon}
                            {item.name}
                            {item.hasNewFeature && <span className="flex h-2 w-2 rounded-full bg-primary"></span>}
                          </span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>

              {/* Right Side Controls (Search, Theme, Contact) */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-accent"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <ThemeToggle /> {/* Assuming this works independently */}
                {/* Use standard <a> tag within Button using asChild */}
                <Button asChild className="hidden sm:inline-flex rounded-full">
                  <a href="/contact">Get in Touch</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}