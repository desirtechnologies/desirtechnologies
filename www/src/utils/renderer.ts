/**
 * @pragma renderer
 * @description Unified component and layout renderer for Rotas
 * @category contour.logos.opera
 */

import { Functional } from '@/modules/functional';
import { Pattern } from '@/modules/pattern';
import { Flow } from '@/modules/flow';
import fs from 'node:fs/promises';
import path from 'node:path';
import type {
  Component,
  ComponentResult,
  OptionType,
  Layout,
  Meta,
  RouteMeta,
  RenderResult
} from '@/types';

// Component path constants
const BASE_PATH = '/home/arepo/Documents/Github/desirtechnology/www/src';
const COMPONENTS_PATH = path.join(BASE_PATH, 'components');
const LAYOUTS_PATH = path.join(BASE_PATH, 'layouts');
const VIEWS_PATH = path.join(BASE_PATH, 'views');

// Debug mode - set to true to enable verbose logging
const DEBUG = true;

// Logging helper
function debugLog(...args: any[]): void {
  if (DEBUG) {
    console.log('[RENDERER]', ...args);
  }
}

/**
 * Find all component categories from the file system
 */
async function getComponentCategories(): Promise<string[]> {
  try {
    const entries = await fs.readdir(COMPONENTS_PATH, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(dir => dir.name);
  } catch (error) {
    console.error('Error reading component categories:', error);
    return [];
  }
}

/**
 * Recursively search for a component in all categories
 */
async function findComponentPath(componentName: string): Promise<string | null> {
  // First try direct path
  const directPath = path.join(COMPONENTS_PATH, `${componentName}.astro`);
  try {
    await fs.access(directPath);
    return directPath;
  } catch {}
  
  // Then try in categories
  const categories = await getComponentCategories();
  
  for (const category of categories) {
    const categoryPath = path.join(COMPONENTS_PATH, category, `${componentName}.astro`);
    try {
      await fs.access(categoryPath);
      return categoryPath;
    } catch {}
  }
  
  return null;
}

/**
 * Recursively search for a layout in all categories
 */
async function findLayoutPath(layoutName: string): Promise<string | null> {
  // Check in views directory (backwards compatibility)
  const viewPath = path.join(VIEWS_PATH, `${layoutName}.astro`);
  try {
    await fs.access(viewPath);
    return viewPath;
  } catch {}
  
  // Check in layouts directory
  const directPath = path.join(LAYOUTS_PATH, `${layoutName}.astro`);
  try {
    await fs.access(directPath);
    return directPath;
  } catch {}
  
  // Check in layout subdirectories
  try {
    const entries = await fs.readdir(LAYOUTS_PATH, { withFileTypes: true });
    const categories = entries
      .filter(entry => entry.isDirectory())
      .map(dir => dir.name);
    
    for (const category of categories) {
      const categoryPath = path.join(LAYOUTS_PATH, category, `${layoutName}.astro`);
      try {
        await fs.access(categoryPath);
        return categoryPath;
      } catch {}
    }
  } catch {}
  
  return null;
}

/**
 * Convert file path to import path
 */
function filePathToImportPath(filePath: string): string {
  if (!filePath) return '';
  
  // Get a path relative to src directory
  const relativePath = path.relative(BASE_PATH, filePath);
  
  // Remove extension and normalize slashes
  const importPath = relativePath.replace(/\\/g, '/').replace(/\.astro$/, '');
  
  debugLog('Converting path:', { filePath, relativePath, importPath });
  return importPath;
}

/**
 * Resolve a component using functional pattern matching
 */
export async function resolveComponent(
  component: string | Component | undefined,
  fallback?: string
): Promise<ComponentResult> {
  try {
    // Convert to optional and handle component type
    let componentName: string | null = null;
    
    if (typeof component === 'string') {
      componentName = component;
    } else if (component && typeof component === 'object' && 'name' in component) {
      componentName = (component as any).name;
    } else if (fallback) {
      componentName = fallback;
    }
    
    if (!componentName) {
      return { tag: 'err', error: new Error('Component name not provided') };
    }
    
    // Find component path
    const componentPath = await findComponentPath(componentName);
    if (!componentPath) {
      return { tag: 'err', error: new Error(`Component not found: ${componentName}`) };
    }
    
    // Convert to import path
    const importPath = filePathToImportPath(componentPath);
    if (!importPath) {
      return { tag: 'err', error: new Error(`Invalid import path for component: ${componentName}`) };
    }
    
    // Dynamic import
    try {
      const mod = await import(`@/${importPath}`).catch(() => null);
      if (mod && mod.default) {
        return { tag: 'ok', value: mod.default };
      }
      return { tag: 'err', error: new Error(`Component import failed: ${componentName}`) };
    } catch (error) {
      console.error(`Error importing component ${componentName}:`, error);
      return { tag: 'err', error: error instanceof Error ? error : new Error('Unknown error') };
    }
  } catch (error) {
    return { tag: 'err', error: error instanceof Error ? error : new Error('Unknown error') };
  }
}

/**
 * Resolve a layout component
 */
export async function resolveLayout(layout?: string, fallback = 'Layout'): Promise<Layout> {
  try {
    const layoutName = layout || fallback;
    
    // Find layout path
    const layoutPath = await findLayoutPath(layoutName);
    if (!layoutPath && layoutName !== fallback && fallback) {
      return resolveLayout(fallback);
    } else if (!layoutPath) {
      console.error(`Layout not found: ${layoutName}`);
      return null;
    }
    
    // Convert to import path
    const importPath = filePathToImportPath(layoutPath);
    if (!importPath) {
      console.error(`Invalid import path for layout: ${layoutName}`);
      return null;
    }
    
    // Dynamic import
    try {
      debugLog(`Attempting to import layout from path: @/${importPath}`);
      
      // Try direct import first
      try {
        const mod = await import(`@/${importPath}`);
        if (mod?.default) {
          debugLog(`Successfully imported layout: ${layoutName}`);
          return mod.default;
        }
      } catch (importError) {
        debugLog(`Failed direct import, trying fallback path for: ${layoutName}`, importError);
        
        // Try alternate paths with different folder structures
        if (layoutName === 'Layout') {
          try {
            // Try direct import for Layout component
            const layoutMod = await import(`@/views/Layout.astro`);
            if (layoutMod?.default) {
              debugLog('Successfully imported Layout directly from views');
              return layoutMod.default;
            }
          } catch (viewImportError) {
            debugLog('Failed direct view Layout import:', viewImportError);
          }
        }
      }
      
      // Try fallback layout if specified
      if (layoutName !== fallback && fallback) {
        debugLog(`Trying fallback layout: ${fallback}`);
        return resolveLayout(fallback);
      }
      
      console.error(`All layout import attempts failed for: ${layoutName}`);
      return null;
    } catch (error) {
      console.error(`Error importing layout ${layoutName}:`, error);
      return null;
    }
  } catch (error) {
    console.error('Error resolving layout:', error);
    return null;
  }
}

/**
 * Resolve includes for a page
 */
export async function resolveIncludes(includes?: Record<string, any>): Promise<Record<string, any>> {
  if (!includes) return {};
  
  const resolved: Record<string, any> = {};
  
  for (const [slot, include] of Object.entries(includes)) {
    let componentName: string | null = null;
    
    if (typeof include === 'string') {
      componentName = include;
    } else if (typeof include === 'object' && include && 'name' in include) {
      componentName = (include as any).name;
    }
    
    if (componentName) {
      const component = await resolveComponent(componentName);
      if (component.tag === 'ok') {
        resolved[slot] = component.value;
      }
    }
  }
  
  return resolved;
}

/**
 * Resolve meta values 
 */
export async function resolveMeta(
  meta: any,
  params: Record<string, any> = {}
): Promise<Meta> {
  if (!meta) {
    return {
      title: 'Rotas System',
      description: 'A flexible routing system'
    };
  }
  
  // If meta is a function, call it with params
  if (typeof meta === 'function') {
    try {
      const result = await meta(params);
      return resolveMeta(result, params);
    } catch (error) {
      console.error('Error calling meta function:', error);
      return {
        title: 'Rotas System',
        description: 'A flexible routing system'
      };
    }
  }
  
  // Process object meta properties with functional approach
  const resolvedEntries = await Promise.all(
    Object.entries(meta).map(async ([key, value]) => {
      let resolvedValue = value;
      
      if (typeof value === 'function') {
        try {
          resolvedValue = await value(params);
        } catch (error) {
          console.error(`Error resolving meta property ${key}:`, error);
          resolvedValue = '';
        }
      }
      
      return [key, resolvedValue];
    })
  );
  
  return Object.fromEntries(resolvedEntries);
}

/**
 * Render a route with proper error handling
 */
export async function renderRoute(
  routePath: string,
  getPageData: (path: string) => Promise<any>
): Promise<RenderResult>;

/**
 * Render a route with already resolved components
 */
export async function renderRoute(
  componentResult: ComponentResult,
  layoutComponent: Layout,
  props: Record<string, any>,
  meta: RouteMeta,
  includes: Record<string, any>,
  path: string
): Promise<RenderResult>;

/**
 * Implementation for both overloads
 */
export async function renderRoute(
  arg1: string | ComponentResult,
  arg2: ((path: string) => Promise<any>) | Layout,
  arg3?: Record<string, any>,
  arg4?: RouteMeta,
  arg5?: Record<string, any>,
  arg6?: string
): Promise<RenderResult> {
  // First overload - fetch data from route path
  if (typeof arg1 === 'string' && typeof arg2 === 'function') {
    const routePath = arg1;
    const getPageData = arg2;
    
    try {
      const pageData = await getPageData(routePath);
      const { meta, props, data, component, layout, includes } = pageData;
      
      // Resolve all components in parallel
      const [Component, Layout, resolvedMeta, resolvedIncludes] = await Promise.all([
        resolveComponent(component),
        resolveLayout(layout),
        resolveMeta(meta),
        resolveIncludes(includes)
      ]);
      
      return {
        component: Component,
        layout: Layout,
        meta: resolvedMeta,
        includes: resolvedIncludes,
        props,
        data
      };
    } catch (error) {
      console.error('Error rendering route:', error);
      
      // Return error state
      return {
        meta: { 
          title: 'Server Error', 
          description: 'Something went wrong on the server.',
          type: 'error'
        },
        component: await resolveComponent('500'),
        layout: await resolveLayout('Layout'),
        includes: {},
        props: {},
        data: {},
        error: error instanceof Error ? error : new Error('Unknown error')
      };
    }
  }
  // Second overload - direct component passing
  else if (arg3 && arg4 && arg5) {
    const Component = arg1 as ComponentResult;
    const Layout = arg2 as Layout;
    const props = arg3;
    const meta = arg4;
    const includes = arg5;
    const path = arg6 || '/';
    
    try {
      // Resolve meta and includes
      const [resolvedMeta, resolvedIncludes] = await Promise.all([
        resolveMeta(meta),
        resolveIncludes(includes)
      ]);
      
      return {
        component: Component,
        layout: Layout,
        meta: resolvedMeta,
        includes: resolvedIncludes,
        props,
        data: {}
      };
    } catch (error) {
      console.error('Error rendering route with direct components:', error);
      
      // Return error state
      return {
        meta: { 
          title: 'Server Error', 
          description: 'Something went wrong on the server.'
        },
        component: { tag: 'err', error: error instanceof Error ? error : new Error('Unknown error') },
        layout: { tag: 'ok', value: Layout },
        includes: {},
        props: {},
        data: {}
      };
    }
  }
  // Invalid arguments
  else {
    throw new Error('Invalid arguments to renderRoute');
  }
}
