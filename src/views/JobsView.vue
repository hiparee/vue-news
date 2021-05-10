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

export default {
  components: {
    ListItem
  }
}
</script>

<style scoped>
</style>