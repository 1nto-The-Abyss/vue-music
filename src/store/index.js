import { _getLyric } from '@/api/play'
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
    lyric:'',// 歌词
    isPlayed: false, //播放状态
    showPlayer: true, //是否显示播放器
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
    // 歌词
    lyric(state) {
      // 对歌词进行处理
      // arr = state.lyric.split(/[(\r\n)\r\n]+/).map((item) => {

      // })
      return state.lyric
    },
    // 切换播放器显示
    showPlayer(state) {
      return state.showPlayer
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
    },
    // 更新播放列表下标和歌曲Id
    updatePlayListIndex(state, value) {
      state.playListIndex = value.index
      state.songId = value.id
    },
    // 更新歌词
    updateLyric(state,value) {
      state.lyric = value
    },
    // 是否显示播放器
    updateShowPlayer(state,value) {
      state.showPlayer = value
    }
  },
  actions: {
    // 获取歌词
    async getLyric(context, value) {
      let res = await _getLyric(context.state.songId)
      res = res.data.lrc.lyric
      context.commit("updateLyric",res)
      console.log(res);
    }
  },
  modules: {
  }
})
