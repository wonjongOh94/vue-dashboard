<template>
  <div id="news">
    <div v-for="item in fetchedNews" v-bind:key="item">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>
        by <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
      </small>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { bus } from '../utils/bus';

export default {
  computed: {
    // ...mapState([
    //   fetchednews: state => state.news
    // ])

    ...mapGetters([
      'fetchedNews'
    ])
  },

  created() {

    // const vm = this;
    // fetchNewsList()
    //   .then((res) => {
    //     vm.users = res.data;
    //   })
    //   .catch((e) => console.log(e));
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
        .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
            console.log('spinner ended');
        })
        .catch(() => {});
    }, 2000);
  },
};
</script>

<style>

</style>
