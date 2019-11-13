<template>
  <div class="good">
    <div class="goodlist">
      <div class="left">
        <img alt v-lazy="good.url" />
        <div class="text">
          <h3 v-text="good.title" class="title"></h3>
          <p v-text="good.describe" class="describe"></p>
          <p v-text="good.price?'￥' +good.price + '元':null " class="pricee"></p>
          <p v-text="good.gid?good.gid + '条评论':'暂无评论'" class="gid"></p>
        </div>
       
      </div>
      <!-- <div class="right">
       
        
      </div> -->
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
  height: 100%;
  .goodlist{
    height: 2.68rem;
    margin: .1rem;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction:row;
    .left {
      
      width: 1.725rem;
      height: 1.725rem;
      img {
        width: 100%;
        height: 100%;
      }
      .text{
        padding: .04rem .05rem .09rem .05rem;
        .title{
        color: #333;
        font-size: .14rem;
        }
        .describe{
        color:rgb(153, 153, 153)
        }
        .pricee{
        color: rgb(182, 9, 9);
        }
      }
      
    }
  }
  
}
</style>