import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import createListView from "../views/CreateListView.js";
import Bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
         mode: "history",
         routes: [
           {
             path: "/",
             redirect: "/news",
           },
           {
             // path : url 주소
             path: "/news",
             name: "news",
             //주소로 갔을 때 표시될 컴포넌트.
             component: NewsView,
             beforeEnter: (to, from, next) => {
               Bus.$emit("start:spinner");

               setTimeout(() => {
                 store
                   .dispatch("FETCH_LIST", to.name)
                   .then(() => {
                     next();
                   })
                   .catch((error) => {
                     console.log(error);
                   });
               }, 1000);
             },
             // component: createListView("NewsView"),
           },
           {
             path: "/ask",
             name: "ask",
             component: AskView,
             // component: createListView("AskView"),
             beforeEnter: (to, from, next) => {
               Bus.$emit("start:spinner");

               setTimeout(() => {
                 store
                   .dispatch("FETCH_LIST", to.name)
                   .then(() => {
                     next();
                   })
                   .catch((error) => {
                     console.log(error);
                   });
               }, 1000);
             },
           },
           {
             path: "/jobs",
             name: "jobs",
             component: JobsView,
             //  component: createListView("JobsView"),
             beforeEnter: (to, from, next) => {
               Bus.$emit("start:spinner");

               setTimeout(() => {
                 store
                   .dispatch("FETCH_LIST", to.name)
                   .then(() => {
                     next();
                   })
                   .catch((error) => {
                     console.log(error);
                   });
               }, 1000);
             },
           },
           {
             path: "/user/:id", // :id 이렇게 받게되면 url이 /user/test 인경우 this.$route.params.id의 값을 찍어보면 test가 된다
             component: UserView,
           },
           {
             path: "/item/:id",
             component: ItemView,
           },
         ],
       });
