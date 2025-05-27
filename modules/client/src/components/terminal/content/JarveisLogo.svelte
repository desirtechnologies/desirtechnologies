<script>
  import { onMount } from 'svelte';
  
  // Props
  export let onClick = () => {};
  
  // State
  let buildDate = '2025-04-20';
  
  onMount(() => {
    // Set build date to current date
    const now = new Date();
    buildDate = now.toISOString().split('T')[0];
  });
  
  function handleTouchStart(e) {
    e.currentTarget.style.transform = 'translateZ(25px) rotateX(8deg)';
    e.currentTarget.style.textShadow = '0 0 15px var(--matrix-text-primary), 0 0 25px var(--matrix-text-primary)';
    e.currentTarget.style.letterSpacing = '1px';
    e.currentTarget.style.backgroundColor = 'rgba(0, 40, 0, 0.3)';
  }
  
  function handleTouchEnd(e) {
    e.currentTarget.style.transform = 'translateZ(0) rotateX(0)';
    e.currentTarget.style.textShadow = '0 0 5px var(--matrix-text-primary)';
    e.currentTarget.style.letterSpacing = 'normal';
    e.currentTarget.style.backgroundColor = 'rgba(0, 20, 0, 0.2)';
  }
  
  function handleMouseOver(e) {
    e.currentTarget.style.transform = 'translateZ(25px) rotateX(8deg)';
    e.currentTarget.style.textShadow = '0 0 15px var(--matrix-text-primary), 0 0 25px var(--matrix-text-primary)';
    e.currentTarget.style.letterSpacing = '1px';
  }
  
  function handleMouseOut(e) {
    e.currentTarget.style.transform = 'translateZ(0) rotateX(0)';
    e.currentTarget.style.textShadow = '0 0 5px var(--matrix-text-primary)';
    e.currentTarget.style.letterSpacing = 'normal';
  }
</script>

<div 
  class="jarveis-logo" 
  id="jarveis-logo"
  on:click={onClick}
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
  on:mouseover={handleMouseOver}
  on:mouseout={handleMouseOut}
  data-tooltip="Click for Matrix mode"
>
<!--ASCII art logo-->
<pre> 
     ██  █████  ██████  ██    ██ ███████ ██ ███████ 
     ██ ██   ██ ██   ██ ██    ██ ██      ██ ██      
     ██ ███████ ██████  ██    ██ █████   ██ ███████ 
██   ██ ██   ██ ██   ██  ██  ██  ██      ██      ██ 
 █████  ██   ██ ██   ██   ████   ███████ ██ ███████ 
                                                    
</pre>
<span class="subtitle">Just A Rather Very Excellent Intelligence System</span>
<span class="version">v4.2.0 • Quantum Core • <span id="build-date">{buildDate}</span></span>
</div>

<style>
  .jarveis-logo {
    opacity: 0; 
    animation: matrixFadeIn 0.5s 3s forwards, matrixPulse 4s infinite 4s; 
    margin: var(--spacing-sm) 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    white-space: pre; 
    font-size: var(--font-size-xs); 
    line-height: 1; 
    font-weight: bold; 
    text-shadow: 0 0 5px var(--matrix-text-primary);
    transform-style: preserve-3d;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    text-align: center;
    overflow: hidden;
    padding: var(--spacing-sm) var(--spacing-xs);
    background-color: rgba(0, 20, 0, 0.2);
    border-radius: var(--radius-md);
    -webkit-tap-highlight-color: rgba(0, 255, 0, 0.2);
    position: relative;
    z-index: var(--z-content);
  }
  
  pre {
    margin: 0;
    line-height: 1;
  }
  
  .subtitle {
    font-size: 9px; 
    color: var(--matrix-text-secondary); 
    letter-spacing: 1px;
  }
  
  .version {
    font-size: 8px; 
    color: var(--matrix-text-tertiary); 
    margin-top: 3px; 
    display: block;
  }
  
  @media (min-width: 768px) {
    .jarveis-logo {
      font-size: 14px !important;
    }
  }
  
  @media (max-width: 767px) and (orientation: landscape) {
    .jarveis-logo {
      font-size: 10px !important;
      margin: 10px 0 !important;
      padding: 10px 5px !important;
    }
  }
</style>
