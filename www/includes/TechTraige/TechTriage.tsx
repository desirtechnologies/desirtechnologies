import { useState, useEffect } from "react";
import BlogPreview from "@/components/BlogPreview";
import AboutSection from "@/components/AboutSection";
import MatrixParticles from "@/components/MatrixParticles";
import PageTransition from "@/components/PageTransition";
import TerminalSection from "@/components/TerminalSection";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Zap,
  Server,
  Database,
  Globe,
  Shield,
  BarChart,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/elements/button";
import { Card, CardContent } from "@/components/elements/card";
import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import ResourcesSection from "@/components/ResourcesSection";
import ITTriageSection from "@/components/ITTriageSection";
import { ResourcesSectionHome } from "@/components/resources/ResourcesSectionHome";

export default function TechTriage() {
  return (
    <section className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-3xl md:text-4xl font-light text-foreground/90 dark:text-foreground/90 mb-8 text-center font-retro">
        IT TRIAGE REPORTS
      </h2>
      <ITTriageSection />
    </section>
  );
}
