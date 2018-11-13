import Vue from 'vue'
import Vuex from 'vuex'
import HouseCase from './HouseCase';

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
    HouseCase
  }
});

export default store;
