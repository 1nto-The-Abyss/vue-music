<template>
  <div class="topNav">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao2"></use>
      </svg>
    </div>
    <div class="center">
      <span class="active">我的</span>
      <span>发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomNav",
}
</script>
<style scoped lang="less">
.topNav {
  display: flex;
  width: 100%;
  height: 1rem;
  padding: 0 .28rem;
  justify-content: space-between;
  align-items: center;
  .center {
    width: 60%;
    display: flex;
    justify-content: space-between;
    font-size: .32rem;
    .active {
      font-weight: 700;
      color: #d43c33;
    }
  }
}
</style>