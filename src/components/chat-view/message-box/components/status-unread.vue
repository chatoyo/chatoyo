<script setup>
</script>
<template>
    <span class="self-status">
      待阅读
      <div class="flex items-center space-x-1">
        <span class="block h-1 w-1 rounded-full bg-slate-700 dark:bg-white animate-pulse"></span>
        <span class="block h-1 w-1 rounded-full bg-slate-700 dark:bg-white animate-pulse [animation-delay:400ms]"></span>
        <span class="block h-1 w-1 rounded-full bg-slate-700 dark:bg-white animate-pulse [animation-delay:800ms]"></span>
      </div>
    </span>
</template>

<style scoped lang="scss">
  .self-status {
    @apply mt-1.5 ms-auto flex-row-reverse flex items-center gap-x-1 text-xs dark:text-gray-200  text-gray-700;
  }
</style>