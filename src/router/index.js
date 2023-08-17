import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: () => import('../views/TheAbout.vue') },
    { path: '/impressum', name: 'Impressum', component: () => import('../views/TheImpressum.vue') }
]

const router = createRouter({
    scrollBehavior: function (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return { el: to.hash, behavior: "smooth" };
        } else {
            window.scrollTo(0, 0);
        }
    },
    history: createWebHistory(),
    routes
})

export default router