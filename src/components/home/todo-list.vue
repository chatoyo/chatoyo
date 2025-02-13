<script setup lang="ts">
const finishedList = ref([]);
const data = ref([
  { name: '观看翁法罗斯前瞻', code: 'CTY' },
  { name: '了解大黑塔', code: 'SB' },
  { name: '绝区零耀嘉音MV观看', code: 'LDN' },
  { name: '快抽玛薇卡', code: 'IST' },
  { name: '睡觉2', code: 'IST' },
  { name: '睡觉3', code: 'IST' },
  { name: '睡觉4', code: 'IST' },
  { name: '睡觉5', code: 'IST' }
]);

const unfinishedCount = computed(() => {
  const CAPACITY = 99;
  const count = data.value.length - finishedList.value.length;
  if (count > CAPACITY) return `${CAPACITY}+`;
  else return `${count}`;
});
const displayUnfinishedCount = computed(() => unfinishedCount.value !== '0');
</script>

<template>
  <MuiCard title="">
    <template #title>
      <div class="flex-1 text-lg font-semibold flex gap-2 items-center">
        <span>待办事项</span>
        <Badge v-show="displayUnfinishedCount" value="4" severity="info">{{ unfinishedCount }}</Badge>
      </div>
    </template>
    <template #default>
      <div class="flex gap-2 px-3">
        <Listbox
          v-model="finishedList"
          :checkmark="true"
          filter
          :options="data"
          optionLabel="name"
          multiple
          scroll-height="16.5rem"
          class="flex-1 h-full"
          :pt="{
            listContainer: { class: 'scrollable' }
          }"
        >
          <template #empty>
            <MuiEmpty />
          </template>
          <template #emptyfilter>
            <span>无结果</span>
          </template>
        </Listbox>
      </div>
    </template>
  </MuiCard>
</template>

<style scoped lang="scss">
@tailwind components;

@layer components {
  .todo-list-component {
    @apply flex flex-col gap-3 md:h-[24rem] rounded-md p-2  bg-sunrise-white dark:bg-[#27293d];
  }

  :deep(.p-listbox) {
    @apply dark:bg-transparent;
  }

  :deep(.p-listbox-list-container) {
    @apply mr-8 ml-2 my-2;
  }

  :deep(.p-datepicker) {
    @apply border-none;
  }

  :deep(.p-inputtext) {
    @apply dark:bg-transparent;
  }
}
</style>
