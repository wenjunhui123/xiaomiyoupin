<template>
  <div class="container">
    <div class="top" @click="go" >
        <div class="inp">
            <a class="icon">
                <img src="../../assets/images/home_search.png" alt="">
            </a>
            <span>年度爆款限时5折购</span>
        </div>
        
    </div>
    
    <div class="g-body">
        <div class="nav">
                <ul>
                    <li :class="{current:index===ins}"  v-for="(item,index) in itemList" :key="index" @click="active(index)">{{item.title}}</li>
                </ul>
            </div>
            <Recommend></Recommend>
        </div>
<Tab></Tab>
  </div>
</template>

<script>
import Tab from '../../components/Tab';
import Recommend from './Recommend';
export default {
    data(){
        return {
          ins:0,
          itemList:[{
              title:'11.11推荐'
          },
          {
              title:'家用电器'
          },
          {
              title:'家具家装'
          },
          {
              title:'居家餐厅'
          },
          {
              title:'智能家庭'
          },
          {
              title:'日用文创'
          },{
              title:'电视影音'
          },
          {
              title:'手机电脑'
          },
          {
              title:'数码周边'
          },
          {
              title:'服饰配饰'
          },
          {
              title:'鞋靴箱包'
          },
          {
              title:'运动户外'
          },
          {
              title:'出行车品'
          },
          {
              title:'美妆个护'
          },
          {
              title:'健康保健'
          },
          {
              title:'美食酒饮'
          },
          {
              title:'母婴亲子'
          },{
              title:'宠物生活'
          },
          {
              title:'有品海购'
          },
          {
              title:'DLAB'
          },
          {
              title:'品牌墙'
          }] 
        }
    },
    components: {
        Tab,
        Recommend
    },
    methods:{
        active(num){
            this.ins=num
        },
        go(){
            this.$router.push('/search')
        }
    }

}
</script>

<style lang='less' scoped>
.container {
    box-sizing: border-box;
    font-size: .14rem;
    height: 100%;
    padding-bottom: .51rem;
    overflow: hidden;
    background: #FFF;
    .top{
        box-sizing: border-box;
        width: 3.2rem;
        height: .4rem;
        padding: .05rem .12rem;
        border-bottom: .01rem solid #ccc;
        
        .inp{
            width: 2.88rem;
            height: .3rem;
            line-height: .3rem;
            border-radius: .32rem;
            background-color: rgb(245, 245, 245);
            .icon{
                display:inline-block;
                width: .17rem; 
                height: .17rem;
                line-height: .17rem;
                padding-left: .16rem;
                img{
                    width: 100%; 
                    height: 100%;
                    vertical-align: bottom;
                } 
            }
            span{
                color: rgb(153, 153, 153);
                padding:.02rem;
                margin-left: .06rem;
                color: rgb(153, 153, 153);
                font-size: .12rem;
            }
        }
       
    }
    
    .g-body {
        display: flex;
        height: 100%;

        .nav {
            box-sizing: border-box;
            width: 25%;
            height: 100%;
            border-right: .01rem solid rgba(0, 0, 0, .1);
            text-align: center;
            background: #FFF;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                display: none;
            }

            li {
                height: .24rem;
                line-height: .24rem;
                white-space: nowrap;
                font-size: .13rem;
                color: rgb(102, 102, 102);
                margin:.13rem 0 !important;
                &.current{
                    background: linear-gradient(to right, rgb(241, 83, 56), rgb(223, 20, 15));
                    border-radius: 12px;
                    margin: 0 .08rem;
                    color: rgb(255,255,255);
                }
                
            }
        }
    }
}
</style>