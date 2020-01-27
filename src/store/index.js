import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    user: [],
    item: {},
    list: [],
  },
  getters: {
    fetchedNews(state) {
      return state.news;
    },
    fetchedUser(state) {
      return state.user;
    }
  },
  mutations,
  actions,
});