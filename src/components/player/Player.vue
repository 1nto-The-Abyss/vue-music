<template>
  <div class="player">
    <div class="left">
      <div class="song_img">
        <img :src="playList[playListIndex].al.picUrl">
      </div>
      <div class="info" @click="$router.push('/SongDetail')">
        <div class="name">{{playList[playListIndex].name}}</div>
        <div class="author">
          <span v-for="item in playList[playListIndex].ar">{{item.name}}</span>
        </div>
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
    <audio 
      ref="myAudio" 
      preload="auto"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"/>
  </div>
</template>
<script>
import { ref, computed, onMounted, watch } from 'vue'
import { mapState,useStore, mapMutations } from 'vuex'

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
    const songId = computed(() => store.getters.songId)
    // 获取当前时间
    const currentTime = computed(() => store.getters.currentTime)

    // 点击切换播放状态
    const changePlay = (value) => store.commit('changePlay',value)
    const play = () => {
      changePlay(!isPlayed.value)
    }

    // 播放器图标
    const playIcon = computed(() => {
      return isPlayed.value ? '#icon-zanting' : '#icon-bofang'
    })

    // 监听歌曲Id，发生改变时播放歌曲
    watch(songId,(newValue, oldValue) => {
      myAudio.value.autoplay = true
      store.commit('changePlay',true)
      store.commit('updateAudio',myAudio.value)
    })

    // 监听播放状态暂停或播放
    watch(isPlayed,(newValue, oldValue) => {
      if(isPlayed.value) {
        myAudio.value.play()
      } else {
        myAudio.value.pause()
      }
    })
    
    onMounted(() => {
      store.commit('updateAudio',myAudio.value)
    })
    return {
      playList,
      playListIndex,
      isPlayed,
      songId,
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
  height: 1rem;
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
    transform: translateY(-0.08rem);
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .info {
    width: 75%;
    padding-left: .1rem;
    .author {
      font-size: .2rem;
      color: #666;
      span {
        margin-right: .1rem
      }
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