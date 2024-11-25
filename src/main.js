import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import * as directives from 'vuetify/directives'; // Импорт директив
import * as components from 'vuetify/components'; // Импорт всех компонентов
import 'vuetify/styles';


const vuetify = createVuetify({
    components: {
        ...components,
    },
    directives,
});

const app = createApp(App);
app.use(router);
app.use(vuetify)
app.mount('#app');
