/**
 * Rotas - Configuration Loader
 * 
 * This file provides utilities for loading route configurations from various sources:
 * - YAML config files
 * - Markdown/MDX frontmatter
 * - JSON data sources
 * - External APIs
 */

import type { Routes, RouteConfig, RouteMeta } from './routes';
import { createModel } from './models';

/**
 * Load routes configuration from a file or data source
 */
export async function loadRoutesConfig(source: string): Promise<Routes> {
  // This is a placeholder implementation
  // In a real application, this would load from files or APIs
  console.log(`Loading routes config from ${source}`);
  return {};
}

/**
 * Parse frontmatter from markdown/MDX files to generate route configuration
 */
export function parseRouteFromFrontmatter(
  frontmatter: Record<string, any>,
  filePath: string
): RouteConfig {
  const pattern = frontmatter.slug || getRoutePatternFromPath(filePath);
  
  const config: RouteConfig = {
    pattern,
    meta: {
      title: frontmatter.title || 'Untitled',
      description: frontmatter.description || '',
      type: frontmatter.type || 'content'
    }
  };
  
  // Add view configuration if component is specified
  if (frontmatter.component) {
    config.views = {
      component: frontmatter.component,
      layout: frontmatter.layout
    };
  }
  
  return config;
}

/**
 * Convert a file path to a route pattern
 */
function getRoutePatternFromPath(filePath: string): string {
  // Remove file extension and convert to route pattern
  const routePath = filePath
    .replace(/\.(md|mdx|astro|jsx|tsx)$/, '')
    .replace(/\/index$/, '/')
    .replace(/^\/pages/, '')
    .replace(/\[([^\]]+)\]/g, ':$1');
    
  return routePath || '/';
}

/**
 * Merge routes from different sources
 */
export function mergeRoutes(...routeObjects: Routes[]): Routes {
  const result: Routes = {};
  
  for (const routes of routeObjects) {
    for (const [path, config] of Object.entries(routes)) {
      if (!result[path]) {
        result[path] = { ...config };
      } else {
        // Merge existing route with new route
        result[path] = {
          ...result[path],
          ...config,
          // Special handling for nested children
          children: config.children 
            ? mergeRoutes(result[path].children || {}, config.children)
            : result[path].children
        };
      }
    }
  }
  
  return result;
}

/**
 * Generate routes from content collections (e.g., blog posts, products)
 */
export async function generateRoutesFromCollection(
  items: Array<Record<string, any>>,
  options: {
    basePath: string;
    idField?: string;
    component?: string;
    layout?: string;
    modelName?: string;
  }
): Promise<Routes> {
  const routes: Routes = {};
  const idField = options.idField || 'id';
  const model = options.modelName ? await createModel(options.modelName) : undefined;
  
  // Create the collection parent route
  routes[options.basePath] = {
    pattern: options.basePath,
    views: {
      component: options.component || 'CollectionList',
      layout: options.layout
    },
    meta: {
      type: 'collection',
      isCollection: true,
      dataSource: () => items
    },
    children: {}
  };
  
  // Create individual item routes
  for (const item of items) {
    const id = item[idField];
    if (!id) continue;
    
    const childPath = `:${idField}`;
    routes[options.basePath].children = routes[options.basePath].children || {};
    routes[options.basePath].children[childPath] = {
      pattern: `${options.basePath}/:${idField}`,
      views: {
        component: options.component?.replace('List', 'Detail') || 'CollectionDetail',
        layout: options.layout,
        props: (params: Record<string, any>) => ({ 
          id: params[idField],
          item: items.find(i => i[idField] === params[idField])
        })
      },
      meta: (params: Record<string, any>) => {
        const item = items.find(i => i[idField] === params[idField]);
        return {
          title: item?.title || `Item ${id}`,
          description: item?.description || '',
          type: 'dynamic'
        };
      }
    };
    
    // Add model if specified
    if (model) {
      routes[options.basePath].children[childPath].models = {
        [idField]: model
      };
    }
  }
  
  return routes;
}

/**
 * Load routes from all sources and merge them
 */
export async function loadAllRoutes(): Promise<Routes> {
  // This is a placeholder implementation
  // In a real application, this would load from various sources
  
  const baseRoutes = {
    '/': {
      pattern: '/',
      views: {
        component: 'Home',
        layout: 'IndexLayout'
      },
      meta: {
        title: 'Home',
        description: 'Welcome to our site',
        type: 'static'
      }
    }
  };
  
  // Example collection items
  const exampleItems = [
    { id: '1', title: 'Item 1', description: 'This is item 1' },
    { id: '2', title: 'Item 2', description: 'This is item 2' }
  ];
  
  // Generate routes from collection
  const collectionRoutes = await generateRoutesFromCollection(exampleItems, {
    basePath: '/items',
    component: 'ItemList',
    layout: 'IndexLayout'
  });
  
  return mergeRoutes(baseRoutes, collectionRoutes);
}
