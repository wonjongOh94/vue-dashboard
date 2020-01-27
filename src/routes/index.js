import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url 주소
      path: '/news',
      name: 'news',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: createListView('NewsView'),
      // component: createListView('NewsList');
    },
    {
      path: '/user/:id',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: UserView,
    },
  ],
});

export default router;
