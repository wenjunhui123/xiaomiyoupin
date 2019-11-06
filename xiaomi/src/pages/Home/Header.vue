<template>
  <div class="main-header">
    <div class="logo-box">
      <img src="../../assets/images/navi_title_v2.png" alt />
    </div>
    <router-link class="search-box" to="/search">
      <img src="https://static.home.mi.com/youpin/static/m/res/images/home_search.png" alt />
      <span>年货嗨抢，最高直降1000</span>
    </router-link>
    <div class="msg-box">
      <div class="msg"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang='less' scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-left: 0.04rem;
  width: 100%;
  height: 0.45rem;
  background: #fff;
  font-size: 0.14rem;
  overflow: hidden;

  .logo-box {
    img {
      width: 0.78rem;
      height: 0.34rem;
    }
  }

  .search-box {
    margin-left: 0.04rem;
    align-items: center;
    flex-direction: row;
    flex: 1;
    height: 28px;
    background: rgb(244, 244, 244);
    cursor: pointer;

    img {
      position: relative;
      top: 0.03rem;
      left: 0.09rem;
      width: 0.15rem;
      height: 0.15rem;
    }

    span {
      margin-left: 0.15rem;
      line-height: 0.28rem;
      font-size: 0.13rem;
      color: rgb(204, 204, 204);
    }
  }

  .msg-box {
    .msg {
      width: 0.38rem;
      height: 0.38rem;
      background: url("https://static.home.mi.com/youpin/static/m/res/images/std_titlebar_home_message.png")
        no-repeat;
      background-size: contain;
      background-position: -0.05rem 0;
    }
  }
}
</style>