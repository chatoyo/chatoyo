import { RestfulOptionsType, RequestOptionsExtension } from './type';
import { request } from './request';

const isDevPhase = import.meta.env.DEV;

/** get 请求 */
export const getJSON = (options: RestfulOptionsType, requestExpandsType?: RequestOptionsExtension) => request({
  ...options,
  method: 'GET',
  headers: isDevPhase ? {"Access-Controll-Allow-Origin": "*"} : undefined
}, requestExpandsType);

/** post 请求 */
export const postJSON = (options: RestfulOptionsType, requestExpandsType?: RequestOptionsExtension) => request({
  ...options,
  method: 'POST',
  headers: isDevPhase ? {"Access-Controll-Allow-Origin": "*"} : undefined
}, requestExpandsType);

/** delete 请求 */
export const delJSON = (options: RestfulOptionsType, requestExpandsType?: RequestOptionsExtension) => request({
  ...options,
  method: 'DELETE',
  headers: isDevPhase ? {"Access-Controll-Allow-Origin": "*"} : undefined
}, requestExpandsType);


/** third */
/** get 的三方请求 */
export const getThirdJSON = (options: RestfulOptionsType, requestExpandsType?: RequestOptionsExtension) => request({
  ...options,
  third: true,
  method: 'GET',
  headers: isDevPhase ? {"Access-Controll-Allow-Origin": "*"} : undefined
}, requestExpandsType);


/** pureResponse */
/** 返回干净的response - get */
export const getPureJSON = (options: RestfulOptionsType, requestExpandsType?: RequestOptionsExtension) => request({
  ...options,
  pureResponse: true,
  method: 'GET',
  headers: isDevPhase ? {"Access-Controll-Allow-Origin": "*"} : undefined
}, requestExpandsType);

export const postPureJSON = (options: RestfulOptionsType, requestExpandsType?: RequestOptionsExtension) => request({
  ...options,
  pureResponse: true,
  method: 'POST',
  headers: isDevPhase ? {"Access-Controll-Allow-Origin": "*"} : undefined
}, requestExpandsType);
