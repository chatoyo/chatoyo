<script setup lang="ts">
import { icon } from '@utils/transcript.ts';
import { fileExtImg } from '@utils/file.ts';

const data = ref([
  {
    fileName: '朱鸢_宣传片_废案.pdf',
    lastModifiedAt: '2025-01-01 11:11:11',
    createdAt: '2025-01-01 0:00:00'
  },
  {
    fileName: '朱鸢_宣传片_成片.avi',
    lastModifiedAt: '2025-01-01 11:11:11',
    createdAt: '2025-01-01 0:00:00'
  },
  {
    fileName: '朱鸢_宣传片_花絮.avi',
    createdAt: '2025-01-01 0:00:00',
    lastModifiedAt: '2025-01-01 11:11:11'
  },
  {
    fileName: '朱鸢_宣传片_文案草稿.doc',
    lastModifiedAt: '2025-01-01 11:11:11',
    createdAt: '2025-01-01 0:00:00'
  },
  {
    fileName: '春节假期候选车次.xls',
    lastModifiedAt: '2025-01-01 11:11:11',
    createdAt: '2025-01-01 0:00:00'
  },
  {
    fileName: '春节假期候选车次.xls',
    lastModifiedAt: '2025-01-01 11:11:11',
    createdAt: '2025-01-01 0:00:00'
  },
  {
    fileName: '春节假期候选车次.xls',
    lastModifiedAt: '2025-01-01 11:11:11',
    createdAt: '2025-01-01 0:00:00'
  },
  {
    fileName: '春节假期候选车次.xls',
    lastModifiedAt: '2025-01-01 11:11:11',
    createdAt: '2025-01-01 0:00:00'
  }
]);
</script>

<template>
  <div class="file-box-component">
    <div class="title bg-sky-500 border-[1px] border-sky-700 rounded-sm p-1 inline-flex items-center">
      <div class="flex-1 text-xl font-semibold text-sky-900">文件便签</div>
      <div class="flex items-center justify-center text-sky-900 cursor-pointer">
        <span>更多</span>
        <span :class="icon('angle-right')" />
      </div>
    </div>
    <Listbox
      :select-on-focus="false"
      :focus-on-hover="false"
      :highlight-on-select="false"
      :options="data"
      class="flex-1 scrollable"
      scroll-height="22rem"
    >
      <template #empty>
        <MuiEmpty />
      </template>
      <template #option="item">
        <div class="file-item">
          <img class="icon w-16 h-16" :src="fileExtImg(item.option.fileName)" />
          <div class="info">
            <div class="title text-base font-semibold">
              {{ item.option.fileName }}
            </div>
            <div class="time-desc text-sm flex justify-between w-full">
              <span>最近打开：{{ item.option.lastModifiedAt }}</span>
              <span>创建时间：{{ item.option.createdAt }}</span>
            </div>
          </div>
        </div>
      </template>
    </Listbox>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .file-box-component {
    @apply md:h-[26rem] bg-sky-900 /*dark:bg-orange-500*/
    w-6/12 rounded-md flex flex-col justify-center gap-2
    p-2;
  }

  :deep(.p-listbox-list-container) {
    @apply dark:bg-sky-800;
    .p-listbox-list {
      @apply h-full bg-transparent;
      .p-listbox-empty-message {
        @apply flex-1 h-full;
      }
    }
  }

  .file-item {
    @apply flex gap-4 w-full;
    .icon {
      @apply aspect-square;
    }

    .info {
      @apply flex flex-col flex-1 justify-around;
    }
  }
}
</style>
