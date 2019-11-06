<template>
  <div>
    <div class="weekly">
      <span>
        品味周刊
        <img
          src="https://app.youpin.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png"
          alt
        />
      </span>
    </div>

    <div class="referral">
      <img
        src="https://img.youpin.mi-img.com/editor1/a0a168622f6dd83f65268f00a925c74b.jpg?w=1080&h=270"
        alt
      />
    </div>
    <!-- <div> -->
    <div class="listBox">
      <div class="listItem">
        <div class="imgBox">
          <img
            src="https://img.youpin.mi-img.com/shopmain/9be4dbd6b06b553939d771f532d48da2.png?w=800&h=800@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
            alt
          />
        </div>
        <span>左点小艾2代无线智能艾灸盒</span>
        <span>¥ 349</span>
      </div>
      <div class="listItem">
        <div class="imgBox">
          <img
            src="https://img.youpin.mi-img.com/800_pic/1093ed8216217392a83b974f3bef2561.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
            alt
          />
        </div>
        <span>乐伽多功能按摩艾灸棒</span>
        <span>¥ 24.90</span>
      </div>
      <div class="listItem">
        <div class="imgBox">
          <img
            src="https://img.youpin.mi-img.com/800_pic/a3224b285fa84c52ad999c5278e0d018.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
            style="width:100%;height:100%;"
            alt
          />
        </div>
        <span>HiPee艾草灸热贴（5贴/盒）</span>
        <span>¥ 39</span>
      </div>
      <div class="listItem">
        <div class="imgBox">
          <img
            src="https://img.youpin.mi-img.com/shopmain/aa6fd70efa7de56358e322cc9016c99c.png?w=800&h=800@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
            style="width:100%;height:100%;"
            alt
          />
        </div>
        <span>蕲农本草养生三伏贴</span>
        <span>¥ 39</span>
      </div>
      <div class="listItem">
        <div class="imgBox">
          <img
            src="https://img.youpin.mi-img.com/800_pic/0b79137e68789247c0bf2b831d43923f.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
            style="width:100%;height:100%;"
            alt
          />
        </div>
        <span>PMA玫瑰海盐艾灸热敷包(电热版)</span>
        <span>¥ 189</span>
      </div>
      <div class="listItem">
        <div class="imgBox">
          <img
            src="https://img.youpin.mi-img.com/800_pic/881af2f918cf589c404039d9fbc45643.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
            style="width:100%;height:100%;"
            alt
          />
        </div>
        <span>HITH智能足浴机器人S1 时尚版</span>
        <span>¥ 1599</span>
      </div>
      <div class="listItem">
        <div class="imgBox">
          <img
            src="https://img.youpin.mi-img.com/shopmain/e8fb83e485203449d60b9e4d1f87db44.png?w=800&h=800@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
            style="width:100%;height:100%;"
            al
          />
        </div>
        <span>蕲农本草金丝长纤维艾条6支装</span>
        <span>¥ 99</span>
      </div>
      <div class="listItem">
        <div class="imgBox">
          <img
            src="https://img.youpin.mi-img.com/shopmain/c0e7c35005fbd75e6b6a73565a0aee12.png?w=800&h=800@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF"
            style="width:100%;height:100%;"
            alt
          />
        </div>
        <span>格格爱上班 硅胶拔罐器</span>
        <span>¥ 89</span>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "ProductList"
};
</script>

<style lang='less' scope>
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
.referral {
  padding: 0 0.15rem;
  width: 3.45rem;
  height: 1.2rem;

  img {
    width: 100%;
    height: 100%;
  }
}

.listBox {
  display: flex;
  margin: 0.08rem 0.15rem 0;
  width: 8.42rem;
  height: 1.55rem;

  .listItem {
    width: 1rem;
    height: 1.5rem;
    margin-left: 0.06rem;

    &:first-child {
      margin-left: 0;
    }

    .imgBox {
      height: 1rem;
      width: 1rem;
      background-color: rgba(0, 0, 0, 0.02);

      img {
        width: 100%;
        height: 100%;
      }

      span {
        color: rgb(51, 51, 51);
        font-size: 12px;
        margin-bottom: 8px;
        margin-top: 9px;
      }

      span:nth-of-type(2) {
        color: rgb(182, 9, 9);
      }
    }
  }
}
</style>
