import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import ('../views/Home.vue')
// 歌单详情页
const PlayListDetail = () => import ('../views/PlayListDetail.vue')

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
