<template>
  <div class="song_detail" v-if="data.songInfo">
    <!-- 背景图 -->
    <img :src="data.songInfo.al.picUrl" alt="" class="bg" v-if="data.songInfo.al">
    <!-- 顶部组件 -->
    <Top :info="data.songInfo"></Top>
    <div class="center">
      <!-- 唱片组件 -->
      <Record :isPlayed="isPlayed" :al="data.songInfo.al" v-show="!showLrc" @click="showLrc=!showLrc"></Record>
      <!-- 歌词组件 -->
      <Lyric v-show="showLrc" @click="showLrc=!showLrc"></Lyric>
    </div>
    <!-- 底部控制组件 -->
    <Control :isPlayed="isPlayed"></Control>
  </div>
</template>
<script>
import { ref, reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

import Top from './childComponents/Top'
import Record from './childComponents/Record'
import Control from './childComponents/Control'
import Lyric from './childComponents/Lyric'
export default {
  name: "SongDetail",
  components: { 
    Top,
    Control,
    Lyric,
    Record 
  },
  setup(props) {
    const store = useStore()
    const data = reactive({
      songInfo: {}
    })
    // 获取播放列表
    const playList = computed(() => store.getters.playList)
    // 获取播放列表下标
    const playListIndex = computed(() => store.getters.playListIndex)
    // 获取播放状态
    const isPlayed = computed(() => store.getters.isPlayed)
    // 获取歌曲Id
    const songId = computed(() => store.getters.songId)
    // 展示歌词
    const showLrc = ref(true)

    // 获取歌曲信息
    function getSongInfo(songId, playList, playListIndex) {
      data.songInfo = playList.value[playListIndex.value]
      store.dispatch('getLyric',songId.value)
      console.log( data.songInfo );
    }
    // 歌曲Id变化时，改变歌曲信息
    watch(songId,(newValue, oldValue) => {
      // data.songInfo = playList[playListIndex]
      // store.dispatch('getLyric',songId)
    },{immediate:true})


    onMounted(() => {
      // 隐藏播放器
      store.commit('updateShowPlayer',false)
      getSongInfo(songId, playList, playListIndex)
      // console.log(lyric);
    })
    onBeforeUnmount(() => {
      // 显示播放器
      store.commit('updateShowPlayer',true)
    })
    return {
      data,
      showLrc,
      playList,
      playListIndex,
      isPlayed,
      songId,
      getSongInfo
    }
  }
}
</script>
<style scoped lang="less">
.song_detail {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,.3);
  .bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(.4rem)
  }
}
.center {
  width: 100%;
  flex: 1;
  overflow: hidden;
}
</style>