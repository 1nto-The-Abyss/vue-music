<template>
  <top-nav></top-nav>
  <router-view/>
  <Player v-show="showPlayer"></Player>
</template>
<script>
import TopNav from "./components/nav/TopNav.vue";
import Player from "@/components/player/Player.vue"
import { computed } from 'vue'
import {  useStore } from 'vuex';

export default {
  components: {
    TopNav,
    Player
  },
  setup() {
    const store = useStore()
    const showPlayer = computed(() => store.state.showPlayer)
    return { showPlayer }
  }
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
