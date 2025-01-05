<script setup lang="ts">
import Carousel from '@components/home/carousel.vue';
import Cardio from '@components/home/cardio.vue';
import NewsPanel from '@components/home/news-panel.vue';
import BulletinBoardRecommend from '@components/home/bulletin-board-recommend.vue';

import { onUnmounted, reactive, ref } from 'vue';

import { ChatItem, BaseChatMessage } from '@/models';
import { fixedChatlog } from '@/services/chatlog-service';
import { fixedChannels } from '@/services/channel-service';
import ChatsList from '@components/chats-list/chats-list.vue';
import ChatView from '@/components/chat-view/chat-view.vue';
import { useHomePageStore } from '@/store';

const chatLog = ref<Array<BaseChatMessage>>(fixedChatlog);
const chats = ref<Array<ChatItem>>(fixedChannels);

const homePageStore = useHomePageStore();
const state = reactive({
  displayState: 'HOME' as 'HOME' | 'LIST' | 'CHAT',
  selectedChat: homePageStore.selectedChat
});
const carouselCurrentIndex = ref(0);

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

onUnmounted(()=>{
  homePageStore.saveSelectedChat(state.selectedChat);
})
</script>

<template>
  <div class="home-page">
    <div class="chats-list-container scrollable" :class="{ hidden: state.displayState !== 'LIST' }">
      <ChatsList
        :selected="state.selectedChat"
        :data="chats"
        title="消息中心"
        subtitle="Home"
        @navigate-home="navigateHome"
        @select-chat="selectChat"
      />
    </div>

    <div v-if="state.selectedChat" class="main-container" :class="{ hidden: state.displayState === 'LIST' } /** Shows Homecard or Chatlog */">
      <ChatView :current-chat="state.selectedChat" :messages="chatLog" />
      <div class="md:hidden" @click="showChats">打开消息列表</div>
    </div>
    <div v-else class="main-container sm:p-4 scrollable">
      <div class="cardio-container">
        <Cardio />
      </div>
      <div class="carousel-container">
        <Carousel class="carousel-wrapper" v-model:current="carouselCurrentIndex" />
        <NewsPanel class="news-panel-wrapper" />
      </div>
      <div class="bulletin-board-wrapper">
        <BulletinBoardRecommend />
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

  .carousel-container {
    @apply flex md:flex-row justify-around md:justify-center w-full max-h-96 md:gap-6 gap-2
      flex-col; /* TODO: 移动端看滚动新闻 */

    .carousel-wrapper {
      @apply lg:w-7/12;
    }

    .news-panel-wrapper {
      @apply lg:w-5/12;
    }
  }
}
</style>
