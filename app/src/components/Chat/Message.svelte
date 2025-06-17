<script>
  export let message;
</script>

<div class="flex items-start gap-4 mb-6">
  <div class="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 font-bold">
    {message.user === 'AI' ? 'A' : 'Y'}
  </div>
  <div class="flex-1">
    <p class="font-semibold">{message.user}</p>
    <div class="prose dark:prose-invert max-w-none">
      {message.text}
    </div>
  </div>
</div>
