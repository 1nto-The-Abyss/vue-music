<template>
  <div class="player">
    <div class="left">
      <img :src="playList[playListIndex].al.picUrl">
      <div class="name">{{playList[playListIndex].al.name}}</div>
    </div>
    <div class="right">
      <div @click="play">
        <svg class="icon" aria-hidden="true" v-show="pauseBtnShow">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-show="!pauseBtnShow">
          <use xlink:href="#icon-zanting"></use>
        </svg>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-playlist"></use>
      </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: "Player",
  computed: {
    ...mapState(['playList','playListIndex','pauseBtnShow'])
  },
  methods: {
    ...mapMutations(['changePauseBtnShow']),
    play() {
      if(this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.changePauseBtnShow(false)
      } else {
        this.$refs.audio.pause()
        this.changePauseBtnShow(true)
      }
    },
  }
}
</script>
<style scoped lang="less">
.player {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.2rem;
  box-shadow: 0 .04rem .08rem rgba(0,0,0,.4);
  display: flex;
  background-color: #fff;
}
.left {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin: 0 .2rem;
  }
  .name {
    margin-left: .1rem;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.right {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 .2rem;
  .icon {
    width: .6rem;
    height: .6rem;
    fill: #666;
    display: block;
  }
}
</style>