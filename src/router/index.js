import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import ('../views/home/index.vue')
// 歌单详情页
const PlayListDetail = () => import ('../views/playListDetail/index.vue')
// 歌曲播放页
const SongDetail = () => import('../views/songDetail/index.vue')
// 我的
const Mine = () => import('../views/mine/index.vue')
// 关注
const Guanzhu = () => import('../views/guanzhu/index.vue')
// 搜索
const Search = () => import('../views/search/index.vue')


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
    path: '/Guanzhu',
    name: 'Guanzhu',
    component: Guanzhu
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
