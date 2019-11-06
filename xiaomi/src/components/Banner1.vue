<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide.url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
   <div class="cart">
   </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 500 //自自动循环时间
        }, //可选选项，自动滑动
        speed: 1000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        loop: true, //循环切换
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        scrollbar: ".swiper-scrollbar",
        mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
        observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          // type : 'progressbar', //分页器形状
          clickable: true //点击分页器的指示点分页器会控制Swiper切换
        }
      },
      swiperSlides: [
        {
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_9334c3fd5811978f84fe7035ae54b00d.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          link: "https://home.mi.com/app/shopv3/site/0118"
        },
        {
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_800b78d4c2287c6c7a3681076f9b1606.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          link: "https://home.mi.com/detail?gid=100400"
        },
        {
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_a1e493684d4b9a60d2c4445e95960c81.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          link: "https://home.mi.com/app/shop/content?id=q283ad0390a96ed83"
        },
        {
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_7f79014b3984f9a2ca0ccd989fee960a.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          link: "https://home.mi.com/app/shop/content?id=s8fa0d039077a9c85"
        },
        {
          url:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_940e96da0d8707e657c58c5d7278e64a.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
          link: "https://home.mi.com/detail?gid=100982"
        }
      ],
    


    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  .swiper-container {
    width: 100%;
    .swiper-wrapper {
        height: 1rem ;
        .swiper-slide{
            height: 2rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
  }

}
</style>