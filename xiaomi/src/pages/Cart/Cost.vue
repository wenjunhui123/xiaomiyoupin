<template>
  <div class="cost">
    <div class="bottom">
      <div class="left">
        <p>
          <i>
            <input type="checkbox" v-model="checked" @click="changeAll">
          </i>全选
        </p>
      </div>
      <div class="right">
        <div class="but">
          合计：
          <span>￥249.00</span>
          <div @click="toPay">
            结算
            <span>(1)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    cost: {
      type: String,
      default: function() {
        return {};
      },
      required: true
    }
  },
  data() {
    return {
      checked:true
    };
  },
  methods: {
    toPay() {
      this.$router.push({ path: "/pay" });
    },
    changeAll(){
      if(this.checked===true){
        this.checked =false;
        this.$store.commit('changeCheck',this.checked)
        return;
      }
      this.checked =true;
      this.$store.commit('changeCheck',this.checked)
    }
  }
};
</script>

<style lang='less' scoped>
.cost {
  width: 100%;
  padding: 0.1rem 0;
  height: 100%;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0.53rem;
  border-top: 1px solid rgb(214, 214, 214);
  background-color: rgb(255, 255, 255);
  .bottom {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .left {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      p {
        padding: 0.08rem 0 0.08rem 0.12rem;
        color: rgb(51, 51, 51);
        font-size: 0.14rem;
        i {
          display: inline-block;
          width: 0.18rem;
          height: 0.18rem;
          margin-right: 0.07rem;
          img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
      }
    }
    .right {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      .but {
        color: rgba(0, 0, 0, 0.9);
        font-size: 0.14rem;
        font-weight: bold;
        line-height: 0.35rem;
        span {
          font-size: 0.16rem;
          font-weight: normal;
          padding-right: 0.05rem;
          color: rgb(191, 17, 17);
        }
        div {
          display: inline;
          margin: 0.06rem 0.08rem 0.06rem 0;
          padding: 0.09rem 0.23rem;
          background-color: rgb(191, 17, 17);
          color: rgb(255, 255, 255);
          border-radius: 0.19rem;
          font-size: 0.16rem;
          span {
            color: rgb(255, 255, 255);
          }
        }
      }
    }
  }
}
</style>
