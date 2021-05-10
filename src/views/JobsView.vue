<template>
  <div>
    <ListItem></ListItem>
    <!-- <ul class="news-list">
      <li v-for="(job, index) in this.$store.state.jobs" v-bind:key="index" class="post">
        <span class="points">{{ job.points || 0 }}</span>
        <a :href="job.url" target="_blank" class="title">{{ job.title }}</a>
        <small class="time">{{ job.time_ago }}</small> 
        <small class="by">by
          <a :href="job.url">{{ job.domain }}</a>
        </small>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
// import Bus from '../utils/bus.js';

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin],
  created() {
    // Bus.$emit('start:spinner');

    // setTimeout( ()=>{
    //   this.$store.dispatch('FETCH_JOBS')
    //     .then(() => {
    //       console.log( 'fetched' );
    //       Bus.$emit('end:spinner');
    //     })
    //     .catch((error) => {
    //       console.log( error );
    //     });
    // }, 1000 );
  }
}
</script>

<style scoped>
</style>