import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Funnels',
      component: () => import('../views/Funnels.vue'),
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: () => import('../views/Contacts.vue')
    },
    {
      path: '/Callendar',
      name: 'Callendar',
      component: () => import('../views/Callendar.vue')
    },
    {
      path: '/Reports',
      name: 'Reports',
      component: () => import ('../views/Reports.vue')
    }
  ],
})

export default router
