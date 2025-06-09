/**
 * @pragma flow
 * @description Functional flow utilities for Astro components
 * @category contour.logos.opera
 */

import type { APIRoute } from 'astro';

// Define interfaces that match the expected @astropub/flow exports
interface AstroFlow {
  isPage?: (obj: any) => boolean;
  isStatic?: (obj: any) => boolean;
  use?: <T>(component: T) => T;
}

// Import astro-flow as optional dependency
let astroFlow: AstroFlow = {};

// Try to load the actual flow module
try {
  astroFlow = require('@astropub/flow');
} catch (error) {
  console.warn('Failed to load @astropub/flow. Using fallback implementations.');
}
export * from '@astropub/flow';

/**
 * Type-safe wrapper around Astro's flow library
 * Provides functional composition for Astro components
 */
// Export flow utilities with fallbacks
export const Flow = {
  // Safe accessors with fallbacks
  isPage: (obj: any): boolean => {
    return typeof astroFlow.isPage === 'function' ? astroFlow.isPage(obj) : !!obj;
  },
  isStatic: (obj: any): boolean => {
    return typeof astroFlow.isStatic === 'function' ? astroFlow.isStatic(obj) : !!obj;
  },
  use: <T>(component: T): T => {
    return typeof astroFlow.use === 'function' ? astroFlow.use(component) : component;
  },
  
  /**
   * Pipe data through a series of transformations
   * @param data Initial data
   * @param transformers Array of transformation functions
   * @returns Transformed data
   */
  pipe: <T, R>(data: T, ...transformers: Array<(input: any) => any>): R => {
    return transformers.reduce((result, transformer) => transformer(result), data as any) as R;
  },
  
  /**
   * Compose functions from right to left
   * @param fns Functions to compose
   * @returns Composed function
   */
  compose: <T>(...fns: Array<(input: any) => any>) => 
    (initialData: T) => fns.reduceRight((result, fn) => fn(result), initialData),
  
  /**
   * Apply a function to a value if it exists, otherwise return a default value
   * @param value Value to check
   * @param fn Function to apply
   * @param defaultValue Default value to return if value is nullish
   * @returns Result of fn(value) or defaultValue
   */
  maybe: <T, R>(value: T | null | undefined, fn: (val: T) => R, defaultValue: R): R => {
    return value != null ? fn(value) : defaultValue;
  },
  
  /**
   * Safe accessor for nested properties
   * @param obj Object to access
   * @param path Path to property
   * @param defaultValue Default value if property doesn't exist
   * @returns Property value or default value
   */
  get: <T, D = undefined>(obj: any, path: string, defaultValue?: D): T | D => {
    const keys = path.split('.');
    let result: any = obj;
    
    for (const key of keys) {
      if (result == null || typeof result !== 'object') {
        return defaultValue as D;
      }
      result = result[key];
    }
    
    return result !== undefined ? result as T : (defaultValue as D);
  }
};
