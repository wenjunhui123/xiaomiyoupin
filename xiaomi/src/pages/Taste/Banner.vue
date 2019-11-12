<template>
  <swiper
    :options="swiperOption"
    ref="mySwiper"
    style="height: 1.715rem;width:3.43rem; border-radius: 0.06rem;"
  >
    <!-- slides -->
    <swiper-slide>
      <img
        src="https://img.youpin.mi-img.com/editor1/9c819d8470c226a2b4f14d6888775a5c.jpeg?w=1080&amp;h=540"
        style="height: 100%;width:100%;"
        alt
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://img.youpin.mi-img.com/editor1/6ab44f132df0c2c5766532c5a121f9cb.png?w=1080&h=540"
        style="height: 100%"
        alt
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://img.youpin.mi-img.com/editor1/eb4998e7f575b05dfd02568d33e06545.jpeg?w=1080&amp;h=540"
        style="height: 100%;"
        alt
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://shop.io.mi-img.com/app/shop/img?id=shop_31a86d0b20837496b767b62133624fc1.jpeg&w=786&h=395"
        style="height: 100%;"
        alt
      />
    </swiper-slide>

    <!-- Optional controls -->
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
import "swiper/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Banner",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style lang='less' scope>
.swiper-slide img {
  border-radius: 0.06rem;
  // margin-right: 0.1rem;
}
</style>
