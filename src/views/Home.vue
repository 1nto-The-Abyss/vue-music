<template>
  <div class="home">
    <top-nav></top-nav>
    <top-swiper></top-swiper>
    <feature-list></feature-list>
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
