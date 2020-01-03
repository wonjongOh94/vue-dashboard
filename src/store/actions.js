import * as api from '../api/index.js';
const { fetchNewsList } = api;

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
    }
};