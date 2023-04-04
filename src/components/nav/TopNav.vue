<template>
  <div class="topNav">
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <div class="center">
      <span 
        v-for="(item,index) in tabList.data" 
        :class="activeIndex==index?'active':''"
        @click="switchTab(item,index)"
        >
        {{ item.title }}
      </span>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
export default {
  name: "BottomNav",
  setup() {
    const router = useRouter()

    const activeIndex = ref(0)
    const tabList = reactive({
      data: [{
        title: "发现",
        path: "/"
      },
      {
        title: "我的",
        path: "/Mine"
      },
      { 
        title: "云村",
        path: "/Yuncun"
      },
      {
        title: "视频",
        path: "/Video"
      }
    ]
    })
    const switchTab = (item,index) => {
      activeIndex.value = index
      router.push({
        path: item.path
      })
    }
    return { 
      activeIndex,
      tabList,
      switchTab 
    }
  }
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