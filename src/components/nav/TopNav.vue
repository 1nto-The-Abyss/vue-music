<template>
import { useRouter } from 'vue-router';
  <div class="topNav">
    <!-- <div class="bg"></div> -->
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <van-search shape="round" @focus="toSearch"></van-search>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tinggeshiqu"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';


export default {
  name: "BottomNav",
  setup() {
    const router = useRouter
    const toSearch = () => {
      router.push({
        url: '/Search'
      })
    }
    return { 
      toSearch
    }
  }
}
</script>
<style scoped lang="less">
.topNav {
  display: flex;
  width: 100%;
  height: 1rem;
  padding: 0 .28rem;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  // position: fixed;
  // top: 0;
  .bg {
    width: 100%;
    height: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(238,154,175,0.18) 0%, rgba(255,255,255,0.65) 57%, rgba(255,255,255,1) 100%);
  }
  .van-search {
    width: 85%;
  }
}
</style>