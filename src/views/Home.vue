<template>
  <div class="home">
    <top-nav></top-nav>
    <top-swiper></top-swiper>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import TopSwiper from '@/components/home/TopSwiper.vue'
export default {
  name: 'Home',
  components: {
    TopNav
  }
}
</script>
