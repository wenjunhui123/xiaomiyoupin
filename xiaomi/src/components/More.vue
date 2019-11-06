<template>
  <div class="title-box">
    <span>{{name}}</span>
    <a>
      <span>更多</span>
      <img src="https://static.home.mi.com/youpin/static/m/res/images/std_right_arrow_gray.png" alt />
    </a>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {};
  },
  props:{
    name:{
      type:String,
      default:"你是谁"
    }
  }
};
</script>

<style lang="less" scoped>
.title-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.05rem;
  padding-left: 0.08rem;
  padding-right: 0.13rem;
  height: 0.47rem;
  background: #fff;

  span {
    flex: 11;
    font-size: 0.15rem;
    color: rgb(51, 51, 51);
  }

  a {
    font-size: 0.13rem;
    color: rgb(153, 153, 153);

    span {
      color: rgb(153, 153, 153);
    }

    img {
      width: 0.05rem;
      height: 0.1rem;
      margin-left: 0.06rem;
      margin-top: -0.04rem;
    }
  }
}
</style>