<template>
  <div>
    <van-swipe :autoplay="3000" lazy-render indicator-color="#d43c33">
      <van-swipe-item v-for="image in images.list" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { _getBanner } from '@/api/home'
import { reactive,onMounted } from 'vue'
export default {
  name: "TopSwiper",
  setup() {
    const images = reactive({
      list: []
    })
    onMounted(async () => {
      let res = await _getBanner()
      images.list = res.data.banners
    })
    return { images };
  }
};
</script>
<style scoped lang="less">
.van-swipe {
  width: 100%;
  height: 3rem;
  .van-swipe-item {
    padding:  0 0 .2rem;
    text-align: center;
    img {
      width: 95%;
      height: 100%;
      border-radius: .2rem;
    }
  }
}
</style>