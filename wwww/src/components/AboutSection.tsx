import React from 'react'; // Import React
import { motion } from 'framer-motion';
// Removed: import Image from "next/image";
import { Card, CardContent } from '@/components/ui/card'; // Assuming UI component path

// Interface for a single skill item
// (Can be defined here or imported if used elsewhere)
export interface Skill {
  name: string;
  icon: any; // Expect JSX Icon
  description: string;
}

// Interface for the AboutSection props
export interface AboutSectionProps {
  title?: string; // Optional title, uses default if not provided
  children: any; // Use children prop for the main descriptive paragraphs
  skills: Skill[]; // Array of skill objects is required
  imageUrl: string; // Image URL is required
  imageAlt: string; // Image Alt text is required
  name: string; // Name for the image overlay card is required
  role: string; // Role/Title for the image overlay card is required
}

// The Presentational Component
const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About Me", // Default title
  children, // Rendered as the main text content
  skills = [], // Default to empty array
  imageUrl,
  imageAlt,
  name,
  role,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column: Text Content & Skills */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
          {title}
        </h2>
        {/* Render the descriptive text passed as children */}
        <div className="space-y-4 text-foreground/70 dark:text-foreground/70">
          {children}
        </div>

        {/* Skills Grid - Render only if skills array is not empty */}
        {skills.length > 0 && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    {/* Icon is passed directly from the skills prop */}
                    <div className="mb-2 p-2 rounded-full bg-background dark:bg-background">
                      {skill.icon}
                    </div>
                    <h3 className="text-sm font-medium mb-1">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Right Column: Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative h-[450px] sm:h-[500px] rounded-2xl overflow-hidden border border-border/50 shadow-xl" // Adjusted height slightly
      >
        {/* Standard HTML img tag instead of next/image */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover" // Mimics 'fill' and 'object-cover'
          loading="lazy" // Add browser-native lazy loading
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
        {/* Name/Role Card Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6"> {/* Adjusted padding */}
          <div className="bg-background/80 dark:bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/50 shadow-sm">
            <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">{name}</h3> {/* Adjusted text size */}
            <p className="text-sm text-foreground/70 dark:text-foreground/70">
              {role}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;