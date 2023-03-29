// 封装axios
import axios from 'axios'

const baseURL="http://localhost:3000";

// 添加请求拦截器
export function request(config) {
  const instance = axios.create({
      baseURL,
      timeOut: 2000
  });
  // 请求拦截
  instance.interceptors.request.use(data => {
      return data;
  }, err => {
      console.log(err);
  });
  // 响应拦截
  instance.interceptors.response.use(data => {
      return data;
  }, err => {
      console.log(err);
  });
  // 发送真正的网络请求
  return instance(config);
}
