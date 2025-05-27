<script>
  // Props
  export let text = '';
  export let type = 'system'; // system, error, success, warning
</script>

<div class="message {type}">
  <span class="indicator">{type === 'error' ? '!' : type === 'success' ? '✓' : type === 'warning' ? '⚠' : '!'}</span>
  {@html text}
</div>

<style>
  .message {
    opacity: 0; 
    animation: matrixFadeIn 0.3s forwards; 
    display: block; 
    transform-origin: left; 
    transition: var(--transition-bounce);
    padding: var(--spacing-xs) var(--spacing-sm);
    margin-bottom: var(--spacing-xs);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
    position: relative;
    z-index: var(--z-content);
  }
  
  .system {
    background-color: rgba(0, 40, 0, 0.2);
    animation: matrixFadeIn 0.3s forwards, matrixHighlight 2s infinite 0.3s;
  }
  
  .error {
    background-color: rgba(40, 0, 0, 0.2);
    border-left: 2px solid rgba(255, 0, 0, 0.5);
  }
  
  .success {
    background-color: rgba(0, 40, 0, 0.2);
    border-left: 2px solid rgba(0, 255, 0, 0.5);
  }
  
  .warning {
    background-color: rgba(40, 40, 0, 0.2);
    border-left: 2px solid rgba(255, 255, 0, 0.5);
  }
  
  .indicator {
    color: var(--matrix-text-primary);
    margin-right: var(--spacing-xs);
    font-weight: bold;
  }
  
  .error .indicator {
    color: rgba(255, 100, 100, 1);
  }
  
  .success .indicator {
    color: rgba(100, 255, 100, 1);
  }
  
  .warning .indicator {
    color: rgba(255, 255, 100, 1);
  }
</style>
