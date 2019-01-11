import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Callback from '@/components/Callback';
import Testing from '../components/Testing';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: true,
      children: [
        {
          path: 'test',
          name: 'Test',
          component: Testing,
        },
      ],
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
    },
  ],
});
