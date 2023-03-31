import { createStore } from 'vuex'

export default createStore({
  state: {
    playList: [{
      al: {
        id: 52208,
        name: "覚醒、そして降临",
        pic: 4442026976217718,
        picUrl: "http://p3.music.126.net/SfniCe5LsmFJeviAjEAlpw==/4442026976217718.jpg"
      },
      id: 557912,
      name: "次回予告",
      ar:[{ 
        name: "arlie Ray",
        id:16077
      }]
    }], // 播放列表
    playListIndex: 0, // 歌单列表下标,默认为0
    songId: 557912, // 歌曲ID
    isPlayed: false, //播放状态
    showSongDetail: true // 打开歌曲详情页
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
    updateShowSongDetail(state) {
      state.showSongDetail = !state.showSongDetail
    }
  },
  actions: {
  },
  modules: {
  }
})
