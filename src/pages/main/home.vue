<script setup lang="ts">
import ChannelList from '@components/list/list.vue';
import ChannelDetail from '@/components/channel/channel-detail.vue';
import HomeCard from '@/components/home/home-card.vue';
import { reactive, ref } from 'vue';

import { Channel, ChannelMessage } from '@/models';
import { fixedChatlog } from '@/services/chatlog-service';
import { fixedChannels } from '@/services/channel-service';

const chatLog = ref<Array<ChannelMessage>>(fixedChatlog);
const channels = ref<Array<Channel>>(fixedChannels);
  
const state = reactive({
  displayState: 'home' as 'home' | 'channels' | 'chat',
  selectedChannel: undefined as Channel | undefined,
});

const navigateHome = () => {
  state.selectedChannel = undefined;
  state.displayState = 'home';
};

const showChannels = () => {
  state.displayState = 'channels';
};

const selectChannel = (channel: Channel) => {
  state.selectedChannel = channel;
  state.displayState = 'chat';
};
</script>

<template>
  <div class="home-page flex flex-row w-full">
    <div class="channel-list" :class="{ hidden: state.displayState !== 'channels' }">
      <channel-list
        :selected="state.selectedChannel"
        :data="channels"
        title="频道"
        subtitle="Channel"
        @back-home="navigateHome"
        @select-channel="selectChannel"
      />
    </div>

    <div class="main-container" :class="{ hidden: state.displayState === 'channels' } /** Shows Homecard or Chatlog */">
      <channel-detail v-if="state.selectedChannel" :channel="state.selectedChannel" :messages="chatLog" />
      <home-card v-else />
      <div class="md:hidden" @click="showChannels">打开频道列表</div>
    </div>
  </div>
</template>

<style scoped>
@tailwind components;
@layer components {
  .main-container {
    @apply flex-1 bg-[#0c263a]  w-full
		md:block md:h-screen;
  }

  .channel-list {
    @apply w-full h-full
		md:w-[20rem] md:block;
  }
}
</style>
