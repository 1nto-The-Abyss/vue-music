<template>
  <div>
    <!-- 歌单详情页头部 -->
    <detail-top :playlist="data.playlist"></detail-top>
    <!-- 歌单歌曲列表 -->
    <track-list :tracklist="data.tracklist" :subscribedCount="data.subscribedCount" :trackCount="data.trackCount"></track-list>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { onBeforeMount, reactive } from 'vue'
import { _getPlayListDetail } from '@/api/play'
import DetailTop from "@/components/playList/DetailTop"
import TrackList from "@/components/playList/TrackList"
import formatCount from '@/hooks/formatCount'
export default {
  name: "PlayListDetail",
  components: {
    DetailTop,
    TrackList
  },
  setup() {
    const data = reactive({
      playlist: {}, // 歌单详情页数据
      tracklist: [], // 歌单歌曲列表
      subscribedCount: 0, // 收藏数
      trackCount: 0 // 歌曲数量
    })
    onBeforeMount(async () => {
      let id = useRoute().query.id
      const res = await _getPlayListDetail(id)
      data.playlist = res.data.playlist
      data.tracklist = res.data.playlist.tracks
      data.subscribedCount = formatCount(res.data.playlist.subscribedCount)
      data.trackCount = res.data.playlist.trackCount
      
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