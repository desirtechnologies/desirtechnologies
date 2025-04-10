/**
 * Rotas - Utility functions for the router system
 * 
 * This file provides helper functions for working with the Rotas routing system,
 * particularly for integration with Astro pages and other framework components.
 */

import type { Routes, RouteConfig, RouteMeta, Component } from './routes';
import { routes, flattenRoutes } from './routes';
import { resolveContentData } from '@/modules/content-loader';

/**
 * Get route configuration by exact path
 */
export function getRouteByPath(path: string): RouteConfig | undefined {
  const flattened = flattenRoutes(routes);
  const route = flattened.find(r => r.path === path);
  return route?.config;
}

/**
 * Match a URL path to a route pattern, extracting parameters
 */
export function matchRoute(urlPath: string): { 
  route: RouteConfig | undefined; 
  params: Record<string, string>;
} {
  // Handle root path separately for simplicity
  if (urlPath === '/' || urlPath === '') {
    return { 
      route: routes['/'], 
      params: {} 
    };
  }
  
  const normalizedPath = urlPath.endsWith('/') && urlPath !== '/' 
    ? urlPath.slice(0, -1) 
    : urlPath;
  
  // Get the flattened routes for easier matching
  const flattened = flattenRoutes(routes);
  const params: Record<string, string> = {};
  
  // First try exact match
  const exactMatch = flattened.find(r => r.path === normalizedPath);
  if (exactMatch) {
    return { route: exactMatch.config, params };
  }
  
  // Then try pattern matching for dynamic routes
  for (const { path, config } of flattened) {
    if (!path.includes(':')) continue;
    
    const pathSegments = path.split('/').filter(Boolean);
    const urlSegments = normalizedPath.split('/').filter(Boolean);
    
    if (pathSegments.length !== urlSegments.length) continue;
    
    let isMatch = true;
    const tempParams: Record<string, string> = {};
    
    for (let i = 0; i < pathSegments.length; i++) {
      const pathSeg = pathSegments[i];
      const urlSeg = urlSegments[i];
      
      if (pathSeg.startsWith(':')) {
        // This is a parameter
        const paramName = pathSeg.substring(1);
        tempParams[paramName] = urlSeg;
      } else if (pathSeg !== urlSeg) {
        isMatch = false;
        break;
      }
    }
    
    if (isMatch) {
      return { 
        route: config, 
        params: tempParams 
      };
    }
  }
  
  // No match found, use the 404 route
  // First check direct 404 page
  const notFoundRoute = flattened.find(r => r.path === '/404');
  if (notFoundRoute) {
    return { route: notFoundRoute.config, params: {} };
  }
  
  // Then try nested 404 in /error
  const errorNotFoundRoute = flattened.find(r => r.path === '/error/404');
  if (errorNotFoundRoute) {
    return { route: errorNotFoundRoute.config, params: {} };
  }
  
  // Fallback to a basic 404 config if no 404 route is defined
  return { 
    route: {
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
    params: {} 
  };
}

/**
 * Resolve meta information which could be static or dynamic
 */
export async function resolveMeta(
  route: RouteConfig, 
  params: Record<string, string> = {}
): Promise<RouteMeta> {
  if (!route || !route.meta) {
    return {
      title: 'Rotas System',
      description: 'A flexible routing system',
      type: 'static'
    };
  }
  
  try {
    if (typeof route.meta === 'function') {
      const metaResult = await route.meta(params || {});
      return metaResult || { 
        title: 'Rotas System',
        description: 'A flexible routing system' 
      };
    }
    
    const result: RouteMeta = { ...route.meta };
    
    // Handle individual dynamic meta properties
    for (const [key, value] of Object.entries(result)) {
      if (typeof value === 'function') {
        try {
          result[key] = await value(params);
        } catch (error) {
          console.error(`Error resolving meta property ${key}:`, error);
          // Keep the original value if function execution fails
        }
      }
    }
    
    return result;
  } catch (error) {
    console.error('Error resolving meta:', error);
    return {
      title: 'Rotas System',
      description: 'A flexible routing system',
      type: 'static'
    };
  }
}

/**
 * Get data for a route (useful for collections/dynamic routes)
 */
export async function getRouteData(
  route: RouteConfig, 
  params: Record<string, string> = {}
): Promise<any> {
  // If we have a controller with a handler, use that
  if (route.controllers?.handler) {
    return await route.controllers.handler(params);
  }
  
  // Otherwise, try to get data from the meta.dataSource
  const meta = await resolveMeta(route, params);
  if (meta.dataSource) {
    if (typeof meta.dataSource === 'function') {
      return await meta.dataSource();
    }
    return meta.dataSource;
  }
  
  // Process route models if they exist
  if (route.models) {
    const result: Record<string, any> = {};
    
    for (const [paramName, model] of Object.entries(route.models)) {
      const paramValue = params[paramName];
      
      if (paramValue && model.validate && !(await model.validate(paramValue))) {
        throw new Error(`Invalid parameter value for ${paramName}`);
      }
      
      result[paramName] = model.transform 
        ? await model.transform(paramValue) 
        : paramValue;
    }
    
    return result;
  }
  
  // Default fallback
  return { ...params };
}

/**
 * Build props for a route's component
 */
export async function buildRouteProps(
  route: RouteConfig, 
  params: Record<string, string> = {}
): Promise<Record<string, any>> {
  if (!route.views?.props) {
    return { ...params };
  }
  
  if (typeof route.views.props === 'function') {
    return await route.views.props(params);
  }
  
  return { ...route.views.props, ...params };
}

/**
 * Get page data based on the route path
 */
export async function getPageData(routePath: string) {
  console.log(`Getting page data for: ${routePath}`);
  
  try {
    // Determine which collection to use based on the route path
    const pathSegments = routePath.split('/').filter(Boolean);
    
    // Match the route from the path
    const { route, params } = matchRoute(routePath);
    
    // Default values  
    let meta: RouteMeta = {
      title: 'Page Title',
      description: 'Page description goes here',
      type: 'static'
    };
    
    let props: Record<string, any> = {};
    let data: any = {};
    let component: string | Component = 'BasicPage';
    let layout: string = 'Layout';
    let includes: Record<string, any> = {};
    
    // Try content collection based lookup first
    if (pathSegments.length > 0) {
      // Get collection name from first segment
      const collection = pathSegments[0];
      
      // Try to get content data
      try {
        console.log(`Fetching content data for ${routePath}`);
        const contentResult = await resolveContentData(routePath, params || {});
        
        if (contentResult.tag === 'ok') {
          const contentData = contentResult.value;
          console.log('Content data resolved:', contentData);
          
          // Set meta from content data
          meta = {
            title: contentData.title || contentData.data?.title || meta.title,
            description: contentData.description || contentData.data?.description || meta.description,
            type: 'content'
          };
          
          // Set component based on collection or content preference
          if (contentData.data?.component) {
            component = contentData.data.component;
          } else if (collection === 'blog') {
            // For blog posts
            if (pathSegments.length > 1) {
              component = 'blog/BlogPost';
            } else {
              component = 'blog/BlogList';
            }
          } else if (collection === 'tech') {
            // For tech articles
            if (pathSegments.length > 1) {
              component = 'tech/TechArticle';
            } else {
              component = 'tech/TechList';
            }
          }
          
          // Set data and props
          data = contentData;
          props = {
            ...contentData.data,
            slug: pathSegments.length > 1 ? pathSegments[1] : undefined,
            collection
          };
          
          // Use layout from content data if available
          if (contentData.data?.layout) {
            layout = contentData.data.layout;
          }
        }
      } catch (error) {
        console.error(`Error resolving content for ${routePath}:`, error);
      }
    }
    
    // Fallback to route-based lookup if we have a route and content wasn't found
    if (route && (!data || Object.keys(data).length === 0)) {
      // Resolve meta data
      const routeMeta = await resolveMeta(route, params || {});
      meta = routeMeta || meta;
      
      // Get route data
      const routeData = await getRouteData(route, params || {});
      data = routeData || data;
      
      // Get props for the route
      const routeProps = await buildRouteProps(route, params || {});
      props = routeProps || props;
      
      // Determine the component to use
      if (route.views?.component) {
        component = route.views.component;
      } else if (meta.type === 'collection' && params?.slug) {
        component = 'CollectionEntry';
      } else if (meta.type === 'collection') {
        component = 'CollectionIndex';
      }
      
      // Determine the layout to use
      layout = route.views?.layout || layout;
      
      // Determine any includes for the route
      includes = route.views?.includes || includes;
    }
    
    return {
      meta,
      props,
      data,
      component,
      layout,
      includes
    };
    
  } catch (error) {
    console.error(`Error getting page data for ${routePath}:`, error);
    
    // Return error data
    return {
      meta: {
        title: 'Error',
        description: 'An error occurred while loading the page.',
        type: 'error'
      },
      props: {},
      data: { error },
      component: 'ErrorPage',
      layout: 'Layout',
      includes: {}
    };
  }
}
/**
 * Get all routes of a specific type (useful for building sitemaps, etc.)
 */
export function getRoutesByType(type: string): Array<{ path: string, config: RouteConfig }> {
  return flattenRoutes(routes).filter(({ config }) => {
    if (typeof config.meta === 'object' && config.meta.type === type) {
      return true;
    }
    return false;
  });
}

/**
 * Get all collection routes for generating static pages
 */
export function getCollectionRoutes(): Array<{ path: string, config: RouteConfig }> {
  return getRoutesByType('collection');
}
