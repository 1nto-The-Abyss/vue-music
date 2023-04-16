import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import ('../views/home/Home.vue')
// 歌单详情页
const PlayListDetail = () => import ('../views/playListDetail/PlayListDetail.vue')
// 歌曲播放页
const SongDetail = () => import('../views/songDetail/SongDetail.vue')
// 我的
const Mine = () => import('../views/mine/Mine.vue')
// 云村
const Yuncun = () => import('../views/yuncun/Yuncun.vue')
// 视频
const Video = () => import('../views/video/Video.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PlayListDetail',
    name: 'PlayListDetail',
    component: PlayListDetail
  },
  {
    path: '/SongDetail',
    name: 'SongDetail',
    component: SongDetail
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/Yuncun',
    name: 'Yuncun',
    component: Yuncun
  },
  {    
    path: '/Video',
    name: 'Video',
    component: Video
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
