//引入vue
import Vue from "vue";
//引入根组件app
import App from "./App.vue";
//引入路由
import router from "./router";
//引入Vuex.store
import store from "./store";

//引入重置css样式
import "./assets/css/reset.less";
//设置根字体大小
import "amfe-flexible";

// 按需引入vant组件
import {
  // 基础组件
  Icon, //图标-index
  Image as VanImage, //图片-index
  Lazyload, //图片懒加载-index

  // 表单组件
  Search, //搜索-index

  // 展示组件
  Swipe, //轮播图-index
  SwipeItem, //轮播图-index

  // 导航组件
  NavBar, //导航栏-index
  Tabbar, //标签栏-index
  TabbarItem, //标签栏-index
  Grid, //宫格-index
  GridItem, //宫格-index

  // 业务组件
  Card,
} from "vant";

// 调用引入的vant组件
// 基础组件
Vue.use(Icon); //图标-index
Vue.use(VanImage); //图片-index
Vue.use(Lazyload); //图片懒加载-index

// 表单组件
Vue.use(Search); //搜索-index

// 展示组件
Vue.use(Swipe).use(SwipeItem); //轮播图-index

// 导航组件
Vue.use(NavBar); //导航栏-index
Vue.use(Tabbar).use(TabbarItem); //标签栏-index
Vue.use(Grid).use(GridItem); //宫格-index

// 业务组件
Vue.use(Card);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
