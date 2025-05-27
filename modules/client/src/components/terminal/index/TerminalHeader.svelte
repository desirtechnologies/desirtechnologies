<script>
  import { onMount } from 'svelte';
  import StatusIndicators from '$components/terminal/header/StatusIndicators.svelte';
  import TerminalTitle from '$components/terminal/header/TerminalTitle.svelte';
  import WindowControls from '$components/terminal/header/WindowControls.svelte';
  
  // State
  let currentTime = '21:56';
  
  // Update the time in the status bar
  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    currentTime = `${hours}:${minutes}`;
  }
  
  onMount(() => {
    // Initial time update
    updateTime();
    
    // Update time every minute
    const timer = setInterval(updateTime, 60000);
    
    return () => {
      clearInterval(timer);
    };
  });
</script>

<header class="terminal-header">
  <StatusIndicators time={currentTime} />
  <TerminalTitle />
  <WindowControls />
</header>

<style>
  .terminal-header {
    background: var(--gradient-header);
    padding: var(--spacing-sm) var(--spacing-md);
    border-bottom: 1px solid var(--matrix-text-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: var(--z-overlay);
    flex-shrink: 0;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
  
  @media (min-width: 768px) {
    .terminal-header {
      border-top-left-radius: var(--radius-lg);
      border-top-right-radius: var(--radius-lg);
    }
  }
</style>
