import { request  } from "@/utils/request";

// 获取歌单详情页
export function _getPlayListDetail(id) {
  return request({
    methods: 'GET',
    url: `/playlist/detail?id=${id}`
  })
}

// 获取歌单歌曲
export function _getPlayListItem(id) {
  return request({
    methods: 'GET',
    url: `/song/url?id=${id}`
  })
}