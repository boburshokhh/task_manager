<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
   async login () {
     this.isLoading=true
      this.message = null; // Очищаем предыдущее сообщение
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.message = { text: response.data.message, type: "success" };
      } catch (error) {
        this.message = { text: error.response?.data?.error || "Unknown error", type: "error" };
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card class="pa-4" elevation="2">
          <v-card-title class="text-h5">Login</v-card-title>
          <v-card-text>
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
            <div class="text-danger mt-4" v-html="error" />
          </v-card-text>
          <v-card-actions>
            <v-btn
                block
                color="primary"
                @click="login"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>