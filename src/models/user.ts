export type LoginInfo = {
  id: string,
  name: string;
  gender: number; // 0 = female, 1 = male, 2 = undefined
  picture: string;
  latestLoginAt: number; // epoch in milseconds
  data?: BackendUser
};

export type BackendUser = {
  id: string,
  phone?: string,
  email?: string,
  github_email?: string,
  google_email?: string,
  name?: string,
  nickname: string,
  picture?: string,
  gender?: string,
  email_verified: boolean,
  created_at: string,
  bio?: string,
}