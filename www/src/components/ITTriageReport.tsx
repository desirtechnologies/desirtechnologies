import React from 'react';

// --- UI Component Imports ---
// Adjust these paths based on your actual project structure
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// --- Icon Imports ---
import { AlertTriangle, CheckCircle, Clock, FileText, ArrowRight } from "lucide-react";

// --- Data Interface ---
// Defines the shape of the report data object
export interface TriageReportData {
  title: string;
  date: string; // Consider using Date object if more manipulation is needed
  summary: string;
  findings: string[];
  recommendations: string[];
  impact: string;
}

// --- Component Props Interface ---
// Defines the props the component accepts
export interface ITTriageReportProps {
  report?: TriageReportData; // Report data is now required
  viewReportHref: string; // The URL for the "View Full Report" link (provided by parent)
  // Optional: Handler for custom click behavior (e.g., client-side routing, analytics)
  onViewReportClick?: (href: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
}

// --- The Presentational Component ---
const ITTriageReport: React.FC<ITTriageReportProps> = ({
  report,
  viewReportHref,
  onViewReportClick
}) => {

  // Handles clicks on the "View Full Report" button/link
  const handleViewClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onViewReportClick) {
      event.preventDefault(); // Prevent default navigation if a handler exists
      onViewReportClick(viewReportHref, event);
    }
    // If no handler, the standard <a> tag navigation will proceed
  };

  // Helper function to render lists with a limit and "more..." indicator
  const renderLimitedList = (items: string[], limit: number = 3) => (
    <ul className="space-y-1 pl-6 list-disc text-sm text-foreground/70 font-retro">
      {items?.slice(0, limit).map((item, index) => (
        // Using index as key is acceptable here since the list is static per render
        <li key={index}>{item}</li>
      ))}
      {items?.length > limit && (
        <li className="text-xs text-foreground/50 italic">+{items?.length - limit} more...</li>
      )}
    </ul>
  );

  return (
    // Card container - ensure hover:green-glow class is defined in your CSS/Tailwind config
    <Card className="h-full border border-border/50 bg-card/50 dark:bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 hover:green-glow">
      {/* Use flex-col and h-full on CardContent if you need the button pushed to the bottom */}
      <CardContent className="p-6 flex flex-col h-full">

        {/* Header: Report Type Badge and Date */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-retro">
            <FileText className="h-4 w-4 mr-1" />
            Triage Report
          </Badge>
          <div className="flex items-center text-xs text-foreground/60 font-retro flex-shrink-0 ml-2">
            <Clock className="h-3 w-3 mr-1" />
            {report?.date}
          </div>
        </div>

        {/* Report Title and Summary */}
        <h3 className="text-xl font-semibold text-primary mb-3 font-retro">{report?.title}</h3>
        <p className="text-sm text-foreground/70 mb-4 font-retro">{report?.summary}</p>

        {/* Key Findings Section */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 font-retro flex items-center">
            <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
            Key Findings
          </h4>
          {renderLimitedList(report?.findings, 3)}
        </div>

        {/* Recommendations Section */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 font-retro flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            Recommendations
          </h4>
          {renderLimitedList(report?.recommendations, 3)}
        </div>

        {/* Impact Section - Use flex-grow to take up remaining space */}
        <div className="bg-primary/5 p-3 rounded-lg mb-4 flex-grow">
          <h4 className="text-sm font-medium mb-1 font-retro">Impact</h4>
          <p className="text-sm text-foreground/70 font-retro">{report?.impact}</p>
        </div>

        {/* Footer Action Button - Use mt-auto to push to bottom */}
        <div className="flex justify-end mt-auto">
          <Button asChild variant="outline" size="sm" className="rounded-full font-retro">
            {/* Standard <a> tag using the href provided in props */}
            <a href={viewReportHref} onClick={handleViewClick}>
              View Full Report <ArrowRight className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>

      </CardContent>
    </Card>
  );
};

// --- Default Export ---
// Makes the component importable like: import ITTriageReport from './ITTriageReport';
export default ITTriageReport;