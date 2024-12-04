<script setup lang="ts">
import { Channel, ListChannelItem } from '@/models';

type ListProp = {
  title: string;
  subtitle: string;
  data: Array<ListChannelItem>;
  selected: Channel | undefined;
};

type ListEmit = {
  (e: 'backHome'): void;
  (e: 'selectChannel', newChannel: Channel): void;
};

const props = defineProps<ListProp>();
const emits = defineEmits<ListEmit>();

const imageErrorHandler = (event: Event) => {
  if (event.target) {
    const imgTarget = event.target as HTMLImageElement;
    imgTarget.src = '/images/network.svg';
  }
};
const onExitButtonClick = () => {
  emits('backHome'); // 响应式：让对应页面取消显示列表
};
const onSelectChannel = (newChannel: Channel) => {
  emits('selectChannel', newChannel);
}
</script>

<template>
  <div class="channel-list-component">
    <div class="title flex gap-2 items-baseline select-none h-12">
      <span class="text-xl font-bold text-emerald-400">{{ props.title }}</span>
      <span class="text-md font-bold text-emerald-400">{{ props.subtitle }}</span>
      <button
        @click="exitButtonClickHandler"
        :class="{ 'md:hidden': !selected }"
        class="ml-auto inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none justify-self-center whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
      >
        <span class="pi pi-angle-left" />
      </button>
    </div>

    <ul class="divide-y divide-slate-100">
      <li
        class="channel-item"
        :class="{ selected: selected?.id === item.id }"
        v-for="(item, index) in props.data"
        :key="index"
        @click="onSelectChannel(item)"
      >
        <div class="shrink-0">
          <a href="#" class="relative flex items-center justify-center w-10 h-10 rounded-full">
            <img
              :src="item.pic"
              width="40"
              height="40"
              class="max-w-full rounded-full"
              alt=""
              @error="imageErrorHandler"
            />
            <span
              class="absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white"
            >
              <span class="sr-only"> offline </span>
            </span>
          </a>
        </div>
        <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
          <h4 class="text-base text-slate-100">{{ item.title }}</h4>
          <p class="description">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '/src/style.css';

@tailwind components;
@layer components {
  .channel-list-component {
    @apply bg-[#184183] px-4 py-8 flex flex-col gap-4 h-full;
  }

  .channel-item {
    @apply flex items-center gap-4 px-4 py-3 select-none cursor-pointer
		hover:bg-slate-300/20 transition-all duration-300;

    .description {
      @apply w-full text-sm truncate text-slate-400;
    }

    &.selected {
      @apply bg-sky-200/30;

      .description {
        @apply text-slate-800;
      }
    }
  }
}
</style>
