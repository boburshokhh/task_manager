import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia, { useRouteStore } from './store';
import { createVuetify } from 'vuetify';
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';
import 'vuetify/styles';
import * as mdiIcons from '@mdi/js';

router.afterEach((to, from) => {
    const routeStore = useRouteStore();
    routeStore.updateRoute(to, from);
});

const vuetify = createVuetify({
    components: {
        ...components,
    },
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases: {
            magnify: mdiIcons.mdiMagnify,
            heart: mdiIcons.mdiHeart,
            dotsVertical: mdiIcons.mdiDotsVertical,
        },
        sets: {
            mdi: {
                component: 'svg', // Использование SVG иконок
            },
        },
    },
});

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(vuetify);
app.mount('#app');
