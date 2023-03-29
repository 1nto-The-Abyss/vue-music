import { request  } from "@/utils/request";

export function _getPlayListDetail(id) {
  return request({
    methods: 'GET',
    url: `/playlist/detail?id=${id}`
  })
}