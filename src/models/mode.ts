export type Mode = 'WORK' | 'REST' | 'FOCUS' | undefined;

export type ModeInfo = {
  name: string;
  key: Mode;
  icon: string;
  tips: string;
};
