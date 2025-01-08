<script setup lang="ts"></script>

<template>
  <div class="todo-list-component">
    <ul class="list-core"></ul>
    <div class="calendar"></div>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .todo-list-component {
    @apply flex md:h-56 bg-red-300 w-7/12;
  }
}
</style>
