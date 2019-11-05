<template>
  <div class="container">
    <div class="top">
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
                    <li class="current" :type="type===0?'success':'info'" @click="type=0">有品推荐</li>
                    <li class="" :type="type===1?'success':'info'" @click="type=1">居家</li>
                    <li class="" :type="type===2?'success':'info'" @click="type=2">家电</li>
                    <li class="" :type="type===3?'success':'info'" @click="type=3">手机</li>
                    <li class="" :type="type===4?'success':'info'" @click="type=4">影音</li>
                    <li class="" :type="type===5?'success':'info'" @click="type=5">日杂</li>
                    <li class="" :type="type===6?'success':'info'" @click="type=6">服饰</li>
                    <li class="" :type="type===7?'success':'info'" @click="type=7">健康</li>
                    <li class="" :type="type===8?'success':'info'" @click="type=8">餐厨</li>
                    <li class="" :type="type===9?'success':'info'" @click="type=9">智能</li>
                    <li class="" :type="type===10?'success':'info'" @click="type=10">洗护</li>
                    <li class="" :type="type===11?'success':'info'" @click="type=11">箱包</li>
                    <li class="" :type="type===12?'success':'info'" @click="type=12">婴童</li>
                    <li class="" :type="type===13?'success':'info'" @click="type=13">饮食</li>
                    <li class="" :type="type===14?'success':'info'" @click="type=14">配件</li>
                    <li class="" :type="type===15?'success':'info'" @click="type=15">出行</li>
                    <li class="" :type="type===16?'success':'info'" @click="type=16">品牌</li>
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
  components: {
      Tab,
      Recommend
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
            padding-top: .1rem;
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
                font-size: .14rem;
                margin:.1rem 0;
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