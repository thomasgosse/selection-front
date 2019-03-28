import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
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
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'HomePage',
          component: UserContainer,
          props: true,
        },
        {
          path: 'artist/:name/:id',
          name: 'ArtistPage',
          component: ArtistContainer,
          props: true,
        },
      ],
    },
  ],
});
