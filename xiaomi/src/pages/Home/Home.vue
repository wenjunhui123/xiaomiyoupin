<template>
  <div>
    <div class="main-box">
      <home-header></home-header>
      <home-banner v-if="showBanner"></home-banner>
      <home-imagenav></home-imagenav>
      <home-more name="热门" :show="false"></home-more>
      <home-hot></home-hot>
      <home-more name="限时购" :msg="this.aimTime" :hours="this.aimTime.substring(11,13)"></home-more>
      <time-buy></time-buy>
      <home-more name="手机" :show="false"></home-more>
      <home-phone></home-phone>
      <!-- <more-goods :msg="this.aim_time"></more-goods> -->
      <home-wait></home-wait>
      <Tab></Tab>
      <router-link class="youpin" to="/vip">
        <a href>
          <img
            src="https://img.youpin.mi-img.com/editor1/24385a37c19e08f9188f5713a6fbbc55.gif?w=250&h=250"
            alt
          />
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import Tab from "../../components/Tab";
import HomeHeader from "./Header";
import HomeBanner from "../../components/Banner";
import HomeImagenav from "./imageNav";
import HomeHot from "./Hot";
import HomeMore from "../../components/More";
import HomeWait from "./Wait";
import TimeBuy from "./TimeBuy";
import HomePhone from "./Phone";
// import MoreGoods from "./MoreGoods";
export default {
  components: {
    Tab,
    HomeHeader,
    HomeBanner,
    HomeImagenav,
    HomeHot,
    HomeMore,
    TimeBuy,
    HomePhone,
    // MoreGoods,
    HomeWait
  },
  created() {
    if (this.$store.state.banner.bannerList === null) {
      this.$store.dispatch("banner/updateBanner");
    }
  },
  data() {
    return {
      aimTime: "2019-11-14 04:00:00"
    };
  },
  computed: {
    showBanner() {
      let show = this.$store.state.banner.bannerList;
      return show;
    }
  }
};
</script>

<style lang='less' scoped>
.main-box {
  margin-top: 0.45rem;
  padding-bottom: 0.6rem;
  width: 100%;

  .youpin {
    position: fixed;
    bottom: 1.33rem;
    right: 0.13rem;
    img {
      width: 0.78rem;
      height: 0.88rem;
    }
  }
}
.app {
  width: 100%;
  height: 100%;
  .content {
    margin: 0 auto;
    overflow: auto;
    max-width: 100%;
    min-height: 100%;
    display: flex;
    //将项目垂直显示 列
    flex-direction: column;
    //项目位于容器的
    justify-content: center;
    //元素位于容器的中心。
    align-items: center;
    padding-top: 0.5rem;
    .logo {
      width: 100%;
      flex: 0 0 3.19rem !important;
      background: url(https://img.youpin.mi-img.com/editor1/4466466bf94b9128421b1227f46e9c9c.png?h=619&w=1080)
        no-repeat 0 0;
      background-size: 100% auto;
    }
    .button-container {
      // flex: 0 0 1.19rem !important;
      width: 100%;
      height: 2rem;
      .button {
        height: 1rem;
        line-height: 1rem;
        background: #855b2f;
        font-size: 0.62rem;
        border-radius: 0.1rem;
        .down-btn {
          margin-bottom: 0.52rem;
        }
      }
      p {
        text-align: center;
      }
    }
    .product {
      width: 100%;
      flex: 0 0 7.96rem;
      background: url(https://img.youpin.mi-img.com/editor1/00607dc95615c0b0ec7cc3628de8e12a.png?h=796&w=1080)
        no-repeat 0 0;
      background-size: 100% auto;
      margin-bottom: 0.36rem;
    }
  }
}
</style>
