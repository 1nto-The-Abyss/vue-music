<template>
  <div class="player">
    <div class="left">
      <div class="track_img">
        <img :src="playList[playListIndex].al.picUrl">
      </div>
      <div class="info">
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
</template>
<script>
import { ref, computed, onMounted, watch } from 'vue'
import { mapState,useStore } from 'vuex'
export default {
  name: "Player",
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
    const trackId = computed(() => store.getters.trackId)

    // 点击切换播放状态
    const play = () => {
      if(myAudio.value.paused) {
        myAudio.value.play()
        store.commit('changePlay',true)
      } else {
        myAudio.value.pause()
        store.commit('changePlay',false)
      }
    }
    // 播放器图标
    let playIcon = computed(() => {
      return isPlayed.value ? '#icon-zanting' : '#icon-bofang'
    })

    watch(trackId,(newValue, oldValue) => {
      myAudio.value.autoplay = true
      store.commit('changePlay',true)
    })

    return {
      playList,
      playListIndex,
      isPlayed,
      myAudio,
      play,
      playIcon
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
  .track_img {
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