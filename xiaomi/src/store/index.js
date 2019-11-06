import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import search from './search';


Vue.use(Vuex);
export default new Vuex.Store({
   nameSpace:true,
   modules:{
     search,
     
   },
   state:{

   },
   mutations:{

   },
   actions:{

   },
   getters:{

   },
  plugins:[createLogger]
})

