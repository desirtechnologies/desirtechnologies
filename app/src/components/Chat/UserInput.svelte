<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let text = '';

  function handleSubmit() {
    if (text.trim()) {
      dispatch('newMessage', { text });
      text = '';
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="relative">
  <textarea
    bind:value={text}
    on:keydown={handleKeydown}
    placeholder="Press Enter to send, Shift + Enter for new line"
    class="w-full bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 rounded-lg resize-none p-4 pr-12 text-base focus:outline-none transition-colors"
    rows="1"
  ></textarea>
  <button type="submit" class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400" disabled={!text.trim()}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  </button>
</form>
