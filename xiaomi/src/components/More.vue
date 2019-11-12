<template>
  <div class="title-box">
    <span>{{name}}</span>
    <div class="time" v-if="show">
      <div class="time-container">
        <img resizemode="stretch" fallbacksource="[object Object]" src />
        <span class="time-decr">{{hours}}点场</span>
        <div class="time-one">
          <div class="time-two">
            <div class="time-three">
              <span class="time-hour">{{this.hour}}</span>
            </div>
            <span class="time-four">:</span>
            <div class="time-five">
              <span class="time-minutes">{{this.min}}</span>
            </div>
            <span class="time-six">:</span>
            <div class="time-seven">
              <span class="time-eight">{{this.sec}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a>
      <span @click="func">更多</span>
      <img src="https://static.home.mi.com/youpin/static/m/res/images/std_right_arrow_gray.png" alt />
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      timeShow: true,
      day: 0,
      hour: 0,
      min: 0,
      sec: 0
    };
  },
  props: {
    name: {
      type: String,
      default: "你是谁"
    },
    show: {
      type: Boolean,
      default: true
    },
    msg: String,
    hours: String
  },
  created() {
    this.interval = setInterval(() => {
      this.countDown(this.msg);
    }, 1000);
  },
  methods: {
    func(callback) {
      let xhr = new XMLHttpRequest();
      xhr.open("head", "http://yapi.demo.qunar.com/mock/95100/project/list", true);
      xhr.onreadtstatechange = function() {
        if (!/^(2|3)\d{2}$/.test(xhr.status)) return;
        if (xhr.readyState === 2) {
          now = new Date(xhr.getResponseHeader("Date"));
          callback && callback();
        }
      };

      xhr.send(null);
    },

    countDown(aimTime) {
      if (typeof aimTime === "undefined") return;
      var myTime = new Date();
      var now = myTime.getTime();
      // parse() ：输出从 1970/01/01 到一个具体日期的毫秒数；
      // Date.parse('时间可以自定义')。
      var end = new Date(Date.parse(aimTime.replace(/-/g, "/"))).getTime();
      var dataDiff = end - now;
      if (dataDiff >= 0) {
        //计算出相差天数
        var day = Math.floor(dataDiff / (24 * 3600 * 1000));
        //计算出剩余的毫秒数
        var another1 = Math.floor(dataDiff % (24 * 3600 * 1000));
        //计算出小时数（不显示天数）
        var hour = Math.floor(another1 / (3600 * 1000) + day * 24);
        //计算小时数后剩余的毫秒数
        var another2 = another1 % (3600 * 1000);
        var min = Math.floor(another2 / (1000 * 60));
        var another3 = another2 % (60 * 1000);
        var sec = Math.floor(another3 / 1000);
        if (sec < 10) {
          sec = "0" + sec;
        }
        if (min < 10) {
          min = "0" + min;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
      }

      this.hour = hour;
      this.min = min;
      this.sec = sec;
    }
  },
  beforeDestroy() {
    //退出页面前关闭定时器
    clearInterval(this.interval);
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

  .name {
    border: 0rem solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    flex: 1 1 0%;
    -webkit-box-flex: 1;
    height: 0.4128rem;
    // right: 1.5rem;
  }
  .time-container {
    border: 0rem solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    align-content: flex-start;
    flex: 1 1 0%;
    height: 0.4128rem;
    -webkit-box-flex: 1;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 0.96rem;
    top: 0.01rem;
    left: -1.2rem;
    img {
      display: flex;
      width: 0.1152rem;
      height: 0.1152rem;
    }
    .time-decr {
      white-space: pre-wrap;
      border: 0rem solid black;
      position: relative;
      box-sizing: border-box;
      display: block;
      -webkit-box-orient: vertical;
      flex-direction: column;
      align-content: flex-start;
      flex-shrink: 0;
      font-size: 0.1248rem;
      margin-left: 0.0288rem;
      color: rgb(169, 33, 18);
    }
    .time-one {
      border: 0rem solid black;
      position: relative;
      box-sizing: border-box;
      display: flex;
      -webkit-box-orient: vertical;
      flex-direction: column;
      align-content: flex-start;
      flex-shrink: 0;
      margin-left: 0.0576rem;
      top: 0.03rem;
      .time-two {
        border: 0rem solid black;
        position: relative;
        box-sizing: border-box;
        display: flex;
        -webkit-box-orient: horizontal;
        flex-direction: row;
        align-content: flex-start;
        flex-shrink: 0;
        .time-three {
          border: 0rem solid black;
          position: relative;
          box-sizing: border-box;
          display: flex;
          -webkit-box-orient: vertical;
          flex-direction: column;
          place-content: flex-start center;
          flex-shrink: 0;
          height: 0.1536rem;
          width: 0.1536rem;
          background-color: rgb(169, 33, 18);
          border-radius: 0.0192rem;
          top: -0.0048rem;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          .time-hour {
            white-space: pre-wrap;
            border: 0rem solid black;
            position: relative;
            box-sizing: border-box;
            display: block;
            -webkit-box-orient: vertical;
            flex-direction: column;
            align-content: flex-start;
            flex-shrink: 0;
            font-size: 0.0096rem;
            color: white;
            top: 0.0096rem;
          }
          .time-four {
            white-space: pre-wrap;
            border: 0rem solid black;
            position: relative;
            box-sizing: border-box;
            display: block;
            -webkit-box-orient: vertical;
            flex-direction: column;
            align-content: flex-start;
            flex-shrink: 0;
            font-size: 0.096rem;
            top: 0.0144rem;
            padding-left: 0.0144rem;
            padding-right: 0.0144rem;
            color: rgb(169, 33, 18);
          }
        }
        .time-five {
          border: 0rem solid black;
          position: relative;
          box-sizing: border-box;
          display: flex;
          -webkit-box-orient: vertical;
          flex-direction: column;
          place-content: flex-start center;
          flex-shrink: 0;
          height: 0.1536rem;
          width: 0.1536rem;
          background-color: rgb(169, 33, 18);
          border-radius: 0.0192rem;
          top: -0.0048rem;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          .time-minutes {
            white-space: pre-wrap;
            border: 0rem solid black;
            position: relative;
            box-sizing: border-box;
            display: block;
            -webkit-box-orient: vertical;
            flex-direction: column;
            align-content: flex-start;
            flex-shrink: 0;
            font-size: 0.096rem;
            color: white;
            top: 0.0096rem;
          }
        }
        .time-six {
          white-space: pre-wrap;
          border: 0rem solid black;
          position: relative;
          box-sizing: border-box;
          display: block;
          -webkit-box-orient: vertical;
          flex-direction: column;
          align-content: flex-start;
          flex-shrink: 0;
          font-size: 0.096rem;
          top: 0.0144rem;
          padding-left: 0.0144rem;
          padding-right: 0.0144rem;
          color: rgb(169, 33, 18);
        }
        .time-seven {
          border: 0rem solid black;
          position: relative;
          box-sizing: border-box;
          display: flex;
          -webkit-box-orient: vertical;
          flex-direction: column;
          place-content: flex-start center;
          flex-shrink: 0;
          height: 0.1536rem;
          width: 0.1536rem;
          background-color: rgb(169, 33, 18);
          border-radius: 0.0192rem;
          top: -0.0048rem;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          .time-eight {
            white-space: pre-wrap;
            border: 0px solid black;
            position: relative;
            box-sizing: border-box;
            display: block;
            -webkit-box-orient: vertical;
            flex-direction: column;
            align-content: flex-start;
            flex-shrink: 0;
            font-size: 9.6px;
            color: white;
            top: 0.96px;
          }
        }
      }
    }
  }
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