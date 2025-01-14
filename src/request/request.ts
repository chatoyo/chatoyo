/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  getCacheApiValue,
  removeCacheApiValue,
  setCacheApiValue,
} from './cache';
import { isResponse, RequestError, RequestOptions, RequestOptionsExtension, Response } from './type';

/** 获取请求的header */
const getHeadersConfig: (options: RequestOptions) => AxiosRequestConfig['headers'] = (options: RequestOptions) => {

  const headers: AxiosRequestConfig['headers'] = {};

	headers['Content-Type'] = 'application/json';

  if (options.contentType) {
    headers['Content-Type'] = options.contentType;
  }

  if (options.headers) {
    Object.keys(options.headers).forEach( (key) =>{
      headers[key] = options.headers![key];
    })
  }

  // TODO: UTM (Urchin Tracking Module)
  // const utmResult = utmStorage.get();
  // if (!!utmResult) {
  //   const value = Object.keys(utmResult).map(key => `${key}=${utmResult[key]}`);
  //   headers.utm = encodeURIComponent(value.join('&'));
  // }

  return headers;
};

/** Attach data to params or req body */
const getDataConfig = (options: RequestOptions) : {params: AxiosRequestConfig['params'], data: AxiosRequestConfig['data'] } => {
  let params: AxiosRequestConfig['params'] = {};
  let data: AxiosRequestConfig['data'] = {};

  // bypass Cache by default. see the Main Request Method below.
  params._ = `${Date.now()}`;

  // unified data passing
  if (options.method?.toUpperCase() === 'GET') {
    params = { ...params, ...options.data }; // store data in params for GET method
  } else {
    data = options.data; 
  }

  return { params, data };
};

/** Abort Signals */
const getSignalConfig = (additionals?: RequestOptionsExtension) => {
  if (additionals?.abortController) {
    return additionals.abortController.signal;
  }
};

/** ALL Axios Configs */
const getConfig = (options: RequestOptions, additionals?: RequestOptionsExtension): AxiosRequestConfig => {
  const url = options.url.startsWith('http') ? options.url : `${options.url}`;
  const { params, data } = getDataConfig(options);
  const headers = getHeadersConfig(options);
  const signal = getSignalConfig(additionals);

  const config: AxiosRequestConfig = {
    url: url,
    method: options.method,

    responseType: options.dataType || 'json',
    withCredentials: true,
    timeout: options.timeout || 0,
		signal: signal,

    headers: headers,
    params: params,
    data: data,
  };

  return config;
};

/** 
 * Main Request
 * @param {RequestOptions} options
 * @param {RequestOptionsExtension} additionals
 * @returns {Promise<axios.AxiosResponse>}
 * @specifications
 * 	res {
 * 		data: {{Response}}
 * }
 */
export const request = (options: RequestOptions, additionals?: RequestOptionsExtension): Promise<Response> => {
  // 如果设置了缓存请求，则使用缓存，只对get请求生效
	const isGet = options.method?.toUpperCase() === 'GET';
  if (additionals?.useCache && isGet) {
    const cacheValue = getCacheApiValue(options);
    if (cacheValue) return cacheValue;
  }

  const instance = axios.create(); // Will be fired after interceptor
    // response Interceptor
    instance.interceptors.response.use((response: AxiosResponse) => {
      const data = response.data;
      // TODO:
      // console.log(data);
  
      /** pureResponse: 直接返回数据 */
      if (options.pureResponse) {
        return data;
      }
  
      if (!isResponse(data)) {
        return Promise.reject(new RequestError('badFormat'))
      }
      if (isGet) {
        setCacheApiValue(options, Promise.resolve(response.data));
      }
      if (!data.error?.type){
        return data;
      }
  
      /*
      * Error Response
      */
      const errorPayload = {
        ...data,
        requestInfo: `method: ${options.method}; url: ${options.url}`,
      };
      const error = new RequestError(data.error.type, errorPayload);
  
      // 越权访问
      if (data.error.type.includes('forbidden')) {
        error.name = 'forbidden';
      }
      removeCacheApiValue(options);
  
      return Promise.reject(error);
    }, (error: AxiosError) => {
      const errorPayload: Record<string, any> = {
        requestInfo: `method: ${options.method}; url: ${options.url}`,
      };
  
      if (error.response) {
        // Server responded with a status outside 2xx range
        errorPayload.desc = 'Request sent successfully but response status code is out of range.';
        errorPayload.data = error.response.data;
      } else if (error.request) {
        // Request was sent but no response received
        errorPayload.desc = 'Request sent successfully but no response received.';
      } else {
        // Error occurred before the request was sent
        errorPayload.desc = 'An issue occurred while sending the request.';
        errorPayload['axios.error'] = error.message;
      }
  
      return Promise.reject(new RequestError('服务器繁忙', errorPayload));
    });

  const config = getConfig(options, additionals);
  const promise = instance(config);

  return promise;
};
