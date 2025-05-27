<script>
  import { onMount, afterUpdate } from 'svelte';
  
  // Props
  export let visible = false;
  export let charCount = 100;
  
  // State
  let matrixRainElement;
  let chars = [];
  
  function generateRainChars() {
    chars = [];
    for (let i = 0; i < charCount; i++) {
      const speed = Math.random() * 3 + 1;
      const size = Math.random() * 16 + 10;
      const delay = Math.random() * 5;
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.5;
      
      chars.push({
        char: String.fromCharCode(Math.random() * 93 + 33),
        style: {
          left: `${left}%`,
          fontSize: `${size}px`,
          animationDuration: `${speed}s`,
          animationDelay: `${delay}s`,
          opacity
        }
      });
    }
  }
  
  afterUpdate(() => {
    if (visible && chars.length === 0) {
      generateRainChars();
    }
  });
</script>

<div 
  class="matrix-rain" 
  bind:this={matrixRainElement}
  class:visible
>
  {#if visible}
    {#each chars as { char, style }}
      <div 
        class="matrix-char" 
        style="left: {style.left}; 
               font-size: {style.fontSize}; 
               animation-duration: {style.animationDuration}; 
               animation-delay: {style.animationDelay}; 
               opacity: {style.opacity};"
      >{char}</div>
    {/each}
  {/if}
</div>

<style>
  .matrix-rain {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: var(--z-base);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-slow);
  }
  
  .matrix-rain.visible {
    opacity: 0.7;
  }
  
  .matrix-char {
    position: absolute;
    top: -10%;
    color: var(--matrix-text-primary);
    text-shadow: var(--matrix-shadow-small);
    animation: matrixRain linear infinite;
  }
</style>
