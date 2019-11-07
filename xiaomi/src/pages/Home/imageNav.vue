<template>
  <div class="link-box">
    <a href class="react-view" v-for="item in data" :key="item.id">
      <img v-lazy="item.pic" alt />
    </a>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      data: [
        {
          id: 1,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_54ca70fc076091c2584b65b68353476d.jpeg&amp;w=270&amp;h=300&amp;t=webp"
        },
        {
          id: 2,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_d71c74bce7255baff40ac979ec47f282.png&amp;w=270&amp;h=300&amp;t=webp"
        },
        {
          id: 3,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_a07dceacd5b42d513fa36b7dc5cbe3eb.jpeg&amp;w=270&amp;h=300&amp;t=webp"
        },
        {
          id: 4,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_0e5a7c4ff9ae447f9bcca643461bcf38.jpeg&amp;w=270&amp;h=300&amp;t=webp"
        },
        {
          id: 5,
          pic:
            "https://shop.io.mi-img.com/app/shop/img?id=shop_f3b0463f876a98e82d5e7592536472ce.jpeg&amp;w=270&amp;h=300&amp;t=webp"
        }
      ]
    };
  }
};
</script>


<style  lang="less" scoped>
.link-box {
  display: flex;
  //横向从左到右排列（左对齐）
  flex-direction: row;
  //居中对齐弹性盒的各项 <div> 元素：
  align-items: center;
  height: 0.92rem;
  background: #fff;

  .react-view {
    display: block;
    width: 0.8rem;
    //flex 是 flex-grow、flex-shrink、flex-basis的缩写
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>