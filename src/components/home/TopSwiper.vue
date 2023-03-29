<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="#d43c33">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { getBanner } from '@/api/home'
import { onMounted } from 'vue'
export default {
  name: "TopSwiper",
  setup() {
    const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
    return { images };
  },
  mounted() {
    getBanner().then((res) => {
        console.log("11111",res);
      })
  },
};
</script>
<style scoped lang="less">
.van-swipe {
  width: 100%;
  height: 3rem;
  .van-swipe-item {
    padding:  0 0 .2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>