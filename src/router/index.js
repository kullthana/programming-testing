import { createRouter, createWebHistory } from 'vue-router'
import ProgrammingTesting from '@/views/ProgrammingTesting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProgrammingTesting',
      component: ProgrammingTesting
    }
  ]
})

export default router
