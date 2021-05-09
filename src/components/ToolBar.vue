<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{background-color: #42b883;display:flex;color:white;padding:8px;}
.header a{border-radius: 4px;background-color: #FFF;color:#333;text-decoration: none;font-size:20px;padding:5px 15px;cursor: pointer;margin-right:5px;}
.header a:hover{background-color:#1d1d1d;color:white;transition:0.3s}
.header .router-link-exact-active{color:white;background-color:#1d1d1d;}
</style>