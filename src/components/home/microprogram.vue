<script setup lang="ts">
import { icon } from '@utils/transcript.ts';

const data = ref([
  {
    title: '健身房',
    icon: 'home',
    meta: {
      desc: '使用率：80%'
    }
  },
  {
    title: 'HR系统',
    icon: 'home',
    meta: {
      desc: ''
    }
  },
  {
    title: '门禁',
    icon: 'home',
    meta: {
      desc: ''
    }
  },
  {
    title: '业务办理',
    icon: 'home',
    meta: {
      desc: '在途业务：0'
    }
  },
  {
    title: '成就',
    icon: 'home',
    date: '2025-10-10'
  }
]);
</script>

<template>
  <div class="mp-component">
    <div class="title rounded-sm p-1 inline-flex items-center">
      <div class="flex-1 text-lg font-semibold text-indigo-100">快捷小程序</div>
      <div class="flex items-center justify-center text-indigo-100 cursor-pointer">
        <span>更多</span>
        <span :class="icon('angle-right')" />
      </div>
    </div>
    <ul class="mp-list">
      <li v-for="(item, index) in data.slice(0, 5)" :key="index" class="item">
        <span :class="icon(item.icon)" class="!text-3xl" />
        <div class="flex flex-col gap-1">
          <div>{{ item.title }}</div>
          <div class="text-sm block">{{ item.meta?.desc || '' }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .mp-component {
    @apply md:h-40 dark:bg-[#27293d]
		w-full rounded-md flex flex-col justify-center
		p-2;
  }

  .mp-list {
    @apply mt-2 flex-1  flex-row flex-wrap gap-2 grid grid-cols-5;

    .item {
      @apply flex items-center gap-6 rounded-sm p-4
			cursor-pointer select-none
			bg-gradient-to-t from-indigo-700 to-indigo-500 text-indigo-100
			duration-300
			hover:scale-105;
    }
  }
}
</style>
