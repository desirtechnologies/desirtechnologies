<script>
  import { Search, Plus, Settings, ExternalLink } from 'lucide-svelte';
</script>

<aside class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-64 p-4 flex flex-col h-screen">
  <div class="flex justify-between items-center mb-4">
    <button class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
      <Settings class="w-5 h-5" />
    </button>
    <button class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
      <Plus class="w-5 h-5" />
    </button>
  </div>

  <div class="relative mb-4">
    <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    <input type="text" placeholder="Search" class="w-full bg-gray-200 dark:bg-gray-800 border-none rounded-md pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500" />
  </div>

  <div class="flex-grow overflow-y-auto">
    <!-- Chat history will go here -->
  </div>

  <div class="mt-auto">
    <button class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
      Upgrade to Pro
    </button>
    <div class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
      <a href="#" class="hover:underline">Terms</a> & <a href="#" class="hover:underline">Privacy</a>
    </div>
  </div>
</aside>
