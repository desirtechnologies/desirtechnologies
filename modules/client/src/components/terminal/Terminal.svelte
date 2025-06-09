
<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  
  import TerminalHeader from './index/TerminalHeader.svelte';
  import TerminalContent from './index/TerminalContent.svelte';
  import ScreenEffects from './index/ScreenEffects.svelte';
  
  import { createMatrixState } from './stores/matrixState.js';
  
  import type { EasterEggDetail, MatrixTerminalState } from './types';
  
  interface Component {
    version?: string
  }
  export let version: Component['version'] = '1.0.0';
  const dispatch = createEventDispatcher<{
    toggle: { action: string };
    command: { text: string };
    easterEgg: EasterEggDetail;
  }>();
  
  // Event handler functions with proper TypeScript types
  function handleToggle(event: CustomEvent<{action?: string}>) {
    dispatch('toggle', { action: event.detail?.action || 'default' });
  }
  
  function handleCommand(event: CustomEvent<{text?: string}>) {
    dispatch('command', { text: event.detail?.text || '' });
  }
  
  // Props with defaults
  export let darkMode = true;
  export let rainActive = false;
  export let title = 'Knowledge Determine Destiny';
  
  // Using the $ syntax for reactivity (similar to Svelte 5 runes)
  const initialState: MatrixTerminalState = {
    darkMode,
    rainActive,
    title,
    easterEggsFound: 0,
    lastEasterEgg: null,
    systemMessages: [],
  };
  
  $: state = createMatrixState(initialState);
  
  // Element reference with proper typing
  let terminalElement: HTMLElement;
  
  // Easter egg handler using functional approach
  const handleEasterEgg = (event: MouseEvent): void => {
    // Only trigger on specific clicks (1 in 20 chance)
    if (Math.random() > 0.95) {
      const { clientX, clientY } = event;
      const { offsetWidth, offsetHeight } = terminalElement;
      
      // Calculate relative position
      const relativePosition = {
        x: clientX / offsetWidth,
        y: clientY / offsetHeight
      };
      
      // Use pattern matching style approach with early returns
      if (relativePosition.y < 0.3) {
        applyGlitchEffect(terminalElement);
        return;
      }
      
      if (relativePosition.x < 0.3) {
        applyColorShift(terminalElement);
        return;
      }
      
      if (relativePosition.x > 0.7) {
        // Emit custom event with payload
        const easterEggDetail: EasterEggDetail = { type: 'message', position: 'right-side' };
        window.dispatchEvent(new CustomEvent('easter-egg', { detail: easterEggDetail }));
        dispatch('easterEgg', easterEggDetail);
        
        // Update state
        state.update((s: MatrixTerminalState) => ({ 
          ...s, 
          easterEggsFound: s.easterEggsFound + 1,
          lastEasterEgg: 'message'
        }));
        return;
      }
    }
  };
  
  // Pure functions for effects with proper typing
  const applyGlitchEffect = (element: HTMLElement): void => {
    element.style.animation = 'none';
    void element.offsetHeight; // Trigger reflow (void operator to satisfy TypeScript)
    element.style.animation = 'matrixGlitch 0.3s forwards';
    
    // Cleanup with timeout
    setTimeout(() => {
      if (element) element.style.animation = 'none';
    }, 300);
    
    // Update state
    state.update((s: MatrixTerminalState) => ({ 
      ...s, 
      easterEggsFound: s.easterEggsFound + 1,
      lastEasterEgg: 'glitch'
    }));
    
    // Dispatch event to parent
    dispatch('easterEgg', { type: 'glitch' });
  };
  
  const applyColorShift = (element: HTMLElement): void => {
    element.style.color = 'var(--matrix-text-highlight)';
    
    // Cleanup with timeout
    setTimeout(() => {
      if (element) element.style.color = 'var(--matrix-text-primary)';
    }, 500);
    
    // Update state
    state.update((s: MatrixTerminalState) => ({ 
      ...s, 
      easterEggsFound: s.easterEggsFound + 1,
      lastEasterEgg: 'color-shift'
    }));
    
    // Dispatch event to parent
    dispatch('easterEgg', { type: 'color-shift' });
  };
  
  // Initialize component and handle cleanup
  onMount(() => {
    // Make functions available globally, but in a safer way
    const globalAPI = {
      activateEasterEgg: handleEasterEgg,
      getState: () => state.get(),
      toggleRain: () => state.update((s: MatrixTerminalState) => ({ ...s, rainActive: !s.rainActive })),
    };
    
    // Attach to window in a namespaced way to avoid polluting global scope
    window.JARVEIS = window.JARVEIS || {};
    window.JARVEIS.terminal = globalAPI;
    
    // Add initialization message to system messages
    state.update((s: MatrixTerminalState) => ({
      ...s,
      systemMessages: [...s.systemMessages, {
        text: 'Terminal initialized',
        type: 'system',
        timestamp: new Date()
      }]
    }));
    
    // Return cleanup function
    return () => {
      // Clean up global references when component unmounts
      if (window.JARVEIS && window.JARVEIS.terminal) {
        window.JARVEIS.terminal = undefined;
      }
    };
  });
</script>

<button 
  id="jarveis-terminal" 
  class="matrix-terminal"
  class:dark-mode={$state.darkMode}
  bind:this={terminalElement}
  on:click={handleEasterEgg}
  on:keydown={(e) => { 
    if (e.key === 'Enter') {
      // Create synthetic MouseEvent for keyboard accessibility
      const rect = terminalElement.getBoundingClientRect();
      const syntheticEvent = new MouseEvent('click', {
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2
      });
      handleEasterEgg(syntheticEvent);
    }
  }}
  type="button"
  aria-label="JARVEIS Terminal Interface"
>
  <!-- Terminal header with status indicators and controls -->
  <TerminalHeader 
    title={$state.title}
    on:toggle={handleToggle}
  />
  
  <!-- Main terminal content area -->
  <TerminalContent 
    rainActive={$state.rainActive}
    systemMessages={$state.systemMessages}
    on:command={handleCommand}
  />
  
  <!-- Visual effects overlays -->
  <ScreenEffects darkMode={Boolean($state.darkMode)} />
</button>

<style>
  .matrix-terminal {
    width: 100%; 
    height: auto; 
    min-height: 100vh; 
    max-height: 100vh;
    background-color: var(--matrix-bg-primary); 
    color: var(--matrix-text-primary);
    font-family: var(--font-family-primary);
    overflow: hidden; 
    box-sizing: border-box; 
    position: relative; 
    margin: 0; 
    display: flex;
    flex-direction: column;
    text-align: left;
    border-radius: 0;
    box-shadow: var(--matrix-shadow-large), var(--matrix-shadow-inset);
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: var(--transition-normal);
    touch-action: manipulation;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
  }
  
  .matrix-terminal.dark-mode {
    --matrix-bg-primary: #000000;
    --matrix-shadow-large: 0 10px 30px rgba(0, 255, 0, 0.3);
    --matrix-shadow-inset: 0 0 10px rgba(0, 255, 0, 0.4) inset;
  }
  
  /* Tablet and desktop adjustments */
  @media (min-width: 768px) {
    .matrix-terminal {
      border-radius: var(--radius-lg);
      min-height: 400px !important;
      max-height: 80vh !important;
    }
  }
  
  /* Landscape orientation for mobile */
  @media (max-width: 767px) and (orientation: landscape) {
    .matrix-terminal {
      min-height: 100% !important;
    }
  }
</style>
