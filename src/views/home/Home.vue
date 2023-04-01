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
import TopNav from './childComponents/TopNav.vue'
import TopSwiper from './childComponents/TopSwiper.vue'
import FeatureList from './childComponents/FeatureList.vue'
import FoundPlayList from './childComponents/FoundPlayList.vue'
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
