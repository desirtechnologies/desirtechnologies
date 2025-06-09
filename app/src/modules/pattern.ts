/**
 * @pragma pattern
 * @description Pattern matching utilities for type-safe branching
 * @category contour.logos.opera
 */

// TypeScript pattern matching fallbacks until the actual library is loaded
const match = <T>(value: T) => ({
  with: <P, R>(pattern: P, handler: (matched: any) => R) => match<T>(value),
  otherwise: <R>(handler: (value: T) => R): R => handler(value)
});

const P = {
  string: {} as any,
  number: {} as any,
  boolean: {} as any,
  object: (obj: Record<string, any>) => obj,
  array: (arr: any[]) => arr,
  nullish: null as any,
  when: (predicate: (value: any) => boolean) => predicate
};

const when = (predicate: (value: any) => boolean) => predicate;
const isMatching = (pattern: any, value: any): boolean => true;

// Import actual library if available
try {
  const tsPattern = require('ts-pattern');
  Object.assign(match, tsPattern.match);
  Object.assign(P, tsPattern.P);
  Object.assign(when, tsPattern.when);
  Object.assign(isMatching, tsPattern.isMatching);
} catch (error) {
  console.warn('ts-pattern not available, using fallback implementations');
}

/**
 * Enhanced pattern matching utilities
 */
export const Pattern = {
  match,
  P,
  when,
  isMatching,
  
  /**
   * Type-safe pattern matching for route resolution
   * @param pattern The pattern to match against
   * @param handlers Object of handler functions for different pattern cases
   * @returns Result of the matched handler
   */
  route: <T extends string, R>(
    pattern: T,
    handlers: Record<string, (value: any) => R> & { _: (value: T) => R }
  ): R => {
    const exactMatch = handlers[pattern];
    if (typeof exactMatch === 'function') {
      return exactMatch(pattern);
    }
    
    // Check pattern matches like '/items/:id'
    for (const [key, handler] of Object.entries(handlers)) {
      if (key === '_') continue;
      
      if (key.includes(':')) {
        const keyParts = key.split('/').filter(Boolean);
        const patternParts = pattern.split('/').filter(Boolean);
        
        if (keyParts.length !== patternParts.length) continue;
        
        const params: Record<string, string> = {};
        let isMatch = true;
        
        for (let i = 0; i < keyParts.length; i++) {
          const keyPart = keyParts[i];
          const patternPart = patternParts[i];
          
          if (keyPart.startsWith(':')) {
            // Extract parameter
            params[keyPart.substring(1)] = patternPart;
          } else if (keyPart !== patternPart) {
            isMatch = false;
            break;
          }
        }
        
        if (isMatch) {
          return handler(params);
        }
      }
    }
    
    // Fallback to default handler
    return handlers._(pattern);
  },
  
  /**
   * Pattern matching for component types
   * @param component Component to match
   * @returns Matched component type
   */
  component: <T>(component: T): string => {
    if (typeof component === 'string') return 'string';
    if (component && typeof component === 'object' && 'name' in component && typeof (component as any).name === 'string') return 'object';
    if (component === null || component === undefined) return 'nullish';
    return 'unknown';
  },
  
  /**
   * Enhanced type pattern matching using ts-pattern
   */
  type: <T, R>(value: T, patterns: Array<[any, (val: any) => R]>, defaultCase: (val: T) => R): R => {
    for (const [pattern, handler] of patterns) {
      if (isMatching(pattern, value)) {
        return handler(value);
      }
    }
    return defaultCase(value);
  }
};
