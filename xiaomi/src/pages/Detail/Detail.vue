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
   <Good :good='item' v-for="(item,index) in goods" :key="index"></Good>   
  </div>
</template>

<script>
import Good from '../../components/Good';
export default {
  data() {
    return {
      input2: "",
      activeIndex: '1',
      goods:[
  {
    "gid" : "890",
    "title": "全天候机能城市背包",
    "describe": "拒水性3-4级，背负升级",
    "url": "https://shop.io.mi-img.com/app/shop/img?id=shop_4b6dfabbc1c80fa33df4189d1b323d26.jpeg",
    "link":"/detail?gid=890",
    "price": 189,
    "mark":true
  },
  {
    "gid" : "891",
    "title": "时尚菱格双肩包",
    "describe": "防泼水，背负舒适",
    "url": "https://shop.io.mi-img.com/app/shop/img?id=shop_c8c20e8ad6a0e573679f1669fc68a99b.jpeg",
    "link":"/detail?gid=891",
    "price": 249,
    "mark":false
  },
  {
    "gid" : "655",
    "title": "90分百搭运动折叠包",
    "describe": "三重背法，轻便可折叠",
    "url": "https://static.home.mi.com/app/shop/img?id=shop_f04e5b9bbd25c7aecb7fa396412192f3.jpeg",
    "link":"/detail?gid=655",
    "price": 49,
    "mark":false
  },
  {
    "gid" : "759",
    "title": "都市简约双肩背包",
    "describe": "防泼水，背负舒适",
    "url": "https://static.home.mi.com/app/shop/img?id=shop_25c5118ca5d365eecee7d4b69fbfa068.jpeg",
    "link":"/detail?gid=759",
    "price": 169,
    "mark":false
  },
  {
    "gid" : "890",
    "title": "全天候机能城市背包",
    "describe": "拒水性3-4级，背负升级",
    "url": "https://shop.io.mi-img.com/app/shop/img?id=shop_4b6dfabbc1c80fa33df4189d1b323d26.jpeg",
    "link":"/detail?gid=890",
    "price": 189,
    "mark":true
  },
  {
    "gid" : "891",
    "title": "时尚菱格双肩包",
    "describe": "防泼水，背负舒适",
    "url": "https://shop.io.mi-img.com/app/shop/img?id=shop_c8c20e8ad6a0e573679f1669fc68a99b.jpeg",
    "link":"/detail?gid=891",
    "price": 249,
    "mark":false
  },
  {
    "gid" : "655",
    "title": "90分百搭运动折叠包",
    "describe": "三重背法，轻便可折叠",
    "url": "https://static.home.mi.com/app/shop/img?id=shop_f04e5b9bbd25c7aecb7fa396412192f3.jpeg",
    "link":"/detail?gid=655",
    "price": 49,
    "mark":false
  },
  {
    "gid" : "759",
    "title": "都市简约双肩背包",
    "describe": "防泼水，背负舒适",
    "url": "https://static.home.mi.com/app/shop/img?id=shop_25c5118ca5d365eecee7d4b69fbfa068.jpeg",
    "link":"/detail?gid=759",
    "price": 169,
    "mark":false
  },
  {
    "gid" : "890",
    "title": "全天候机能城市背包",
    "describe": "拒水性3-4级，背负升级",
    "url": "https://shop.io.mi-img.com/app/shop/img?id=shop_4b6dfabbc1c80fa33df4189d1b323d26.jpeg",
    "link":"/detail?gid=890",
    "price": 189,
    "mark":true
  },
  {
    "gid" : "891",
    "title": "时尚菱格双肩包",
    "describe": "防泼水，背负舒适",
    "url": "https://shop.io.mi-img.com/app/shop/img?id=shop_c8c20e8ad6a0e573679f1669fc68a99b.jpeg",
    "link":"/detail?gid=891",
    "price": 249,
    "mark":false
  },
  {
    "gid" : "655",
    "title": "90分百搭运动折叠包",
    "describe": "三重背法，轻便可折叠",
    "url": "https://static.home.mi.com/app/shop/img?id=shop_f04e5b9bbd25c7aecb7fa396412192f3.jpeg",
    "link":"/detail?gid=655",
    "price": 49,
    "mark":false
  },
  {
    "gid" : "759",
    "title": "都市简约双肩背包",
    "describe": "防泼水，背负舒适",
    "url": "https://static.home.mi.com/app/shop/img?id=shop_25c5118ca5d365eecee7d4b69fbfa068.jpeg",
    "link":"/detail?gid=759",
    "price": 169,
    "mark":false
  }
]
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
  components: {
    Good
  }
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