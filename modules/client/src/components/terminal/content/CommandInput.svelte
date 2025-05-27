<script>
  import { createEventDispatcher } from 'svelte';
  
  // Event dispatcher
  const dispatch = createEventDispatcher();
  
  // Input state
  let inputValue = '';
  
  // Handle input submission
  function handleSubmit() {
    if (inputValue.trim()) {
      dispatch('command', inputValue);
      inputValue = '';
    }
  }
  
  // Handle keyboard events
  function handleKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  }
  
  // Effect handlers
  function handleTouchStart(e) {
    e.currentTarget.style.boxShadow = '0 0 15px rgba(0,255,0,0.2)';
    e.currentTarget.style.borderColor = 'rgba(0,255,0,0.3)';
    document.getElementById('cursor-input').style.opacity = '1';
  }
  
  function handleTouchEnd(e) {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'rgba(0,255,0,0.15)';
    setTimeout(() => {
      const cursor = document.getElementById('cursor-input');
      if (cursor) cursor.style.opacity = '0.7';
    }, 500);
  }
  
  function handleMouseOver(e) {
    e.currentTarget.style.boxShadow = '0 0 15px rgba(0,255,0,0.2)';
    e.currentTarget.style.borderColor = 'rgba(0,255,0,0.3)';
    document.getElementById('cursor-input').style.opacity = '1';
  }
  
  function handleMouseOut(e) {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'rgba(0,255,0,0.15)';
    document.getElementById('cursor-input').style.opacity = '0.7';
  }
</script>

<div 
  class="command-input"
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
  on:mouseover={handleMouseOver}
  on:mouseout={handleMouseOut}
>
  <div class="prompt">&gt;</div>
  <input
    type="text"
    bind:value={inputValue}
    on:keydown={handleKeydown}
    placeholder="Ask JARVEIS anything..."
  />
  <div id="cursor-input" class="cursor"></div>
</div>

<style>
  .command-input {
    opacity: 0; 
    animation: matrixFadeIn 0.3s 5.4s forwards; 
    display: flex;
    align-items: center;
    padding: var(--spacing-xs) var(--spacing-sm);
    margin-top: var(--spacing-sm);
    border-radius: var(--radius-md);
    background-color: var(--matrix-bg-tertiary);
    border: 1px solid var(--matrix-border-primary);
    transition: var(--transition-bounce);
    cursor: text;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    position: relative;
  }
  
  .prompt {
    margin-right: 10px;
    color: var(--matrix-text-secondary);
    font-weight: bold;
  }
  
  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--matrix-text-primary);
    opacity: 0.7;
    font-family: var(--font-family-primary);
    font-size: var(--font-size-md);
  }
  
  input::placeholder {
    color: var(--matrix-text-primary);
    opacity: 0.5;
  }
  
  .cursor {
    width: 8px;
    height: 16px;
    background-color: var(--matrix-text-primary);
    opacity: 0.7;
    animation: matrixBlink 1s infinite;
    transition: opacity var(--transition-normal);
  }
</style>
