
import { LoginInfo } from '@/models/user';
import { defineStore } from 'pinia';

const defaultUserInfo : LoginInfo = {
  id: -1,
  name: '未知用户 请登录',
  avatar: '/images/avatar-test.jpg',
  sex: 2, // undefined
  latestLoginAt: 0
};

// Define the user store
export const useUserStore = defineStore('user', {
  
  state: () => ({
    userInfo: defaultUserInfo,
    isAuthenticated: false,
  }),

  getters: {
    getUserName: (state) => state.userInfo.name ?? '未登录',
    getUserAvatar: (state) => state.userInfo.avatar ?? undefined,
    getUser: (state) => state.userInfo
  },

  actions: {
    // Login
    setUserInfo(info: Partial<LoginInfo>) {
      this.userInfo = { ...this.userInfo, ...info } as LoginInfo;
      this.isAuthenticated = true;
    },

    // Logout
    clearUserInfo() {
      this.userInfo = defaultUserInfo;
      this.isAuthenticated = false;
    },
  },
});
