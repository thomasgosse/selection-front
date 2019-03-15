import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Callback from '@/components/Callback';
import ArtistContainer from '@/components/Artist/ArtistContainer';
import UserContainer from '@/components/User/UserContainer';

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
          path: 'user',
          name: 'UserPage',
          component: UserContainer,
          props: true,
        },
        {
          path: 'artist/:id',
          name: 'ArtistPage',
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
