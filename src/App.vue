<template>
  <div id="app">
    <ToolBar></ToolBar>

    <transition name="fade">
      <router-view></router-view>
    </transition>

    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import Bus from './utils/bus.js';

export default {
  name: 'App',
  components: {
    ToolBar,
    Spinner
  }, 
  data() {
    return {
      loadingStatus: false
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    Bus.$on('start:spinner', this.startSpinner);
    Bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    Bus.$off('start:spinner', this.startSpinner);
    Bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body{padding:0;margin:0;}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
