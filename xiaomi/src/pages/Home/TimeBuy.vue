<template>
  <div class="timer-group">
    <div
      class="timer-group-item"
      v-for="({gid,title,url,ratednum,soldnum,price,oprice},index) in data"
      :key="index"
    >
      <div class="timer-container">
        <div class="timer-container-title marl">
          <p>{{title}}</p>
        </div>
        <div class="timer-container-remaining marl">
          <div class="remaining-box">
            <div class="div" style="width: 64px;">
              <div class="remaining"></div>
            </div>
          </div>
          <span style="font-size: 0.09rem;">{{(soldnum/ratednum)*100+'%'}}</span>
        </div>
        <div class="timer-container-price marl">
          <span class="container-price-num">
            ￥{{price}}
            <span class="out-line">￥{{oprice}}</span>
          </span>
        </div>
        <div class="timer-container-img">
          <img v-lazy="url" alt />
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
          gid: "oed6fd0393b6297e1",
          title: "青米插线板（三孔位）",
          describe: "",
          url:
            "https://static.home.mi.com/app/shop/img?id=shop_954d8bee31cf91966c14d93734e9ad28.jpeg&t=webp",
          link: "/activity?cid=oed6fd0393b6297e1",
          ratednum: 1000,
          soldnum: 640,
          price: 28,
          oprice: 35
        },
        {
          gid: "oed6fd0393b6297e1",
          title: "多口USB电源适配器",
          describe: "",
          url:
            "https://static.home.mi.com/app/shop/img?id=shop_0c4c1cde7e2ff397ea4bbc24bb16cd1a.jpeg&t=webp",
          link: "/activity?cid=oed6fd0393b6297e1",
          ratednum: 2000,
          soldnum: 640,
          price: 129,
          oprice: 169
        },
        {
          gid: "oed6fd0393b6297e1",
          title: "萌托斯·法式手工甜品",
          describe: "",
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_093f784845f89d87fa711f433c78f1a9.jpeg&t=webp",
          link: "/activity?cid=oed6fd0393b6297e1",
          ratednum: 1000,
          soldnum: 800,
          price: 99,
          oprice: 109
        },
        {
          gid: "oed6fd0393b6297e1",
          title: "极米Z5家用智能投影",
          describe: "",
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_7372aeb265665cc1134cdf9608bf069b.jpeg&t=webp",
          link: "/activity?cid=oed6fd0393b6297e1",
          ratednum: 1000,
          soldnum: 430,
          price: 2599,
          oprice: 3499
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
.timer-group {
  display: flex;
  flex-direction: row;
  flex: 0 0 18%;
  margin-top: 2px;
  align-items: center;
  overflow-x: scroll;

  //自定义滚动条样式
  &::-webkit-scrollbar {
    display: none;
  }

  .timer-group-item {
    flex: 1;
    margin-right: 2px;
    padding-top: 0.18rem;
    background: #fff;

    .timer-container {
      width: 1.5rem;
      // 水平显示，正如行一样
      flex-direction: row;
      //项目位于容器的中心
      justify-content: center;
      //元素位于容器的中心
      align-items: center;

      .marl {
        margin-left: 14px;
      }
      .timer-container-title {
        p {
          font-size: 0.13rem;
          color: rgb(51, 51, 51);
          line-height: 15.6px;
          overflow: hidden;
          // 显示省略符号来代表被修剪的文本。
          text-overflow: ellipsis;
          //超出省略
          -webkit-line-clamp: 1;
          //从上自下垂直排列子元素
          -webkit-box-orient: vertical;
          max-height: 15.6px;
        }
      }
      .timer-container-remaining {
        .remaining-box {
          border-style: solid;
          border-width: 1px;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          width: 0.72rem;
          height: 3px;
          border-radius: 1.5px;
          border-color: rgb(192, 67, 67);
          margin-right: 6px;
          display: inline-block;
          top: -4px;

          .div {
            left: 0px;
            position: relative;
            height: 100%;
            overflow: hidden;
            background-color: transparent;
            width: 93%;

            .remaining {
              position: relative;
              height: 100%;
              left: 0px;
              top: 0px;
              bottom: 0px;
              border-radius: 1.5px;
              background-color: rgb(192, 67, 67);
              width: 72px;
            }
          }
        }

      
      }
      .timer-container-price {
        .container-price-num {
          display: inline-block;
          font-size: 0.16rem;
          color: rgb(192, 67, 67);
          line-height: 0.192rem;

          span {
            font-size: 0.11rem;
            color: rgb(204, 204, 204);
            line-height: 0.132rem;
            text-decoration: line-through;
          }
        }
      }
      .timer-container-img {
        width: 1rem;
        height: 1rem;
        margin: auto;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>