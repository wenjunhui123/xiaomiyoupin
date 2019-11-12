import Vue from 'vue';
import VueRouter from 'vue-router';
import Cart from '../pages/Cart/Cart';
import Classify from '../pages/Classify/Classify';
import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home/Home';
import Pay from '../pages/Pay/Pay';
import Search from '../pages/Search/Search';
import Taste from '../pages/Taste/Taste';
import Personal from '../pages/Personal/Personal';
import Collect from '../pages/Personal/Collect';
import Info from '../pages/Personal/Info';
import Login from '../pages/Personal/Login';
import Order from '../pages/Personal/Order';
import Vip from '../pages/Vip/Vip';
Vue.use(VueRouter);
 const router = new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/cart',
        component: Cart
    }, {
        path: '/classify',
        component: Classify
    }, {
        path: '/personal',
        component: Personal,
        children: [{
            path: '/personal/collect',
            component: Collect
        }, {
            path: '/personal/info',
            component: Info
        }, {
            path: '/personal/login',
            component: Login
        }, {
            path: '/personal/order',
            component: Order
        }]
    }, {
        path: '/detail',
        component: Detail
    }, {
        path: '/taste',
        component: Taste
    }, {
        path: '/pay',
        component: Pay
    }, {
        path: '/search',
        component: Search
    }, {
        path: '/vip',
        component: Vip
    }, 
   {
        path: '*',
        redirect: '/home'
    }, ]
})
export default router

// router.beforeEach((to,from,next)=>{
// if(to.path==='/personal' && from.path==='/personal/login'){
//     if(this.$store.state.length === 0) return;
//     next();
// }
// })

