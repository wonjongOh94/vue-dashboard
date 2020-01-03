<template>
  <div id="news">
    <div v-for="user in fetchedNews" v-bind:key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

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

    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style>

</style>
