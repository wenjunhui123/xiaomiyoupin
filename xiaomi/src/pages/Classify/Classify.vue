<template>
  <div class="container">
    <div class="g-body">
                <div class="nav">
                    <ul>
                        <li class="current">有品推荐</li>
                        <li class="">居家</li>
                        <li class="">家电</li>
                        <li class="">手机</li>
                        <li class="">影音</li>
                        <li class="">日杂</li>
                        <li class="">服饰</li>
                        <li class="">健康</li>
                        <li class="">餐厨</li>
                        <li class="">智能</li>
                        <li class="">洗护</li>
                        <li class="">箱包</li>
                        <li class="">婴童</li>
                        <li class="">饮食</li>
                        <li class="">配件</li>
                        <li class="">出行</li>
                        <li class="">品牌</li>
                    </ul>
                </div>
                <div class="content">
                    <div class="banner">
                        <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_31a86d0b20837496b767b62133624fc1.jpeg&amp;w=786&amp;h=395"
                            alt="">
                    </div>
                    <div class="items">
                        <div class="item">
                            <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_3142c5002e8cd07300e478007e4ced9a.jpeg&amp;w=480&amp;h=480"
                                alt="">
                            <span>新品</span>
                        </div>
                        <div class="item"></div>
                        <div class="item"></div>
                    </div>
                </div>
            </div>
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
.container {
    box-sizing: border-box;
    font-size: .14rem;
    height: 100%;
    padding-bottom: .51rem;
    overflow: hidden;
    background: #FFF;

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
                margin-bottom: .2rem;
                white-space: nowrap;
                font-size: .12rem;

                &.current {
                    font-size: .13rem;
                    border-left: .04rem solid rgb(132, 95, 63);
                    color: rgb(132, 95, 63);
                }
            }
        }

        .content {
            padding: .1rem .06rem;
            width: 75%;
            height: 100%;
            overflow-y: auto;

            &::-webkit-scrollbar {
                display: none;
            }

            .banner {
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }

            .items {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;

                .item {
                    display: flex;
                    flex-direction: column;
                    flex: 0 0 26%;
                    text-align: center;

                    img {
                        width: 100%;
                    }

                    span {
                        font-size: .11rem;
                        color: rgb(102, 102, 102);
                    }

                    &:nth-of-type(3n) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>