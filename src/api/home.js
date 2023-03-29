import { request } from '@/utils/request'

// 首页-轮播图
export function _getBanner() {
  return request({
    methods: "get",
    url: '/banner?type=2',
  })
}

// 首页-发现好歌单
export function _getMusicList() {
  return request({
    methods: "get",
    url: '/personalized?limit=10'
  })
}