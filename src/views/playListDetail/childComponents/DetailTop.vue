<template>
  <!-- playlist.creator传值成功再渲染数据 -->
  <div v-if="playlist.creator" class="detail_top">
    <img :src="playlist.coverImgUrl" alt="背景图片" class="bgImg">
    <div class="top">
      <div class="left">
        <van-icon name="arrow-left" @click="$router.go(-1)"/>
        <span>歌单</span>
      </div>
      <div class="right">
        <van-icon name="search" />
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
    <div class="center">
      <div class="left">
        <img :src="playlist.coverImgUrl" alt="">
        <span>▶{{formatCount(playlist.playCount)}}</span>
      </div>
      <div class="right">
        <div class="name">{{playlist.name}}</div>
        <div class="creator">
          <img :src="playlist.creator.avatarUrl" alt="作者头像">
          <div class="name">
            {{playlist.creator.nickname}} 
          </div>
        </div>
        <div class="description">{{playlist.description}}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <span>{{playlist.commentCount}}</span>
      </div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{playlist.shareCount}}</span>
      </div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
    <img src="" alt="">
  </div>
</template>
<script>
import formatCount from '@/hooks/formatCount'
export default {
  name: "DetailTop",
  setup(props) {
    // 页面刷新，丢失数据
    // creator层级太深，DOM加载完成时获取不到值
    // 判断props是否传值成功，不成功从本地存储中取
    // if(!props.playlist.creator) {
    //   props.playlist.creator = JSON.parse(sessionStorage.getItem('playlist')).playlist.creator
    // }
    return {formatCount}
  },
  props: ['playlist']
}
</script>
<style scoped lang="less">
.detail_top {
  position: relative;
  .bgImg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 8rem;
    z-index: -1;
    filter: blur(.4rem)
  }
}
.top {
  padding: 0 .2rem;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #fff;
  .left {
    font-size: .4rem;
    span {
      margin-left: .2rem; 
    }
  }
  .right {
    font-size: .4rem;
    .van-icon-search {
      margin-right: .4rem;
    }
    .icon {
      fill: #fff;
    }
  }
}
.center {
  width: 100%;
  padding: .3rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: .3rem;
  .left {
    width: 40%;
    position: relative;
    img {
      position: absolute;
      right: .2rem;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: .2rem;
    }
    span {
      color: #fff;
      font-size: .2rem;
      position: absolute;
      right: .3rem;
      top: .1rem;
    }
  }
  .right {
    width: 60%;
    padding-left: .2rem;
    .name {
      color: #fff;
      font-weight: 700;
    }
    .creator {
      margin: .2rem 0;
      display: flex;
      align-items: center;
      img {
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        margin-right: .1rem;
      }
      .name {
        color: #e7e7e7;
        font-size: .16rem;
      }
    }
    .description {
      font-size: .2rem;
      color: #e7e7e7;
      line-height: .4rem;
      height: .8rem;
      overflow: hidden;
    }
  }
}
.bottom {
  display: flex;
  height: 1.2rem;
  align-items: center;
  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: .48rem;
      height: .48rem;
      fill: #eaeaea;
    }
    span {
      color: #fff;
      margin-top: .2rem;
    }
  }
}
</style>