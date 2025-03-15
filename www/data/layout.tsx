import { Menu, X, Home, Briefcase, FileText, BookOpen, Code, User, Mail, Search } from "lucide-react"

export const layout = { 
    navigation: {
        top: [
            { name: "Home", href: "/", icon: <Home className="h-4 w-4" />, hasNewFeature: false },
            { name: "Projects", href: "/projects", icon: <Code className="h-4 w-4" />, hasNewFeature: true },
            { name: "Services", href: "/services", icon: <Briefcase className="h-4 w-4" />, hasNewFeature: false },
            { name: "Resources", href: "/resources", icon: <BookOpen className="h-4 w-4" />, hasNewFeature: true },
            { name: "Blog", href: "/blog", icon: <FileText className="h-4 w-4" />, hasNewFeature: false },
            { name: "About", href: "/about", icon: <User className="h-4 w-4" />, hasNewFeature: false },
            { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" />, hasNewFeature: false },
          ]
        
        
    }
}