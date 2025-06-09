/**
 * @pragma functional
 * @description Functional programming utilities using pattycake
 * @category contour.logos.opera
 */

// Provide fallback functional utilities in case pattycake is not available
const pipe = <T, R>(initial: T, ...fns: Array<(input: any) => any>): R => 
  fns.reduce((acc, fn) => fn(acc), initial) as unknown as R;

const chain = <T, R>(fn: (value: T) => R) => (input: T): R => fn(input);
const map = <T, R>(fn: (value: T) => R) => (input: T[]): R[] => input.map(fn);
const tap = <T>(fn: (value: T) => void) => (input: T): T => { fn(input); return input; };
const identity = <T>(value: T): T => value;

// Try to import actual pattycake if available
try {
  const pattycake = require('pattycake');
  Object.assign({ pipe, chain, map, tap, identity }, pattycake);
} catch (error) {
  console.warn('pattycake not available, using fallback implementations');
}

// Define common monadic operations for improved readability
export const { option, result, maybe } = {
  option: {
    // Option monad operations (Some | None pattern)
    some: <T>(value: T) => ({ tag: 'some', value } as const),
    none: { tag: 'none' } as const,
    isSome: <T>(option: { tag: 'some', value: T } | { tag: 'none' }): option is { tag: 'some', value: T } => 
      option.tag === 'some',
    isNone: <T>(option: { tag: 'some', value: T } | { tag: 'none' }): option is { tag: 'none' } => 
      option.tag === 'none',
    map: <T, R>(fn: (value: T) => R) => 
      (option: { tag: 'some', value: T } | { tag: 'none' }) => 
        option.tag === 'some' ? { tag: 'some', value: fn(option.value) } : option,
    chain: <T, R>(fn: (value: T) => { tag: 'some', value: R } | { tag: 'none' }) => 
      (option: { tag: 'some', value: T } | { tag: 'none' }) => 
        option.tag === 'some' ? fn(option.value) : option,
    getOrElse: <T>(defaultValue: T) => 
      (option: { tag: 'some', value: T } | { tag: 'none' }) => 
        option.tag === 'some' ? option.value : defaultValue,
    fromNullable: <T>(value: T | null | undefined) => 
      value != null ? { tag: 'some', value } : { tag: 'none' }
  },
  
  result: {
    // Result monad operations (Ok | Err pattern)
    ok: <T, E = never>(value: T) => ({ tag: 'ok', value } as const),
    err: <E, T = never>(error: E) => ({ tag: 'err', error } as const),
    isOk: <T, E>(result: { tag: 'ok', value: T } | { tag: 'err', error: E }): result is { tag: 'ok', value: T } => 
      result.tag === 'ok',
    isErr: <T, E>(result: { tag: 'ok', value: T } | { tag: 'err', error: E }): result is { tag: 'err', error: E } => 
      result.tag === 'err',
    map: <T, R, E>(fn: (value: T) => R) => 
      (result: { tag: 'ok', value: T } | { tag: 'err', error: E }) => 
        result.tag === 'ok' ? { tag: 'ok', value: fn(result.value) } : result,
    chain: <T, R, E>(fn: (value: T) => { tag: 'ok', value: R } | { tag: 'err', error: E }) => 
      (result: { tag: 'ok', value: T } | { tag: 'err', error: E }) => 
        result.tag === 'ok' ? fn(result.value) : result,
    getOrElse: <T, E>(defaultValue: T) => 
      (result: { tag: 'ok', value: T } | { tag: 'err', error: E }) => 
        result.tag === 'ok' ? result.value : defaultValue,
    fromTry: <T>(fn: () => T): { tag: 'ok', value: T } | { tag: 'err', error: unknown } => {
      try {
        return { tag: 'ok', value: fn() };
      } catch (error) {
        return { tag: 'err', error };
      }
    }
  },
  
  maybe: {
    // Simplified Maybe pattern using nullables
    of: <T>(value: T) => value,
    map: <T, R>(fn: (value: T) => R) => 
      (value: T | null | undefined): R | null | undefined => 
        value != null ? fn(value) : (value as null | undefined),
    chain: <T, R>(fn: (value: T) => R | null | undefined) => 
      (value: T | null | undefined): R | null | undefined => 
        value != null ? fn(value) : (value as null | undefined),
    getOrElse: <T>(defaultValue: T) => 
      (value: T | null | undefined): T => 
        value != null ? value : defaultValue
  }
};

/**
 * Extended functional programming utilities
 */
export const Functional = {
  pipe,
  chain,
  map,
  tap,
  identity,
  option,
  result,
  maybe,
  
  /**
   * Compose functions from right to left
   * @param fns Functions to compose
   * @returns Composed function
   */
  compose: <T, R>(...fns: Array<(input: any) => any>) => 
    (x: T): R => fns.reduceRight((acc, fn) => fn(acc), x as any) as R,
  
  /**
   * Apply a function asynchronously with error handling
   * @param fn Function to apply
   * @returns Result monad with success or error
   */
  tryAsync: async <T, R>(fn: (value: T) => Promise<R>) => async (value: T) => {
    try {
      return { tag: 'ok', value: await fn(value) } as const;
    } catch (error) {
      return { tag: 'err', error } as const;
    }
  },
  
  /**
   * Convert a nullable value to an Option
   * @param value Value to convert
   * @returns Option monad
   */
  optional: <T>(value: T | null | undefined) => 
    value != null ? option.some(value) : option.none,
  
  /**
   * Curry a function with multiple arguments
   * @param fn Function to curry
   * @returns Curried function
   */
  curry: <A, B, R>(fn: (a: A, b: B) => R) =>
    (a: A) => (b: B) => fn(a, b)
};
