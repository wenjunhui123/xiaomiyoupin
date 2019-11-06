<template>
  <div class="cart">
    <Banner1></Banner1>
    <CartGoods :cartgood="item" v-for="(item,index) in cartgoods" :key="index+'cartgoods'"></CartGoods>
    <h2  >为你推荐</h2>
    <Good :good="item" v-for="(item,index) in goods" :key="index"></Good>
    <Tab></Tab>
  </div>
</template>

<script>
import Banner1 from "../../components/Banner1";
import Tab from "../../components/Tab";
import Good from "../../components/Good";
import CartGoods from '../../components/CartGoods';
export default {
  data() {
    return {
    cartgoods: [
        {
          gid: "891",
          title: "时尚菱格双肩包",
          describe: "防泼水，背负舒适",
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_c8c20e8ad6a0e573679f1669fc68a99b.jpeg",
          link: "/detail?gid=891",
          price: 249,
          mark: false
        },
        {
          gid: "655",
          title: "90分百搭运动折叠包",
          describe: "三重背法，轻便可折叠",
          url:
            "https://static.home.mi.com/app/shop/img?id=shop_f04e5b9bbd25c7aecb7fa396412192f3.jpeg",
          link: "/detail?gid=655",
          price: 49,
          mark: false
        }
      ],
      goods: [
        {
          gid: "890",
          title: "全天候机能城市背包",
          describe: "拒水性3-4级，背负升级",
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_4b6dfabbc1c80fa33df4189d1b323d26.jpeg",
          link: "/detail?gid=890",
          price: 189,
          mark: true
        },
        {
          gid: "891",
          title: "时尚菱格双肩包",
          describe: "防泼水，背负舒适",
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_c8c20e8ad6a0e573679f1669fc68a99b.jpeg",
          link: "/detail?gid=891",
          price: 249,
          mark: false
        },
        {
          gid: "655",
          title: "90分百搭运动折叠包",
          describe: "三重背法，轻便可折叠",
          url:
            "https://static.home.mi.com/app/shop/img?id=shop_f04e5b9bbd25c7aecb7fa396412192f3.jpeg",
          link: "/detail?gid=655",
          price: 49,
          mark: false
        },
        {
          gid: "759",
          title: "都市简约双肩背包",
          describe: "防泼水，背负舒适",
          url:
            "https://static.home.mi.com/app/shop/img?id=shop_25c5118ca5d365eecee7d4b69fbfa068.jpeg",
          link: "/detail?gid=759",
          price: 169,
          mark: false
        }
      ]
    };
  },
  components: {
    Tab,
    Banner1,
    Good,
    CartGoods
  }
};
</script>

<style lang='less' scoped>
.cart{
  width: 100%;
  h2{
    width: 100%;
    height: 1rem;
    color: coral;
    text-align: center;
    line-height: 1rem;

  }
}


</style>