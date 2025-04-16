import React from "react";


export interface Resource {
  id: string;
  name: string;
  description?: string;
  url?: string;
}

export interface ResourcesProps {
  resources?: Resource[];
  title?: string;
  showDescriptions?: boolean;
}

const defaultResources: Resource[] = [
  {
    id: "astro",
    name: "Astro",
    description: "The all-in-one web framework designed for speed. Modern, content-focused websites.",
    url: "https://astro.build/",
  },
  {
    id: "react",
    name: "React",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    url: "https://react.dev/",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "Typed JavaScript at Any Scale. Supercharge your JS with type safety.",
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    url: "https://tailwindcss.com/",
  },
  {
    id: "vite",
    name: "Vite",
    description: "Next Generation Frontend Tooling. Get instant server start and lightning-fast HMR.",
    url: "https://vitejs.dev/",
  },
];

export const ContentCollection: React.FC<ResourcesProps> = ({
  resources = defaultResources,
  title = "Featured Resources",
  showDescriptions = true,
}) => (
  <section className="py-12 px-4 md:px-8">
    <h2 className="text-3xl font-bold mb-8 text-gray-800 drop-shadow-sm">{title}</h2>
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((r) => (
        <li
          key={r.id}
          className="rounded-2xl p-6 shadow-neumorphic bg-gray-50 hover:bg-gray-100 transition dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
        >
          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2 hover:underline"
          >
            {r.name}
          </a>
          {showDescriptions && r.description && (
            <div className="text-gray-600 dark:text-gray-300 text-base mt-1">{r.description}</div>
          )}
        </li>
      ))}
    </ul>
  </section>
);

