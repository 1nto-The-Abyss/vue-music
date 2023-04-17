<template>
  <div class="home">
    <!-- 顶部轮播图 -->
    <top-swiper></top-swiper>
    <!-- 功能列表 -->
    <feature-list></feature-list>
    <!-- 歌单列表 -->
    <found-play-list></found-play-list>
    <!-- 发现音乐 -->
    <found-song></found-song>
    <!-- 发现视频 -->
  </div>
</template>

<script>
import TopNav from '../../components/nav/TopNav.vue'
import TopSwiper from './childComponents/TopSwiper.vue'
import FeatureList from './childComponents/FeatureList.vue'
import FoundPlayList from './childComponents/FoundPlayList.vue'
import FoundSong from './childComponents/FoundSong.vue'
export default {
  name: 'Home',
  components: {
    TopNav,
    TopSwiper,
    FeatureList,
    FoundPlayList,
    FoundSong
  }
}
</script>
<style lang="less" scoped>
.home {
  padding-bottom: 2rem;
}
</style>

