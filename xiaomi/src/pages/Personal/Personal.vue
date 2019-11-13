<template>
  <div class="personal">
    <div class="person" v-if="$store.state.personalIsShow">
      <div class="header">
        <div class="center">
          <div class="right">
            <span></span>
          </div>
          <p @click="login">
            <router-link to="/personal/login">{{$store.state.account?$store.state.account:'请登录'}}</router-link>
          </p>
          <div class="icon">
            <img
              src="https://app.youpin.mi.com/youpin/static/m/res/images/icon_default_head_portrait.png"
              alt
            />
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
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
                alt
              />
            </span>
          </p>
        </div>
        <div class="items">
          <div class="item">
            <img
              src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_paid.png"
              alt
            />
            <span>待付款</span>
          </div>
          <div class="item">
            <img
              src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_receipt.png"
              alt
            />
            <span>待收货</span>
          </div>
          <div class="item">
            <img
              src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_received_goods.png"
              alt
            />
            <span>待评价</span>
          </div>
          <div class="item">
            <img
              src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_return_goods.png"
              alt
            />
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
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_assets.png"
                alt
              />
            </p>
            <a>我的资产</a>
            <div class="arrow">
              优惠券/积分
              <span>
                <img
                  src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
                  alt
                />
              </span>
            </div>
          </li>

          <li>
            <p>
              <img src="https://app.youpin.mi.com/youpin/static/m/res/images/pin_logo.jpg" alt />
            </p>
            <a>拼团</a>
            <div class="arrow1">
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
                alt
              />
            </div>
          </li>

          <li>
            <p>
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_collection.png"
                alt
              />
            </p>
            <a>我的收藏</a>
            <div class="arrow1">
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
                alt
              />
            </div>
          </li>
        </ul>
        <div class="box"></div>
        <ul>
          <li>
            <p>
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_address.png"
                alt
              />
            </p>
            <a>地址管理</a>
            <div class="arrow1">
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
                alt
              />
            </div>
          </li>

          <li>
            <p>
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/mijiashop_icon_more_qualifi.png"
                alt
              />
            </p>
            <a>资质证照</a>
            <div class="arrow1">
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
                alt
              />
            </div>
          </li>

          <li>
            <p>
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/mijiashop_icon_more_protocol.png"
                alt
              />
            </p>
            <a>协议规则</a>
            <div class="arrow1">
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
                alt
              />
            </div>
          </li>

          <li>
            <p>
              <img
                src=" https://app.youpin.mi.com/youpin/static/m/res/images/personal_icon_feedback.png"
                alt
              />
            </p>
            <a>帮助与反馈</a>
            <div class="arrow1">
              <img
                src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
                alt
              />
            </div>
          </li>
        </ul>
      </div>
      <Tab></Tab>
    </div>
    <router-view v-if="$store.state.login"></router-view>
  </div>
</template>

<script>
import Tab from "../../components/Tab";
export default {
  data() {
    return {
      disvable: false,
      isShow: "",
      isisShow: false
    };
  },
  //  beforeRouteLeave:(to, from, next) => {
  //   if(!this.$store.state.account === '请登录') {
  //     window.console.log(this.$store.state.account,1);
  //     next(false);
  //   }

  // },
  created() {
    this.isShow = this.$store.state.personalIsShow;
    this.isisShow = this.$store.state.login;
  },
  computed: {
    /*  changeShow(){
      let show = null;
      show = this.$store.state.personalIsShow;
      return show;
    } */
  },
  methods: {
    login() {
      // this.disvable = true;
      this.$store.dispatch("personalShowAction", false);
      this.$store.dispatch("loginShowAction", true);
    }
  },
  components: {
    Tab
  }
};
</script>

<style lang='less' scoped>
.personal {
  width: 100%;
  height: 100%;
  .person {
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      height: 1rem;
      background: url("https://app.youpin.mi.com/youpin/static/m/res/images/personal_bg_top.png")
        center center;
      background-size: cover;
      cursor: pointer;
      display: flex;
      flex-flow: row wrap;
      .center {
        padding: 0.2rem 0.25rem;
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;

        .icon {
          border-radius: 0.3rem;
          width: 0.6rem;
          height: 0.6rem;
          line-height: 0.6rem;
          img {
            width: 100%;
            height: 100%;
            vertical-align: bottom;
          }
        }
        p {
          width: 1.7rem;
          height: 100%;
          padding-left: 0.2rem;
          a {
            color: rgb(255, 255, 255);
            font-size: 0.14rem;
            font-weight: 400;
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
          }
        }
        .right {
          float: right;
          width: 0.2rem;
          height: 0.2rem;
          padding-top: 0.2rem;
          span {
            display: inline-block;
            width: 100%;
            height: 100%;
            background: url("https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png")
              center;
            background-size: cover;
          }
        }
      }
    }
    .box {
      width: 100%;
      background-color: rgb(248, 248, 248);
      height: 0.05rem;
    }
    .order {
      width: 100%;
      height: 1.1rem;
      background-color: rgb(255, 255, 255);
      box-sizing: border-box;
      
      .myOrder {
        width: 2.9rem;
        height: 0.4rem;
        line-height: 0.4rem;
        padding-left: 0.2rem;
        padding-right: 0.1rem;
        border-bottom: 1px solid rgb(229, 229, 229);
        display: flex;
        flex-direction: row;
        justify-items:flex-end;
        p {
          color: rgb(51, 51, 51);
          font-size: 0.14rem;
          
        }
        span {
          display: inline-block;

          width: 0.15rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .items {
        border-radius: 0.08rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        background-color: rgb(255, 255, 255);
        .item {
          padding: 0.12rem 0.1rem 0.1rem 0.2rem;
          display: flex;
          flex-direction: column;
          flex: 0 0 100% 0;
          text-align: center;
          img {
            padding-left: 0.06rem;
            width: 0.23rem;
            height: 0.23rem;
          }
          span {
            margin-top: 0.05rem;
            font-size: 0.11rem;
            color: rgb(102, 102, 102);
          }
          &:nth-of-type(3n) {
            margin-right: 0;
          }
        }
      }
    }
    .figure {
      width: 100%;
      height: 0.62rem;
      background: url("https://img.youpin.mi-img.com/yingkebao/90337d93e628939c590fbe1a1cf338bf.gif?w=1080&h=210")
        center;
      background-size: cover;
    }
    .list {
      background-color: rgb(255, 255, 255);
      width: 100%;
      height: 100%;
      ul {
        li {
          height: 0.5rem;
          line-height: 0.5rem;
          border-bottom: 1px solid rgb(229, 229, 229);
          padding-left: 0.15rem;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-end;
          cursor: pointer;
          p {
            width: 0.5rem;
            height: 0.5rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          a {
            color: #333;
            font-size: 0.14rem;
            align-self: center;
            margin-right: auto;
          }
          .arrow {
            display: flex;
            color: rgb(153, 153, 153);
            font-size: 0.12rem;
          }
          .arrow1 {
            img {
              width: 0.15rem;
              height: 0.15rem;
              padding-right: 0.1rem;
            }
          }
          span {
            width: 0.15rem;
            height: 0.15rem;
            padding-right: 0.1rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>