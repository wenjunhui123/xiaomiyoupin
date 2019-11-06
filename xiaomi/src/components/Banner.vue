<template>
  <div class="swiper-container'" >
    <swiper :options="swiperOption" v-if="arr.length!=0" class='swiper-wrapper'>
      <swiper-slide class="swiper-slide" v-for="item in arr" :key="item.id">
        <img :src="item.pic" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>    


<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      arr: [
        {
          id: 1,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_9334c3fd5811978f84fe7035ae54b00d.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          title: ""
        },
        {
          id: 2,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_800b78d4c2287c6c7a3681076f9b1606.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          title: ""
        },
        {
          id: 3,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_a1e493684d4b9a60d2c4445e95960c81.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          title: ""
        },
        {
          id: 4,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_7f79014b3984f9a2ca0ccd989fee960a.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          title: ""
        },
        {
          id: 5,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_940e96da0d8707e657c58c5d7278e64a.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          title: ""
        }
      ],
      // imgIndex: 1,
      swiperOption: {
        // some swiper options/callbacks
        //分页器挂载到swiper-pagination类对应的元素上
        // pagination: ".swiper-pagination",
        notNextTick: true,
        loop: true, //开启轮播图前后循环模式
        //设定初始化时slide的索引
        initialSlide: 0,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          paginationType: "custom"
        }
      }
    };
  }
};
</script>



<style lang="less" scoped>
.swiper-container {
  height: 1.72rem;

  .swiper-slide {
    height: 100%;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>