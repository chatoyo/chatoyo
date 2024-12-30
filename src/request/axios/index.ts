import {AxiosRequestConfig} from "axios";
import axios from "axios";

/**
 *  这里是在环境变更时需要更改的项目
 */

/**
 * 是否处于mock环境
 */
const mock = true;

/** 下面是正式代码，没有特殊需要切勿擅自修改 */

let MOCK_BASE_URL = "/api/dev/";
let LOCAL_BASE_URL = "/local-api/";

/**
 * 根据环境，确认地址
 */
const baseURL = () => {
	return mock ? MOCK_BASE_URL : LOCAL_BASE_URL;
};

/**
 *  Axios工具配置
 */
const serverConfig: AxiosRequestConfig = {
	baseURL: baseURL(),
	timeout: 5000,
	responseType: "json",
	headers: {
		"Content-Type": "application/json",
		"Access-Controll-Allow-Origin": "*",
	},
};

const serverRequest = axios.create(serverConfig);

export {
	serverRequest,
	serverConfig,
};

/**
 * 根据环境确定是否需要包装数据
 * @param contentOrVO 需要包装的数据或者是后端传来的VO本身
 * @returns vo - 带有数据的VO或者是VO本身
 */
/*export const responseWrap: VO<any> | any = (contentOrVO: any) => {
	return mock
		? ({
			head: [],
			msg: "请求成功",
			content: contentOrVO,
			code: 0,
			detail: "请求成功",
		} as VO<any>)
		: contentOrVO;
};
export const errorResponse = () => {
	return {
		head: [],
		msg: "请求失败",
		content: "",
		code: -1,
		detail: "请求失败",
	} as VO<string>;
};*/
