import { createStore } from 'vuex'

export default createStore({
  state: {
    playList: [{
      al: {
        id: 162357395,
        name: "南柯一梦",
        pic: 109951168491403340,
        picUrl: "http://p4.music.126.net/SswJS5DazMUuGwlthgHRmg==/109951168491403346.jpg",
        pic_str: "109951168491403346"
      },
      id: 1446137141,
      name: "梦境旅社",
      ar:[{name: "雁夜风"}]
    }], // 播放列表
    playListIndex: 0, //默认下标为0
    pauseBtnShow: true //暂停按钮
  },
  getters: {
  },
  mutations: {
    changePauseBtnShow(state, value) {
      state.pauseBtnShow = value
      console.log(state.pauseBtnShow);
    },
    updatePlayList(state,value) {
      state.playList = value
    }
  },
  actions: {
  },
  modules: {
  }
})
