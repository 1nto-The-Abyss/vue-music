import { _getLyric } from '@/api/play'
import { createStore } from 'vuex'

export default createStore({
  state: {
    playList: [{
      al: {
        id: 2631601,
        name: "Flower",
        pic: 5752644836589495,
        picUrl: "http://p4.music.126.net/sK2Rsvagw2iHFG6_jTqb3Q==/5752644836589495.jpg"
      },
      id: 27548281,// 歌曲ID
      name: "歌に形はないけれど",
      ar:[{ 
        name: "花たん",
        id:16523
      }],
      dt: 329.952653 // 歌曲长度
    }], // 播放列表
    playListIndex: 0, // 歌单列表下标,默认为0
    songId: 27548281, // 歌曲ID
    lyric:'',// 歌词
    isPlayed: false, //播放状态
    showPlayer: true, //是否显示播放器
    audio: {}, // 播放器属性
    currentTime: "", // 当前时间
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
      let arr = state.lyric.split('\n')
      let lyricArr= []
      arr.forEach((item) => {
        let arrItem = item.split(']')
        const time = arrItem[0].slice(1).split(':')
        lyricArr.push({
          // 时间转换成秒数
          time: parseInt(time[0])*60 + parseInt(time[1]),
          word: arrItem[1]
        })
      })
      return lyricArr
    },
    // 切换播放器显示
    showPlayer(state) {
      return state.showPlayer
    },
    // 播放器信息
    audio(state) {
      return state.audio
    },
    // 当前时间
    currentTime(state) {
      return state.currentTime
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
    updateLyric(state, value) {
      state.lyric = value
    },
    // 是否显示播放器
    updateShowPlayer(state, value) {
      state.showPlayer = value
    },
    // 更新播放器属性
    updateAudio(state, value) {
      state.audio = value
    },
    // 更新当前时间
    updateCurrentTime(state, value) {
      state.currentTime = value
    }
  },
  actions: {
    // 获取歌词
    async getLyric(context, value) {
      let res = await _getLyric(context.state.songId)
      res = res.data.lrc.lyric
      context.commit("updateLyric",res)
    }
  },
  modules: {
  }
})
