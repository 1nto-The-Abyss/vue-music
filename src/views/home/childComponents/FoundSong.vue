<template>
  <div class="title">
    <div class="left">发现好音乐</div>
  </div>
  <div class="box">
    <van-swipe lazy-render :loop="true" :width="320" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in list.data">
        <div class="item_box" v-for="(item1,index1) in item" @click="play(item1,index*3+index1)">
          <img :src="item1.al.picUrl" alt="">
          <div class="info">
            <span class="name">{{item1.name}}</span> -
            <span class="author" v-for="item2 in item1.artists">{{item2.name}}</span>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { reactive, onMounted } from 'vue'
import { _getSong } from '@/api/home'
import { useStore } from 'vuex';

export default {
  name: "FoundSong",
  setup() {
    const store = useStore()
    let list = reactive({
      data: [],
      playList: []
    })
    // 更新歌单
    // 更新歌单列表下标和歌曲ID
    const play = (item1, index) => {
      store.commit('updatePlayList',list.playList)
      store.commit('updatePlayListIndex',{index:index, id:item1.id})
    }
    onMounted(async () => {
      const res = await _getSong()
      list.playList = res.data.result.map((item) => {
        // 这个接口歌曲信息和其他接口不一样, 需要处理一下
        item.song.id = item.id
        item.song.ar = item.song.artists
        item.song.al = item.song.album
        item.dt = item.duration
        return item.song
      })
      for(let index = 0; index < list.playList.length; index = index+3) {
        list.data.push(list.playList.slice(index,index+3))
      }
    })
    return {
      list,
      play
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
}
.box {
  width: 100%;
  position: relative;
  overflow: hidden;
  .van-swipe-item {
  }
  .item_box {
    width: 100%;
    display: flex;
    align-items: center;
    padding: .2rem .4rem;
    img {
      width: .8rem;
      height: .8rem;
      border-radius: .2rem;
    }
    .info {
      position: relative;
      flex: 1;
      margin-left: .2rem;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.3rem;
        width: 100%;
        border-bottom: .02rem solid #dbdbdb;
      }
      .name {
        max-width: 2.4rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .author {
        font-size: .2rem;
        color: #666;
        margin-right: 5px;
      }
    }
  }
}
</style>