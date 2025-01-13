<script setup lang="ts">
import ChatView from '@/components/chat-view/chat-view.vue';
import ChatsList from '@/components/chats-list/chats-list.vue';
import { BaseChatMessage, ChatItem } from '@/models';
import { fixedChatlog } from '@/services/chatlog-service';
import { useChannelPageStore } from '@/store';
import { onUnmounted, reactive, ref } from 'vue';
import Cardio from '@components/profile-bar.vue';
import Carousel from '@components/channel/carousel.vue';
import BulletinBoardRecommend from '@components/channel/bulletin-board-recommend.vue';
import NewsPanel from '@components/channel/news-panel.vue';

const chatLog = ref<Array<BaseChatMessage>>(fixedChatlog);
const pseudoChannels = ref<ChatItem[]>([
  {
    id: 1,
    title: '刘伟',
    description: '你说得对，但是你说得对',
    pic: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/def1f2abcfc2af0bbe2e5900a60a5ee1_5699547505742166353.png'
  },
  {
    id: 2,
    title: '蔡浩宇',
    description: '你说得对，但是你说得对',
    pic: 'https://webstatic.mihoyo.com/upload/op-public/2021/10/09/870472d6104dbbe7ea18b27c13763ccb_5300916022261002498.png'
  }
]);

const channelPageStore = useChannelPageStore();
const state = reactive({
  displayState: 'HOME' as 'HOME' | 'LIST' | 'CHAT',
  selectedChat: channelPageStore.selectedChat
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

onUnmounted(() => {
  channelPageStore.saveSelectedChat(state.selectedChat);
});
</script>

<template>
  <div class="channels-page">
    <chats-list
      :data="pseudoChannels"
      :selected="state.selectedChat"
      title="频道列表"
      subtitle="Channels"
      class="w-[20rem]"
      @navigate-home="navigateHome"
      @select-chat="selectChat"
    >
    </chats-list>
    <div
      v-if="state.selectedChat"
      class="main-container"
      :class="{ hidden: state.displayState === 'LIST' } /** Shows Homecard or Chatlog */"
    >
      <ChatView :current-chat="state.selectedChat" :messages="chatLog" />
      <div class="md:hidden" @click="showChats">打开消息列表</div>
    </div>
    <div v-else class="main-container sm:p-4 scrollable">
      <div class="cardio-container">
        <Cardio />
      </div>
      <div class="carousel-container">
        <Carousel class="carousel-wrapper" />
        <NewsPanel class="news-panel-wrapper" />
      </div>
      <div class="bulletin-board-wrapper">
        <BulletinBoardRecommend />
      </div>
    </div>
  </div>
</template>

<style scoped>
.channels-page {
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
</style>
