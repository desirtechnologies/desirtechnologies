<script>
  import Sidebar from './Sidebar.svelte';
  import UserInput from './UserInput.svelte';
  import Message from './Message.svelte';

  let messages = [
    { id: 1, user: 'AI', text: 'How can I help you?' },
  ];

  function handleNewMessage(event) {
    const newMessage = {
      id: messages.length + 1,
      user: 'You',
      text: event.detail.text,
    };
    messages = [...messages, newMessage];
  }
</script>

<div class="flex h-screen bg-white dark:bg-black">
  <Sidebar />
  <main class="flex-1 flex flex-col">
    <div class="flex-1 overflow-y-auto p-6">
      <div class="max-w-4xl mx-auto">
        {#each messages as message (message.id)}
          <Message {message} />
        {/each}
      </div>
    </div>
    <div class="p-6 bg-white dark:bg-black">
        <div class="max-w-4xl mx-auto">
            <UserInput on:newMessage={handleNewMessage} />
        </div>
    </div>
  </main>
</div>
