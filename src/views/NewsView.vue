<template>
  <div>
    <p v-for="(item, index) in this.$store.state.news" v-bind:key="index">
      <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>

      <small>{{ item.time_ago }} by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    //   .then( response => {
    //     console.log( response );
    //     this.users = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log( error );
    //   })
  }
}
</script>

<style>

</style>