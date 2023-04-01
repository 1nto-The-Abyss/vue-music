import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import ('../views/Home.vue')
// 歌单详情页
const PlayListDetail = () => import ('../views/PlayListDetail.vue')
// 歌曲播放页
const SongDetail = () => import('../views/SongDetail.vue')

const routes = [
  {
    path: '/',
    name: 'home',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
