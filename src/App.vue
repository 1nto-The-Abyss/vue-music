<template>
  <router-view/>
  <Player></Player>
</template>
<script>
import Player from "@/components/player/Player.vue"
export default {
  components: {
    Player
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
