<template>
  <div class="lyric_box">
    <p v-for="item in lyricArr" class="item">
      {{item.word}}
    </p>
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
</style>