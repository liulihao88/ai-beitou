import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    // 高级编排
    {
      path: '/application/:id/workflow',
      name: 'ApplicationWorkflow',
      meta: { activeMenu: '/application' },
      component: () => import('@/views/application-workflow/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/header',
      name: 'Header',
      component: () => import('../views/header.vue'),
    },
    // {
    //   path: '/workflow',
    //   name: 'Workflow',
    //   component: () => import('../workflow/index.vue'),
    // },
  ],
})

export default router
