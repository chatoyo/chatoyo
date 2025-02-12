<script setup lang="ts"></script>

<template>
  <div class="mui-empty">
    <img alt="列表为空" src="@assets/img/empty/empty.jpg" class="w-[40%]" />
    <div class="text-slate-100">列表为空</div>
  </div>
</template>

<style scoped>
@tailwind components;
@layer components {
  .mui-empty {
    @apply flex flex-col h-full gap-6 justify-center items-center p-4;
  }
}
</style>
