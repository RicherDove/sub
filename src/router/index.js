import { createRouter, createWebHashHistory } from 'vue-router';
//页面路径
import Index from '../views/index.vue'
//组件路径
// import switch fro
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue')
  }, {
    path: '/show',
    name: 'Show',
    component: () => import('../views/show.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
