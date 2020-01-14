/* 
  本模块为 路由器模块
*/

// 使用 import 语句 引入 vue
import Vue from "vue";
// 使用 npm 安装好 vue-router 后，在路由器模块使用 import 语句引入，因为 vue-router 是 vue 的插件，所以需要 vue 的支持，需要提前引入 vue
import Router from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Books from "@/pages/Books";

// 因为 vue-router 为 vue 插件，所以需要使用 Vue.use() 初始化（官方API）
Vue.use(Router);

// 当前为一个模块(路由器模块)，需要向外暴露一个路由器对象，传入一个路由的配置对象
export default new Router({
  // 路由器对象里面的路由配置对象中需要配置 n 个路由
  routes: [
    {
      path: "/",
      redirect: "/about"
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/home/news",
          name: "News",
          component: News
        },
        {
          path: "books",
          name: "Books",
          component: Books
        },
        {
          path: "",
          redirect: "/home/news"
        }
      ]
    }
  ]
});

// 路由配置好之后，需要配置路由器
