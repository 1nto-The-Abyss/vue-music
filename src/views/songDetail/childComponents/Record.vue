<template>
  <div v-if="al" class="record">
    <img src="@/assets/img/arm.png" 
      :style="{transform:isPlayed?'rotate(0deg)':'rotate(-20deg)'}" 
      class="arm"
    >
    <img src="@/assets/img/record.png" alt="" class="record_img">
    <img 
      :src="al.picUrl"
      class="cover"
      :style="{animationPlayState:isPlayed?'running':'paused'}"
    >
  </div>
</template>
<script>
export default {
  name: "Record",
  setup(props) {
    
  },
  props: ['isPlayed', 'al']
}
</script>
<style scoped lang="less">
  .record {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .arm {
      width: 1.8rem;
      height: 3rem;
      position: absolute;
      top: -.25rem;
      left: 44%;
      z-index: 1;
      transform: rotate(-20deg);
      transform-origin: 10% 10%; // 旋转点
      transition: all 1.5s;
      &_active {
        transform: rotate(0deg);
      }
    }
    .record_img {
      width: 5rem;
      height: 5rem;
      position: absolute;
      top: 1.6rem;
    }
    .cover {
      position: absolute;
      top: 2.5rem;
      width: 3.1rem;
      height: 3.1rem;
      border-radius: 50%;
      animation-name: cover;
      animation-duration: 60s;
      animation-iteration-count: infinite;
    }
    @keyframes cover {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  }
</style>