<template>
  <v-app>
    <Coins/>
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
