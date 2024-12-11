<script >
import { useRouteStore } from "../store/index.js";
import { watch } from "vue"; // Подключаем стор Pinia
export default {
  methods: {
    navigateTo(path) {
      this.$router.push(path.name);
    },
    logout() {
      this.store.setToken(null);
      this.store.setUser(null);
      this.navigateTo("login");
    },
  },
  setup() {
    const store = useRouteStore();
    return { store };
  },
};
</script>
<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4 home">
      <v-btn @click="navigateTo({ name: '/' })" flat> TabTracket </v-btn>
      <v-btn @click="navigateTo({ name: 'songs' })" flat> Browser </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        v-if="!store.isLoggedIn"
        flat
        @click="navigateTo({ name: 'login' })"
      >
        LogIn
      </v-btn>
      <v-btn
        v-if="!store.isLoggedIn"
        flat
        @click="navigateTo({ name: 'register' })"
      >
        Sing Up
      </v-btn>
      <v-btn v-if="store.isLoggedIn" flat @click="logout"> Log Out </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #604040;
}
</style>