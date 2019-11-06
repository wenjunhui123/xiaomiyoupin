<template>
  <div>
    <div class="app">
      <div class="content">
        <div class="logo"></div>
        <div class="button-container">
          <div class="button down-btn">
            <p>下载App</p>
          </div>
          <div class="button open-btn">
            <p>打开App</p>
          </div>
        </div>
        <div class="product"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  background: #fff;
}
.app .content {
  margin: 0 auto;
  overflow: auto;
  max-width: 100%;
  min-height: 100%;
  display: flex;
  /* 将项目垂直显示 列 */
  flex-direction: column;
  /* //项目位于容器的 */
  justify-content: center;
  /* //元素位于容器的中心。 */
  align-items: center;
  padding-top: 0.5rem;
}

.logo {
  width: 100%;
  flex: 0 0 2.5rem;
  background: url(https://img.youpin.mi-img.com/editor1/4466466bf94b9128421b1227f46e9c9c.png?h=619&w=1080)
    no-repeat 0 0;
  background-size: 100% auto;
}

.button-container {
  width: 2.8rem;
  height: 1.86rem;
  margin-bottom: 0.56rem;
}
.button-container .button {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.22rem;
  border-radius: 0.1rem;
  border: 1px solid #855b2f;
}

.button-container .button.down-btn {
  margin-bottom: 0.22rem;
  background: #855b2f;
}
p {
  text-align: center;
  color: #fff;
}
.button-container .button.open-btn p {
  color: #855b2f;
}
.product {
  width: 100%;
  height: 2rem;
  background: url(https://img.youpin.mi-img.com/editor1/00607dc95615c0b0ec7cc3628de8e12a.png?h=796&w=1080)
    no-repeat 0 0;
  background-size: 100% auto;
  margin-bottom: 0.36rem;
}
</style>