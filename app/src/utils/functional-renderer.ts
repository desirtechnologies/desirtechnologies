/**
 * @pragma renderer
 * @description Functional component and layout renderer for Rotas
 * @category contour.logos.opera
 */

import { Flow } from '@/modules/flow';
import { Pattern } from '@/modules/pattern';
import { Functional, option, result, maybe } from '@/modules/functional';
import type { Component } from '@/routes/routes';

// Define type-safe component results
type ComponentResult = { tag: 'ok', value: any } | { tag: 'err', error: Error };
type OptionType<T> = { tag: 'some', value: T } | { tag: 'none' };
type Layout = any;
type Meta = Record<string, any>;

/**
 * Resolve a component using functional pattern matching
 */
export const resolveComponent = async (
  component: string | Component | undefined,
  fallback?: string
): Promise<ComponentResult> => {
  try {
    // Convert to optional and handle component type
    let resolvedComponent: any = null;
    
    if (typeof component === 'string') {
      resolvedComponent = await importComponent(component);
    } else if (component && typeof component === 'object' && 'name' in component) {
      resolvedComponent = await importComponent((component as any).name);
    } else if (fallback) {
      resolvedComponent = await importComponent(fallback);
    }
    
    // Check if we got a valid component
    if (resolvedComponent && resolvedComponent.tag === 'some') {
      return { tag: 'ok', value: resolvedComponent.value };
    }
    
    return { tag: 'err', error: new Error('Component not found') };
  } catch (error) {
    return { tag: 'err', error: error instanceof Error ? error : new Error('Unknown error') };
  }
};

/**
 * Import a component by name
 */
const importComponent = async (name: string): Promise<OptionType<any>> => {
  try {
    const mod = await import(`../components/${name}.astro`).catch(() => null);
    if (mod && mod.default) {
      return { tag: 'some', value: mod.default };
    }
    return { tag: 'none' };
  } catch (error) {
    console.error(`Error importing component ${name}:`, error);
    return { tag: 'none' };
  }
};

/**
 * Resolve a layout component using functional approach
 */
export const resolveLayout = async (
  layout?: string,
  fallback: string = 'Layout'
): Promise<Layout> => {
  return Functional.pipe(
    layout || fallback,
    async (layoutName) => {
      try {
        const imported = await import(`../views/${layoutName}.astro`)
          .catch(() => null);
        
        return imported?.default || null;
      } catch (error) {
        console.error(`Error loading layout ${layoutName}:`, error);
        return fallback !== layoutName 
          ? resolveLayout(fallback) 
          : null;
      }
    }
  );
};

/**
 * Resolve includes using functional approach
 */
export const resolveIncludes = async (
  includes?: Record<string, any>
): Promise<Record<string, any>> => {
  if (!includes) return {};
  
  const entries = Object.entries(includes);
  const resolvedEntries = await Promise.all(
    entries.map(async ([slot, include]) => {
      const resolved = await Functional.pipe(
        include,
        Pattern.match,
        m => m
          .with(Pattern.P.string, (name) => importComponent(name))
          .with(Pattern.P.object({ name: Pattern.P.string }), (obj) => importComponent(obj.name))
          .otherwise(() => Promise.resolve(option.none))
      );
      
      return [slot, option.isSome(resolved) ? resolved.value : null];
    })
  );
  
  return Object.fromEntries(
    resolvedEntries.filter(([_, component]) => component !== null)
  );
};

/**
 * Resolve meta with functional approach
 */
export const resolveMeta = async (
  meta: any,
  params: Record<string, any> = {}
): Promise<Meta> => {
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
      const resolvedValue = await Functional.pipe(
        value,
        Pattern.match,
        m => m
          .with(Pattern.P.when(v => typeof v === 'function'), async (fn) => {
            try {
              return await fn(params);
            } catch (error) {
              console.error(`Error resolving meta property ${key}:`, error);
              return '';
            }
          })
          .otherwise(v => Promise.resolve(v))
      );
      
      return [key, resolvedValue];
    })
  );
  
  return Object.fromEntries(resolvedEntries);
};

/**
 * Render a route with proper error handling
 */
export const renderRoute = async (
  routePath: string,
  getPageData: (path: string) => Promise<any>
) => {
  // Fetch page data with error handling
  let pageDataResult: { tag: 'ok', value: any } | { tag: 'err', error: Error };
  
  try {
    const data = await getPageData(routePath);
    pageDataResult = { tag: 'ok', value: data };
  } catch (error) {
    console.error('Error getting page data:', error);
    pageDataResult = { 
      tag: 'err', 
      error: error instanceof Error ? error : new Error('Unknown error') 
    };
  }
  
  if (pageDataResult.tag === 'err') {
    return {
      meta: { 
        title: 'Server Error', 
        description: 'Something went wrong on the server.',
        type: 'error'
      },
      Component: await resolveComponent('500'),
      Layout: await resolveLayout('Layout'),
      resolvedMeta: {
        title: 'Server Error',
        description: 'Something went wrong on the server.'
      },
      resolvedIncludes: {},
      props: {},
      data: {},
      error: pageDataResult.error
    };
  }
  
  const { meta, props, data, component, layout, includes } = pageDataResult.value;
  
  const [Component, Layout, resolvedMeta, resolvedIncludes] = await Promise.all([
    resolveComponent(component),
    resolveLayout(layout, 'Layout'),
    resolveMeta(meta),
    resolveIncludes(includes)
  ]);
  
  return {
    meta,
    Component: result.isOk(Component) ? Component.value : null,
    Layout,
    resolvedMeta,
    resolvedIncludes,
    props,
    data
  };
};
