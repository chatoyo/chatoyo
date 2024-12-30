<script setup lang="ts">
import { computed } from 'vue';
import Sidebar from '@/components/layout/sidebar.vue';
import { useLayoutStore } from '@/store';

const layoutStore = useLayoutStore();
const isDarkMode = computed(() => layoutStore.darkMode);
</script>

<template>
  <div class="layout" :class="{ dark: isDarkMode }">
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
