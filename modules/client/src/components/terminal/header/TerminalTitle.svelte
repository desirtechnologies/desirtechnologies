<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  
  // Event dispatcher for parent component communication
  const dispatch = createEventDispatcher<{
    toggle: { action: string };
  }>();
  
  // Props
  export let title = 'J.A.R.V.E.I.S';
  
  function toggleJarveisMode(): void {
    // Dispatch event to parent component
    dispatch('toggle', { action: 'mode' });
    
    // Also dispatch a DOM event for any global listeners
    window.dispatchEvent(new CustomEvent('toggle-jarveis-mode'));
  }
  
  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleJarveisMode();
    }
  }
  
  // Make the function available globally
  onMount(() => {
    // Window interface is extended in types.d.ts
    if (typeof window !== 'undefined') {
      window.toggleJarveisMode = toggleJarveisMode;
    }
    
    return () => {
      // Clean up
      if (typeof window !== 'undefined' && window.toggleJarveisMode) {
        window.toggleJarveisMode = undefined;
      }
    };
  });
</script>

<button 
  class="terminal-title" 
  on:click={toggleJarveisMode}
  on:keydown={handleKeydown}
  aria-label="Toggle JARVEIS mode"
  type="button"
  data-tooltip="Click to toggle JARVEIS mode"
>
  {title}
</button>

<style>
  .terminal-title {
    font-size: var(--font-size-md);
    font-weight: bold;
    color: var(--matrix-text-primary);
    text-shadow: var(--matrix-shadow-small);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    letter-spacing: 1px;
    cursor: pointer;
    transition: var(--transition-normal);
  }
  
  .terminal-title:hover {
    text-shadow: var(--matrix-shadow-medium);
    color: var(--matrix-text-highlight);
  }
</style>
