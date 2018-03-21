import Vue from 'vue'
import Vuex from 'Vuex';

import pic from './modules/pic'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pic
  }
});
