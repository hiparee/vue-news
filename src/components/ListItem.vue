<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in listItems" v-bind:key="index" class="post">
        <!-- 포인트 영역 -->
        <span class="points">{{ item.points || 0 }}</span>

        <!-- 타이틀 영역 -->
        <template v-if="item.domain">
          <a v-bind:href="item.url" target="_blank" class="title">
            {{ item.title }}
          </a>
        </template>
        <template v-else>
          <router-link :to="`item/${item.id}`" class="title">
            {{ item.title }}
          </router-link>
        </template>

        <small class="time">{{ item.time_ago }}</small> 
        <small class="by">by 
          <template v-if="item.user">
            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </template>
          <template v-else>
            <a :href="item.url">{{ item.domain }}</a>
          </template>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    console.log( this.$route );
    const name = this.$route.name;
    if( name === 'news' ){
      this.$store.dispatch('FETCH_NEWS');
    } else if( name === 'ask' ) {
      this.$store.dispatch('FETCH_ASK');
    } else if( name === 'jobs' ) {
      this.$store.dispatch('FETCH_JOBS');
    }
  },
  computed: {
    listItems() {
      const name = this.$route.name;

      if( name === 'news' ) {
        return this.$store.state.news;
        
      } else if( name === 'ask' ) {
        return this.$store.state.ask;

      } else if( name === 'jobs' ) {
        return this.$store.state.jobs;

      } else {
        return {};
      }
    }
  }

}
</script>

<style scoped>
.news-list{margin:0;padding:0;}
.news-list li{list-style: none;border-bottom:1px solid #DBDBDB;height:50px;line-height:50px;box-sizing:border-box;}
.news-list li:hover{background:#EAEAEA;transition:0.2s;}
.news-list li .title{text-decoration:none;color:#0c6d41;}
.news-list li .points{text-align:center;margin:0 15px;display:inline-block;width:40px;height:30px;line-height:30px;vertical-align:middle;background:#42b883;padding:0 3px;border-radius:5px;color:white;}
.news-list li .time{margin:0 10px;color:#666;}
.news-list li .by, .news-list li .by a{color:#666;}
</style>