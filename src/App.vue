<template>
  <top-nav v-show="showNav"></top-nav>
  <router-view/>
  <Player v-show="showPlayer"></Player>
</template>
<script>
import TopNav from "./components/nav/TopNav.vue";
import Player from "@/components/player/Player.vue"
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


export default {
  components: {
    TopNav,
    Player
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const showPlayer = computed(() => store.state.showPlayer)
    const showNav = ref(false)

    watch(() => router,(newVal) => {
      console.log(newVal.currentRoute.value.name);
      const routerName = router.currentRoute.value.name
      if(routerName =='Home' || routerName =='Mine' || routerName == 'Yuncun' || routerName == 'Video') {
        showNav.value = true
      }
    },{
      deep: true,
      immediate: true
    })
    return { showPlayer, showNav }
  },
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: .4rem; 
  height: .4rem;
  vertical-align: -0.08rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
