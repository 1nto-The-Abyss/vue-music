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
    playListIndex: 0, // 歌单列表下标,默认为0
    songId: 1446137141, // 歌曲ID
    isPlayed: false, //播放状态
    showSongDetail: false // 打开歌曲详情页
  },
  getters: {
    // 播放列表
    playList(state) {
      return state.playList
    },
    // 播放列表下标
    playListIndex(state) {
      return state.playListIndex
    },
    // 歌曲Id
    songId(state) {
      return state.songId
    },
    // 播放状态
    isPlayed(state) {
      return state.isPlayed
    },
    // 打开歌曲详情页
    showSongDetail(state) {
      return state.showSongDetail
    }
  },
  mutations: {
    // 切换播放状态
    changePlay(state, value) {
      state.isPlayed = value
    },
    // 导入播放列表
    updatePlayList(state, value) {
      state.playList = value
      console.log(state.playList);
    },
    // 更新播放列表下标和歌曲Id
    updatePlayListIndex(state, value) {
      state.playListIndex = value.index
      state.songId = value.id
    },
    // 歌曲详情页开关
    updateShowTSongDetail(state) {
      console.log("1111");
      state.showSongDetail = !state.showSongDetail
    }
  },
  actions: {
  },
  modules: {
  }
})
