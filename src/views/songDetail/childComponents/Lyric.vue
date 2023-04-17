<template>
<div class="lyric">
  <div class="lyric_box" ref="lyricBox">
    <p 
      v-for="(item, index) in lyricArr" 
      :class="index==activeIndex?'item_active':'item'"
      ref="lyricItem"
    >
      {{item.word}}
    </p>
  </div>
</div>
</template>
<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  name: "Lyric",
  setup(props) {
    const store = useStore()
    // 获取歌词
    const lyricArr = computed(() => store.getters.lyric)
    // 获取当前时间
    const currentTime = computed(() => store.getters.currentTime)
    // 歌词样式
    const activeIndex = ref(0)
    // 歌词元素
    const lyricItem = ref(null)
    // 滚动高度
    const scrollHeight = ref(0)
    // 获取歌词已经滚动的高度
    const lyricBox = ref(null) 
    // 播放控制歌词滚动
    watch(currentTime,(newValue, oldValue) => {
      const arr = lyricArr.value
      // 遍历歌词，通过对应时间判断编号为几的歌词高亮
      arr.forEach((item,index) => {
        if((item.time<currentTime.value && arr[index+1].time>currentTime.value) || item.time == currentTime) {
          activeIndex.value = index
          // 歌词的scrollHeight为26
          scrollHeight.value = -index*26 + 'px'
        }
      });
    })
    // 监听歌词已经滚动的高度，控制播放进度
    // watch(scrollHeight,(newValue, oldValue) => {
    //   const value = scrollHeight.value
    //   // 去掉负号和px,0px时为空值
    //   const height = value.slice(1, value.length-2)?value.slice(1, value.length-2):0
    //   // 当前歌词index
    //   const index = height/26
    //   // 更新currentTime
    //   console.log(scrollHeight.value,height,lyricArr.value[index].time);
    //   store.commit('updateCurrentTime',lyricArr.value[index].time)
    // })

    return { 
      lyricArr,
      currentTime,
      activeIndex,
      lyricItem,
      scrollHeight,
      lyricBox
    }
  }
}
</script>
<style scoped lang="less">
.lyric {
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-top: 4rem;
  .lyric_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(v-bind(scrollHeight));
    transition: transform 1s;
    .item {
      color: #e0e0e0;
      font-size: .32rem;
      margin: .1rem 0;
      &_active {
        color: #fff;
        font-size: .48rem;
        margin: .1rem 0;
      }
    }
  }
}
</style>