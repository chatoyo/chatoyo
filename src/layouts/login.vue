<script setup lang="ts"></script>

<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<style scoped>
@tailwind components;
@layer components {
  .layout {
    @apply min-h-[100vh] w-full;
  }
}
</style>
