/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';

/**
 * 接口返回类型
 */
export interface Response {
  code?: string;
  error?: ErrorType;
  data: object;
  pagination?: Pagination;
}

export interface ErrorType {
  type: string;
  data?: Record<string, unknown>
}

type Pagination = {
  current_page: number;
  total: number;
  count?: number;
};

function isErrorType(obj: any): obj is ErrorType {
  if(
    obj &&
    typeof obj === 'object' &&
    typeof obj.type === 'string' &&
    (obj.data ? typeof obj.data === 'object' : true)
  ) return true;
  return false;
}

function isPagination(obj: any): obj is Pagination {
  if(
    obj &&
    typeof obj === 'object' &&
    typeof obj.current_page === 'number' &&
    typeof obj.total === 'number' &&
    (obj.count ? typeof obj.count === 'number' : true)
  ) return true;
  return false
}

export function isResponse(obj: any): obj is Response {
  if (
    obj &&
    typeof obj === 'object' &&
    (obj.code ? typeof obj.code === 'string' : true) &&
    (obj.error ? isErrorType(obj.error) : true) &&
    typeof obj.data === 'object' &&
    (obj.pagination ? isPagination(obj.pagination) : true)
  ) {
    return true;
  }
  return false;
}

/**
 * 上传文件 - upload.ts
 */
export type UploadConfig = {
  /** url */
  url: string;
  /** Additional form fields; values can be strings, Files, or Blobs */
  data?: { [key: string]: any };
  /** 进度回调 */
  onProgress?: (percent: number) => void;
};

/**
 * 请求参数
 */
export interface RequestOptions {
  url: string;
  data?: { [key: string]: any };
  method?: AxiosRequestConfig['method'];
  dataType?: AxiosRequestConfig['responseType'];
  timeout?: number;
  headers?: Record<string, string>,
  contentType?: string;
  /**
   * 是否是第三方接口
   */
  third?: boolean;
  /**
   * 错误代码在顶层/业务层，需要把整个 response return回去
   */
  pureResponse?: boolean;
}

/**
 * 额外请求参数
 */
export type RequestOptionsExtension = {
  /** 是否优先使用缓存 */
  useCache?: boolean;
  /** 是否加上取消的token，详情请看https://axios-http.com/zh/docs/cancellation */
  abortController?: InstanceType<typeof AbortController>;
};

export type RestfulOptionsType = Omit<RequestOptions, 'method' | 'third' | 'pureResponse' | 'headers'>

export class RequestError extends Error {
  public payload?: Record<string, unknown>;

  constructor(msg: string, payload?: Record<string, unknown>) {
    super(msg); 
    this.name = 'RequestError';
    if(payload)this.payload = payload;
    Object.setPrototypeOf(this, RequestError.prototype);
  }
}