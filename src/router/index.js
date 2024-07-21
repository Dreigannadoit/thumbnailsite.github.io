import { createMemoryHistory, createRouter } from 'vue-router'

import Landing from '../pages/Landing.vue'
import None from '../pages/None.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/none', component: None },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router