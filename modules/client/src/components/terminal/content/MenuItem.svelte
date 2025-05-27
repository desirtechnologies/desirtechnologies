<script>
  // Props
  export let icon = '📊';
  export let title = 'Menu Item';
  export let description = 'Description';
  
  // Handlers for hover and touch effects
  function handleTouchStart(e) {
    e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,255,0,0.2)';
    e.currentTarget.style.borderColor = 'rgba(0,255,0,0.3)';
  }
  
  function handleTouchEnd(e) {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'rgba(0,255,0,0.1)';
  }
  
  function handleMouseOver(e) {
    e.currentTarget.style.transform = 'translateY(-5px) scale(1.03)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,255,0,0.2)';
    e.currentTarget.style.borderColor = 'rgba(0,255,0,0.3)';
  }
  
  function handleMouseOut(e) {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'rgba(0,255,0,0.1)';
  }
</script>

<div 
  class="menu-item"
  on:touchstart={handleTouchStart}
  on:touchend={handleTouchEnd}
  on:mouseover={handleMouseOver}
  on:mouseout={handleMouseOut}
>
  <div class="icon">{icon}</div>
  <div class="title">{title}</div>
  <div class="description">{description}</div>
</div>

<style>
  .menu-item {
    background-color: rgba(0, 30, 0, 0.2);
    padding: var(--spacing-sm) var(--spacing-xs);
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: var(--transition-bounce);
    text-align: center;
    border: 1px solid var(--matrix-border-secondary);
  }
  
  .icon {
    font-size: var(--font-size-xl);
    margin-bottom: 3px;
  }
  
  .title {
    font-weight: bold;
    margin-bottom: 2px;
    font-size: var(--font-size-sm);
  }
  
  .description {
    font-size: var(--font-size-xs);
    opacity: 0.8;
  }
</style>
