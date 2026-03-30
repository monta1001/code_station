import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// استورد الصفحات
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Clients from './views/Clients.vue'

// عرف Routes
const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/clients', component: Clients },
]

// انشئ Router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// اربط Router بالتطبيق
createApp(App).use(router).mount('#app')