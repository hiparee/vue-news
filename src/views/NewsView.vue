<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js'
// import Bus from '../utils/bus.js';

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin],
}
</script>

<style scoped>
</style>