import * as api from '../api/index.js';
const { fetchNewsList,fetchUserInfo } = api;

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
    FETCH_NEWS({commit}) {
      fetchNewsList()
        .then(({data}) => {
          commit('SET_NEWS', data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    FETCH_USER({commit}, name) {
      fetchUserInfo(name)
        .then(({data}) => {
          commit('SET_USER', data);
        })
        .catch(e => {
          console.log(e);
        });
    }
};