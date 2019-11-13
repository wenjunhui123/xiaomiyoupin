import type from '../api/search';
export default {
  namespaced:true,
  state:{
   searchList:null
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
      let data = null;
        type.search().then(result=>{
           if(parseInt(result.code)===0){
              data = result.data[0];
              context.commit(querySeAll,data);
              window.console.log(data,1);
              return;
           }
           Promise.reject()
        })
           
     }
  },
}
 