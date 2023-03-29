<template>
<div class="list">
  <div class="item">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-calendar"></use>
    </svg>
    <div class="title">每日推荐</div>
  </div>
  <div  class="item">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-FM"></use>
    </svg>
    <div class="title">私人FM</div>
  </div>
  <div  class="item">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-paihangbang"></use>
    </svg>
    <div class="title">排行榜</div>
  </div>
  <div class="item">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gedan"></use>
    </svg>
    <div class="title">歌单</div>
  </div>
</div>
</template>
<script>
export default {
  name: "FeatureList",
}
</script>
<style scoped lang="less">
.list {
  width: 100%;
  height: 1.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      color: #666;
    }
    .icon {
      width: .8rem;
      height: .8rem;
    }
  }
}
</style>