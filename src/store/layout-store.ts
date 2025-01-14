import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layoutStore', {
  state: () => ({
    darkMode: true
  }),
  actions: {
    toggleDarkMode: function (dark: boolean = true) {
      this.darkMode = dark;
    }
  },
  persist: {
    enabled: true,
    storage: sessionStorage
  }
});
