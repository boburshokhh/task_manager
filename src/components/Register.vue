<script>
import AuthenticationService from "@/services/AuthenticationService.js";
import { useRouteStore } from "@/store/index.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      message: null,
      isLoading: false,
    };
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
        console.log("response.data.User.token:",response.data.user.token)
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
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card class="pa-5" elevation="10">
          <v-card-title class="text-h5 text-center">Register</v-card-title>
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
