<template>
  <div id="news">
    <div v-for="item in fetchedNews" v-bind:key="item">
      {{ item.title }}
      <small>
        by <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
      </small>
    </div>
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
