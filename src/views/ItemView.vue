<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <UserProfile>
        <div slot="username">
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        </div>
        <template slot="time">Posted {{ fetchedItem.time_ago }}</template>
      </UserProfile>
    </section>

    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
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
    ...mapGetters(['fetchedItem']),
  },
  created() {
    console.log( this.$route.params.id );
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id );
  }
}


</script>

<style scoped>
section{padding:20px;}
div.user-container{padding:30px;text-align:center;}
div.user-container .user{font-size:40px;color:rgb(29, 65, 141);text-decoration:none;border-radius:3px;}
div.user-container .time{color:#a0a0a0;margin-top:10px;}
</style>