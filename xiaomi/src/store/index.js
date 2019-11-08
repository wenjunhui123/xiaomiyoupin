import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import search from './search';


Vue.use(Vuex);
export default new Vuex.Store({
  nameSpace: true,
  modules: {
    search,
    
  },
  state: {
    personalIsShow: true,
    login: false,
    account:'',
    password:'',
  },
  mutations: {
    personalShow(state, payload) {
      state.personalIsShow = payload;
    },
    loginShow(state, payload) {
      state.login = payload;
    },
    accountMu(state, payload){
      window.console.log(payload);
      state.account = payload;
    },
    passwordMu(state, payload){
      state.password = payload;
    }
  },
  actions: {
    personalShowAction(context, show) {
      context.commit('personalShow', show)
    },
    loginShowAction(context, show) {
      context.commit('loginShow', show)
    }
  },
  getters: {

  },
  plugins: [createLogger]
})