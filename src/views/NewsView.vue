<template>
  <div id="news">
    <div v-for="user in users" v-bind:key="user">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index';

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
  },
};
</script>

<style>

</style>
