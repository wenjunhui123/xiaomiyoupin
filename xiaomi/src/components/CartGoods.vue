<template>
  <div class="cartgood">
    <div class="list">
      <div class="goodinfo">
        <p>
          <input type="checkbox" v-model="changeone" />
        </p>
        <span>有品精选</span>
        <div class="goodRight">
          <p>
            <img
              src="https://app.youpin.mi.com/youpin/static/m/res/images/post_fee_info_new.png"
              alt
            />
          </p>
          <span>满99.00元免运费</span>
          <a>领券</a>
        </div>
      </div>
      <div class="listshop">
        <el-checkbox text-color="red" fill="red" v-model="changeone" class="inpu"></el-checkbox>
        <div class="left">
          <img alt v-lazy="cartgood.url" />
        </div>
        <div class="right">
          <p v-text="cartgood.describe" class="describe sss"></p>
          <p Danger v-text="cartgood.price?'￥' +cartgood.price:null " class="pricee sss"></p>
          <div class="last">
            <el-input-number v-model="num1" size="small" :min="1" :max="100" label="描述文字"></el-input-number>
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
      num1: 1,
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
  updated() {},
  methods: {
    changethis() {
      let aaa = this.$store.state.checked;
      if (aaa === true) {
        this.checked = true;
        return;
      }
      if (this.checked === false) {
        this.checked = true;
        return this.checked;
      }
      this.checked = false;
      return this.checked;
    }
  },
  updated() {
    this.checked = this.$store.state.checked;
    window.console.log(1)
  },
  computed: {
    changeone() {
      this.checked = this.$store.state.checked;
      window.console.log(111);
      return this.checked
    //  window.console.log(this.checked);
    //  if(this.$store.state.checked===true){
    //    this.checked = this.$store.state.checked;
    //    return this.checked
    //  }
    //  return false
    }
  }
};
</script>

<style lang='less' scoped>
.cartgood {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.1rem;
  .list {
    background-color: rgb(255, 255, 255);
    border-radius: 0.1rem;
    padding: 0.13rem 0.1rem 0.1rem 0.1rem;
    .goodinfo {
      width: 100%;
      padding-bottom: 0.1rem;
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      flex-direction: row;
      p {
        width: 0.18rem;
        height: 0.18rem;
        input {
          width: 100%;
          height: 100%;
          border-radius: 50% !important;
        }
      }
      span {
        width: 0.98rem;
        margin-left: 0.07rem;
        color: #333;
        font-weight: normal;
      }
      .goodRight {
        width: 78%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        p {
          width: 0.12rem;
          height: 0.12rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          margin-left: 0.04rem;
        }
        a {
          margin-left: 0.08rem;
          color: #bf1111;
        }
      }
    }
    .listshop {
      padding-top: 0.1rem;
      display: flex;
      flex-direction: row;
      .el-checkbox {
        width: 0.18rem;
        height: 0.18rem;
        border-radius: 50%;
      }
      .left {
        width: 0.86rem;
        height: 0.86rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        margin-left: 0.1rem;
        p {
          font-size: 0.12rem;
          color: #333;
          height: 0.19rem;
          line-height: 0.19rem;
        }
        .sss.pricee {
          font-size: 0.14rem;
          color: red;
          padding: 0.05rem 0;
          line-height: 0.19rem;
        }
      }
    }
  }
}
</style>