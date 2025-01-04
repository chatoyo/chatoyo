import { ChatItem } from '@/models';
import { defineStore } from 'pinia';

export const useHomePageStore = defineStore('homePageStore', {
  state: () => ({
    selectedChat: undefined as ChatItem | undefined
  }),
  actions: {
    saveSelectedChat: function (savedChat: ChatItem | undefined) {
      this.selectedChat = savedChat;
    }
  },
  persist: true
});

export const useChannelPageStore = defineStore('channelPageStore', {
    state: () => ({
      selectedChat: undefined as ChatItem | undefined
    }),
    actions: {
      saveSelectedChat: function (savedChat: ChatItem | undefined) {
        this.selectedChat = savedChat;
      }
    },
    persist: true
  });