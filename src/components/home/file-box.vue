<script setup lang="ts">
import { icon } from '@utils/transcript.ts';
import { fileExtImg } from '@utils/file.ts';
import MuiCard from '@components/minor-custom/mui-card.vue';

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
  <MuiCard title="文件便签">
    <div class="scrollable h-full">
      <ul class="flex flex-col gap-1 mx-2 mb-4">
        <li class="file-item py-2 ps-3 pe-6 rounded-md" v-for="item in data">
          <img class="icon w-16 h-16" :src="fileExtImg(item.fileName)" />
          <div class="info">
            <div class="title text-base font-semibold">
              {{ item.fileName }}
            </div>
            <div class="time-desc text-xs flex justify-between w-full md:flex-row flex-col">
              <span>最近打开：{{ item.lastModifiedAt }}</span>
              <span>创建时间：{{ item.createdAt }}</span>
            </div>
          </div>
        </li>
        <MuiEmpty v-if="!data.length" />
      </ul>
    </div>
  </MuiCard>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .file-box-component {
    @apply md:h-[26rem]
		rounded-md flex flex-col justify-center gap-4 dark:bg-[#27293d]
		p-2;
  }

  :deep(.p-listbox-list-container) {
    .p-listbox-list {
      @apply h-full bg-transparent;
      .p-listbox-empty-message {
        @apply flex-1 h-full;
      }
    }
  }

  .file-item {
    @apply flex gap-4 w-full duration-300 cursor-pointer
		hover:bg-ultramarine-500;
    .icon {
      @apply aspect-square;
    }

    .info {
      @apply flex flex-col flex-1 justify-around text-slate-200;
    }
  }
}
</style>
