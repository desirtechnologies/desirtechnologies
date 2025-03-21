
import { ComponentChildren } from "preact"

interface NavItem {
  name: string
  href: string
  icon: ComponentChildren
  hasNewFeature: boolean
}

interface HeaderProps {
  currentPath?: string
  isScrolled?: boolean
  isMobile?: boolean
  isMenuOpen?: boolean
  isSearchOpen?: boolean
  onMenuToggle?: () => void
  onSearchToggle?: () => void
  onThemeToggle?: () => void
}

const defaultNavItems: NavItem[] = [
  { name: "Home", href: "/", icon: <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>, hasNewFeature: false },
  { name: "Projects", href: "/projects", icon: <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>, hasNewFeature: true },
  { name: "Services", href: "/services", icon: <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, hasNewFeature: false },
  { name: "Resources", href: "/resources", icon: <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>, hasNewFeature: true },
  { name: "Blog", href: "/blog", icon: <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, hasNewFeature: false },
  { name: "About", href: "/about", icon: <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, hasNewFeature: false },
  { name: "Contact", href: "/contact", icon: <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, hasNewFeature: false },
]

const defaultProps: HeaderProps = {
  currentPath: "/",
  isScrolled: false,
  isMobile: false,
  isMenuOpen: false,
  isSearchOpen: false,
  onMenuToggle: () => {},
  onSearchToggle: () => {},
  onThemeToggle: () => {},
}

export default function Header(props: HeaderProps = defaultProps) {
  const {
    currentPath,
    isScrolled,
    isMobile,
    isMenuOpen,
    isSearchOpen,
    onMenuToggle,
    onSearchToggle,
    onThemeToggle,
  } = { ...defaultProps, ...props }

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/"
    }
    return currentPath?.startsWith(path)
  }

  const headerClasses = `
    fixed top-4 z-50 w-full
    rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 neumorphic-pill
    ${isScrolled ? "py-2" : "py-3"}
    transition-all duration-200
  `

  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className={headerClasses}>
          <div className="flex h-full items-center justify-between px-4">
            <div className="flex items-center gap-2">
              {isMobile && (
                <button
                  onClick={onMenuToggle}
                  className="rounded-full p-2 hover:bg-accent lg:hidden"
                  aria-label="Toggle menu"
                >
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                </button>
              )}
              <a href="/" className="flex items-center gap-2 font-bold">
                <span className="font-retro text-lg">Desir Technologies</span>
              </a>
            </div>
            {!isMobile && (
              <nav className="flex flex-1 items-center justify-center">
                <ul className="flex space-x-1">
                  {defaultNavItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`
                          rounded-full px-4 py-2
                          ${isActive(item.href) ? "bg-accent text-accent-foreground" : ""}
                          hover:bg-accent hover:text-accent-foreground
                        `}
                      >
                        <span className="flex items-center gap-2">
                          {item.icon}
                          {item.name}
                          {item.hasNewFeature && (
                            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                          )}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div className="flex items-center gap-2">
              <button
                onClick={onSearchToggle}
                className="rounded-full p-2 hover:bg-accent"
                aria-label="Search"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
              <button
                onClick={onThemeToggle}
                className="rounded-full p-2 hover:bg-accent"
                aria-label="Toggle theme"
              >
                <div className="h-5 w-5">🌓</div>
              </button>
              {!isMobile && (
                <a
                  href="/contact"
                  className="hidden rounded-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 sm:inline-flex"
                >
                  Get in Touch
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur lg:hidden">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-4 py-4">
              <a href="/" className="flex items-center gap-2 font-bold">
                Desir Technologies
              </a>
              <button
                onClick={onMenuToggle}
                className="rounded-full p-2 hover:bg-accent"
                aria-label="Close menu"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-auto py-4">
              <ul className="grid gap-2 px-4">
                {defaultNavItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`
                        flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium
                        ${isActive(item.href) ? "bg-accent text-accent-foreground" : ""}
                        hover:bg-accent hover:text-accent-foreground
                      `}
                      onClick={onMenuToggle}
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
        </div>
      )}
    </header>
  )
}

