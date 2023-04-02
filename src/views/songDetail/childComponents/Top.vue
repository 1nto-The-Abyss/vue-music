<template>
  <div class="top" v-if="info">
    <div class="left" @click="$router.go(-1)">
      <van-icon name="arrow-down"/>
    </div>
    <div class="center">
      <Vue3Marquee>
        <div class="name" v-if="info.al">{{info.name}}</div>
      </Vue3Marquee>
      <div class="author">
        <span v-for="item in info.ar">{{item.name}}</span>
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>
</template>
<script>
// 引入跑马灯组件
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

export default {
  name: "Top",
  components: {
    Vue3Marquee,
  },
  setup(props) {
    
  },
  props: ['info']
}
</script>
<style scoped lang="less">
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
</style>