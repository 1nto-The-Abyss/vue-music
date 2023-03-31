<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <top-nav></top-nav>
    <!-- 顶部轮播图 -->
    <top-swiper></top-swiper>
    <!-- 功能列表 -->
    <feature-list></feature-list>
    <!-- 歌单列表 -->
    <found-play-list></found-play-list>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import TopSwiper from '@/components/home/TopSwiper.vue'
import FeatureList from '@/components/home/FeatureList.vue'
import FoundPlayList from '@/components/home/FoundPlayList.vue'
export default {
  name: 'Home',
  components: {
    TopNav,
    TopSwiper,
    FeatureList,
    FoundPlayList
  }
}
</script>
