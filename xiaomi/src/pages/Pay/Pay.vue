<template>
  <div class="bg">
    <h1>
      <img
        @click="backToCart"
        src="https://app.youpin.mi.com/youpin/static/m/res/images/std_titlebar_back_white.png"
        alt
      /> 确认订单
    </h1>

    <section class="pay-user-info rounded-rectagle">
      <p class="user-name-phone">{{ userInfo.name }} {{ userInfo.phone }}</p>
      <p class="user-address">{{ userInfo.address }}</p>
      <img
        src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
        alt
      />
    </section>

    <section class="pay-methods rounded-rectagle">
      <RadioGroup checked-color="#E0AB70" v-model="payMethod">
        <CellGroup :border="false">
          <Cell :border="false" style="padding:0 0 .1rem 0;" clickable @click="payMethod = 0">
            <template slot="title">
              <img src="https://app.youpin.mi.com/youpin/static/m/res/images/pay_alipay.png" alt />
              <span>支付宝</span>
            </template>
            <Radio slot="right-icon" checked-color="#E0AB70" :name="0" />
          </Cell>
          <Cell style="padding:0" clickable @click="payMethod = 1">
            <template slot="title">
              <img src="https://app.youpin.mi.com/youpin/static/m/res/images/pay_mipay.png" alt />
              <span>小米钱包</span>
            </template>
            <Radio slot="right-icon" checked-color="#E0AB70" :name="1" />
          </Cell>
        </CellGroup>
      </RadioGroup>
    </section>

    <section class="pay-goods-info rounded-rectagle">
      <h2>
        <img src="https://app.youpin.mi.com/youpin/static/m/res/images/youpinjinxuan.png" alt />
        有品精选
      </h2>
      <section class="goods-info">
        <div class="picture">
          <img src="https://img.youpin.mi-img.com/800_pic/a5d8d640b7fb805bd78c3e028000dd35.png" alt />
        </div>
        <div style="width: calc(100% - .86rem - .1rem)">
          <p>
            <Tag :plain="true" :round="true" type="danger">特价</Tag>左点小艾智能艾灸盒（套餐版）
          </p>
          <p class="price">
            <span>
              <span style="font-size: .1rem">￥</span>278
            </span>
            <span style="font-size: .12rem; float: right; color: #333; font-weight: bold">x 1</span>
          </p>
          <p style="color: rgb(191, 17, 17); font-size: .1rem; opacity: 0.8;">
            <Tag text-color="rgb(191, 17, 17)" :round="true" color="rgb(255, 244, 244)">7天无理由退货</Tag>
          </p>
        </div>
        <p style="font-size:.14rem;margin:.1rem 0;">
          <span>发票类型</span>
          <span style="float:right;">
            不开发票
            <img
              style="width:.13rem;height:.13rem;"
              src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
              alt
            />
          </span>
        </p>
        <p style="padding:.1rem 0 0;">
          <span style="font-size:.14rem;">卖家留言</span>
          <input
            placeholder="填写内容需与商家协商并确认，45字以内"
            maxlength="45"
            type="text"
            style="margin-left:.1rem;background-color: rgb(255, 255, 255); color: rgb(153, 153, 153); font-size: .12rem;width: calc(100% - .86rem - .1rem);border:0;"
          />
        </p>
      </section>
    </section>

    <section class="rounded-rectagle">
      <p class="coupon" style="font-size:.14rem;margin-bottom:.25rem;">
        <span>优惠券</span>
        <span style="float:right;">
          暂无可用
          <img
            src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
            style="width:.13rem;height:.13rem"
            alt
          />
        </span>
      </p>
      <p class="deliveryMethod" style="font-size:.14rem;">
        <span>配送方式</span>
        <span style="float:right;">快递配送</span>
      </p>
    </section>

    <section class="money rounded-rectagle" style="font-size:.14rem;">
      <p>
        <span>商品金额</span>
        <span style="float:right;">￥298.00</span>
      </p>
      <p style="padding:.15rem 0;">
        <span>活动优惠</span>
        <span style="float:right;color:#BF1111;">-￥20.00</span>
      </p>
      <p>
        <span>运费</span>
        <span style="float:right;color:#BF1111;">+￥0.00</span>
      </p>
    </section>
    <section class="rounded-rectagle" style="height:.01rem;opacity:0;"></section>

    <footer class="footer">
      <div style="padding:.14rem .2rem;">
        <span style="font-size:.14rem;font-weight:bold;margin-botton:-.04rem;">合计：</span>
        <span style="font-size:.22rem;font-weight:bold;color:#BF1111;">
          <span style="font-size:.16rem;">￥</span> 278.00
        </span>

        <button
          style="background-color:rgb(191,17,17);width:1rem;height:.38rem;float:right;border-radius: 0.3rem; font-size:.15rem;color:#fff;font-weight:bold;border:0;margin-top: -.04rem;"
        >去支付</button>
      </div>
    </footer>
  </div>
