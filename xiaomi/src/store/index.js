import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import search from './search';
import banner from './banner';

Vue.use(Vuex);
export default new Vuex.Store({
  nameSpace: true,
  modules: {
    search,
    banner
  },
  state: {
    personalIsShow: true,
    login: false,
    account: '',
    password: '',
    checked:null,
  },
  mutations: {
    personalShow(state, payload) {
      state.personalIsShow = payload;
    },
    loginShow(state, payload) {
      state.login = payload;
    },
    accountMu(state, payload) {
      window.console.log(payload);
      state.account = payload;
    },
    passwordMu(state, payload) {
      state.password = payload;
    },
    changeCheck(state, payload){
      window.console.log(payload);
      state.checked = payload;
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