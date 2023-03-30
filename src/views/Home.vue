<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <top-nav></top-nav>
    <!-- 顶部轮播图 -->
    <top-swiper></top-swiper>
    <!-- 功能列表 -->
    <feature-list></feature-list>
    <!-- 歌单列表 -->
    <play-list></play-list>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import TopSwiper from '@/components/home/TopSwiper.vue'
import FeatureList from '@/components/home/FeatureList.vue'
import PlayList from '@/components/home/PlayList.vue'
export default {
  name: 'Home',
  components: {
    TopNav,
    TopSwiper,
    FeatureList,
    PlayList
  }
}
</script>
