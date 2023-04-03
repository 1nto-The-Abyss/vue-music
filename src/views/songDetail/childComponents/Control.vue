<template>
  <div class="control" v-if="songInfo">
    <!-- 喜欢、评论、留言、分享 -->
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
    <!-- 进度条 -->
    <div class="progress">
      <div class="time">{{nowTime}}</div>
      <van-slider 
        v-model="currentRate"
        bar-height=".06rem" 
        active-color="#d43c33" 
        style="width: '60%'"
        @change="changeSlider"
      >
        <template #button>
          <div class="custom-button"></div>
        </template>
      </van-slider>
      <div class="time">{{totalTime}}</div>
    </div>
    <!-- 播放控制 -->
    <div class="broadcast">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishou"></use>
      </svg>
      <svg 
        class="icon playIcon" 
        aria-hidden="true" 
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
</template>
<script>
import{ computed, ref, watch } from 'vue'
import { useStore } from 'vuex';
export default {
  name: "Control",
  setup(props) {
    const store = useStore()
    // 播放器当前时间
    let nowTime = ref('00:00')
    // 播放器总共时间
    let totalTime = ref('00:00')
    // 播放器进度
    let currentRate = ref(0)

    // 获取播放状态
    const isPlayed = computed(() => store.getters.isPlayed)
    // 获取播放器信息
    const audio = computed(() => store.getters.audio)
    // 获取当前时间
    const currentTime = computed(() =>  store.getters.currentTime)

    // 播放器图标
    const playIcon = computed(() => {
      return isPlayed.value ? '#icon-zanting' : '#icon-bofang'
    })

    // 点击切换播放状态
    const play = () => {
      store.commit('changePlay',!props.isPlayed)
    }

    // 滑动滑块
    const changeSlider = () => {
      // 更新currentTime
      const time = (currentRate.value * props.songInfo.dt) / 100
      store.commit('updateCurrentTime',time)
      // 更新播放器
      audio.value.currentTime = time
      store.commit('updateAudio',audio.value)
    }
    // 获取总时长
    watch(props,(newValue, oldValue) => {
      totalTime.value = formatTime(props.songInfo.dt)
    })
    // 监听当前时间,控制滑块
    watch(currentTime,(newValue,oldValue) => {
      nowTime.value = formatTime(currentTime.value)
      currentRate.value = (currentTime.value/props.songInfo.dt)*100
      // console.log("监听currentTime",currentTime.value);
    })
    // 格式化时间 从秒数转换成00:12这种
    const formatTime = (time) => {
      const min = String(Math.floor(time/60)).padStart(2, '0')
      const sces = String(Math.floor(time%60)).padStart(2, '0')
      return min + ':' + sces
    }
    return {
      nowTime,
      totalTime,
      currentRate,
      changeSlider,
      play,
      playIcon
    }
  },
  props: ['isPlayed', 'songInfo']
}
</script>
<style scoped lang="less">
.control {
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  .progress {
    display: flex;
    align-items: center;
    .custom-button {
      width: .2rem;
      height: .2rem;
      border-radius: 50%;
      background-color: #d43c33;
    }
    .time {
      width: 30%;
      text-align: center;
      color: #fff;
    }
  }
  .broadcast {
    display: flex;
    justify-content: space-around;
    .icon {
      width: .6rem;
      height: .6rem;
    }
    .playIcon {
      width: .9rem;
      height: .9rem;
      position: relative;
      bottom: .15rem;
    }
  }
}
</style>