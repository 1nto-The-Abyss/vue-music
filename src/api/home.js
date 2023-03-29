import { request } from '@/utils/request'

// 首页-轮播图
export function getBanner() {
  return request({
    url: '/banner?type=2',
  })
}