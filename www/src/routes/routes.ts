/** 
 * Rotas - A flexible routing system for the Desire Technology Framework
 * 
 * This system allows for:
 * - Hierarchical route structure as an object tree
 * - Dynamic meta data that can be generated via functions
 * - Model-View-Controller pattern integration
 * - Support for various content types and strategies
 */

// Basic route types
export type RouteType = 
  | 'static'      // Regular pages
  | 'dynamic'     // Pages with parameters
  | 'collection'  // Collection of items
  | 'error'       // Error pages
  | 'api'         // API endpoints
  | 'content';    // Markdown/MDX content

// Route parameter model interfaces
export interface RouteModel {
  name: string;
  schema?: Record<string, any>;
  validate?: (data: any) => boolean | Promise<boolean>;
  transform?: (data: any) => any | Promise<any>;
  // Hierarchical model structure
  fields?: Record<string, {
    type: string;
    required?: boolean;
    defaultValue?: any;
    validators?: Array<(value: any) => boolean>;
  }>;
  relationships?: Record<string, {
    type: 'hasOne' | 'hasMany' | 'belongsTo' | 'belongsToMany';
    model: string;
    foreignKey?: string;
  }>;
}

// Enhanced component structure
export interface Component {
  name: string;
  type: 'presentational' | 'container' | 'layout' | 'page';
  props?: Record<string, any> | ((context: any) => Record<string, any> | Promise<Record<string, any>>);
  children?: Record<string, Component>; // Nested components
  components?: Record<string, Component>; // Sub-components used by this component
  template?: string; // Simplified template for SSG
  dynamicProps?: Array<string>; // Props that can be dynamically set
  slot?: string; // Named slot the component fits into
  source?: string; // File path to the component
}

// Enhanced include structure (sections/widgets)
export interface Include {
  name: string;
  type: 'section' | 'widget' | 'partial';
  components?: Record<string, Component>; // Components used in this include
  props?: Record<string, any> | ((context: any) => Record<string, any> | Promise<Record<string, any>>);
  slots?: Record<string, Array<string>>; // Named slots and components that can fill them
  template?: string; // Simplified template for SSG
  source?: string; // File path to the include
}

// Enhanced view structure
export interface RouteView {
  component?: string | Component;
  layout?: string;
  props?: Record<string, any> | ((params: any) => Record<string, any> | Promise<Record<string, any>>);
  // Hierarchical view structure
  includes?: Record<string, Include | string>; // Sections/widgets to include
  components?: Record<string, Component | string>; // Components to use
  template?: string; // Simplified template for SSG
  slots?: Record<string, Array<string>>; // Slots and the components that fill them
}

// Enhanced controller structure
export interface RouteController {
  handler?: (params: any) => any | Promise<any>;
  middleware?: Array<(req: any, res: any, next: () => void) => void>;
  // Hierarchical controller structure
  actions?: Record<string, (params: any) => any | Promise<any>>;
  hooks?: {
    beforeRender?: Array<(context: any) => void | Promise<void>>;
    afterRender?: Array<(context: any) => void | Promise<void>>;
  };
  validators?: Record<string, (value: any) => boolean | string>;
}

// Meta information can be static or dynamically generated
export type RouteMeta = {
  title?: string | ((params?: any) => string | Promise<string>);
  description?: string | ((params?: any) => string | Promise<string>);
  type?: RouteType;
  isCollection?: boolean;
  dataSource?: string | (() => any | Promise<any>);
  [key: string]: any;
};

// The main route configuration interface
export interface RouteConfig {
  pattern?: string; // Route pattern (e.g., '/products/:id')
  models?: Record<string, RouteModel>; // Data models
  views?: RouteView; // View configuration
  controllers?: RouteController; // Controller logic
  meta?: RouteMeta | ((params?: Record<string, any>) => RouteMeta | Promise<RouteMeta>); // Meta information
  children?: Routes; // Child routes
  // Source information
  source?: {
    type: 'static' | 'markdown' | 'mdx' | 'yaml' | 'json' | 'api';
    path?: string; // File or API path
    collection?: string; // Collection name if applicable
    query?: Record<string, any>; // Query parameters for APIs
  };
  // Rendering strategy
  renderer?: {
    type: 'static' | 'dynamic' | 'ssr' | 'csr' | 'hybrid';
    priority?: 'high' | 'medium' | 'low';
    cache?: boolean | number; // Cache time in seconds if number
  };
}

