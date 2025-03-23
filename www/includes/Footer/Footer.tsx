import { serviceLinks, resourceLinks, quickLinks, latestUpdates } from "./footerData.ts";
import { ComponentChildren } from "preact";
import { ChevronRight, Sparkles, Globe, Code, FileText } from "lucide-preact";

interface LinkItem {
  name: string;
  href: string;
  icon?: string;
  isNew?: boolean;
}

interface FooterSectionProps {
  title: string;
  links: LinkItem[];
  icon?: ComponentChildren;
}

const IconMap = {
  globe: Globe,
  code: Code,
  fileText: FileText,
};

const FooterSection = ({ title, links, icon }: FooterSectionProps) => {
  return (
    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <ul class="flex flex-col gap-2">
        {links.map((link) => {
          const Icon = link.icon ? IconMap[link.icon as keyof typeof IconMap] : null;
          return (
            <li key={link.name}>
              <a
                href={link.href}
                class="group flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                {Icon && <Icon size={16} />}
                <span>{link.name}</span>
                {link.isNew && (
                  <span class="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-100">
                    <Sparkles size={12} />
                    New
                  </span>
                )}
                <ChevronRight size={16} class="opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const LatestUpdates = () => {
  return (
    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Latest Updates</h3>
      <div class="flex flex-col gap-4">
        <a
          href={latestUpdates.blogPost.href}
          class="group flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
        >
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
              {latestUpdates.blogPost.title}
            </span>
            <span class="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-100">
              <Sparkles size={12} />
              New
            </span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {latestUpdates.blogPost.description}
          </p>
          <div class="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100">
            Read more
            <ChevronRight size={16} class="opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </a>
        <a
          href={latestUpdates.newService.href}
          class="group flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
        >
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
              {latestUpdates.newService.title}
            </span>
            <span class="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-100">
              <Sparkles size={12} />
              New
            </span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {latestUpdates.newService.description}
          </p>
          <div class="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100">
            Learn more
            <ChevronRight size={16} class="opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="w-full border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FooterSection title="Services" links={serviceLinks} />
          <FooterSection title="Resources" links={resourceLinks} />
          <FooterSection title="Quick Links" links={quickLinks} />
          <LatestUpdates />
        </div>

        {/* Copyright */}
        <div class="border-t border-primary/10 mt-16 pt-8">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Desir Technologies. All rights reserved.</span>
              <span class="hidden sm:inline">•</span>
              <span>Designed with ❤️ in San Francisco</span>
            </div>
            <div class="flex items-center gap-6 text-sm">
              <a href="/privacy" class="text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="/terms" class="text-muted-foreground hover:text-foreground">Terms of Service</a>
              <a href="/sitemap" class="text-muted-foreground hover:text-foreground">Sitemap</a>
              <a href="/contact" class="text-muted-foreground hover:text-foreground">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 