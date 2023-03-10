import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/connect',
      name: 'connect',
      component: () => import('../views/ConnectView.vue')
    },
    {
      path: '/disconnect',
      name: 'disconnect',
      component: () => import('../views/DisconnectView.vue')
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('../views/MembersView.vue')
    },
    {
      path: '/member/:id',
      name: 'member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/talks/:id',
      name: 'talks',
      component: () => import('../views/TalksView.vue')
    },
    {
      path: '/del_talks/:id',
      name: 'del_talks',
      component: () => import('../views/DeleteTalksView.vue')
    },
    {
      path: '/edit_talks/:id',
      name: 'edit_talks',
      component: () => import('../views/EditTalksView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../views/PostView.vue')
    }
  ]
})

export default router
