<template>
  <div class="song_detail" v-if="data.songInfo">
    <img :src="data.songInfo.al.picUrl" alt="" class="bg" v-if="data.songInfo.al">
    <div class="top">
      <div class="left" @click="$router.go(-1)">
        <van-icon name="arrow-down"/>
      </div>
      <div class="center">
        <Vue3Marquee>
          <div class="name" v-if="data.songInfo.al">{{data.songInfo.name}}</div>
        </Vue3Marquee>
        <div class="author">
          <span v-for="item in data.songInfo.ar">{{item.name}}</span>
        </div>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="center">
      <div class="record" v-show="!showLrc" @click="showLrc = !showLrc">
        <img src="@/assets/img/arm.png" 
          :style="{transform:isPlayed?'rotate(0deg)':'rotate(-20deg)'}" 
          class="arm"
        >
        <img src="@/assets/img/record.png" alt="" class="record_img">
        <img 
          :src="data.songInfo.al.picUrl"
          v-if="data.songInfo.al" 
          class="cover"
          :style="{animationPlayState:isPlayed?'running':'paused'}"
        >
      </div>
      <div class="lyric" v-show="showLrc" @click="showLrc = !showLrc">
        歌词歌词
        {{lyric}}
      </div>
    </div>
    <div class="bottom">
      <div class="action">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xihuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-laiyuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinyue"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
      <div class="progress">
        <audio src="" controls></audio>
      </div>
      <div class="broadcast">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xunhuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyishou"></use>
        </svg>
        <svg 
          class="icon" 
          aria-hidden="true" 
          :style="{width:'.8rem',height:'.8rem'}"
          @click="play"
        >
          <use :xlink:href="playIcon"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiayishou"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-playlist"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
// 引入跑马灯组件
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
export default {
  name: "SongDetail",
  components: { Vue3Marquee },
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
    const showLrc = ref(false)
    // 获取歌词
    const lyric = computed(() => store.getters.lyric)


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

    // 播放器图标
    const playIcon = computed(() => {
      return isPlayed.value ? '#icon-zanting' : '#icon-bofang'
    })

    // 点击切换播放状态
    const changePlay = (value) => store.commit('changePlay',value)
    const play = () => {
      changePlay(!isPlayed.value)
    }


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
      lyric,
      getSongInfo,
      playIcon,
      play
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
.top {
  width: 100%;
  height: 1.6rem;
  display: flex;
  padding: 0 .4rem;
  align-items: center;
  color: #fff;
  .left {
    width: 10%;
    display: flex;
    .van-icon {
      font-size: .56rem;
      &::before {
        vertical-align: -25%;
      }
      margin-right: .2rem;
    }
  }
  .center {
    width: 80%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: .36rem;
      width: 100%;
      white-space: nowrap;
    }
    .author {
      font-size: .2rem;
      span {
        margin-right: .1rem;
      }
    }
  }
  .right {
    width: 10%;
    text-align: right;
    .icon {
      fill: #fff;
      width: .48rem;
      height: .48rem;
    }
  }
}
.center {
  width: 100%;
  flex: 1;
  overflow: hidden;
  .record {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .arm {
      width: 1.8rem;
      height: 3rem;
      position: absolute;
      top: -.25rem;
      left: 44%;
      z-index: 1;
      transform: rotate(-20deg);
      transform-origin: 10% 10%; // 旋转点
      transition: all 1.5s;
      &_active {
        transform: rotate(0deg);
      }
    }
    .record_img {
      width: 5rem;
      height: 5rem;
      position: absolute;
      top: 1.6rem;
    }
    .cover {
      position: absolute;
      top: 2.5rem;
      width: 3.1rem;
      height: 3.1rem;
      border-radius: 50%;
      animation-name: cover;
      animation-duration: 60s;
      animation-iteration-count: infinite;
    }
    @keyframes cover {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  }
  .lyric {
    width: 100%;
    height: 100%;
  }
}
.bottom {
  width: 100%;
  height: 3rem;
  svg{
    fill: #fff;
  }
  .action {
    display: flex;
    justify-content: space-around;
    .icon {
      width: .6rem;
      height: .6rem;
    }
  }
  .center {}
  .broadcast {
    display: flex;
    justify-content: space-around;
    .icon {
      width: .6rem;
      height: .6rem;
    }
  }
}
</style>