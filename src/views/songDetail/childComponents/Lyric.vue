<template>
<div class="lyric">
  <div class="lyric_box">
    <p v-for="item in lyricArr" class="item">
      {{item.word}}
    </p>
  </div>
</div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: "Lyric",
  setup(props) {
    const store = useStore()
    const lyricArr = computed(() => store.getters.lyric)
    return { lyricArr }
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
      color: #fff;
      font-size: .32rem;
      margin: .2rem 0;
    }
  }
}
</style>