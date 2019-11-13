<template>
  <div class="cart">
    <div class="top">
      <p class="icon"><img @click="back" src="https://app.youpin.mi.com/youpin/static/m/res/images/std_titlebar_back_white.png" alt=""></p>
      <p class="car">购物车</p>
      <p class="edit">编辑</p>
    </div>
    <div class="cartgoods">
      <CartGoods :cartgood="item" v-for="(item,index) in cartgoods" :key="index+'cartgoods'"></CartGoods>
    </div>
    <div class="text">
      <h2><i></i>为你推荐<b></b></h2>
    </div>
    
    <div class="last">
      <Good :good="item" v-for="(item,index) in goods" :key="index"></Good>
      <Cost cost='a'></Cost>
    </div>
    
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
            "https://img.youpin.mi-img.com/800_pic/ed26a9f29260cc3ce360872349e35f42.png",
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
            "https://img.youpin.mi-img.com/800_pic/4d324e701eb27d2b67e434d350356454.png",
          link: "/detail?gid=890",
          price: 189,
          mark: true
        },
        {
          gid: "891",
          title: "时尚菱格双肩包",
          describe: "防泼水，背负舒适",
          url:
            "https://img.youpin.mi-img.com/800_pic/ed26a9f29260cc3ce360872349e35f42.png",
          link: "/detail?gid=891",
          price: 249,
          mark: false
        },
        {
          gid: "655",
          title: "90分百搭运动折叠包",
          describe: "三重背法，轻便可折叠",
          url:
            "https://img.youpin.mi-img.com/800_pic/514d0b2e8e63207a1d3c48eefad41492.png",
          link: "/detail?gid=655",
          price: 49,
          mark: false
        },
        {
          gid: "759",
          title: "都市简约双肩背包",
          describe: "防泼水，背负舒适",
          url:
            "https://img.youpin.mi-img.com/shopmain/39e263c6152dd4c8cc28cce3ee78ccf4.png?w=800&h=800",
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
  },
  methods: {
    back() {
      window.history.go(-1);
    }
  },
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
  .cartgoods{
    box-sizing: border-box;
    position: absolute;
    top:.8rem ;
    width: 100%;
    padding:.1rem ;
  }
  .last{
    position:absolute;
    display: flex;
    top:4.5rem;
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: .5rem;
    .good{
      width: 50%;
      flex-wrap: wrap;
    }
  }
  .text{
    height: 1rem;
    position: absolute;
    width: 100%;
    top:4.2rem;
    h2{
      width: 100%;
      height: .42rem;
      color: #333;
      font-size: .15rem;
      text-align: center;
      line-height: .42rem;
      i{
        display: inline-block;
        width: .18rem;
        height: .18rem;
        background: url('https://app.youpin.mi.com/youpin/static/m/res/images/recheader_left.png') center;
        background-size: cover;
      }
      b{
        display: inline-block;
        width: .18rem;
        height: .18rem;
        background: url('https://app.youpin.mi.com/youpin/static/m/res/images/recheader_right.png') center;
        background-size: cover;
      }
    }
  }
  
 
}


</style>