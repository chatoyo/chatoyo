<script setup lang="ts">
import ChannelList from '@components/list/list.vue';
import ChannelDetail from '@/components/channel/channel-detail.vue';
import Carousel from '@components/home/carousel.vue';
import Cardio from '@components/home/cardio.vue';
import NewsPanel from '@components/home/news-panel.vue';
import BulletinBoardRecommend from '@components/home/bulletin-board-recommend.vue';

import { reactive, ref } from 'vue';
import { Channel, ChannelMessage } from '@/models';
import { fixedChatlog } from '@/services/chatlog-service';
import { fixedChannels } from '@/services/channel-service';

const chatLog = ref<Array<ChannelMessage>>(fixedChatlog);
const channels = ref<Array<Channel>>(fixedChannels);

const carouselCurrentIndex = ref(0);

const state = reactive({
  displayState: 'HOME' as 'HOME' | 'CHANNELS' | 'CHAT',
  selectedChannel: undefined as Channel | undefined
});

const navigateHome = () => {
  state.selectedChannel = undefined;
  state.displayState = 'HOME';
};

const showChannels = () => {
  state.displayState = 'CHANNELS';
};

const selectChannel = (channel: Channel) => {
  state.selectedChannel = channel;
  state.displayState = 'CHAT';
};
</script>

<template>
  <div class="home-page">
    <div class="channel-list scrollable" :class="{ hidden: state.displayState !== 'CHANNELS' }">
      <ChannelList
        :selected="state.selectedChannel"
        :data="channels"
        title="频道"
        subtitle="Channel"
        @navigate-home="navigateHome"
        @select-channel="selectChannel"
      />
    </div>
    <div
      v-if="state.selectedChannel"
      class="main-container channel scrollable"
      :class="{ hidden: state.displayState === 'CHANNELS' }"
    >
      <ChannelDetail :channel="state.selectedChannel" :messages="chatLog" />
      <div class="md:hidden" @click="showChannels">打开频道列表</div>
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
    @apply flex flex-row h-screen;
  }
  .channel-list {
    @apply w-full min-h-full
    md:w-[20rem] md:block;
  }
  .main-container {
    @apply flex-1  transition-colors duration-300
		bg-slate-200 dark:bg-ultramarine-900
		flex flex-col gap-2;
  }
  .channel {
    @apply p-0;
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
