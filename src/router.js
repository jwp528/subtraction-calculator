import Vue from 'vue';
import Router from 'vue-router';
import Calculator from './views/Calculator.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Calculator,
    },
  ],
});
