import Vue from 'vue'
import Vuex from 'vuex'
import HouseCase from './HouseCase';
import Login from './login'

Vue.use(Vuex);

const state = {};

const mutations = {};

const actions = {};

const getters = {};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    HouseCase,
    Login
  }
});

export default store;
