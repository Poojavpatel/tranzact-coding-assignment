<template>
  <v-app>
    <v-card class="elevation-0">
      <v-card-title class="justify-center">
        Top Crypto Currency List
      </v-card-title>
      <v-card-text>
        <Coins/>
      </v-card-text>
  </v-card>
  </v-app>
</template>

<script>

import Coins from './components/Coins';

export default {
  name: 'App',
  components: {
    Coins,
  },
  data() {
    return {
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
