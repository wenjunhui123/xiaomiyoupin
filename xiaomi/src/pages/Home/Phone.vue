<template>
  <div class="Phone-box">
    <div class="one-row" v-for="item in data.slice(0,1)" :key="item.gid">
      <div class="only-img">
        <img
          :src="item.url"
          alt
        />
      </div>
    </div>
    <div class="product-list-big">
      <ul>
        <li v-for="({gid,title,describe,url,link,price},index) in data.slice(1,5)" :key="index">
          <a href="#/detail/100749">
            <div class="product-list-top">
              <div>
                <img
                  v-lazy="url"
                  alt
                />
              </div>
              <p>{{describe}}</p>
            </div>
            <div class="product-list-bot">
              <p>{{title}}</p>
              <p>
                ￥
                <span>{{price}}</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
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
            gid: "100264",
            url:
              "https://shop.io.mi-img.com/app/shop/img?id=shop_96e4c1cbe3aa60ccb2a698695f179aba.jpeg&w=1080&h=450&t=webp",
            link: "/detail?gid=100264"
          },
          {
            gid: "100749",
            title: "红米5 Plus",
            describe: "限时赠壳膜",
            url:
              "https://shop.io.mi-img.com/app/shop/img?id=shop_a37fd8b61f8ad2181404edca13aeff6b.jpeg",
            link: "/detail?gid=100749",
            price: 999,
            mark: false
          },
          {
            gid: "757",
            title: "小米5X",
            describe: "5X全系直降100，64G版领券再减100",
            url:
              "https://static.home.mi.com/app/shop/img?id=shop_2d4c3be025f6d350ba1b2c3905912f7e.jpeg",
            link: "/detail?gid=757",
            price: 1199,
            mark: true
          },
          {
            gid: "100748",
            title: "红米5",
            describe: "千元全面屏，4+32G版新品首发",
            url:
              "https://shop.io.mi-img.com/app/shop/img?id=shop_3fa3ed5be0efa75d475ccc898a213deb.jpeg",
            link: "/detail?gid=100748",
            price: 799,
            mark: false
          },
          {
            gid: "700",
            title: "小米6",
            describe: "年货节手机专场",
            url:
              "https://static.home.mi.com/app/shop/img?id=shop_51225f14dca0dc9c584b7d55e49a8348.jpeg",
            link: "/detail?gid=700",
            price: 2299,
            mark: false
          },

          {
            gid: "100749",
            title: "红米5 Plus",
            describe: "限时赠壳膜",
            url:
              "https://shop.io.mi-img.com/app/shop/img?id=shop_a37fd8b61f8ad2181404edca13aeff6b.jpeg",
            link: "/detail?gid=100749",
            price: 999,
            mark: false
          },
          {
            gid: "757",
            title: "小米5X",
            describe: "5X全系直降100，64G版领券再减100",
            url:
              "https://static.home.mi.com/app/shop/img?id=shop_2d4c3be025f6d350ba1b2c3905912f7e.jpeg",
            link: "/detail?gid=757",
            price: 1199,
            mark: true
          },
          {
            gid: "100748",
            title: "红米5",
            describe: "千元全面屏，4+32G版新品首发",
            url:
              "https://shop.io.mi-img.com/app/shop/img?id=shop_3fa3ed5be0efa75d475ccc898a213deb.jpeg",
            link: "/detail?gid=100748",
            price: 799,
            mark: false
          },
          {
            gid: "700",
            title: "小米6",
            describe: "年货节手机专场",
            url:
              "https://static.home.mi.com/app/shop/img?id=shop_51225f14dca0dc9c584b7d55e49a8348.jpeg",
            link: "/detail?gid=700",
            price: 2299,
            mark: false
          },

          {
            gid: "100749",
            title: "红米5 Plus",
            describe: "限时赠壳膜",
            url:
              "https://shop.io.mi-img.com/app/shop/img?id=shop_a37fd8b61f8ad2181404edca13aeff6b.jpeg",
            link: "/detail?gid=100749",
            price: 999,
            mark: false
          },
          {
            gid: "757",
            title: "小米5X",
            describe: "5X全系直降100，64G版领券再减100",
            url:
              "https://static.home.mi.com/app/shop/img?id=shop_2d4c3be025f6d350ba1b2c3905912f7e.jpeg",
            link: "/detail?gid=757",
            price: 1199,
            mark: true
          },
          {
            gid: "100748",
            title: "红米5",
            describe: "千元全面屏，4+32G版新品首发",
            url:
              "https://shop.io.mi-img.com/app/shop/img?id=shop_3fa3ed5be0efa75d475ccc898a213deb.jpeg",
            link: "/detail?gid=100748",
            price: 799,
            mark: false
          },
          {
            gid: "700",
            title: "小米6",
            describe: "年货节手机专场",
            url:
              "https://static.home.mi.com/app/shop/img?id=shop_51225f14dca0dc9c584b7d55e49a8348.jpeg",
            link: "/detail?gid=700",
            price: 2299,
            mark: false
          }
        ]
      
    };
  }
};
</script>


<style lang="less" scoped>
.Phone-box {
  width: 100%;

  .one-row {
    display: flex;
    flex-direction: column;
    flex: 1;

    .only-img {
      img {
        width: 100%;
      }
    }
  }

  .product-list-big {
    font-size: 12/100rem;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        border: 1/100rem solid rgb(239, 239, 239);
        width: 49%;
        box-sizing: border-box;
        overflow: hidden;
      }
    }

    .product-list-top {
      display: flex;
      flex-direction: column;
      background: #fff;
      box-sizing: border-box;

      div {
        width: 116/100rem;
        margin: 0 auto;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      p {
        font-size: 12/100rem;
        color: rgb(132, 95, 63);
        padding: 0 8/100rem 8/100rem;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    .product-list-bot {
      background-color: rgb(247, 247, 247);
      padding: 0 8/100rem;
      box-sizing: border-box;

      p {
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        box-sizing: border-box;

        &:nth-of-type(1) {
          padding-top: 8/100rem;
          color: rgb(51, 51, 51);
          font-size: 12/100rem;
        }

        &:nth-of-type(2) {
          font-size: 10/100rem;
          line-height: 12/100rem;
          color: rgb(182, 9, 9);
          padding: 4/100rem 0;

          span {
            font-size: 13/100rem;
            line-height: 15.6/100rem;
            padding-right: 4/100rem;
          }

          em {
            font-size: 10/100rem;
            color: rgb(255, 255, 255);
            background-color: rgb(217, 58, 57);
            line-height: 12/100rem;
            padding: 0 4/100rem;
          }
        }
      }
    }
  }
}
</style>