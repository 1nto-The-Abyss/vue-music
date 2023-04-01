<template>
  <div class="song_detail" v-if="data.songInfo">
    <img :src="data.songInfo.al.picUrl" alt="" class="bg" v-if="data.songInfo.al">
    <div class="top">
      <div class="left" @click="updateShowSongDetail">
        <van-icon name="arrow-down"/>
      </div>
      <div class="center">
        <Vue3Marquee>
          <div class="name" v-if="data.songInfo.al">{{data.songInfo.al.name}}</div>
        </Vue3Marquee>
        <div class="author" v-for="item in data.songInfo.ar">{{item.name}}</div>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="center">
      <img src="@/assets/img/arm.png" 
        :style="{transform:isPlayed?'rotate(0deg)':'rotate(-20deg)'}" 
        class="arm"
      >
      <img src="@/assets/img/record.png" alt="" class="record">
      <img 
        :src="data.songInfo.al.picUrl"
        v-if="data.songInfo.al" 
        class="cover"
        @click="play"
        :style="{animationPlayState:isPlayed?'running':'paused'}"
      >
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
import { ref, reactive, onMounted } from 'vue'
import { mapMutations } from 'vuex'
// 引入跑马灯组件
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
export default {
  name: "SongDetail",
  components: { Vue3Marquee },
  setup(props) {
    const data = reactive({
      songInfo: {}
    })
    const updateShowSongDetail = mapMutations(['updateShowSongDetail'])
    onMounted(() => {
      data.songInfo = props.songList.playList[props.songList.playListIndex]
    })
    return {
      data,
      ...updateShowSongDetail
    }
  },
  props:[ 'songList', 'isPlayed', 'play', 'playIcon' ]
}
</script>
<style scoped lang="less">
.song_detail {
  width: 100%;
  height: 100%;
  position: relative;
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
  color: #dedede;
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
    }
  }
  .right {
    width: 10%;
    text-align: right;
    .icon {
      fill: #dedede;
      width: .48rem;
      height: .48rem;
    }
  }
}
.center {
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  .record {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2.45rem;
  }
  .cover {
    position: absolute;
    bottom: 3.4rem;
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 50%;
    animation-name: cover;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    // animation-play-state: paused;
    &_active {

    }
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
.bottom {
  width: 100%;
  height: 3.6rem;
  position: absolute;
  bottom: 0;
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