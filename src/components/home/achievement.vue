<script setup lang="ts">
import { icon } from '@utils/transcript.ts';

const data = ref([
  {
    title: '成就',
    icon: 'home',
    date: '2025-10-10'
  },
  {
    title: '成就',
    icon: 'home',
    date: '2025-10-10'
  },
  {
    title: '成就',
    icon: 'home',
    date: '2025-10-10'
  },
  {
    title: '成就',
    icon: 'home',
    date: '2025-10-10'
  },
  {
    title: '成就',
    icon: 'home',
    date: '2025-10-10'
  },
  {
    title: '成就',
    icon: 'home',
    date: '2025-10-10'
  },
  {
    title: '成就',
    icon: 'home',
    date: '2025-10-10'
  },
  {
    title: '成就',
    icon: 'home',
    date: '2025-10-10'
  }
]);
</script>

<template>
  <MuiCard title="最近成就" class="achievement-component" md-height="16rem">
    <ul class="achievement-list">
      <li v-for="(item, index) in data.slice(0, 5)" :key="index" class="item">
        <span :class="icon(item.icon)" class="!text-3xl" />
        <div class="flex flex-col gap-1">
          <div class="text-center">{{ item.title }}{{ index + 1 }}</div>
          <div class="text-sm">{{ item.date }}</div>
        </div>
      </li>
    </ul>
  </MuiCard>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .achievement-component {
    @apply w-6/12;
  }

  .achievement-list {
    @apply h-[90%] flex-1 mx-3 mt-2 flex flex-row gap-2;

    .item {
      @apply flex flex-col h-full basis-1/5 items-center justify-center gap-2 rounded-sm p-2
			bg-gradient-to-b from-amber-800 to-amber-600 text-amber-100
			select-none cursor-pointer
			duration-300
			hover:scale-110;
    }
  }
}
</style>