// Routes is a recursive structure mapping route paths to their configurations
export type Routes = {
  [path: string]: RouteConfig;
};

// Import content-related utilities
import { resolveContentData } from '@/modules/content-loader';

// The main routes tree
export const routes: Routes = {
  '/': {
    pattern: '/',
    views: {
      component: 'Home',
      layout: 'IndexLayout',
    },
    meta: {
      title: 'Home',
      description: 'Welcome to our site',
      type: 'static'
    },
    children: {
      'about': {
        pattern: '/about',
        views: {
          component: 'About',
          layout: 'IndexLayout',
        },
        meta: {
          title: 'About Us',
          description: 'Learn about our company',
          type: 'static'
        }
      },

      'products': {
        pattern: '/products',
        views: {
          component: 'Home', // Temporarily point to Home until we create ProductList
          layout: 'IndexLayout',
        },
        meta: {
          title: 'Products',
          description: 'Our product catalog',
          type: 'collection'
        }
      }
    }
  },
  '/error': {
    pattern: '/error',
    views: {
      component: 'Home', // Temporarily point to Home as a fallback
      layout: 'IndexLayout'
    },
    meta: {
      title: 'Error',
      type: 'error'
    },
    children: {
      '404': {
        pattern: '/404',
        views: {
          component: '404',
          layout: 'IndexLayout'
        },
        meta: {
          title: 'Not Found',
          type: 'error'
        }
      },
      '500': {
        pattern: '/500',
        views: {
          component: '500',
          layout: 'IndexLayout'
        },
        meta: {
          title: 'Server Error',
          type: 'error'
        }
      }
    }
  },
  '/404': {
    pattern: '/404',
    views: {
      component: '404',
      layout: 'IndexLayout'
    },
    meta: {
      title: 'Not Found',
      type: 'error'
    }
  }
};

// Utility functions for working with routes

// Example function to fetch products (placeholder)
async function fetchProducts() {
  return [{ id: '1', name: 'Product 1' }, { id: '2', name: 'Product 2' }];
}

// Example function to fetch a single product (placeholder)
async function fetchProduct(id: string) {
  return { id, name: `Product ${id}`, shortDescription: `This is product ${id}` };
}

// Example function to fetch blog posts (placeholder)
async function fetchBlogPosts() {
  return [
    { slug: 'first-post', title: 'First Post', publishDate: '2025-04-01', author: 'John Doe', excerpt: 'This is the first post' },
    { slug: 'second-post', title: 'Second Post', publishDate: '2025-04-05', author: 'Jane Smith', excerpt: 'This is the second post' }
  ];
}

// Example function to fetch a single blog post (placeholder)
async function fetchBlogPost(slug: string) {
  const posts = await fetchBlogPosts();
  return posts.find(post => post.slug === slug) || { slug, title: 'Unknown post', publishDate: '2025-01-01', author: 'Unknown', excerpt: '' };
}

// Helper to flatten routes for frameworks that require flat route arrays
export function flattenRoutes(routes: Routes, parentPath: string = ''): Array<{ path: string, config: RouteConfig }> {
  let result: Array<{ path: string, config: RouteConfig }> = [];
  
  Object.entries(routes).forEach(([path, config]) => {
    const fullPath = path.startsWith('/') ? path : `${parentPath}/${path}`;
    const normalizedPath = fullPath.replace(/\/+/g, '/');
    
    result.push({
      path: normalizedPath,
      config: { ...config, pattern: normalizedPath }
    });
    
    if (config.children) {
      result = result.concat(flattenRoutes(config.children, normalizedPath));
    }
  });
  
  return result;
}

// Export a flattened version for compatibility with systems that expect flat routes
export const flatRoutes = flattenRoutes(routes);