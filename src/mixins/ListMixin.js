import Bus from '../utils/bus.js';

// mixin
export default {
  // 재사용할 컴포넌트 옵션 & 로직
  mounted() {
    Bus.$emit("end:spinner");
  },
  created() {
    // Bus.$emit("start:spinner");
    // setTimeout(() => {
    //   this.$store.dispatch("FETCH_LIST", this.$route.name)
    //     .then(() => {
    //       console.log("fetched");
    //       Bus.$emit("end:spinner");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, 1000);
  },
};