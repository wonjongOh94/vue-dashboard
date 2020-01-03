import Vue from 'vue';
import Vuex from 'vuex';
import fetchNewsList from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: []
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(res => {
          console.log(res.data);
          context.commit('SET_NEWS', res.data); // 데이터를 mutation으로 넘김
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});