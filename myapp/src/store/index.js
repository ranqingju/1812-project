import Vue from 'vue'
import Vuex from 'vuex'

import HouseCase from './HouseCase';
import Register from './register';
import Login from './login';
import Discuss from './discuss';
import Case from './case';
import Magazine from './magazine'
import Designer from './designer'
import Video from './video'
import Freetrial from './freetrial'
import Dwell from './dwell'


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
    Register,
    Login,
    Discuss,
    Case,
    Magazine,
    Designer,
		Finish
		Video,
		Freetrial,
		Dwell
  }
});

export default store;
