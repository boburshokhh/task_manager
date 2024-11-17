import { createRouter, createWebHistory } from 'vue-router';
import Register from "@/components/Register.vue";

import Hello from '@/components/Hello.vue'

const routes = [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
