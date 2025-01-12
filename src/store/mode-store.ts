import { defineStore } from 'pinia';
import { Mode } from '@/models/mode.ts';

export const useModeStore = defineStore('modeStore', {
  state: () => ({
    mode: undefined as Mode
  }),
  persist: {
    enabled: true,
    storage: sessionStorage
  }
});
