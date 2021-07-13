<template>
  <div class="index">
    <!-- 首页横幅 -->
    <van-nav-bar title="首页" :fixed="true" :placeholder="true" />
    <div class="wrap">
      <!-- 搜索框 -->
      <van-search
        v-model="value"
        placeholder="双十一大促销"
        shape="round"
        background="transparent"
      />
      <!-- 轮播图 -->
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        :lazy-render="true"
      >
        <van-swipe-item v-for="(image, index) in bannerList" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中间横排导航 -->
    <van-grid icon-size="35" class="middle1">
      <van-grid-item
        icon="goods-collect"
        text="每日福利"
        style="color: #eca53d"
      />
      <van-grid-item icon="hot" text="热销榜" style="color: #ec6a6a" />
      <van-grid-item icon="bag" text="皮噜甄选" style="color: #f7be4f" />
      <van-grid-item icon="vip-card" text="会员中心" style="color: #9f7ded" />
    </van-grid>
    <!-- 中间方格导航 -->
    <van-grid
      direction="horizontal"
      :column-num="2"
      :gutter="10"
      :border="false"
      class="middle2"
    >
      <van-grid-item v-for="item in 4" :key="item">
        <span>全球奶粉</span>
        <van-image
          src="https://img01.yzcdn.cn/vant/apple-1.jpg"
          width="80"
          height="80"
        />
      </van-grid-item>
    </van-grid>
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
      v-for="item in 4"
      :key="item"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      value: "", //搜索数据
    };
  },
  computed: mapState(["bannerList"]),
  mounted() {
    this.changeBannerAsync();
  },
  methods: {
    ...mapActions(["changeBannerAsync"]),
  },
};
</script>

<style lang="less">
.index {
  // 首页横幅文字
  .van-nav-bar__title {
    font-size: 18px;
  }
  // 搜索框和轮播图区域
  .wrap {
    width: 100%;
    position: relative;
    // 搜索框，设置定位
    .van-search {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      // 搜索框内容区，背景半透明
      .van-search__content {
        background: rgba(255, 255, 255, 0.5);
        // 左边搜索图标
        .van-icon-search {
          color: white;
          font-size: 24px;
        }
        // 设置placeholder颜色和字体
        .van-field__control::placeholder {
          color: white;
          font-size: 14px;
        }
      }
    }
    // 轮播图
    .my-swipe {
      .van-swipe-item {
        height: 200px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .van-swipe__indicator {
        display: inline-block;
        width: 25px;
        height: 3px;
        border-radius: 0;
      }
    }
  }
  // 中间横排导航栏
  .middle1 {
    // 块边框
    .van-grid-item__content::after {
      border: none;
    }
    // 文本颜色
    .van-grid-item__text {
      color: #000;
      font-size: 14px;
    }
  }
  // 中间方格导航栏
  .middle2 {
    padding: 10px 0;
    background: white;
    .van-grid-item__content {
      background: #f5f7e8;
      justify-content: space-between;
      span {
        font-size: 16px;
        font-weight: 900;
        align-self: flex-start;
      }
    }
  }
}
</style>
