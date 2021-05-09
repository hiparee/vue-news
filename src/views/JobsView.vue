<template>
  <div>
    <p v-for="(job, index) in this.$store.state.jobs" v-bind:key="index">
      <a :href="job.url" target="_blank">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>