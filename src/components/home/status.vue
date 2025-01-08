<script setup lang="ts">
// Global Config

import { useModeStore } from '@store/mode-store.ts';

const MODES = [
  {
    name: '工作模式',
    key: 'WORK',
    icon: '',
    tips: ''
  },
  {
    name: '休息模式',
    key: 'REST',
    icon: '',
    tips: ''
  },
  {
    name: '专注模式',
    key: 'FOCUS',
    icon: '',
    tips: ''
  }
];
const currentMode = computed(() => useModeStore().workMode);
const todayProgress = ref(66);
</script>

<template>
  <div class="status-component">
    <div class="weekday">
      <Knob v-model="todayProgress" :size="150" :min="0" :max="100" readonly value :value-template="`周三`" />
    </div>
    <ul class="mode-list flex justify-center items-center h-full gap-2">
      <li v-for="item in MODES" :key="item.key" class="mode-item">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .status-component {
    @apply flex gap-8 bg-teal-700 rounded-md p-6
    md:h-56 md:w-6/12;
  }

  .weekday {
    @apply h-full flex justify-center items-center w-1/3;
  }

  .mode-list {
    .mode-item {
      @apply h-full rounded-md bg-teal-300;
    }
  }

  :deep(.p-knob svg text) {
    @apply dark:fill-slate-300;
  }
}
</style>
