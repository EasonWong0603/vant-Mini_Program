<template>
  <div class="home">
    <!-- 底部标签栏 -->
    <router-view />
    <van-tabbar route active-color="#EF8641" inactive-color="#000" placeholder>
      <van-tabbar-item replace to="/home/index" icon="wap-home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/home/classify" icon="apps-o"
        >分类</van-tabbar-item
      >
      <van-tabbar-item replace to="/home/cart" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace to="/home/mine" icon="manager-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
    <!-- 底部标签栏 -->
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="less">
.home {
  .van-tabbar {
    border-top: 1px solid #ccc;
  }
}
</style>
