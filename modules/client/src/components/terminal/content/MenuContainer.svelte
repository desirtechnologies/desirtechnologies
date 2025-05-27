<script>
  import MenuItem from './MenuItem.svelte';
  
  // Menu items data
  const menuItems = [
    {
      icon: '📊',
      title: 'Dashboard',
      description: 'System overview'
    },
    {
      icon: '📁',
      title: 'Projects',
      description: 'View all projects'
    },
    {
      icon: '🔍',
      title: 'Search',
      description: 'Find anything'
    },
    {
      icon: '⚙️',
      title: 'Settings',
      description: 'Customize JARVEIS'
    }
  ];
</script>

<div class="menu-container">
  {#each menuItems as item}
    <MenuItem 
      icon={item.icon} 
      title={item.title} 
      description={item.description} 
    />
  {/each}
</div>

<style>
  .menu-container {
    opacity: 0;
    animation: matrixFadeIn 0.3s 4.8s forwards;
    margin: var(--spacing-sm) 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--spacing-xs);
    position: relative;
    z-index: var(--z-content);
  }
</style>
