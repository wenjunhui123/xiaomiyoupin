<template>
  <div class="tab">
    <router-link to="/home" class="link">
      <i class="icon"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/classify" class="link">
      <i class="icon"></i>
      <span>分类</span>
    </router-link>
    <router-link to="/taste" class="link">
      <i class="icon"></i>
      <span>品味</span>
    </router-link>
    <router-link to="/cart" class="link">
      <i class="icon"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/personal" class="link">
      <i class="icon"></i>
      <span>个人</span>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang='less' scoped>
.tab {
  box-sizing: border-box;
  position: fixed;
  bottom: -1px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 0.51rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .link {
    .icon {
      display: flex;
      flex-direction: row;
      width: 0.24rem;
      height: 0.24rem;
      background: url("../assets/images/img.png") no-repeat;
      background-size: 0.24rem;
    }

    span {
      font-size: 14px;
      color: rgb(127, 127, 127);

      &:hover {
        color: rgb(132, 95, 63);
      }
    }
  }

  .link:nth-child(1) {
    .icon {
      background-position: 0 0;
      margin-left: 2px;
    }

    &.active {
      .icon {
        background-position: 0 11%;
      }
    }
  }

  .link:nth-child(2) {
    .icon {
      background-position: 0 22%;
      margin-left: 3px;
    }

    &.active {
      .icon {
        background-position: 0 33%;
      }
    }
  }

  .link:nth-child(3) {
    .icon {
      background-position: 0 44%;
      margin-left: 3px;
    }

    &.active {
      .icon {
        background-position: 0 55%;
      }
    }
  }

  .link:nth-child(4) {
    .icon {
      background-position: 0 66%;
      margin-left: 7px;
    }

    &.active {
      .icon {
        background-position: 0 77.5%;
      }
    }
  }

  .link:nth-child(5) {
    .icon {
      background-position: 0 89%;
      margin-left: 2px;
    }

    &.active {
      .icon {
        background-position: 0 99.5%;
      }
    }
  }
}
</style>
