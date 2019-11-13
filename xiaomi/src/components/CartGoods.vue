<template>
  <div class="cartgood">
    <div class="list">
      <div class="goodinfo">
        <p><img src="https://app.youpin.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png" alt="">
        </p>
        <span>有品精选</span>
        <div class="goodRight">
          <p><img src="https://app.youpin.mi.com/youpin/static/m/res/images/post_fee_info_new.png" alt=""></p>
          <span>满99.00元免运费</span>
          <a>领券</a>
        </div>
      </div>
      <div class="listshop">
        <el-checkbox text-color="red" fill="red" v-model="checked" class="inpu"></el-checkbox> 
        <div class="left">
          <img alt v-lazy="cartgood.url" />
        </div>
        <div class="right">
          <p v-text="cartgood.describe" class="describe   sss "></p>
          <p Danger v-text="cartgood.price?'￥' +cartgood.price:null " class="pricee sss"></p>
          <div class="last">
            <el-input-number v-model="num1" size="small"  :min="1" :max="100" label="描述文字"></el-input-number>
          </div>
        </div>
      </div>
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
      num1:1,
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
  display: block;
  width: 100%;
  padding: 0.1rem;
  .list{
    
    background-color: rgb(255,255,255) ;
    border-radius: .1rem;
    padding: .13rem .1rem .1rem .1rem;
    .goodinfo{
    width: 100%;
    padding-bottom:.1rem; 
    border-bottom:1px solid #f4f4f4;
    display: flex;
    flex-direction:row;
      p{
        width: .18rem;
        height: .18rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      span{
        width: .98rem;
        margin-left: .07rem;
        color:#333;
        font-weight: normal;
      }
      .goodRight{
        width: 78%;
        display: flex;
        flex-direction:row;
        justify-content: flex-end;
      
      p{
        width: .12rem;
        height: .12rem; 
        img{
          width: 100%;
          height: 100%;
        }
      }
      span{
        margin-left: .04rem;
      }
      a{
        margin-left: .08rem;
        color: #bf1111;
      }
      }
    }
    .listshop{
      padding-top: .1rem;
      display: flex;
      flex-direction:row;
      .el-checkbox {
        width:.18rem;
        height: .18rem;
        border-radius: 50%;
      }
      .left{
        width: .86rem;
        height: .86rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        margin-left: .1rem;
        p{
          font-size: .12rem;
          color: #333;
          height: .19rem;
          line-height:.19rem;
        }
        .sss.pricee{
          font-size: .14rem;
          color: red;
          padding: .05rem 0;
          line-height:.19rem;
        }
      } 
  
    }
    }
  }
  
  
</style>