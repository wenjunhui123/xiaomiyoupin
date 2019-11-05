<template>
    <div class="content">
        <div class="banner">
            <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_31a86d0b20837496b767b62133624fc1.jpeg&amp;w=786&amp;h=395" alt="">
        </div>
        <div class="items">
            <div class="item">
                <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_3142c5002e8cd07300e478007e4ced9a.jpeg&amp;w=480&amp;h=480" alt="">
                    <span>新品</span>
            </div>
            <div class="item"></div>
            <div class="item"></div>
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
</style>
