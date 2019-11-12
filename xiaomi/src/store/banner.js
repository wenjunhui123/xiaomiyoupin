import type from "../api/search";
// let bannerList = [
//     {
//         id: 1,
//         pic:
//             "https://shop.io.mi-img.com/app/shop/img?id=shop_9334c3fd5811978f84fe7035ae54b00d.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
//         title: ""
//     },
//     {
//         id: 2,
//         pic:
//             "https://shop.io.mi-img.com/app/shop/img?id=shop_800b78d4c2287c6c7a3681076f9b1606.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
//         title: ""
//     },
//     {
//         id: 3,
//         pic:
//             "https://shop.io.mi-img.com/app/shop/img?id=shop_a1e493684d4b9a60d2c4445e95960c81.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
//         title: ""
//     },
//     {
//         id: 4,
//         pic:
//             "https://shop.io.mi-img.com/app/shop/img?id=shop_7f79014b3984f9a2ca0ccd989fee960a.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
//         title: ""
//     },
//     {
//         id: 5,
//         pic:
//             "https://shop.io.mi-img.com/app/shop/img?id=shop_940e96da0d8707e657c58c5d7278e64a.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp",
//         title: ""
//     }
// ]
export default {
    namespaced: true,
    state: {
        bannerList: null
    },
    mutations: {
        updateBannerList(state, payload) {
            state.bannerList = payload;
        }
    },
    actions: {
        updateBanner(context) {
            let commitN = "updateBannerList";
            // context.commit(commitN,bannerList)
            type.banner().then(result => {
                if (parseInt(result.code) === 0) {
                    context.commit(commitN, result.data);
                    console.log(result.data)
                    return;
                }
                return Promise.reject();
            })
        }
    }

}
