<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import MatrixRain from '$components/terminal/content/MatrixRain.svelte';
  import JarveisLogo from '$components/terminal/content/JarveisLogo.svelte';
  import MenuContainer from '$components/terminal/content/MenuContainer.svelte';
  import CommandInput from '$components/terminal/content/CommandInput.svelte';
  import SystemMessage from '$components/terminal/content/SystemMessage.svelte';
  import type { SystemMessage as SystemMessageType } from '$components/terminal/types';
  
  // Event dispatcher for parent component communication
  const dispatch = createEventDispatcher<{
    command: { text: string };
  }>();
  
  // Props with defaults
  export let rainActive = false;
  export let systemMessages: SystemMessageType[] = [];
  
  // Local state
  let terminalContent: HTMLElement;
  let messages: Array<{ text: string; type: string }> = [];
  let showMatrixRain = false;
  
  // Reactive statement to update local messages when systemMessages changes
  $: {
    if (systemMessages) {
      messages = systemMessages.map(m => ({
        text: m.text,
        type: m.type
      }));
    }
  }
  
  // Reactive statement to sync showMatrixRain with parent rainActive prop
  $: showMatrixRain = rainActive;
  
  function activateMatrixRain(): void {
    showMatrixRain = !showMatrixRain;
    
    if (showMatrixRain) {
      addSystemMessage('Matrix mode activated 🔮');
      
      // Auto-disable after 20 seconds
      setTimeout(() => {
        if (showMatrixRain) {
          showMatrixRain = false;
          // Notify parent component
          dispatch('command', { text: 'toggle-rain' });
        }
      }, 20000);
    }
  }
  
  function addSystemMessage(text: string): void {
    messages = [...messages, { text, type: 'system' }];
  }
  
  // Event listener for easter eggs
  function handleEasterEgg(event: CustomEvent<any>): void {
    if (event.detail === 'right-side') {
      addSystemMessage('You found an easter egg! 🥚');
      
      // Remove after 5 seconds
      setTimeout(() => {
        const index = messages.findIndex(m => m.text === 'You found an easter egg! 🥚');
        if (index !== -1) {
          messages = [...messages.slice(0, index), ...messages.slice(index + 1)];
        }
      }, 5000);
    }
  }
  
  // Window property is now declared in types.d.ts
  
  onMount(() => {
    // Make functions available globally
    window.activateMatrixRain = activateMatrixRain;
    
    // Add event listeners
    window.addEventListener('easter-egg', handleEasterEgg as EventListener);
    
    return () => {
      // Clean up
      window.removeEventListener('easter-egg', handleEasterEgg as EventListener);
      window.activateMatrixRain = undefined;
    };
  });
</script>

<main class="terminal-content" bind:this={terminalContent} id="terminal-content">
  <!-- Matrix code rain animation (hidden by default, activated on easter egg) -->
  <MatrixRain visible={showMatrixRain} />

  <!-- JARVEIS AI Assistant Logo with 3D hover effect and easter egg -->
  <JarveisLogo onClick={activateMatrixRain} />
  
  <!-- Quick navigation menu with emojis -->
  <MenuContainer />
  
  <!-- System messages -->
  {#each messages as message (message.text)}
    <SystemMessage text={message.text} type={message.type} />
  {/each}
  
  <!-- Interactive command input with cool effects -->
  <CommandInput />
</main>

<style>
  .terminal-content {
    padding: var(--spacing-xs) var(--spacing-sm);
    flex: 1;
    overflow-y: auto;
    position: relative;
    background: var(--gradient-content);
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--matrix-text-primary) var(--matrix-bg-primary);
  }
</style>
