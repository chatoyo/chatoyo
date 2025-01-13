<script setup lang="ts">
import dayjs from 'dayjs';
import { useModeStore } from '@/store';
import { Mode } from '@/models/mode';
import { MODES } from '@/constant/mode.ts';

const refreshTime = {
  current: () => dayjs().format('YYYY-MM-DD HH:mm'),
  worked: () => {
    const diffInMinutes = dayjs(new Date()).diff(dayjs().hour(9).minute(0).second(0), 'minute');
    return `${(diffInMinutes / 60) << 0}h${diffInMinutes % 60}min`;
  },
  weekday: () => `周${dayjs().format('dd')}`,
  progress: () =>
    Math.min((dayjs(new Date()).diff(dayjs().hour(9).minute(0).second(0), 'minute') * 100) / estimatedWorkHours, 100)
};

const currentTime = ref(refreshTime.current());
const workedTime = ref(refreshTime.worked());
const weekdayName = ref(refreshTime.weekday());
const estimatedWorkHours = 8 * 60;
const todayProgress = ref(refreshTime.progress());
const festival = ref('腊月十四');

const modeStore = useModeStore();
const modeToggle = (mode: Mode) => (modeStore.mode = mode);

onMounted(() => {
  setInterval(() => {
    currentTime.value = refreshTime.current();
    workedTime.value = refreshTime.worked();
    weekdayName.value = refreshTime.weekday();
    todayProgress.value = refreshTime.progress();
  }, 1000);
});
</script>

<template>
  <div class="status-component">
    <div class="weekday">
      <Knob v-model="todayProgress" :size="150" :min="0" :max="100" readonly :value-template="weekdayName" />
      <div class="date">
        {{ currentTime }}
      </div>
      <div class="festival">
        {{ festival }}
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
          <div class="stat-value">{{ workedTime }}</div>
        </li>
        <li class="stat-item">
          <div class="stat-desc">已连续工作</div>
          <div class="stat-value">{{ workedTime }}</div>
        </li>
        <li class="stat-item">
          <div class="stat-desc">本周已完成任务</div>
          <div class="stat-value">114个</div>
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
    @apply h-full flex flex-col justify-center items-center w-1/3;

    .date {
      @apply text-lg text-white;
    }
    .festival {
      @apply text-base text-white;
    }
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

      .stat-value {
        @apply text-xl;
      }
    }
  }
}
</style>
