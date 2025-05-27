<script>
  // Props
  export let time = '21:56';
  export let signalStrength = 4; // 1-4
  export let batteryLevel = 87; // 0-100
</script>

<div class="status-indicators">
  <!-- Signal strength with tooltip -->
  <div class="signal-strength" data-tooltip="Signal Strength: Excellent">
    {#each Array(4) as _, i}
      <div class="signal-bar" class:active={i < signalStrength}></div>
    {/each}
  </div>
  
  <!-- Connection type -->
  <div class="connection-type" data-tooltip="Quantum-Secured Connection">QSC</div>
  
  <!-- Battery indicator with tooltip -->
  <div class="battery" data-tooltip="Power: {batteryLevel}%">
    <div class="battery-terminal"></div>
    <div class="battery-level" style="width: {batteryLevel}%"></div>
  </div>
  
  <!-- Live time with tooltip -->
  <div class="time" id="matrix-time" data-tooltip="System Time">{time}</div>
</div>

<style>
  .status-indicators {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .signal-strength {
    display: flex;
    align-items: flex-end;
    height: 12px;
    gap: 1px;
    position: relative;
    cursor: help;
  }
  
  .signal-bar {
    width: 2px;
    background-color: rgba(0, 255, 0, 0.3);
    border-radius: 1px;
  }
  
  .signal-bar:nth-child(1) {
    height: 3px;
  }
  
  .signal-bar:nth-child(2) {
    height: 6px;
  }
  
  .signal-bar:nth-child(3) {
    height: 9px;
  }
  
  .signal-bar:nth-child(4) {
    height: 12px;
  }
  
  .signal-bar.active {
    background-color: var(--matrix-text-primary);
  }
  
  .connection-type {
    font-size: var(--font-size-xs);
    color: var(--matrix-text-primary);
    letter-spacing: 1px;
    cursor: help;
  }
  
  .battery {
    width: 18px;
    height: 9px;
    border: 1px solid var(--matrix-text-primary);
    border-radius: 1px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: help;
  }
  
  .battery-terminal {
    width: 2px;
    height: 5px;
    background-color: var(--matrix-text-primary);
    position: absolute;
    right: -3px;
    border-radius: 0 1px 1px 0;
  }
  
  .battery-level {
    height: 5px;
    margin-left: 1px;
    background-color: var(--matrix-text-primary);
    animation: batteryPulse 15s infinite;
  }
  
  .time {
    font-size: var(--font-size-sm);
    color: var(--matrix-text-primary);
    font-weight: 500;
    cursor: help;
  }
</style>
