<template>
  <div>
    <div class="title">
      <div class="left">发现好歌单</div>
      <van-button type="default" round >查看更多</van-button>
    </div>
    <div class="box">
      <div class="list">
        <div class="item" v-for="item in list.data">
          <router-link :to="{path:'/PlayListDetail',query:{id:item.id}}">
            <span class="playCount">▶{{formatCount(item.playCount)}}</span>
            <img :src="item.picUrl" alt="歌单封面">
            <div class="name">{{item.name}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
import { _getPlayList } from '@/api/home'
import formatCount from '@/hooks/formatCount'
export default {
  name: "FoundPlayList",
  setup() {
    let list = reactive({
      data: []
    })
    onMounted(() => {
      _getPlayList().then((res) => {
        list.data = res.data.result
      })
    })
    return { 
      list,
      formatCount
    }
  }
}
</script>
<style scoped lang="less">
.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: .2rem;
  .left {
    font-weight: 700;
    font-size: .4rem;
    line-height: .6rem;
  }
  .van-button {
    height: .6rem;
  }
}
.box {
  width: 100vw;
  height: 2.8rem;
  position: relative;
  overflow: hidden;
}
.list {
  position: absolute;
  left: 0;
  display: flex;
  width: 100vw;
  height: 3rem;
  overflow-x: scroll;
  padding: 0 .2rem;
  .item {
    margin: .1rem;
    position: relative;
    .playCount {
      position: absolute;
      top: .1rem;
      right: .1rem;
      color: #fff;
      font-size: .12rem;
    }
    img {
      width: 2rem;
      height: 2rem;
      border-radius: .2rem;
    }
    .name {
      font-size: .16rem;
      line-height: .3rem;
      position: relative;
      height: .6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333;
    }
  }
}
</style>