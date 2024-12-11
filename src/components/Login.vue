<script>
import AuthenticationService from '@/services/AuthenticationService';
import { useRouteStore } from '../store/index.js'; // Подключаем стор Pinia
import { watch } from 'vue';  // Импортируем watch из Vue
import Panel from "@/components/Panel.vue";
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
      isLoading: false,
      message: null
    };
  },
  components:{
    Panel
  },
  setup() {
    const store = useRouteStore();

    watch(
        () => store.isLoggedIn, // Следим за isLoggedIn в store
        (newValue, oldValue) => {
          console.log('isLoggedIn changed:', newValue);
        }
    );

    return { store };
  },
  methods: {
    async login() {
      this.isLoading = true;
      this.message = null;

      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });

        this.store.setToken(response.data.User.token);
        this.message = { text: response.data.message, type: 'success' };
      } catch (error) {
        this.message = {
          text: error.response?.data?.error || 'Unknown error',
          type: 'error',
        };
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <panel :title ="'LogIn'">
          <v-card-text >
            <v-text-field
                label="Email"
                v-model="email"
                outlined
                dense
            ></v-text-field>
            <v-text-field
                label="Password"
                type="password"
                v-model="password"
                outlined
                dense
                class="mt-4"
            ></v-text-field>
            <div
                v-if="message"
                :class="message.type === 'error' ? 'text-danger' : 'text-success'"
                class="mt-4"
            >
              {{ message.text }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" @click="login" :loading="isLoading">
              Login
            </v-btn>
          </v-card-actions>
  </panel>
</template>

<style scoped>
</style>
