<template>
  <div>
    <div class="header">
      <div class="center">
        <div class="right"><span></span></div>
        <p>
          <a href="">请登录</a>
        </p>
        <div class="icon">
        <img src="https://app.youpin.mi.com/youpin/static/m/res/images/icon_default_head_portrait.png" alt="">
      </div>
    
      </div>
      
    </div>
    <div class="box"></div>
    <!-- 我的订单 -->
    <div class="order">
      <div class="myOrder">
        <p>
          我的订单
          <span>
          <img src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt="">
        </span>
        </p>
        
      </div>
      <div class="items">
            <div class="item">
                <img src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_paid.png" alt="">
                <span>待付款</span>
            </div>
            <div class="item">
                <img src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_receipt.png" alt="">
                <span>待收货</span>
            </div>
            <div class="item">
                <img src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_received_goods.png" alt="">
                <span>待评价</span>
            </div>
            <div class="item">
                <img src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_return_goods.png" alt="">
                <span>退款/售后</span>
            </div>
        </div>
    </div>
     <div class="box"></div>
     <!-- 插图 -->
     <div class="figure"></div>
     <!-- list -->
     <div class="list">
       <ul>
         <li>
           <p>
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_assets.png" alt="">
           </p>
           <a href="">我的资产 </a>
           <div class="arrow">
             优惠券/积分
             <span><img src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""></span>
           </div>
          </li>

          <li>
           <p>
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/pin_logo.jpg" alt="">
           </p>
           <a href="">拼团 </a>
           <div class="arrow1">
              <img src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""> 
           </div>
          </li>

          <li>
           <p>
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_collection.png" alt="">
           </p>
           <a href="">我的收藏 </a>
           <div class="arrow1">
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""> 
           </div>
          </li>
       </ul>
       <div class="box"></div>
       <ul>
         <li>
           <p>
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_address.png" alt="">
           </p>
           <a href="">地址管理 </a>
           <div class="arrow1">
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""> 
           </div>
          </li>

          <li>
           <p>
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/mijiashop_icon_more_qualifi.png" alt="">
           </p>
           <a href="">资质证照 </a>
           <div class="arrow1">
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""> 
           </div>
          </li>

          <li>
           <p>
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/mijiashop_icon_more_protocol.png" alt="">
           </p>
           <a href="">协议规则 </a>
           <div class="arrow1">
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""> 
           </div>
          </li>
         
          <li>
           <p>
             <img src=" https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_feedback.png" alt="">
           </p>
           <a href="">帮助与反馈 </a>
           <div class="arrow1">
             <img src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""> 
           </div>
          </li>
       </ul>
     </div>
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from '../../components/Tab';
export default {
  components: {
    Tab
  }
}
</script>

<style lang='less' scoped>
.header{
  width:100%;
  height: 1rem;
  background: url('https://app.youpin.mi.com/youpin/static/m/res/images/personal_bg_top.png') center center;
  background-size: cover;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  .center{
      padding: .2rem .25rem;
      display: flex;
      flex-direction: row-reverse;
      flex-wrap:wrap;
      
      .icon{
      border-radius: .3rem;
      width: .6rem;
      height: .6rem;
      line-height: .6rem;
        img{
        width: 100%;
        height: 100%;
        vertical-align: bottom;
        }
      }
    p{
      width:1.7rem;
      height: 100%;
      padding-left: .2rem;
      a{
        color: rgb(255, 255, 255);
        font-size:.14rem;
        font-weight: 400;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
      }
    }
    .right{
      float: right;
      width: .2rem;
      height: .2rem;
      padding-top:.2rem ;
      span{
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url('https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png') center;
        background-size: cover;
      }
    }
    
  }
  
}
.box{
  width: 100%;
  background-color: rgb(248, 248, 248);
  height: .05rem;
}
.order{
  width:100%;
  height: 1.1rem;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  
  .myOrder{
    width:2.9rem;
    height: .4rem;
    line-height: .4rem;
    padding-left: .2rem ;
    padding-right: .1rem;
    border-bottom:1px solid rgb(229, 229, 229);
    p{
      color: rgb(51, 51, 51);
      font-size: .14rem;
    }
    span{
      display: inline-block;
     
      width: .15rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .items {
    border-radius: .08rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    .item {
      padding:.12rem .1rem .1rem .2rem;
      display: flex;
      flex-direction: column;
      flex: 0 0 100% 0;
      text-align: center;
      img {
        padding-left:.06rem;
        width: .23rem;
        height: .23rem;
      }
      span {
        margin-top: .05rem;
        font-size: .11rem;
        color: rgb(102, 102, 102);
      }
      &:nth-of-type(3n) {
        margin-right: 0;
      }
    }
  }
}
.figure{
  width:100%;
  height: .62rem;
  background: url('https://img.youpin.mi-img.com/yingkebao/90337d93e628939c590fbe1a1cf338bf.gif?w=1080&h=210') center;
  background-size: cover;
}
.list{
   background-color: rgb(255, 255, 255);
   width: 100%;
   height: 100%;
   ul{
     
     li{
        height: .5rem;
        line-height: .5rem;
        border-bottom:1px solid rgb(229, 229, 229);
        padding-left: .15rem;
        display: flex;
         flex-direction:row;
         justify-content: flex-end;
         align-items: flex-end;
         cursor: pointer;
         p{
           width: .5rem;
           height: .5rem;
           img{ 
             width: 100%;
             height: 100%;
           }
         }
         a{
          color:#333;
          font-size: .14rem;
          align-self: center;
          margin-right: auto;
         }
        .arrow{
         display: flex;
         color: rgb(153, 153, 153);
         font-size: .12rem;
          
        }
        .arrow1{
          img{
            width:.15rem;
            height: .15rem;
            padding-right: .1rem;
          }
         
        }
        span{
          width: .15rem;
          height:.15rem;
          padding-right: .1rem;
          img{
            width: 100%;
            height: 100%;
          }
         }
     }
   }
}
</style>