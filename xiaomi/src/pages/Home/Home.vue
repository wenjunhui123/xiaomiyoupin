<template>
  <div>
    <div class="main-box">
      <home-header></home-header>
      <home-banner></home-banner>
      <Tab></Tab>
    </div>
  </div>
</template>

<script>
import Tab from "../../components/Tab";
import HomeHeader from "./Header";
import HomeBanner from "../../components/Banner";

export default {
  components: {
    Tab,
    HomeHeader,
    HomeBanner
  }
};
</script>

<style lang='less' scoped>
// .main-box {
//   margin-top: 0.45rem;
//   padding-bottom: 0.6rem;
//   width: 100%;
// }
</style>