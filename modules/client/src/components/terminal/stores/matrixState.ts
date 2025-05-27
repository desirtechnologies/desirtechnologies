/**
 * matrixState.ts
 * Functional state management for the Matrix Terminal component
 * 
 * This implements a lightweight state management solution using a functional approach
 * inspired by Redux and adapted for Svelte's reactivity system.
 */

import { writable, derived, type Writable, type Readable } from 'svelte/store';
import type { MatrixTerminalState, MatrixStateStore, SystemMessage } from '../types';

/**
 * Creates a matrix terminal state store with the given initial state
 * @param initialState - The initial state for the matrix terminal
 * @returns A store object with get, subscribe, update, and reset methods
 */
export function createMatrixState(initialState: MatrixTerminalState): MatrixStateStore {
  // Create the internal writable store
  const store: Writable<MatrixTerminalState> = writable(initialState);
  
  // Create a derived store for reactive state access
  const state: Readable<MatrixTerminalState> = derived(store, $store => $store);
  
  // Return a store interface with methods for state manipulation
  return {
    // Subscribe method to enable Svelte's reactive $store syntax
    subscribe: state.subscribe,
    
    // Get the current state (non-reactive)
    get: () => {
      let currentState: MatrixTerminalState = initialState;
      const unsubscribe = store.subscribe(s => { currentState = s; });
      unsubscribe();
      return currentState;
    },
    
    // Update the state using a reducer function
    update: (reducer: (state: MatrixTerminalState) => MatrixTerminalState) => {
      store.update(reducer);
    },
    
    // Set the state directly
    set: (newState: MatrixTerminalState) => {
      store.set(newState);
    },
    
    // Reset the state to initial values
    reset: () => {
      store.set(initialState);
    },
    
    // Add a message to the systemMessages array
    addSystemMessage: (message: string) => {
      store.update(state => {
        const newMessage: SystemMessage = {
          text: message,
          type: 'system',
          timestamp: new Date()
        };
        
        return {
          ...state,
          systemMessages: [
            ...state.systemMessages,
            newMessage
          ]
        };
      });
    },
    
    // Toggle a boolean state property
    toggle: (key: keyof MatrixTerminalState) => {
      store.update(state => {
        // Only toggle if the property is a boolean
        if (typeof state[key] === 'boolean') {
          return {
            ...state,
            [key]: !state[key]
          };
        }
        return state;
      });
    }
  };
}

/**
 * Utility function to create a readonly derived store
 * @param store - The original store
 * @param selector - Optional selector function
 * @returns A readonly derived store
 */
export function select<T, R>(store: Readable<T>, selector: (state: T) => R = (state: T) => state as unknown as R): Readable<R> {
  return derived(store, state => selector(state));
}
