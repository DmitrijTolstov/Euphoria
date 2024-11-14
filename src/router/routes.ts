import { createMemoryHistory, createRouter } from 'vue-router'
import Sign from '../layouts/Sign.vue'
import Home from '../layouts/Home.vue'
import Section from '../layouts/Section.vue'
import FullCardDescription from '../layouts/FullCardDescription.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/mencategory', name:'Men', component: Section },
  { path: '/womencategory', name:'Women',  component: Section },
  { path: '/shop', component: Home },
  { path: '/fullDescription',name:'card', component: FullCardDescription },
]


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router