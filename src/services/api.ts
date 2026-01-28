import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiResponse } from '@/types';

// 创建 axios 实例
const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 可以在这里添加 token 等
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    // 返回 response.data 而不是完整的 response
    // 使用类型断言，因为 axios 拦截器期望返回 AxiosResponse，但我们返回 ApiResponse
    // 这是合理的，因为我们想要在调用 API 时直接得到 ApiResponse 而不是 AxiosResponse
    return response.data as unknown as AxiosResponse<ApiResponse<any>>;
  },
  (error) => {
    // 统一错误处理
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
