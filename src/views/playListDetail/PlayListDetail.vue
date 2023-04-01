<template>
  <div>
    <!-- 歌单详情页头部 -->
    <detail-top :playlist="data.playlist"></detail-top>
    <!-- 歌单歌曲列表 -->
    <song-list :songlist="data.songlist" :subscribedCount="data.subscribedCount" :songCount="data.songCount"></song-list>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { onBeforeMount, reactive } from 'vue'
import { _getPlayListDetail } from '@/api/play'
import DetailTop from "./childComponents//DetailTop.vue"
import songlist from "./childComponents//SongList.vue"
import formatCount from '@/hooks/formatCount'
export default {
  name: "PlayListDetail",
  components: {
    DetailTop,
    songlist
  },
  setup() {
    const data = reactive({
      playlist: {}, // 歌单详情页数据
      songlist: [], // 歌单歌曲列表
      subscribedCount: 0, // 收藏数
      songCount: 0 // 歌曲数量
    })
    onBeforeMount(async () => {
      let id = useRoute().query.id
      const res = await _getPlayListDetail(id)
      data.playlist = res.data.playlist
      data.songlist = res.data.playlist.tracks
      data.subscribedCount = formatCount(res.data.playlist.subscribedCount)
      data.songCount = res.data.playlist.songCount
      
      // 防止页面刷新丢失数据
      sessionStorage.setItem('playlist',JSON.stringify(data))
    })
    return {
      data
    }
  }
}
</script>
<style scoped>
</style>