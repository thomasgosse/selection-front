import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Callback from '@/components/Callback';
import ArtistContainer from '@/components/Artist/ArtistContainer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'artist/:id',
          name: 'ArtistContainer',
          component: ArtistContainer,
          props: true,
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
