<script>
export default {
  name: "Songs",
  props:["title"],
  data(){
    return{
    }
  }
}
</script>

<template>
  <v-container class="fill-height" fluid   >
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card class="pa-4" elevation="2">
          <v-card-title class="text-h5">{{ title }}</v-card-title>
          <v-card-text class = "pl-4 pr-4 pt-2 pb-2"><slot></slot></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>