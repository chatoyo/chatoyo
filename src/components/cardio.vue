<!-- Cardio Component -->
<!-- Named by Archie Xing -->
<script setup lang="ts">
import { useModeStore } from '@store/mode-store.ts';

type CardioProps = {
  avatar?: string;
  name?: string;
  sex?: number;
  slogan?: string;
};

const props = withDefaults(defineProps<CardioProps>(), {
  avatar: '/images/avatar-test.jpg',
  name: '用牌玩命',
  sex: 1,
  slogan: '哎呀，这帝元琼玉瘾又犯了......'
});

const sexSymbol = {
  0: { text: '♂', color: 'teal' },
  1: { text: '♀', color: 'pink' }
};
const modeStore = useModeStore();
const isWorkMode = computed(() => modeStore.workMode === 'WORK');
</script>

<template>
  <div class="cardio">
    <div class="avatar"><img class="avatar-img" :src="props.avatar" /></div>
    <div class="title">
      <span>{{ props.name }}</span>
      <span class="sex" :class="`bg-${sexSymbol[props.sex as 1 | 0].color}-500`">{{
        sexSymbol[props.sex as 1 | 0].text
      }}</span>
    </div>
    <div class="slogan">
      {{ props.slogan }}
    </div>
    <div class="stat">
      <div class="stat-item">
        <span>成就数</span>
        <span>114</span>
      </div>
      <div class="stat-item">
        <span>今天已工作</span>
        <span>1h33min</span>
      </div>
    </div>
    <div class="mode-toggle">
      <div class="relative flex flex-col flex-wrap items-center gap-2">
        <input
          class="relative w-12 h-6 transition-colors appearance-none cursor-pointer hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-emerald-300 checked:after:hover:bg-emerald-600 focus:outline-none checked:focus:bg-emerald-400 checked:after:focus:bg-emerald-700 focus-visible:outline-none peer rounded-xl bg-slate-300 after:absolute after:top-0 after:left-0 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-emerald-200 checked:after:left-6 checked:after:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
          type="checkbox"
          :checked="isWorkMode"
          id="id-c04"
        />
        <label
          class="cursor-pointer text-slate-100 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          for="id-c04"
        >
          工作模式
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
@tailwind components;
@layer components {
  .cardio {
    @apply bg-amber-50 dark:bg-sky-900
    flex gap-4 items-center pe-6
    rounded-md
    text-indigo-950 dark:text-emerald-100;
  }

  /* https://tailwindcss.com/docs/hover-focus-and-other-states */
  .avatar {
    @apply inline-flex justify-center items-center h-16 w-16 cursor-pointer py-2 rounded-full
    hover:bg-slate-300/50
    transition-all duration-300;

    &:hover {
      .avatar-img {
        @apply h-full;
      }
    }

    .avatar-img {
      @apply rounded-[50%] aspect-square h-[95%]
      hover:h-full
      transition-all duration-300;
    }
  }

  .title {
    @apply inline-flex justify-center items-center select-none gap-2
    text-xl font-semibold tracking-wide;
  }

  .title .sex {
    @apply text-white;
  }

  .slogan {
    @apply min-w-56 max-w-72 text-center dark:text-teal-200;
  }

  .stat {
    @apply flex-1 flex justify-end gap-2;
  }

  .stat-item {
    @apply flex flex-col items-end;
  }
}
</style>
