<template>
  <div class="good">
    <div class="left">
      <img alt v-lazy="good.url" />
    </div>
    <div class="right">
      <h3 v-text="good.title" class="title"></h3>
      <p v-text="good.describe" class="describe"></p>
      <p v-text="good.price?'人民币' +good.price + '元':null " class="pricee"></p>
      <p v-text="good.gid?good.gid + '条评论':'暂无评论'" class="gid"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      default: function(){
        return {}
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
      }
    };
  },
  components: {},
  updated(){
  }
};
</script>

<style lang='less' scoped>
.good {
  box-sizing: border-box;
  width: 100%;
  height: 1.2rem;
  .left {
    float: left;
    width: 30%;
    height: 100%;
    
    img {
      width: 100%;
      height: 100%;
      padding: .2rem;
    }
  }
  .right {
    float: right;
    padding-left: 0.2rem;
    width: 60%;
  
  }
}
</style>