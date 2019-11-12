<template>
  <div class="main-footer">
    <div class="rompt-information">
      <span>底线在此,不能更低了</span>
    </div>
    <div class="footer-copyright-box">
      <span>Copyright © 小米通讯技术有限公司 版权所有</span>
      <span>京ICP备17028681号-1联系电话：010-60606666</span>
    </div>
  </div>
</template>



<script>
export default {
  components: {}
};
</script>


<style lang="less" scoped>
.main-footer {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  .rompt-information {
    height: 1.6rem;
    text-align: center;
    line-height: 1.6rem;
    font-size: 0.13rem;
    color: rgb(153, 153, 153);

    span {
      position: relative;

      &:before {
        position: absolute;
        content: "";
        width: 0.5rem;
        height: 1px;
        background: rgb(153, 153, 153);
        left: -0.6rem;
        top: 50%;
      }

      &:after {
        top: 50%;
        right: -0.6rem;
        position: absolute;
        content: "";
        width: 0.5rem;
        height: 1px;
        background: rgb(153, 153, 153);
      }
    }
  }

  .footer-copyright-box {
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
    border-style: solid;
    border-width: 1px 0px 0px;
    border-color: rgb(211, 211, 211);
    text-align: center;

    span {
      font-size: 0.1rem;
      color: rgb(153, 153, 153);
      display: inline-block;
    }
  }
}
</style>