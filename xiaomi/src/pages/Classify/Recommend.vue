<template>
    <div class="content">
        <div class="banner">
            <img src="https://img.youpin.mi-img.com/youpinoper/a4d8bce05a61d7d4eec91d3543023924.jpg" alt="">
        </div>
        <div class="items">
            <p>为你推荐</p>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/0a2eb30be69a305a2e4bac5b8c01d5fb.png" alt="">
                    <span>空调</span>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/03a4a0afcbe194e75726fcfc2083d15e.png" alt="">
                <span>手表</span>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/a642fca29cc66bd617834215662863aa.png" alt="">
                <span>耳机</span>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/879eb39dff714a56bc9a822398808a4b.png" alt="">
                <span>电视剧</span>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/c2eafca2749ab1a90c10d915d27d3f27.png" alt="">
                    <span>行李箱</span>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/shopmain/948766ce77da239d6b7f0d795f619541.png?w=800&h=800" alt="">
                <span>灯具</span>
            </div>
        </div>
        <div class="items">
            <p>精选优惠活动</p>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/011a92a7486de902022f68d9cc3b7075.png" alt="">
                    <span>热卖爆品</span>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/846c2ef8dda9da522ff13d7b7743d4cf.png" alt="">
                <span>满减满折</span>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/shopmain/78be2228633110cf5a3eaca43ae60755.png?w=800&h=800" alt="">
                <span>自营好物</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang='less' scoped>
.content {
            background-color: rgb(246, 246, 246);
            padding: .1rem .06rem;
            width: 75%;
            height: 100%;
            overflow: scroll;
            &::-webkit-scrollbar {
                display: none;
            }

            .banner {
                
                height: .64rem;
                width: 100%;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: .08rem;
                }
            }

            .items {
                border-radius: .08rem;
                margin-top: .1rem;
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                background-color: rgb(255, 255, 255);
                p{
                    width:100%;
                    padding-left: .1rem;
                    padding-top: .1rem;
                    color: rgb(51, 51, 51);
                    font-size: 13px;
                    font-weight: bold;
                }
                .item {
                    padding-bottom: 10px;
                    padding-top: 12px;
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
</style>
