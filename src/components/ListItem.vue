<template>
  <div id="news">
    <div v-for="item in listItems" v-bind:key="item">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>
        by <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    }
  }
};
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>