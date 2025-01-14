/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestOptions } from './type';

/** 全局缓存请求数据的store */
const cacheRequestStore: Map<string, CacheValueType> = new Map();
const getCacheUid = (options: RequestOptions) => JSON.stringify(options); // Assumes one type of (GET) Request matches a unique Request Options

/** 缓存数据的类型 */
type CacheValueType = Promise<any> | undefined;

/** 设置api缓存 */
export const setCacheApiValue = (options: RequestOptions, value: CacheValueType) => {
  const cacheUid = getCacheUid(options);
  cacheRequestStore.set(cacheUid, value);
};

/** 获取api缓存 */
export const getCacheApiValue = (options: RequestOptions): CacheValueType => {
  const cacheUid = getCacheUid(options);
  return cacheRequestStore.get(cacheUid);
};

/** 删除某个api缓存 */
export const removeCacheApiValue = (options: RequestOptions) => {
  const cacheUid = getCacheUid(options);
  cacheRequestStore.delete(cacheUid);
};
