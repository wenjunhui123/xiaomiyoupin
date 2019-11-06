<template>
  <ul class="savour_container">
    <li>
      <a href="https://static.home.mi.com/app/shop/content?aid=qcfdc5039b04b3193&v=1503656833">
        <img
          src="https://shop.io.mi-img.com/app/shop/img?id=shop_246bf0cb90a80b76215511294f86a134.jpeg&w=1080&h=501"
          alt
        />
        <span>不去海底捞，家里做饭更健康</span>
        <b>有品生活每一天</b>
        <p>去发现</p>
      </a>
    </li>

    <li>
      <a href="https://static.home.mi.com/app/shop/content?aid=p2878503985df23b2&v=1503648502">
        <img
          src="https://shop.io.mi-img.com/app/shop/img?id=shop_b2eebc99d9f41ea4f53895ece4eead3d.jpeg&w=960&h=480"
          alt
        />
        <span>【开学新玩物】小米VR眼镜轻体验</span>
        <b>有品生活每一天</b>
        <p>去发现</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Found"
};
</script>

<style lang='less' scope>
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
