<script setup lang="ts"></script>

<template>
  <div class="oyo-empty">
    <div class="">空图标</div>
    <div class="">列表为空</div>
  </div>
</template>

<style scoped>
@tailwind components;
@layer components {
  .oyo-empty {
    @apply flex flex-col gap-6 items-center p-4;
  }
}
</style>
