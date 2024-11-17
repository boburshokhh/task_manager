<script >
  export default {
    methods:{
      navigateTo(path){
        this.$router.push(path.name)
      }

    }
  }
</script>
<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4 home" @click="navigateTo({name:'/'})">TabTracket</v-toolbar-title>
<!--    <v-toolbar-items>-->
<!--      <v-btn flat>-->
<!--        Browser-->
<!--      </v-btn>-->
<!--    </v-toolbar-items>-->
    <v-toolbar-items>
      <v-btn flat @click="navigateTo({name:'login'})">
        LogIn
      </v-btn>
      <v-btn flat @click="navigateTo({name:'register'})">
        Sing Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped>
.home{
  cursor:pointer;
}
.home:hover{
  color: #604040;
}

</style>