import { createApp } from 'vue'
import '/public/main.css'
import App from './App.vue'
import { toggleDarkMode } from './scripts/darkmode'

import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App).use(router).use(VueSmoothScroll).mount('#app')

toggleDarkMode()