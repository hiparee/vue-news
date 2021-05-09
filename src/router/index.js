import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

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
             // component: url 주소로 갔을 때 표시될 컴포넌트.
             component: NewsView,
           },
           {
             path: "/ask",
             component: AskView,
           },
           {
             path: "/jobs",
             component: JobsView,
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
