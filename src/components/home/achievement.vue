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
  <div class="achievement-component">
    <div class="title bg-amber-500 border-[1px] border-amber-700 rounded-sm p-1 inline-flex items-center">
      <div class="flex-1 text-xl font-semibold text-amber-900">最近成就</div>
      <div class="flex items-center justify-center text-amber-900 cursor-pointer">
        <span>更多</span>
        <span :class="icon('angle-right')" />
      </div>
    </div>
    <ul class="achievement-list">
      <li v-for="(item, index) in data" :key="index" class="item">
        <span :class="icon(item.icon)" class="!text-3xl" />
        <div class="flex flex-col gap-1">
          <div>{{ item.title }}{{ index + 1 }}</div>
          <div class="text-sm">{{ item.date }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .achievement-component {
    @apply md:h-56 bg-amber-900 /*dark:bg-orange-500*/
    w-6/12 rounded-md flex flex-col justify-center
    p-2;
  }

  .achievement-list {
    @apply mt-2 flex-1  flex-row flex-wrap gap-2 grid grid-cols-5;

    .item {
      @apply flex items-center gap-2 rounded-sm p-2 bg-gradient-to-b from-amber-800 to-amber-600 text-amber-100;
    }
  }
}
</style>
