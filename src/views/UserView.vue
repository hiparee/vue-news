<template>
  <div>
    <p>name: {{ fetchedUser.id }}</p>
    <p>karma : {{ fetchedUser.karma }}</p>
    <p>created : {{ fetchedUser.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedUser'])
  },
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id );
  }
}
</script>

<style>

</style>