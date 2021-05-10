<template>
  <div>
    <ListItem></ListItem>
    <!-- <ul class="news-list">
      <li v-for="(item, index) in fetchedAsk" v-bind:key="index" class="post">
        <span class="points">{{ item.points }}</span>
        <router-link :to="`item/${item.id}`" class="title">
          {{ item.title }}
        </router-link>

        <small class="time">{{ item.time_ago }}</small> 
        <small class="by">by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></small>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem
  },
  // computed: {
  //   // #3
  //   ...mapGetters(['fetchedAsk'])

  //   // #2
  //   // ...mapState({
  //   //   fetchedAsk: state => state.ask
  //   // })

  //   // #1
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // }
}
</script>

<style scoped>
</style>