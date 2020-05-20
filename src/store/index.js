import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
  },
  getters: {
    DOGS: (state) => state.dogs,
  },
  mutations: {
    SET_DOGS: (state, payload) => {
      state.dogs = state.dogs.concat(payload);
    },
  },
  actions: {
    GET_DOGS: async (context) => {
      const data = await Axios.get('https://dog.ceo/api/breeds/image/random/20');
      context.commit('SET_DOGS', data.data.message);
    },
  },
  modules: {
  },
});
