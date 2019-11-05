<template>
  <div class="search">
    <header>
      <i class="el-icon-arrow-left" @click="back"></i>
      <el-input placeholder="搜一搜" prefix-icon="el-icon-search" v-model="input1"></el-input>
      <el-button type="primary" round>搜索</el-button>
    </header>
    <div class="history">
      <div class="title">
        <h3>历史记录</h3>
        <i class="el-icon-delete"></i>
      </div>
      
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>
import search from '../../api/search';
export default {
  data() {
    return {
      input1: ""
    };
  },
  methods: {
    back() {
      window.history.go(-1);
      search.querySearchList().then(result=>{
        window.console.log(result.data)
      })
    }
  },
  components: {}
};
</script>

<style lang='less' scoped>
html,
body {
  width: 100%;
  .search {
    width: 100%;
    header {
      display: flex;
      height: 0.4rem;
      background-color: lightgrey;
      i {
        width: 20%;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.2rem;
      }
      button {
        width: 20%;
        background-color: red;
        border-radius: 50%;
      }
    }
    .history{
      width:100%;
      .title{
        width: 100%;
        height: .4rem;
        display: flex;
        font-size: .2rem;
        line-height: .4rem;
        h3{
          width: 80%;
          height: 100%;
          padding-left: .2rem; 
          text-align: left;
        }
        i{
          width: 20%;
          height: 100%;
          padding-right: .2rem;
          text-align: right;
          line-height: .4rem;
          color: lightgrey;
          font-size: .16rem;
        }
      }
    }
  }
}
</style>