import { createRouter, createWebHistory } from 'vue-router'
import indexHome from '/src/views/indexHome.vue'
import logIn from '/src/views/logIn.vue'
import settingItem from '/src/views/settingItem.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: logIn
    },
    {
      path: '/index',
      name:'index',
      component: indexHome,
      // props: true
    },
    {
      path:'/settingItem',
      component:settingItem,
    },

  ]
})

export default router
