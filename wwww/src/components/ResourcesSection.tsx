import React, { useMemo } from 'react'; // Import useMemo for potential optimization
// Removed: "use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  resources = [], // Default to empty array
  viewAllHref,
  onResourceClick, // Pass down to cards
  onViewAllClick,
}) => {

  // Handle "View All" button click
  const handleViewAllClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onViewAllClick) {
      event.preventDefault();
      onViewAllClick(event);
    }
    // Allow default navigation otherwise
  };

  // Memoize filtered lists to avoid recalculating on every render,
  // especially if the parent component re-renders often.
  const guides = useMemo(() => resources.filter((r) => r.type === "guide"), [resources]);
  const whitepapers = useMemo(() => resources.filter((r) => r.type === "whitepaper"), [resources]);
  const templates = useMemo(() => resources.filter((r) => r.type === "template"), [resources]);
  const tools = useMemo(() => resources.filter((r) => r.type === "tool"), [resources]);

  // Helper to render the grid of cards, passing the click handler down
  const renderGrid = (items: Resource[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((resource, index) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          index={index}
          onClick={onResourceClick} // Pass the handler here
        />
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Tabs for Filtering */}
      <Tabs defaultValue="all" className="w-full">
        {/* Consider making TabsList scrollable on small screens if needed */}
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
          <TabsTrigger value="all" className="font-retro">All</TabsTrigger>
          <TabsTrigger value="guides" className="font-retro">Guides</TabsTrigger>
          <TabsTrigger value="whitepapers" className="font-retro">Whitepapers</TabsTrigger>
          <TabsTrigger value="templates" className="font-retro">Templates</TabsTrigger>
          <TabsTrigger value="tools" className="font-retro">Tools</TabsTrigger>
        </TabsList>

        {/* Tab Content Panes */}
        <TabsContent value="all">{renderGrid(resources)}</TabsContent>
        <TabsContent value="guides">{renderGrid(guides)}</TabsContent>
        <TabsContent value="whitepapers">{renderGrid(whitepapers)}</TabsContent>
        <TabsContent value="templates">{renderGrid(templates)}</TabsContent>
        <TabsContent value="tools">{renderGrid(tools)}</TabsContent>
      </Tabs>

      {/* "View All" Button Section (Conditional) */}
      {viewAllHref && (
        <div className="text-center mt-8">
          <p className="text-foreground/60 font-retro mb-4">
            Looking for something specific? Browse our complete resource library.
          </p>
          <Button asChild variant="outline" className="rounded-full font-retro">
            {/* Use standard <a> tag */}
            <a href={viewAllHref} onClick={handleViewAllClick}>View All Resources</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResourcesSection; // Export the main component


import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink, Clock } from 'lucide-react';

// Helper function remains internal as it's specific to this card's display logic
const getTypeIcon = (type: ResourceType): React.ReactNode => {
  switch (type) {
    case "guide":
      return <FileText className="h-6 w-6 text-blue-500" />;
    case "whitepaper":
      return <FileText className="h-6 w-6 text-purple-500" />;
    case "template":
      return <FileText className="h-6 w-6 text-green-500" />;
    case "tool":
      // Use ExternalLink for tools as they likely navigate away
      return <ExternalLink className="h-6 w-6 text-orange-500" />;
    default:
      return <FileText className="h-6 w-6 text-primary" />; // Fallback
  }
};

// Helper function remains internal
const getTypeLabel = (type: ResourceType): string => {
  switch (type) {
    case "guide": return "Guide";
    case "whitepaper": return "Whitepaper";
    case "template": return "Template";
    case "tool": return "Tool";
    default: return "Resource";
  }
};

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, index, onClick }) => {
  const isTool = resource.type === 'tool';
  // Set target and rel for external tool links
  const linkTarget = isTool ? '_blank' : undefined;
  const linkRel = isTool ? 'noopener noreferrer' : undefined;
  // Add download attribute hint for non-tool resources
  const downloadAttribute = !isTool ? true : undefined;

  // Handle clicks, preventing default if a custom handler is provided
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      event.preventDefault();
      onClick(resource.downloadUrl, resource, event);
    }
    // Otherwise, allow standard <a> tag behavior
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }} // Slightly faster delay
      className="h-full" // Ensure motion div takes full height
    >
      <Card className="h-full flex flex-col border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow"> {/* Ensure green-glow is defined */}
        <CardContent className="p-6 flex flex-col flex-grow"> {/* flex-grow enables pushing button down */}
          {/* Top section */}
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
              {getTypeIcon(resource.type)}
            </div>
            <div className="flex-grow"> {/* Allow text content to take space */}
              <Badge variant="outline" className="mb-2 font-retro">
                {getTypeLabel(resource.type)}
              </Badge>
              <h3 className="text-lg font-semibold mb-1">{resource.title}</h3> {/* Adjusted size/weight */}
              {resource.readTime && (
                <div className="flex items-center text-xs text-muted-foreground mb-2 font-retro">
                  <Clock className="h-3 w-3 mr-1" />
                  {resource.readTime}
                </div>
              )}
              <p className="text-sm text-muted-foreground mb-3 font-retro flex-grow">{resource.description}</p> {/* flex-grow pushes tags/button */}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4"> {/* Adjusted gap */}
            {resource.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-retro">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex justify-end mt-auto"> {/* mt-auto pushes to bottom */}
            <Button asChild variant="outline" size="sm" className="rounded-full font-retro">
              {/* Use standard <a> tag */}
              <a
                href={resource.downloadUrl}
                target={linkTarget}
                rel={linkRel}
                download={downloadAttribute} // Add download attribute for non-tools
                onClick={handleClick}
              >
                {/* Conditionally render icon based on type */}
                {isTool ? (
                  <ExternalLink className="mr-2 h-4 w-4" />
                ) : (
                  <Download className="mr-2 h-4 w-4" />
                )}
                {isTool ? "Access Tool" : "Download"}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


// Define allowed resource types
export type ResourceType = "whitepaper" | "guide" | "template" | "tool";

// Interface for a single resource item
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  downloadUrl: string; // Renamed from link for clarity
  readTime?: string;
  tags: string[];
}

// Props for the main section component
export interface ResourcesSectionProps {
  resources?: Resource[]; // Requires an array of resources
  viewAllHref?: string; // Optional link for the "View All" button
  // Optional click handlers for integration (e.g., analytics, client-side routing)
  onResourceClick?: (href: string, resource: Resource, event: React.MouseEvent<HTMLAnchorElement>) => void;
  onViewAllClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Props specifically for the internal ResourceCard component
export interface ResourceCardProps {
  resource: Resource;
  index: number; // For animation delay calculation
  // Callback passed down from parent
  onClick?: (href: string, resource: Resource, event: React.MouseEvent<HTMLAnchorElement>) => void;
}