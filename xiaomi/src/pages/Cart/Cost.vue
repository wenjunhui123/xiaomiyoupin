<template>
  <div class="cost">
      <div class="bottom">
          <div class="left">
              <p><i><img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png" alt=""></i>全选</p>
          </div>
          <div class="right">
              <div class="but">
                    合计：<span>￥298.00</span>
                <div>结算<span>(1)</span></div>  
              </div>
              
          </div>
          
      </div>
  </div>
</template>
 
<script>
export default {
    props:{
        cost:{
            type:String,
            default:function(){
                return {}
            },
            required:true
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style lang='less' scoped>
.cost{
    width: 100%;
    padding: .1rem 0;
    height: 100%;
    box-sizing: border-box;
    position:fixed;
    bottom:0;
    left: 0;
    height: .53rem;
    border-top: 1px solid rgb(214, 214, 214);
    background-color: rgb(255,255,255);
    .bottom{
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        .left{
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            p{
                padding: .08rem 0 .08rem .12rem;
                color: rgb(51, 51, 51);
                font-size: .14rem;
                i{
                    display: inline-block;
                    width: .18rem;
                    height: .18rem;
                    margin-right: .07rem;
                    img{
                        width: 100%;
                        height: 100%;
                        vertical-align: middle;
                    }
                }
            }
        }
        .right{
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            .but{
                color: rgba(0, 0, 0, 0.9);
                font-size: .14rem;
                font-weight: bold;
                line-height: .35rem;
            span{
                font-size: .16rem;
                font-weight: normal;
                padding-right: .05rem;
                color: rgb(191, 17, 17);
            }
            div{
                display: inline;
                margin: .06rem .08rem .06rem 0;
                padding: .09rem .23rem;
                background-color: rgb(191, 17, 17);
                color: rgb(255, 255, 255);
                border-radius: .19rem;
                font-size:.16rem;
                span{
                    color: rgb(255, 255, 255);
                }
            }
            }
            
        }
    }
}
</style>
