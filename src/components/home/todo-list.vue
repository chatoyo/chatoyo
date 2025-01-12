<script setup lang="ts">
import { icon } from '@utils/transcript.ts';

const finishedList = ref([]);
const cities = ref([
  { name: '观看翁法罗斯前瞻', code: 'CTY' },
  { name: '了解阿格莱亚', code: 'SB' },
  { name: '绝区零耀嘉音MV观看', code: 'LDN' },
  { name: '睡觉1', code: 'IST' },
  { name: '睡觉2', code: 'IST' },
  { name: '睡觉3', code: 'IST' },
  { name: '睡觉4', code: 'IST' },
  { name: '睡觉5', code: 'IST' }
]);

const date = ref('');
</script>

<template>
  <div class="todo-list-component">
    <div class="title bg-rose-500 border-[1px] text-rose-100 border-rose-700 rounded-sm p-1 inline-flex items-center">
      <div class="flex-1 text-xl font-semibold">待办事项</div>
      <div class="flex items-center justify-center cursor-pointer">
        <span>更多</span>
        <span :class="icon('angle-right')" />
      </div>
    </div>
    <div class="flex gap-2">
      <Listbox
        v-model="finishedList"
        :options="cities"
        optionLabel="name"
        :checkmark="true"
        multiple
        scroll-height="22rem"
        class="flex-1 dark:bg-rose-400/50 h-full"
      >
        <template #empty>
          <MuiEmpty />
        </template>
      </Listbox>
      <DatePicker v-model="date" inline show-week class="flex-1" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@tailwind base;
@layer components {
  .todo-list-component {
    @apply flex flex-col gap-3 md:h-[26rem] rounded-md dark:bg-rose-900 bg-rose-400 w-7/12 p-2;
  }

  :deep(.p-listbox-list-container) {
    @apply dark:bg-rose-400/50 max-h-[none];
  }
  :deep(.p-datepicker) {
    @apply border-none;
  }
  :deep(.p-datepicker-panel) {
    @apply dark:bg-rose-700/50 bg-rose-400/50;
  }
  :deep(.p-datepicker-header) {
    @apply dark:bg-rose-800 bg-rose-600;
  }
}
</style>
