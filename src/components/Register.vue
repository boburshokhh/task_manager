<script>
import AuthenticationService from "@/services/AuthenticationService.js";
import { useRouteStore } from "@/store/index.js";
import Panel from "@/components/Panel.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      message: null,
      isLoading: false,
    };
  },
  components:{
    Panel
  },
  setup() {
    const routeStore = useRouteStore(); // Вызываем один раз
    return { routeStore };
  },
  methods: {
    async register() {
      this.isLoading = true;
      this.message = null;

      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.message = { text: response.data.message, type: "success" };
        this.routeStore.setToken(response.data?.user?.token);

      } catch (error) {
        this.message = {
          text: error.response?.data?.error || "Unknown error",
          type: "error",
        };
      } finally {
        this.isLoading = false;
      }
    },
  },
  computed: {
    isFormValid() {
      return this.email && this.password && !this.isLoading;
    },
  }
};
</script>


<template>
  <panel :title="'Register'">
    <v-card-text>
            <v-form>
              <v-text-field
                  v-model="email"
                  :disabled="isLoading"
                  label="Email"
                  type="email"
                  :counter="10"
                  autocomplete="off"
                  outlined
                  dense
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  :disabled="isLoading"
                  outlined
                  dense
                  autocomplete="off"
              />
            </v-form>
          </v-card-text>
    <v-card-actions>
      <v-btn
                color="primary"
                block
                :disabled="!isFormValid || isLoading"
                @click="register"
            >
              Save
      </v-btn>
          </v-card-actions>
          <v-alert
              v-if="message"
              :type="message.type"
              outlined
              class="mt-3"
          >
            <span v-html="message.text"></span>
          </v-alert>
          </panel>
</template>


<style >
.error {
  color: red;
}
.v-container {
  min-height: 100vh;
}
.success {
  color: green;
}
</style>
