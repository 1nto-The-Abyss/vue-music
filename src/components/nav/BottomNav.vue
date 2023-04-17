<template>
  <div class="bottomNav">
    <div 
      v-for="(item,index) in tabList.data" 
      class="item"
      :class="activeIndex==index?'active':''"
      @click="switchTab(item,index)"
      >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#icon-' + item.icon"></use>
      </svg>
      {{ item.title }}
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed, watch } from 'vue'
import { useRouter } from 'vue-router';
export default {
  name: "BottomNav",
  setup() {
    const router = useRouter()

    const activeIndex = ref(0)

    const routerName = computed(() => router.currentRoute.value.name)
    watch(() =>routerName, (newVal) => {
      activeIndex.value = newVal.value=='Home' ? 0 : newVal.value=='Mine'? 1 : newVal.value=='Guanzhu' ? 2 : ''
    },{
      deep: true,
      immediate: true
    })

    const tabList = reactive({
      data: [{
        title: "发现",
        path: "/",
        icon: 'yinle'
      },
      {
        title: "我的",
        path: "/Mine",
        icon: 'wode'
      },
      { 
        title: "关注",
        path: "/Guanzhu",
        icon: 'guanzhu'
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
.bottomNav {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 1rem;
  padding: 0 .28rem;
  justify-content: space-between;
  align-items: center;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .2rem;
    color: #666;
    svg {
      width: .5rem;
      height: .5rem;
    }
  }
  .active {
    font-weight: 700;
    color: #d43c33;
  }
}
</style>