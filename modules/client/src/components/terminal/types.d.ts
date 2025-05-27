/**
 * Type declarations for the JARVEIS Terminal Components
 */

// Global module declaration for Svelte components
declare module '*.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType<any>;
  export default component;
}

// Type declarations for specific component paths
declare module './content/MatrixRain.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType<{ visible?: boolean }>;
  export default component;
}

declare module './content/JarveisLogo.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType<{ onClick?: () => void }>;
  export default component;
}

declare module './content/MenuContainer.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType<{}>;
  export default component;
}

declare module './content/CommandInput.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType<{}>;
  export default component;
}

declare module './content/SystemMessage.svelte' {
  import type { ComponentType } from 'svelte';
  const component: ComponentType<{ text: string; type: string }>;
  export default component;
}

declare module './TerminalHeader.svelte' {
  import type { SvelteComponent, ComponentType } from 'svelte';
  
  // Define custom event types
  interface ToggleEvent {
    action: string;
  }
  
  // Define component type with proper events
  type TerminalHeaderComponent = SvelteComponent & {
    $$prop_def: { title?: string };
    $$events_def: {
      toggle: ToggleEvent;
    };
  };
  
  const component: ComponentType<TerminalHeaderComponent>;
  export default component;
}


type MatrixTerminalState = {
  darkMode: boolean;
  rainActive: boolean;
  title: string;
  easterEggsFound: number;
  lastEasterEgg: string | null;
  systemMessages: Array<{
    text: string;
    type: string;
    timestamp: Date;
  }>;
};

type EasterEggDetail = {
  type: string;
  position?: string;
};


declare module './TerminalContent.svelte' {
  import type { SvelteComponent, ComponentType } from 'svelte';
  import type { SystemMessage } from './types';
  
  // Define custom event types
  interface CommandEvent {
    text: string;
  }
  
  // Define component type with proper events and props
  type TerminalContentComponent = SvelteComponent & {
    $$prop_def: { 
      rainActive?: boolean; 
      systemMessages?: SystemMessage[]; 
    };
    $$events_def: {
      command: CommandEvent;
    };
  };
  
  const component: ComponentType<TerminalContentComponent>;
  export default component;
}

declare module './ScreenEffects.svelte' {
  import type { SvelteComponent, ComponentType } from 'svelte';
  
  // Define component type with proper props
  type ScreenEffectsComponent = SvelteComponent & {
    $$prop_def: { darkMode?: boolean };
  };
  
  const component: ComponentType<ScreenEffectsComponent>;
  export default component;
}

// Type definitions for MatrixState
export interface SystemMessage {
  text: string;
  type: string;
  timestamp: Date;
}

export interface MatrixTerminalState {
  darkMode: boolean;
  rainActive: boolean;
  title: string;
  easterEggsFound: number;
  lastEasterEgg: string | null;
  systemMessages: SystemMessage[];
}

export interface MatrixStateStore {
  subscribe: (callback: (value: MatrixTerminalState) => void) => () => void;
  get: () => MatrixTerminalState;
  update: (reducer: (state: MatrixTerminalState) => MatrixTerminalState) => void;
  set: (newState: MatrixTerminalState) => void;
  reset: () => void;
  addSystemMessage: (message: string) => void;
  toggle: (key: keyof MatrixTerminalState) => void;
}

// Custom events for JARVEIS terminal
export interface EasterEggDetail {
  type: string;
  position?: string;
}

export type CustomEvents = {
  'easter-egg': CustomEvent<EasterEggDetail>;
};

// Type augmentation for global Window object
declare global {
  interface Window {
    JARVEIS?: {
      terminal?: {
        activateEasterEgg: (event: MouseEvent) => void;
        getState: () => MatrixTerminalState;
        toggleRain: () => void;
      };
    };
    activateMatrixRain?: () => void;
    toggleJarveisMode?: () => void;
  }
}
