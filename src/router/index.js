import { createRouter, createWebHistory } from 'vue-router';
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Hello from '@/components/Hello.vue'
import Songs from "@/components/Songs.vue";

const routes = [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login },
    {path: '/songs', name: 'Songs', component: Songs }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
