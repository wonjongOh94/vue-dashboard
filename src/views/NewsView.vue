<template>
  <div id="news">
    <div v-for="user in users" v-bind:key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import * as api from '../api/index.js';
const { fetchNewsList } = api;

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    const vm = this;
    fetchNewsList()
      .then((res) => {
        vm.users = res.data;
      })
      .catch((e) => console.log(e));
    // this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style>

</style>
