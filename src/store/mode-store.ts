import { defineStore } from 'pinia';
import { Mode } from '@/models/mode.ts';

export const useModeStore = defineStore('modeStore', {
  state: () => ({
    workMode: undefined as Mode
  }),
  persist: true
});
