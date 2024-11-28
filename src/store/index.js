import { createPinia, defineStore } from 'pinia';

export const useRouteStore = defineStore('userInfo', {
    state: () => ({
        currentRoute: null,
        previousRoute: null,
        token: null,
        user: null,
        isUserLoggedIn: false,
    }),
    actions: {
        updateRoute(to, from) {
            this.previousRoute = from;
            this.currentRoute = to;
        },
        setToken(token) {
            this.token = token;
            this.isUserLoggedIn = !!token;
        },
        setUser(user) {
            this.user = user;
        },
        logout() {
            this.token = null;
            this.user = null;
            this.isUserLoggedIn = false;
        },
    },
    getters: {
        getToken: (state) => state.token,
        isLoggedIn: (state) => state.isUserLoggedIn,
        getCurrentRoute: (state) => state.currentRoute,
    },
});

const pinia = createPinia();
export default pinia;
