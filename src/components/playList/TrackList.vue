<template>
  <div v-if="tracklist" class="tarcklist">
    <div class="top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
        </svg>
        <span>播放全部</span>
        <span class="total">(共{{trackCount}}首)</span>
      </div>
      <div class="right">
        <van-button round>
          <van-icon name="plus" />
          收藏({{subscribedCount}})
        </van-button>
      </div>
    </div>
    <ul v-for="(item,index) in tracklist">
      <li class="track">
        <div class="left" @click="playTrack(item,index)">
          <div class="order">{{index + 1}}</div>
          <div class="info">
            <!-- 歌名 -->
            <div class="name">{{item.name}}</div>
            <!-- 作者 -->
            <div class="author" >
              <span v-for="item1 in item.ar">
                {{ item1.name }}
                </span>
              </div>
          </div>
        </div>
        <div class="right">
          <!-- MV标记 -->
          <div class="shipin" v-if="item.mv">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shipin"></use>
            </svg>
          </div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { ref, onMounted, reactive, watch } from 'vue'
import { _getPlayListItem } from '@/api/play'
import { mapMutations, useStore } from 'vuex';

export default {
  name: "TrackList",
  setup(props) {
    const store = useStore()
    const playTrack = (item,index) => {
      // 传入当前歌单歌曲列表
      store.commit('updatePlayList',props.tracklist)
      // 播放当前点击的歌曲
      store.commit('updatePlayListIndex',{id:item.id,index:index})
    }
    return {playTrack}
  },
  props: ['tracklist','subscribedCount','trackCount'],
}
</script>
<style scoped lang="less">
.tarcklist {
  background-color: #fff;
  border-top-right-radius: .4rem;
  border-top-left-radius: .4rem;
}
.top {
  padding: .2rem .3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    font-weight: 700;
    .icon {
      margin-right: .2rem;
    }
    .total {
      margin-left: .1rem;
      font-weight: 400;
      font-size: .24rem;
      color: #999;
    }
  }
  .right {
    .van-button {
      height: .8rem;
      padding: 0 .2rem;
      color: #fff;
      background-color: #d43c33;
      border-color: #d43c33;
    }
  }
}
.track {
  width: 100%;
  height: 1.2rem;
  padding: 0 .3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,.1);
  .left{
    display: flex;
    flex: 1;
    .order {
      text-align: left;
      width: .3rem;
      margin-right: .2rem;
      height: 100%;
      line-height: 1.2rem;
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font-weight: 700;
        margin: .1rem 0;
      }
      .author {
        font-size: .16rem;
        color: #999;
      }
    }
  }
  .right {
    display: flex;
    .shipin {
      margin-right: .3rem;
      display: flex;
    }
    .icon {
      margin:auto 0;
      fill: #999;
    }
  }
}
</style>