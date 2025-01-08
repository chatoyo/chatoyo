<script setup>
  import SentStatusIcon from '@/assets/svgs/SentStatusIcon.vue';
</script>
<template>
    <span class="self-status">
        已读
        <SentStatusIcon />
    </span>
</template>

<style scoped lang="scss">
  .self-status {
    @apply mt-1.5 flex-row-reverse flex items-center gap-x-1 text-xs dark:text-gray-200  text-gray-700;
  }
</style>