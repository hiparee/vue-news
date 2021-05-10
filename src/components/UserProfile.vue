<template>
  <div class="user-container">
    <div class="user-description">
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>

      <slot name="time">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>

      <slot name="karma">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>

      <!-- <router-link :to="`/user/${fetchedItem.user}`" class="user">
        {{ fetchedItem.user }}
      </router-link>
      <div class="time">
        {{ fetchedItem.time_ago }}
      </div> -->
    </div> 
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  // props:{
  //   info: Object
  // },
  computed: {
    // ...mapGetters(['fetchedUser']),
    // fetchedItem() {
    //   return this.$store.state.user;
    // }
    // userInfo() {
    //   console.log( this.$store.state.user );
    //   return this.$store.state.user;
    // }
  },
  created() {
    // console.log( this.$store.state.item );
    // console.log( this.$route.params.id );
    // this.$store.dispatch('FETCH_ITEM', this.$route.params.id );
  }
}
</script>

<style scoped>
section{padding:20px;}
div.user-container{padding:30px;text-align:center;background:rgb(194, 128, 139);color:white;}
div.user-container .user{font-size:40px;color:rgb(29, 65, 141);text-decoration:none;border-radius:3px;}
div.user-container .time{color:#a0a0a0;margin-top:10px;}
</style>