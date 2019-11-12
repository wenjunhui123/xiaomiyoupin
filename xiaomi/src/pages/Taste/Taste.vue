<template>
  <div id="root" class="mhome">
    <div class="savour_main">
      <div class="header">品味</div>
      <Banner></Banner>
      <ProductList></ProductList>
      <Found></Found>
    </div>

    <Tab></Tab>
  </div>
</template>

<script>
import Tab from "../../components/Tab";
import Banner from "./Banner";
import ProductList from "./ProductList";
import Found from "./Found";

export default {
  components: {
    Tab,
    Banner,
    ProductList,
    Found
  },
};
</script>

<style lang='less' scoped>
.savour_main {
  box-sizing: border-box;
  font-size: 0.14rem;
  height: 100%;
  padding-top: 0.45rem;
  padding-bottom: 0.51rem;
  background: #fff;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    color: rgb(51, 51, 51);
    background-color: rgb(255, 255, 255);
    // width: 285px;
    width: 100%;
    height: 0.45rem;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.16rem;
    border-bottom: 0.02rem solid #f3f3f3;
    vertical-align: middle;
  }
}
</style>
