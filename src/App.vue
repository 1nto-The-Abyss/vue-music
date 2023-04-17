<template>
  <top-nav v-show="showNav" :showBg="showBg"></top-nav>
  <div class="content" ref="content">
    <router-view/>
  </div>
  <Player v-show="showPlayer" :style="{bottom:showNav? '1rem' : '0'}"></Player>
  <BottomNav v-show="showNav"></BottomNav>
</template>
<script>
import TopNav from "./components/nav/TopNav.vue";
import Player from "@/components/player/Player.vue"
import BottomNav from "./components/nav/BottomNav.vue";
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


export default {
  components: {
    TopNav,
    Player,
    BottomNav
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const showPlayer = computed(() => store.state.showPlayer)

    const showNav = ref(false)
    const routerName = computed(() => router.currentRoute.value.name)
    watch(() =>routerName, (newVal) => {
      if(newVal.value =='Home' || newVal.value =='Mine' || newVal.value == 'Guanzhu') {
        showNav.value = true
      } else {
        showNav.value = false
      }
    },{
      deep: true,
      immediate: true
    })

    const content = ref(null)
    // 顶部导航栏背景控制
    const showBg = ref(true)
    const scrollTop = computed(() => content.value?.scrollTop)
    watch(()=> scrollTop,(newVal) => {
      console.log(newVal);
    }, {
      deep:true,
      immediate: true
    })
    onMounted(() => {
      // console.log(content);
    })
    return { 
      showPlayer, 
      showNav, 
      content, 
      showBg 
    }
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
.content {
  height: calc(100vh - 1.5rem);
  overflow: auto;
}
</style>
