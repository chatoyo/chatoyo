/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { UploadConfig } from './type';
export const uploadPostForm = async <Res = any>(config: UploadConfig): Promise<Res> => {
  const formData = new FormData(); // multipart-formdata
  if(config.data) {
    Object.keys(config.data).forEach((key) => {
      formData.append(key, config.data[key]);
    });
  }

  const response = await axios.post<Res>(config.url, formData, {
    headers: {
      'X-Request-With': 'XMLHttpRequest',
    },
    onUploadProgress: (progressEvent) => {
      if (progressEvent.total) {
        const percent = (progressEvent.loaded / progressEvent.total) * 100;
        config.onProgress?.(percent);
      }
    },
  });

  return response.data;
};
