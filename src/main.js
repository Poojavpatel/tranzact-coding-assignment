// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  components: { App },
  template: '<App/>',
});
