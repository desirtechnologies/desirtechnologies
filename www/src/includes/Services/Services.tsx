import { Button } from '@/components/ui/button'; // Assuming path
import { Card, CardContent } from '@/components/ui/card'; // Assuming path
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Server, Database, Globe, Shield, BarChart, Cpu } from "lucide-react"

import React from 'react';

// Interface for a single service item
export interface ServiceItem {
    title: string;
    description: string;
    icon: any; // Can accept JSX elements like <Code />
    href: string; // Use href for standard link attribute
}
const defaults = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      icon: <Code className="h-10 w-10 text-desir-500" />,
      link: "/services/web-development",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Zap className="h-10 w-10 text-desir-500" />,
      link: "/services/mobile-apps",
    },
    {
      title: "Backend Systems",
      description: "Scalable server infrastructure and API development.",
      icon: <Server className="h-10 w-10 text-desir-500" />,
      link: "/services/backend-systems",
    },
    {
      title: "Database Solutions",
      description: "Database design, optimization, and management services.",
      icon: <Database className="h-10 w-10 text-desir-500" />,
      link: "/services/database-solutions",
    },
    {
      title: "Cloud Services",
      description: "Cloud migration, deployment, and management solutions.",
      icon: <Globe className="h-10 w-10 text-desir-500" />,
      link: "/services/cloud-services",
    },
    {
      title: "Security Consulting",
      description: "Comprehensive security audits and implementation services.",
      icon: <Shield className="h-10 w-10 text-desir-500" />,
      link: "/services/security-consulting",
    },
    {
      title: "IT Triage",
      description: "Rapid assessment and resolution of critical IT issues.",
      icon: <BarChart className="h-10 w-10 text-desir-500" />,
      link: "/services/it-triage",
    },
    {
      title: "AI Solutions",
      description: "Intelligent applications and machine learning integration.",
      icon: <Cpu className="h-10 w-10 text-desir-500" />,
      link: "/services/ai-solutions",
    },
  ]



// Interface for the component props
export interface ServicesSectionProps {
    title?: string; // Optional title, uses default if not provided
    description?: string; // Optional description, uses default if not provided
    services?: ServiceItem[]; // Array of service items is required
    viewAllHref?: string; // Optional href for the "View All" button
    // Optional: Add click handlers if you need custom logic (e.g., for SPA routing)
    onServiceClick?: (href: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
    onViewAllClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

// The Presentational Component
const ServicesSection: React.FC<ServicesSectionProps> = ({
    title = "OUR SERVICES", // Default title
    description = "We provide comprehensive technology solutions to help businesses thrive in the digital age.", // Default description
    services = [], // Default to empty array to prevent errors if not passed
    viewAllHref,
    onServiceClick,
    onViewAllClick,
}) => {

    // Handler for individual service clicks
    const handleServiceClick = (href: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        if (onServiceClick) {
            event.preventDefault(); // Prevent default navigation if a handler is provided
            onServiceClick(href, event);
        }
        // Otherwise, allow the default <a> tag navigation (full page reload)
    };

    // Handler for the "View All" button click
    const handleViewAllClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (onViewAllClick) {
            event.preventDefault(); // Prevent default navigation if a handler is provided
            onViewAllClick(event);
        }
        // Otherwise, allow the default <a> tag navigation
    };

    return (
        <section className="container mx-auto px-4 py-16 relative z-10">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-4 text-center font-retro">
                {title}
            </h2>
            <p className="text-center text-foreground/60 dark:text-foreground/60 max-w-2xl mx-auto mb-12 font-retro">
                {description}
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {defaults ? defaults.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="h-full" // Make motion div take full height of grid cell
                    >
                        {/* Use standard <a> tag instead of Next's Link */}
                        <a
                            href={service.href}
                            onClick={(e) => handleServiceClick(service.href, e)}
                            className="block h-full group" // 'group' allows child hover effects
                        >
                            <Card className="h-full flex flex-col border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 group-hover:green-glow"> {/* Ensure green-glow defined in CSS */}
                                <CardContent className="p-6 flex flex-col items-center text-center flex-grow"> {/* Use flex-grow to fill height */}
                                    <div className="mb-4 p-3 rounded-full bg-primary/10">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-medium mb-2 font-retro">{service.title}</h3>
                                    <p className="text-foreground/60 font-retro flex-grow">{service.description}</p> {/* flex-grow pushes button down */}
                                    <div className="mt-4"> {/* Removed mt-auto, relies on flex-grow now */}
                                        <div className="flex items-center justify-center text-primary text-sm font-retro transition-transform duration-200 ease-in-out group-hover:translate-x-1"> {/* Use group-hover for effect */}
                                            Learn More <ArrowRight className="ml-1 h-3 w-3" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    </motion.div>
                )) : null}
            </div>

            {/* "View All" Button (Conditional) */}
            {viewAllHref && (
                <div className="text-center mt-10">
                    <Button asChild size="lg" variant="outline" className="rounded-full font-retro">
                        {/* Use standard <a> tag */}
                        <a href={viewAllHref} onClick={handleViewAllClick}>VIEW ALL SERVICES</a>
                    </Button>
                </div>
            )}
        </section>
    );
};

export default ServicesSection;