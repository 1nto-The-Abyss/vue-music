<template>
<div class="lyric">
  <div class="lyric_box">
    <p v-for="(item, index) in lyricArr" 
      :class="lyricStyle"
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
    const lyricStyle = ref("item")

    watch(currentTime,(newValue, oldValue) => {
      // console.log(currentTime.value);
      // console.log(lyricArr);
      // lyricArr.value.forEach((item,index) => {
      //   if((item.time<currentTime.value && item[index+1].time>currentTime.value) || item.time == currentTime) {
      //     lyricStyle = "item_active"
      //   }
      // });
    })
    return { 
      lyricArr,
      currentTime,
      lyricStyle 
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
    .item {
      color: #e0e0e0;
      font-size: .32rem;
      margin: .1rem 0;
      &_active {
        color: #fff;
        font-size: .4rem;
        margin: .2rem 0;
      }
    }
  }
}
</style>