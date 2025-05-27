<script>
  // Custom event handlers for each control button
  function handleMinimize() {
    dispatchEvent(new CustomEvent('terminal-minimize'));
  }
  
  function handleMaximize() {
    dispatchEvent(new CustomEvent('terminal-maximize'));
  }
  
  function handleClose() {
    dispatchEvent(new CustomEvent('terminal-close'));
  }
</script>

<div class="window-controls">
  <!-- Minimize button with tooltip -->
  <div 
    class="control minimize" 
    data-tooltip="Minimize"
    on:click={handleMinimize}
    on:touchstart={(e) => e.currentTarget.classList.add('active')}
    on:touchend={(e) => e.currentTarget.classList.remove('active')}
    on:mouseover={(e) => e.currentTarget.classList.add('hover')}
    on:mouseout={(e) => e.currentTarget.classList.remove('hover')}
  ></div>
  
  <!-- Maximize button with tooltip -->
  <div 
    class="control maximize" 
    data-tooltip="Maximize"
    on:click={handleMaximize}
    on:touchstart={(e) => e.currentTarget.classList.add('active')}
    on:touchend={(e) => e.currentTarget.classList.remove('active')}
    on:mouseover={(e) => e.currentTarget.classList.add('hover')}
    on:mouseout={(e) => e.currentTarget.classList.remove('hover')}
  ></div>
  
  <!-- Close button with tooltip -->
  <div 
    class="control close" 
    data-tooltip="Close"
    on:click={handleClose}
    on:touchstart={(e) => e.currentTarget.classList.add('active')}
    on:touchend={(e) => e.currentTarget.classList.remove('active')}
    on:mouseover={(e) => e.currentTarget.classList.add('hover')}
    on:mouseout={(e) => e.currentTarget.classList.remove('hover')}
  ></div>
</div>

<style>
  .window-controls {
    display: flex; 
    gap: var(--spacing-sm);
  }
  
  .control {
    width: 12px;
    height: 12px;
    border-radius: var(--radius-round);
    cursor: pointer;
    transition: var(--transition-bounce);
    position: relative;
  }
  
  .minimize {
    background-color: var(--control-minimize);
    box-shadow: 0 0 5px var(--control-shadow-minimize);
  }
  
  .maximize {
    background-color: var(--control-maximize);
    box-shadow: 0 0 5px var(--control-shadow-maximize);
  }
  
  .close {
    background-color: var(--control-close);
    box-shadow: 0 0 5px var(--control-shadow-close);
  }
  
  .control.hover, .control.active {
    transform: scale(1.3);
  }
  
  .minimize.hover, .minimize.active {
    box-shadow: 0 0 10px var(--control-shadow-minimize);
  }
  
  .maximize.hover, .maximize.active {
    box-shadow: 0 0 10px var(--control-shadow-maximize);
  }
  
  .close.hover, .close.active {
    box-shadow: 0 0 10px var(--control-shadow-close);
  }
</style>
