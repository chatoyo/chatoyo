<script setup lang="ts">
import Sidebar from '@/components/layout/sidebar.vue';
</script>

<template>
  <div class="layout">
    <sidebar class="flex-shrink-0" />
    <router-view class="flex-1" />
  </div>
</template>

<style scoped>
@tailwind components;
@layer components {
  .layout {
    @apply flex flex-col-reverse h-screen
		md:min-h-screen md:flex-row;
  }
}
</style>
