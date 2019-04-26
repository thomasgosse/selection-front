import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import ArtistContainer from '@/components/Artist/ArtistContainer';
import TVShowDetailContainer from '@/components/Artwork/TVShow/TVShowDetailContainer';
import AlbumDetailContainer from '@/components/Artwork/Album/AlbumDetailContainer';
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
        {
          path: 'album/:name/:id',
          name: 'AlbumPage',
          component: AlbumDetailContainer,
          props: true,
        },
        {
          path: 'tvshow/:name/:id',
          name: 'TVShowPage',
          component: TVShowDetailContainer,
          props: true,
        },
      ],
    },
  ],
});
