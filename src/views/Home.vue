<template>
  <div class="home">
    <top-nav></top-nav>
    <top-swiper></top-swiper>
    <feature-list></feature-list>
    <music-list></music-list>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import TopSwiper from '@/components/home/TopSwiper.vue'
import FeatureList from '@/components/home/FeatureList.vue'
import MusicList from '@/components/home/MusicList.vue'
export default {
  name: 'Home',
  components: {
    TopNav,
    TopSwiper,
    FeatureList,
    MusicList
  }
}
</script>
