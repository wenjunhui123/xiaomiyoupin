import {} from '../api/search';
let searchListAll = {"detailSearch":{"gid":"100656","title":"运动休闲羽绒服"},"hot":[{"gid":"100606","title":"小米米家空气净化器2S"},{"gid":"152","title":"小米净水器(厨下式)"},{"gid":"100994","title":"雪荞·小荞酒 清香型白酒"},{"gid":"100857","title":"FOXIO 口红充电宝"},{"gid":"757","title":"小米5X"},{"gid":"700","title":"小米6"},{"gid":"100995","title":"基础小挂钩 6个装"},{"gid":"100519","title":"小米电视4C 43英寸"},{"gid":"540","title":"小米电视4A 49英寸"},{"gid":"100980","title":"小米电视4A 32英寸 体育版"}],"history":[{"gid":"100596","title":"小米笔记本Air13.3\" 集显 4G版"},{"gid":"100749","title":"红米5 Plus"}]};
export default {
  namespaced:true,
  state:{
   searchList:{"detailSearch":{"gid":"100656","title":"运动休闲羽绒服"},"hot":[{"gid":"152","title":"小米净水器(厨下式)"},{"gid":"100857","title":"FOXIO 口红充电宝"},{"gid":"757","title":"小米5X"},{"gid":"700","title":"小米6"},{"gid":"100995","title":"基础小挂钩 6个装"},{"gid":"100519","title":"小米电视4C 43英寸"},{"gid":"540","title":"小米电视4A 49英寸"},{"gid":"100980","title":"小米电视4A 32英寸 体育版"}],"history":[{"gid":"100596","title":"小米笔记本Air13.3\" 集显 4G版"},{"gid":"100749","title":"红米5 Plus"}]},

  },
  mutations:{
     querySearchList(state,payload){
       state.searchList = payload;
     }
  },
  getter:{},
  actions:{
     querySearchListAction(context){
        let querySeAll = 'querySearchList';
        context.commit(querySeAll,searchListAll);
     }
  },
}
 