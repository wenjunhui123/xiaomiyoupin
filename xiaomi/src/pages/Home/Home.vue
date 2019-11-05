<template>
  <div>
    <div class="main-box">
      <home-header></home-header>
      <home-banner></home-banner>
      <home-imagenav></home-imagenav>
      <home-hot></home-hot>
      <Tab></Tab>
    </div>
  </div>
</template>

<script>
import Tab from "../../components/Tab";
import HomeHeader from "./Header";
import HomeBanner from "../../components/Banner";
import HomeImagenav from "./imageNav";
import HomeHot from "./Hot";

export default {
  components: {
    Tab,
    HomeHeader,
    HomeBanner,
    HomeImagenav,
    HomeHot
  }
};
</script>

<style lang='less' scoped>
.main-box {
  margin-top: 0.45rem;
  padding-bottom: 0.6rem;
  width: 100%;
}
</style>