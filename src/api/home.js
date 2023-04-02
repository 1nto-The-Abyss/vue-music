import { request } from '@/utils/request'

// 首页-轮播图
export function _getBanner() {
  return request({
    methods: "get",
    url: '/banner?type=2',
  })
}

// 首页-发现好歌单
export function _getPlayList() {
  return request({
    methods: "get",
    url: '/personalized'
  })
}

// 首页-发现好音乐
export function _getSong() {
  return request({
    methods: 'get',
    url: '/personalized/newsong?limit=9'
  })
}