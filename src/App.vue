<script>
import PageHeader from './components/Header.vue'
export  default {
  name:"app",
  components:{
    PageHeader
  },
data() {
    return{

    }
  }
}
</script>

<template>
  <div id='app'>
    <page-header/>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
