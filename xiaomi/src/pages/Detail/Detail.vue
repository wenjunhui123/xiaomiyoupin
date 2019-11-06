<template>
  <div class="detail">
    <header>
      <i class="el-icon-arrow-left" @click="toHome"></i>
      <el-input placeholder="搜一搜" prefix-icon="el-icon-search" v-model="input2"></el-input>
      <i class="el-icon-menu"></i>
    </header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
       <el-submenu index="1" >
    <template slot="title">综合</template>
    <el-menu-item index="1-1">综合排序</el-menu-item>
    <el-menu-item index="1-2">销量排序</el-menu-item>
    </el-submenu>
<el-menu-item index="2">新品</el-menu-item>
<el-menu-item index="3">价格</el-menu-item>
<el-menu-item index="4">信用</el-menu-item>
<el-menu-item index="5">筛选</el-menu-item>
     </el-menu> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      activeIndex: '1'
    };
  },
  methods:{
    toHome(){
this.$router.push({path:'/home'});
    },
    handleSelect(key, keyPath) {
        window.console.log(key, keyPath);
      }
  },
  created() {
    this.input2 = this.$route.query.title;
  },
  components: {}
};
</script>

<style lang='less' scoped>
.detail {
  width: 100%;
  header {
    display: flex;
    width: 100%;
    height: .4rem;
    background-color: lightgrey;
    div{
      width: 70%;
      height: 100%;
    }
    i {
      width: 15%;
      height: 100%;
      line-height: .4rem;
      font-size: .2rem;
      text-align: center;
    }
  }
  .el-menu{

    li.is-active{
      color: red;
      .el-submenu__title{
        color: red !important;
      }
    }
  }
}
</style>