import { Code, ArrowRight } from "lucide-preact";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  title = "DESIR TECHNOLOGIES",
  subtitle = "Building immersive digital experiences and innovative solutions for the modern world.",
  primaryCta = {
    text: "GET STARTED",
    href: "/get-started",
  },
  secondaryCta = {
    text: "EXPLORE PROJECTS",
    href: "/projects",
  },
}: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-gray-950">
      {/* Terminal-like decoration in the background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] hidden lg:block">
        <div className="relative w-full h-full bg-gray-900 rounded-lg shadow-xl overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center h-8 bg-gray-800 px-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-4 text-sm text-green-400 font-mono">DESIR TECHNOLOGIES</span>
          </div>
          {/* Terminal content */}
          <div className="p-6 font-mono text-sm text-green-400">
            <div className="space-y-2">
              <p>$ whoami</p>
              <p>$ desir-technologies</p>
              <p>$ ls</p>
              <p>Building immersive digital experiences and innovative solutions for the modern world.</p>
              <p>$ ls la services/</p>
              <p>total</p>
              <p>drwxr-xr-x 2 desir staff 64 Mar 5 14:32 web-development</p>
              <p>drwxr-xr-x 2 desir staff 64 Mar 5 14:32 mobile-apps</p>
              <p>drwxr-xr-x 2 desir staff 64 Mar 5 14:32 uidesign</p>
              <p>drwxr-xr-x 2 desir staff 64 Mar 5 14:32 cloud-services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors"
            >
              {primaryCta.text}
              <ArrowRight size={20} />
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 text-gray-900 dark:text-white font-medium rounded-full transition-colors"
            >
              {secondaryCta.text}
              <Code size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
