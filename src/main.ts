import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/styles/main.scss'
import App from '@/App.vue'
import router from '@/router/routes.ts'

const pinia = createPinia()
const app = createApp(App)

app
.use(pinia)
.use(router)
.mount('#app')
