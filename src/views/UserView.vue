<template>
  <div>
    <UserProfile>
      <div slot="username">{{ fetchedUser.id }}</div>
      <span slot="username">Joined {{ fetchedUser.created }}, </span>
      <span slot="karma">{{ fetchedUser.karma }}</span>
    </UserProfile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchedUser'])
  },
  created() {
    console.log( this.$route.params.id );
    this.$store.dispatch('FETCH_USER', this.$route.params.id );
  }
}
</script>

<style>

</style>