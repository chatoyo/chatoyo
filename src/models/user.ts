export type LoginInfo = {
  id: number,
  name: string;
  sex: number; // 0 = female, 1 = male, 2 = undefined
  avatar: string;
  latestLoginAt: number; // epoch in milseconds
};
