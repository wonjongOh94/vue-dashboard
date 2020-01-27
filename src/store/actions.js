import * as api from '../api/index.js';
const { fetchNewsList,fetchUserInfo, fetchList } = api;

export default {
      // 1번 방법
    // FETCH_NEWS(context) {
    //   fetchNewsList()
    //     .then(res => {
    //       context.commit('SET_NEWS', res.data); // 데이터를 mutation으로 넘김
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }

    // 2번 방법
    async FETCH_NEWS({commit}) {
      const response = await fetchNewsList();
      commit('SET_NEWS', response.data);
      return response;
    },

    async FETCH_USER({commit}, name) {
      const response = await fetchUserInfo(name);
      commit('SET_USER', response.data);
      return response;
    },

    async FETCH_LIST({commit}, pageName) {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response;
    }
};