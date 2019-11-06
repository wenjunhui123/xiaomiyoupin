<template>
  <div class="cartgood">
    <el-checkbox v-model="checked" class="inpu"></el-checkbox>
    <div class="left">
      <img alt v-lazy="cartgood.url" />
    </div>
    <div class="right">
      <p v-text="cartgood.describe" class="describe   sss "></p>
      <p Danger v-text="cartgood.price?'￥' +cartgood.price:null " class="pricee sss"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartgood: {
      type: Object,
      default: function() {
        return {};
      },
      required: true
    }
  },
  data() {
    return {
      gd: {
        gid: "890",
        title: "全天候机能城市背包",
        describe: "拒水性3-4级，背负升级",
        url:
          "https://shop.io.mi-img.com/app/shop/img?id=shop_4b6dfabbc1c80fa33df4189d1b323d26.jpeg",
        link: "/detail?gid=890",
        price: 189,
        mark: true
      },
      checked: true
    };
  },
  components: {},
  updated() {}
};
</script>

<style lang='less' scoped>
.cartgood {
  box-sizing: border-box;
  width: 100%;
  height: 0.6rem;
  padding: 0.1rem;
  .el-checkbox {
    float: left;
    width: 5%;
    margin-top: 0.2rem;
    border-radius: 50%;
    overflow: hidden;
    color: red;
  }
  .el-checkbox.is-checked {
    .el-checkbox__input.is-checked {
      .el-checkbox__inner {
        background-color: red !important;
        border-color: red !important;
        span {
          background-color: red !important;
          border-color: red !important;
        }
      }
    }
  }

  .left {
    float: left;
    width: 30%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      padding: 0.2rem;
    }
  }
  .right {
    float: right;
    padding-left: 0.2rem;
    width: 50%;
    line-height: 0.3rem;
    p{
        font-size: .14rem;
    }
    .sss.pricee{
        color: red;
    }
  }
}
</style>