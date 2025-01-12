<script setup lang="ts">
import Cardio from '@components/cardio.vue';
import NewsPanel from '@components/channel/news-panel.vue';
import BulletinBoardRecommend from '@components/channel/bulletin-board-recommend.vue';

import { onUnmounted, reactive, ref } from 'vue';

import { ChatItem, BaseChatMessage } from '@/models';
import { fixedChatlog } from '@/services/chatlog-service';
import { fixedChannels } from '@/services/channel-service';
import ChatsList from '@components/chats-list/chats-list.vue';
import ChatView from '@/components/chat-view/chat-view.vue';
import { useHomePageStore } from '@/store';
import TodoList from '@components/home/todo-list.vue';
import Achievement from '@components/home/achievement.vue';
import Status from '@components/home/status.vue';
import { useModeStore } from '@store/mode-store.ts';

const chatLog = ref<Array<BaseChatMessage>>(fixedChatlog);
const chats = ref<Array<ChatItem>>(fixedChannels);

const homePageStore = useHomePageStore();
const state = reactive({
  displayState: 'HOME' as 'HOME' | 'LIST' | 'CHAT',
  selectedChat: homePageStore.selectedChat
});

const navigateHome = () => {
  state.selectedChat = undefined;
  state.displayState = 'HOME';
};

const showChats = () => {
  state.displayState = 'LIST';
};

const selectChat = (chat: ChatItem) => {
  state.selectedChat = chat;
  state.displayState = 'CHAT';
};

const currentMode = computed(() => useModeStore().workMode);

onUnmounted(() => {
  homePageStore.saveSelectedChat(state.selectedChat);
});
</script>

<template>
  <div class="home-page">
    <div class="chats-list-container scrollable" :class="{ hidden: state.displayState !== 'LIST' }">
      <ChatsList
        :selected="state.selectedChat"
        :data="chats"
        title="消息中心"
        subtitle="Message"
        @navigate-home="navigateHome"
        @select-chat="selectChat"
      />
    </div>

    <div
      v-if="state.selectedChat"
      class="main-container"
      :class="{ hidden: state.displayState === 'LIST' } /** Shows Homepage or Chatview */"
    >
      <ChatView :current-chat="state.selectedChat" :messages="chatLog" />
      <div class="md:hidden" @click="showChats">打开消息列表</div>
    </div>
    <div v-else class="main-container sm:p-4 scrollable">
      <Cardio />
      <div class="flex justify-start gap-2">
        <Status />
        <Achievement />
      </div>
      <div class="flex justify-start gap-2">
        <TodoList />
        <FileBox />
      </div>
      <div class="flex justify-start gap-2">
        <Microprogram />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@tailwind components;
@layer components {
  .home-page {
    @apply flex flex-row h-screen w-full;
  }

  .chats-list-container {
    @apply w-full h-full
    md:w-[20rem] md:block;
  }

  .main-container {
    @apply flex-1  transition-colors duration-300
    bg-slate-200 dark:bg-ultramarine-900
    flex flex-col gap-2;
  }
}
</style>
