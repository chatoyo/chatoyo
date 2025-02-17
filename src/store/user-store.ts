
import { BackendUser, LoginInfo } from '@/models/user';
import { getJSON } from '@/request/main';
import { defineStore } from 'pinia';

const defaultUserInfo : LoginInfo = {
  id: '-1',
  name: '未知用户 请登录',
  picture: '/images/avatar-test.jpg',
  gender: 2, // undefined
  latestLoginAt: 0
};

// Define the user store
export const useUserStore = defineStore('user', {
  
  state: () => ({
    userInfo: defaultUserInfo,
    isAuthenticated: false,
  }),

  getters: {
    getAuthenticated: (state) => state.isAuthenticated,
    getUserName: (state) => state.userInfo.name,
    getUserAvatar: (state) => state.userInfo.picture,
    getUser: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      if(!state.isAuthenticated) requestUserInfo(null);
      return state.userInfo;
    }
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

export const requestUserInfo = async (userStore: unknown) => { 
  const { data } = await getJSON({
    url: '/api/user/me',
  });

  const { user } = data as { user?: BackendUser };

  if (!user) {
    userStore.clearUserInfo();
    throw new Error('Oops! User have to manually login.'); // Error handled on top
  }
  const store = userStore ?? useUserStore();
  store.setUserInfo({
    id: user.id,
    picture: user.picture,
    name: user.name,
    latestLoginAt: Date.now(),
    gender: user.gender ? Number(user.gender) : 0,
    data: user
  });
}
