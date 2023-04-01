<template>
  <div class="player">
    <div class="left">
      <div class="song_img">
        <img :src="playList[playListIndex].al.picUrl">
      </div>
      <div class="info" @click="updateShowSongDetail">
        <div class="name">{{playList[playListIndex].name}}</div>
        <div class="change">滑动切换下一首</div>
      </div>
    </div>
    <div class="right">
      <div @click="play">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="playIcon"></use>
        </svg>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-playlist"></use>
      </svg>
    </div>
    <audio ref="myAudio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
  </div>
  <van-popup v-model:show="showSongDetail" :style="{ width: '100%', height: '100%', maxWidth: '100%'}" position="bottom">
    <song-detail 
      :songList="{playList:playList,playListIndex:playListIndex}"
      :isPlayed="isPlayed"
      :playIcon="playIcon"
      :play="play"
    ></song-detail>
  </van-popup>
</template>
<script>
import { ref, computed, onMounted, watch } from 'vue'
import { mapState,useStore, mapMutations } from 'vuex'
import SongDetail from '@/components/songDetail/SongDetail'
export default {
  name: "Player",
  components: { SongDetail },
  setup() {
    const store = useStore()
    const myAudio = ref(null)
    // 获取播放列表
    const playList = computed(() => store.getters.playList)
    // 获取播放列表下标
    const playListIndex = computed(() => store.getters.playListIndex)
    // 获取播放状态
    const isPlayed = computed(() => store.getters.isPlayed)
    // 获取歌曲Id
    const songId = computed(() => store.getters.songId)
    // 打开歌曲详情页
    const showSongDetail = computed(() => store.getters.showSongDetail)

    // 点击切换播放状态
    const changePlay = (value) => store.commit('changePlay',value)
    const play = () => {
      if(myAudio.value.paused) {
        myAudio.value.play(true)
        changePlay(true)
      } else {
        myAudio.value.pause()
        changePlay(false)
      }
    }

    // 播放器图标
    const playIcon = computed(() => {
      return isPlayed.value ? '#icon-zanting' : '#icon-bofang'
    })

    // 监听歌曲Id，发生改变时播放歌曲
    watch(songId,(newValue, oldValue) => {
      myAudio.value.autoplay = true
      store.commit('changePlay',true)
    })

    return {
      playList,
      playListIndex,
      isPlayed,
      myAudio,
      play,
      playIcon,
      showSongDetail,
      // 开关歌曲详情页
      updateShowSongDetail: () => store.commit('updateShowSongDetail'),
    }
  }

}
</script>
<style scoped lang="less">
.player {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.2rem;
  box-shadow: 0 .04rem .08rem rgba(0,0,0,.4);
  display: flex;
  background-color: #fff;
}
.left {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  .song_img {
    width: 25%;
    text-align: center;
    vertical-align: middle;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .info {
    width: 75%;
    padding-left: .1rem;
    .change {
      font-size: .2rem;
      color: #666;
    }
    .name {
      width: 100%;
      white-space: nowrap;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #666;
      margin-top: .1rem;
    }
  }
}
.right {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 .2rem;
  .icon {
    width: .6rem;
    height: .6rem;
    fill: #666;
    display: block;
  }
}
</style>