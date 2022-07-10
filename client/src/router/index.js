import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('@/views/User.vue')
  },
  {
    path:'/achieves',
    name:'Achieves',
    component: ()=>import('@/views/Achieves.vue')
  },
  {
    path:'/messages',
    name:'Messages',
    component: ()=>import('@/views/Messages.vue')
  },
  {
    path:'/',
    name:'Authorization',
    component: ()=>import('@/views/Authorization.vue')
  },
  {
    path:'/registration',
    name:'Registration',
    component: ()=>import('@/views/Registration.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
