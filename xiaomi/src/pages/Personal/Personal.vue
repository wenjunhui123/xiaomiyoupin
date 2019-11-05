<template>
  <div>
    个人
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from '../../components/Tab';
export default {
  components: {
    Tab
  }
}
</script>

<style lang='less' scoped>
</style>