<template>
  <div class="main-hot-box">
    <div class="t-row-box">
      <div class="row-tool" v-for="item in data.slice(0,2)" :key="item.id">
        <img alt :src="item.pic" />
        <div class="t-row-text">
          <p class="row-title">{{item.title}}</p>
          <span class="row-price">{{item.price}}</span>
        </div>
      </div>
    </div>
    <div class="three-row-box">
      <div class="three-row">
        <img :src="data[2].pic" alt />
        <div class="t-row-text">
          <p class="row-title">{{data[2].title}}</p>
          <p class="row-alt">{{data[2].alt}}</p>
          <span class="row-price">{{data[2].price}}</span>
        </div>
      </div>
      <div class="three-row">
        <div class="row-tool" v-for="item in data.slice(data.length-2)" :key="item.id">
          <img alt v-lazy="item.pic" />
          <div class="t-row-text">
            <p class="row-title">{{item.title}}</p>
            <span class="row-price">{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      data: [
        {
          id: 1,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_dc4955a7f668f79135bf689005746475.png&amp;w=537&amp;h=426,https://shop.io.mi-img.com/app/shop/img?id=shop_1d26c4fec9f7de43e090f5058a6532b2.png&amp;w=540&amp;h=420&amp;t=webp",
          title: "米家扫地机器人",
          price: "￥1699"
        },
        {
          id: 2,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_fbac9bcd7a15e60e3d6e864c66a62047.png&amp;w=540&amp;h=420,https://shop.io.mi-img.com/app/shop/img?id=shop_06a052b2c28bc7c80ad4ce96919fb82d.png&amp;w=540&amp;h=420&amp;t=webp",
          title: "小米5X",
          price: "￥1199"
        },
        {
          id: 3,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_d52f9fa59bcd507e9807e4014ab55418.jpeg&amp;w=537&amp;h=852&amp;t=webp",
          title: "米家空气净化器Pro",
          price: "￥1499",
          alt: "澎湃动力，净化能力更快更强"
        },
        {
          id: 4,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_68eaff32dfae580e6ca7250ca7fa4a0b.png&amp;w=537&amp;h=426&amp;t=webp",
          title: "米家扫地机器人",
          price: "￥1699"
        },
        {
          id: 5,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_da726d59c27705dedc637fcc169aebdf.png&amp;w=540&amp;h=420&amp;t=webp",
          title: "石墨烯发热腰带",
          price: "￥116"
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
.main-hot-box {
  .t-row-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;

    .row-tool {
      flex: 1;
      position: relative;
      margin-right: 2px;
      background-color: rgb(244, 244, 244);
      margin-bottom: 2px;

      img {
        width: 100%;
      }

      &:nth-of-type(2) {
        margin-right: 0;
      }

      .t-row-bg {
        height: 100%;
        width: 100%;
        background-position-y: 0.06rem;
        background-size: 100%;
        background-color: rgb(237, 248, 236);
        background-image: url(
          https://shop.io.mi-img.com/app/shop/img?id=shop_6c8b592365cb0137928cdc7bef23f979.png&w=537&h=426,
          https://shop.io.mi-img.com/app/shop/img?id=shop_8a0b96cba6d1a2e01950776552420d14.png&w=540&h=420&t=webp
        );
      }

      .right-row-bg {
        background-color: rgb(237, 248, 236);
        background-image: url(
          https://shop.io.mi-img.com/app/shop/img?id=shop_6c8b592365cb0137928cdc7bef23f979.png&w=537&h=426,
          https://shop.io.mi-img.com/app/shop/img?id=shop_8a0b96cba6d1a2e01950776552420d14.png&w=540&h=420&t=webp
        );
      }

      .t-row-text {
        position: absolute;
        top: 0.15rem;
        left: 0.12rem;

        .row-title {
          font-size: 0.13rem;
          color: rgb(51, 51, 51);
        }

        .row-price {
          color: rgb(192, 67, 67);
          font-size: 0.14rem;
        }
      }
    }
  }

  .three-row-box {
    display: flex;
    flex-direction: row;
    background: #ffffff;
    flex: 0 0 50%;

    .three-row {
      flex: 1;
      margin-right: 2px;
      position: relative;

      .t-row-text {
        position: absolute;
        width: 100%;
        top: 0.15rem;
        padding-left: 0.12rem;

        .row-price {
          color: #c04343;
          font-size: 0.14rem;
        }

        .row-alt {
          color: rgb(153, 153, 153);
          background-color: transparent;
          font-size: 0.11rem;
        }

        .row-title {
          font-size: 0.13rem;
          color: #333333;
        }
      }

      &:nth-of-type(2) {
        margin-right: 0;
      }

      .row-tool {
        display: flex;
        flex-direction: column;
        flex: 1;
        position: relative;
        background-color: #f4f4f4;

        &:nth-of-type(2) {
          position: relative;
          top: 3px;
        }

        .t-row-text {
          position: absolute;
          width: 100%;
          top: 0.15rem;
          padding-left: 0.12rem;

          .row-price {
            color: #c04343;
            font-size: 0.14rem;
          }
        }
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>