</template>

<script>
import RadioGroup from "vant/lib/radio-group";
import Radio from "vant/lib/radio";
import "vant/lib/radio/style";
import "vant/lib/radio-group/style";
import CellGroup from "vant/lib/cell-group";
import Cell from "vant/lib/cell";
import "vant/lib/cell/style";
import "vant/lib/cell-group/style";
import Tag from "vant/lib/tag";
import "vant/lib/tag/style";

export default {
  components: { RadioGroup, Radio, Cell, CellGroup, Tag },
  data() {
    return {
      payMethod: 0,
      userInfo: {
        name: "符宗望",
        phone: "183****6222",
        address: "北京市昌平区回龙观东大街回龙观东大街回龙观东大街回龙观东大街"
      }
    };
  },
  methods: {
    backToCart() {
      window.history.go(-1);
    }
  }
};
</script>

<style lang='less' scoped>
.rounded-rectagle {
  background-color: #fff;
  border-radius: 0.1rem;
  padding: 0.15rem 0.1rem;
  margin-bottom: 0.1rem;
}
.bg {
  background: url("https://app.youpin.mi.com/youpin/static/m/res/images/checkout_new_top_bg.png")
    no-repeat top/100%;
  min-height: 100vh;
  padding: 0 0.1rem;
  color: #333;
  font-size: 0.13rem;

  > h1 {
    color: #ffffff;
    font-size: 0.2rem;
    font-weight: bold;
    text-align: center;
    padding: 0.3rem 0;
    position: relative;

    img {
      width: 0.42rem;
      height: 0.42rem;
      position: absolute;
      top: 0.25rem;
      left: 0;
    }
  }

  .pay-user-info {
    position: relative;

    .user-name-phone {
      font-size: 0.16rem;
      font-weight: bold;
      margin-bottom: 0.1rem;
    }
    img {
      width: 0.13rem;
      height: 0.13rem;
      position: absolute;
      top: 0.4rem;
      right: 0.1rem;
    }
  }

  .pay-methods {
    img {
      width: 0.23rem;
      height: 0.23rem;
      vertical-align: -0.065rem;
    }
    li {
      margin-bottom: 0.2rem;

      &:last-child {
        margin-bottom: 0;
      }

      span {
        padding-left: 0.1rem;
        margin-right: 0.08rem;
      }
    }
  }

  .pay-goods-info {
    h2 {
      img {
        width: 0.24rem;
        height: 0.24rem;
        vertical-align: -0.065rem;
      }
      font-weight: bolder;
      font-size: 0.14rem;
      margin-bottom: 0.2rem;
    }
    .goods-info {
      > div {
        display: inline-block;
        font-size: 0.14rem;
        height: 0.86rem;
      }
      .picture {
        margin-right: 0.1rem;
        vertical-align: bottom;
        background: rgba(0, 0, 0, 0.05);
        img {
          width: 0.86rem;
          height: 0.86rem;
        }
      }

      .price {
        color: #bf1111;
        font-size: 0.15rem;
        margin: 0.06rem 0;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgb(255, 255, 255);
    height: 0.54rem;
  }
}
</style>
