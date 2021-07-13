import Vue from "vue";
import Vuex from "vuex";

// 引入接口
import { getBannerDataApi } from "../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bannerList: [], //轮播图图片数据
  },
  mutations: {
    changeBanner(state, payload) {
      state.bannerList = payload.list;
    },
  },
  actions: {
    // 获取轮播图数据
    async changeBannerAsync({ commit }) {
      // 赋值res为接口数据
      const res = await getBannerDataApi();
      //接口数据 赋值给 轮播图图片数据
      commit("changeBanner", res);
    },
  },
  modules: {},
});
