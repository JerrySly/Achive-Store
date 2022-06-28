import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('@/views/User.vue')
  },
  {
    path:'/achivments',
    name:'Achivments',
    component: ()=>import('@/views/Achivments.vue')
  },
  {
    path:'/messages',
    name:'Messages',
    component: ()=>import('@/views/Messages.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
