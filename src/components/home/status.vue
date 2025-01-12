<script setup lang="ts">
import dayjs from 'dayjs';
import { useModeStore } from '@/store';
import { Mode } from '@/models/mode';
// Global Config
const MODES = [
  {
    name: '工作模式',
    key: 'WORK',
    icon: '',
    tips: '收发工作相关消息，专注工作'
  },
  {
    name: '休息模式',
    key: 'REST',
    icon: '',
    tips: '上班累了？休息会儿，走动走动'
  },
  {
    name: '专注模式',
    key: 'FOCUS',
    icon: '',
    tips: '所有消息将在后台静默接收，极简页面'
  },
  {
    name: '下班了',
    key: 'SPARE',
    icon: '',
    tips: '完成工作，迎接属于自己的时间'
  }
];
const currentTime = computed(() => dayjs().format('YYYY-MM-DD HH:mm'));
const workedTime = computed(() => {
  const diffInMinutes = dayjs(new Date()).diff(dayjs().hour(9).minute(0).second(0), 'minute');
  return `${(diffInMinutes / 60) << 0}h${diffInMinutes % 60}min`;
});
const weekdayName = computed(() => `周${dayjs().format('dd')}`);
const estimatedWorkHours = 8 * 60;
const todayProgress = computed(() =>
  Math.min((dayjs(new Date()).diff(dayjs().hour(9).minute(0).second(0), 'minute') * 100) / estimatedWorkHours, 100)
);

const modeStore = useModeStore();
const modeToggle = (mode: Mode) => {
  modeStore.mode = mode;
};
</script>

<template>
  <div class="status-component">
    <div class="weekday flex flex-col">
      <Knob v-model="todayProgress" :size="150" :min="0" :max="100" readonly value :value-template="weekdayName" />
      <div class="clock text-lg text-white">
        {{ currentTime }}
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-between">
      <ul class="mode-list flex justify-center items-center h-20 gap-2">
        <li
          v-for="item in MODES"
          :key="item.key"
          class="mode-item"
          :class="{ current: item.key === modeStore.mode }"
          v-tooltip.bottom="{ value: item.tips, autoHide: false }"
          @click="modeToggle(item.key)"
        >
          <div class="pi pi-android"></div>
          <div>{{ item.name }}</div>
        </li>
      </ul>
      <ul class="work-stat">
        <li class="stat-item">
          <div class="stat-desc">今天已工作</div>
          <div class="stat-value text-xl">{{ workedTime }}</div>
        </li>
        <li class="stat-item">
          <div class="stat-desc">已连续工作</div>
          <div class="stat-value text-xl">{{ workedTime }}</div>
        </li>
        <li class="stat-item">
          <div class="stat-desc">本周已完成任务</div>
          <div class="stat-value text-xl">114个</div>
        </li>
      </ul>
    </div>
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
      @apply h-full rounded-md bg-teal-400 flex-1 text-teal-900 select-none
      flex flex-col justify-center items-center gap-2
      cursor-pointer duration-300
      hover:bg-teal-500;

      &.current {
        @apply bg-sky-300;
      }
    }
  }

  :deep(.p-knob svg text) {
    @apply fill-slate-300 select-none;
  }

  .work-stat {
    @apply flex gap-4;
    .stat-item {
      @apply flex flex-col items-center text-slate-100;
    }
  }
}
</style>
