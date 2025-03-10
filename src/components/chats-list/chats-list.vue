<script setup lang="ts">
import { ChatItem } from '@/models';

type ListProp = {
  title: string;
  subtitle: string;
  data: Array<ChatItem>;
  selected: ChatItem | undefined;
};

type ListEmit = {
  (e: 'navigateHome'): void;
  (e: 'selectChat', newChat: ChatItem): void;
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
  emits('navigateHome'); // 响应式：让对应页面取消显示列表
};

const onSelectChat = (newChat: ChatItem) => {
  emits('selectChat', newChat);
};
</script>

<template>
  <div class="chats-list">
    <div class="header">
      <span class="text-xl">{{ props.title }}</span>
      <span class="text-md">{{ props.subtitle }}</span>
      <button @click="onExitButtonClick" :class="{ 'md:!hidden': !selected }" class="btn-back">
        <span class="pi pi-angle-left" />
      </button>
    </div>

    <ul class="chat-item-list">
      <li
        class="chat-item"
        :class="{ selected: selected?.id === item.id }"
        v-for="(item, index) in props.data"
        :key="index"
        @click="onSelectChat(item)"
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
          <h4 class="text-base text-slate-900 dark:text-slate-100">{{ item.title }}</h4>
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
  .chats-list {
    @apply px-4 py-8 flex flex-col gap-4 h-full duration-300
		bg-sunrise-white dark:bg-ultramarine-500;
  }

  .chat-item-list {
    @apply divide-y divide-slate-500 dark:divide-slate-100;
  }

  .header {
    @apply flex gap-2 items-baseline select-none h-12 font-sans font-bold
		text-lotus dark:text-emerald-400;
  }

  .btn-back {
    @apply ml-auto inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white
		transition duration-300 rounded shadow-md justify-self-center whitespace-nowrap
		hover:shadow-sm
    bg-purple-600 hover:bg-lotus hover:shadow-lotus/80
		dark:bg-emerald-500 dark:shadow-emerald-200
		dark:hover:bg-emerald-600 dark:hover:shadow-emerald-200
		focus-visible:outline-none focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200
		disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none;
  }

  .chat-item {
    @apply flex items-center gap-4 px-4 py-3 select-none cursor-pointer
		hover:bg-lotus/10 dark:hover:bg-slate-300/20
		transition-all duration-300;

    .description {
      @apply w-full text-sm truncate text-slate-400;
    }

    &.selected {
      @apply bg-violet-300/50 dark:bg-sky-200/30;

      .description {
        @apply text-slate-800;
      }
    }
  }
}
</style>
