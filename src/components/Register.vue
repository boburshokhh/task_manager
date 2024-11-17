<script>
import AuthenticationService from "@/services/AuthenticationService.js";

export default {
  data(){
    return{
      mail:"abc",
      password:"123"
    }
  },
  methods:{
    async register(){
      const response = await  AuthenticationService.register({
        email:this.email,
        password:this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<template>
  <div>
    <h1>Register</h1>
    <div>
      <input type="email" v-model="mail" name="email" placeholder="email">
      <br>
      <input type="password" v-model="password" name="password" placeholder="password">
      <br>
      <button @click="register">Save</button>
    </div>
  </div>
</template>

<style scoped>

</style>