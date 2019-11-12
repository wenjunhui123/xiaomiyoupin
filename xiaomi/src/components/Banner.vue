<template>
  <div class="swiper-container'">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
      <!--  v-if="arr.length!=0" -->
      <swiper-slide class="swiper-slide" v-for="item in $store.state.banner.bannerList" :key="item.link">
        <img :src="item.url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>    

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import { mapState } from "vuex";
export default {
  name: 'carrousel',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      // bannerList: this.$store.state.banner.bannerList,
      //  swiperOption: {
      //    observel:true,
      //    observeParents:true,
      //     pagination: {
      //       el: '.swiper-pagination'
      //     }
      //   },
      //   swiperSlides: [],
       


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
  },
  created() {
    if (this.$store.state.banner.bannerList === null) {
      this.$store.dispatch("banner/updateBanner");
    }
    this.swiperSlides = this.$store.state.banner.bannerList;
  },
  watch: {
    // bannerList() {
    //   //   // return this.$store.state.banner.bannerList;
    //   this.bannerList = this.$store.state.banner.bannerList;
    // }
  },
  computed:{
swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
    mounted() {
    //   let i = 0;
    //  let timer = setInterval(() => {
    //     if (this.swiperSlides.length < this.$store.state.banner.bannerList.length) {
    //       this.swiperSlides.push(this.$store.state.banner.bannerList[i]);
    //       i++;
    //       return;
    //     }
    //  clearInterval(timer);
    //  timer = null;
    //     window.console.log(this.swiperSlides)
    //   },0)
    //   this.swiper.slideTo(3, 1000, true)
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