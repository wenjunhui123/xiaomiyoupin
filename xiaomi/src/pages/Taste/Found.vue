<template>
  <div>
    <div class="weekly">
      <span>
        独家专栏
        <img
          src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
          alt
        />
      </span>
    </div>
    
    <ul class="savour_container">
      <li v-for="item in found" :key="item.article_id">
        <router-link :to="item.url">
          <img :src="item.pic_url" />
          <span>{{ item.title }}</span>
          <b>{{ item.subtitle}}</b>
          <p>去发现</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import MockData from "./mockData";

export default {
  name: "Found",
  data() {
    return {
      found: []
    };
  },
  created() {
    this.found = MockData;
  }
};
</script>

<style lang='less' scoped>
.weekly {
  height: 0.4rem;
  margin-top: 0.1rem;
  position: relative;

  span {
    font-size: 0.14rem;
    color: #333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 0.13rem;
      height: 0.13rem;
    }
  }
}
.savour_container {
  box-sizing: border-box;

  li {
    padding-top: 0.005rem;
    text-align: center;
    border-bottom: 0.07rem solid rgb(238, 238, 238);
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: #fff;

    img {
      display: block;
      width: 95%;
      height: 95%;
      margin: 2.5% 2.5%;
    }

    span {
      display: block;
      font-size: 0.18rem;
      padding-top: 0.1rem;
      color: rgb(51, 51, 51);
      word-wrap: break-word;
    }

    b {
      display: block;
      color: rgb(153, 153, 153);
      font-size: 0.13rem;
      padding-top: 0.08rem;
      word-wrap: break-word;
    }

    p {
      margin: 0.18rem auto;
      width: 0.74rem;
      height: 0.3rem;
      background-color: rgb(209, 191, 167);
      border-radius: 0.0228889rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.15rem;
      color: rgb(255, 255, 255);
    }

    &:last-of-type {
      padding-bottom: 0.3rem;
    }
  }
}
</style>
