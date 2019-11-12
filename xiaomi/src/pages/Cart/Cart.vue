<template>
  <div class="cart">
    <div class="top">
      <p class="icon"><img src="https://app.youpin.mi.com/youpin/static/m/res/images/std_titlebar_back_white.png" alt=""></p>
      <p class="car">购物车</p>
      <p class="edit">编辑</p>
    </div>
    <CartGoods :cartgood="item" v-for="(item,index) in cartgoods" :key="index+'cartgoods'"></CartGoods>
    
    <h2  >为你推荐</h2>
    <Good :good="item" v-for="(item,index) in goods" :key="index"></Good>
    <Cost cost='a'></Cost>
  </div>
</template>

<script>
import Banner1 from "../../components/Banner1";
import Tab from "../../components/Tab";
import Good from "../../components/Good";
import CartGoods from '../../components/CartGoods';
import Cost from './Cost';
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
    CartGoods,
    Cost
  }
};
</script>

<style lang='less' scoped>
.cart{
  width: 100%;
  position: relative;
  .top{
    box-sizing: border-box;
    height: 1.8rem;
    background: url('https://app.youpin.mi.com/youpin/static/m/res/images/checkout_new_top_bg.png') center; 
    background-size: cover;
    padding: .23rem 0;
    display: flex;
    flex-direction:row;
    .icon{
      width:.42rem;
      height: .42rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .car{
      width: 90%;
      height: .42rem;
      line-height: .42rem;
      text-align: center;
      font-size: .2rem;
      color: rgb(255, 255, 255);
      font-weight: bold;
    }
    .edit{
      width: 15%;
      height: .42rem;
      line-height: .42rem;
      box-sizing: border-box;
      font-size:.14rem;
      color: rgb(255, 255, 255);
    }
  }
  h2{
    width: 100%;
    height: 1rem;
    color: coral;
    text-align: center;
    line-height: 1rem;

  }
}


</style>