<template>
  <div class="control">
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
      <div class="time">{{currentTime}}</div>
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
import{ computed, ref } from 'vue'
import { useStore } from 'vuex';
export default {
  name: "Control",
  setup(props) {
    const store = useStore()
    // 播放器当前时间
    const currentTime = ref("00:00")
    // 播放器总共时间
    const totalTime = ref("00:00")
    // 播放器进度
    const currentRate = ref(10)
    // 播放器图标
    const playIcon = computed(() => {
      return props.isPlayed ? '#icon-zanting' : '#icon-bofang'
    })

    // 点击切换播放状态
    const changePlay = (value) => store.commit('changePlay',value)
    const play = () => {
      console.log(props.isPlayed);
      changePlay(!props.isPlayed)
    }

    // 滑动滑块
    const changeSlider = () => {

    }
    return {
      currentTime,
      totalTime,
      currentRate,
      changeSlider,
      play,
      playIcon
    }
  },
  props: ['isPlayed']
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
    .custom-button {
      width: .2rem;
      height: .2rem;
      border-radius: 50%;
      background-color: #d43c33;
    }
    .time {
      width: 20%;
      text-align: center;
      color: #fff;
      position: relative;
      bottom: .1rem;
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