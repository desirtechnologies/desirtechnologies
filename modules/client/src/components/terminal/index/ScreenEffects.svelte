<script>
  // No props or logic needed for this component
</script>

<!-- Scan line effect overlay -->
<div class="scanline-effect"></div>

<!-- CRT screen effect -->
<div class="crt-effect"></div>

<style>
  .scanline-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--scanlines);
    pointer-events: none;
    z-index: var(--z-overlay);
    border-radius: var(--radius-lg);
  }
  
  .crt-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--crt-effect);
    pointer-events: none;
    z-index: var(--z-overlay);
    opacity: 0.8;
    border-radius: var(--radius-lg);
  }
</style>
