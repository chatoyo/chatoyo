<script setup lang="ts">
import { computed } from 'vue';
import Sidebar from '@/components/sidebar/sidebar.vue';
import { useLayoutStore } from '@/store';

const layoutStore = useLayoutStore();
const isDarkMode = computed(() => layoutStore.darkMode);
</script>

<template>
  <div class="layout" :class="{ dark: isDarkMode }">
    <sidebar class="sidebar" />
    <router-view class="main" />
  </div>
</template>

<style scoped>
@tailwind components;
@layer components {
  .layout {
    @apply flex flex-col-reverse h-screen
		md:min-h-screen md:flex-row;
  }

  .sidebar {
    @apply flex-shrink-0;
  }

  .main {
    @apply flex-1 h-screen;
  }
}
</style>
