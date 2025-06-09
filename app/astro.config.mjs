import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import toml from '@iarna/toml';
import AutoImport from "astro-auto-import";
import tailwindConfigViewer from "astro-tailwind-config-viewer";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkCollapse from "remark-collapse";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";

export default defineConfig({
  site: "https://www.desirtechnology.com",
  base: "/",
  trailingSlash: "ignore",
  vite: {
    plugins: [
      {
        name: 'toml-loader',
        transform(code, id) {
          if (id.endsWith('.toml')) {
            const parsed = toml.parse(code);
            return {
              code: `export default ${JSON.stringify(parsed)};`,
              map: null
            };
          }
        }
      }
    ]
  },
  prefetch: {
    prefetchAll: true
  },
  integrations: [
   tailwindConfigViewer(),
    tailwind(),
    react(), 
    sitemap(), 
    AutoImport({
    imports: ["@components/common/Button.astro", "@shortcodes/Accordion", "@shortcodes/Notice", "@shortcodes/Youtube", "@shortcodes/Tabs", "@shortcodes/Tab"]
  }), mdx()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }], remarkMath],
    rehypePlugins: [[rehypeKatex, {}]],
    shikiConfig: {
      theme: "dark-plus",
    },
    extendDefaultPlugins: true
  },
});