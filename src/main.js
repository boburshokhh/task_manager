import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import { VCard, VCardTitle, VForm, VTextField, VBtn, VAlert,VToolbar,
    VAppBarNavIcon,
    VToolbarTitle,
    VSpacer,
    VIcon, } from 'vuetify/components';
import 'vuetify/styles';


const vuetify = createVuetify({
    components: {
        VCard,
        VCardTitle,
        VForm,
        VTextField,
        VBtn,
        VAlert, VToolbar,
        VAppBarNavIcon,
        VToolbarTitle,
        VSpacer,
        VIcon,
    },
});

const app = createApp(App);
app.use(router);
app.use(vuetify)
app.mount('#app');
