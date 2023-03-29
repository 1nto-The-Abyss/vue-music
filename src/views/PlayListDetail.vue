<template>
  <div>
    <detail-top :playlist="data.playlist"></detail-top>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { _getPlayListDetail } from '@/api/play'
import DetailTop from "@/components/playList/DetailTop"
export default {
  name: "PlayListDetail",
  components: {
    DetailTop
  },
  setup() {
    const data = reactive({
      playlist: {}
    })
    onMounted(() => {
      let id = useRoute().query.id
      _getPlayListDetail(id).then((res) => {
        data.playlist = res.data.playlist
        // 防止页面刷新数据丢失
        sessionStorage.setItem('playlist',JSON.stringify(data))
      })
    })
    return {
      data
    }
  }
}
</script>
<style scoped>
</style>