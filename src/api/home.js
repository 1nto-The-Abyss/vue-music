import { request } from '@/utils/request'

// 首页-轮播图
export function _getBanner() {
  return request({
    url: '/banner?type=2',
  })
}