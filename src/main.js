import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // импортируем наш маршрутизатор

const app = createApp(App);
app.use(router); // подключаем маршрутизатор
app.mount('#app');
