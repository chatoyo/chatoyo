import { ModeInfo } from '@/models/mode.ts';

export const MODES: ModeInfo[] = [
  {
    name: '工作模式',
    key: 'WORK',
    icon: '',
    tips: '收发工作相关消息，专注工作'
  },
  {
    name: '休息模式',
    key: 'REST',
    icon: '',
    tips: '上班累了？休息会儿，走动走动'
  },
  {
    name: '专注模式',
    key: 'FOCUS',
    icon: '',
    tips: '所有消息将在后台静默接收，极简页面'
  },
  {
    name: '下班了',
    key: 'SPARE',
    icon: '',
    tips: '完成工作，迎接属于自己的时间'
  }
];
