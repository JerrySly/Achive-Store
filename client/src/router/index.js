import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/user/:id',
    name: 'User',
    props: true,
    component: () => import('@/views/User.vue')
  },
  {
    path: '/achieves',
    name: 'Achieves',
    component: () => import('@/views/Achieves.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('@/views/Messages.vue')
  },
  {
    path: '/',
    name: 'Authorization',
    component: () => import('@/views/Authorization.vue')
  },
  {
    path: '/singUp',
    name: 'SingUp',
    component: () => import('@/views/SingUp.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import('@/views/Friends.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
