import Vue from 'vue';

/*
  bus.js
    export const bus = new Vue();

  App.vue 
    import { bus } from './bus.js'
*/

export default new Vue();  //이렇게 default 로 export하게되면
//  import Bus from './bus.js'  어떤이름으로든 선언 가능