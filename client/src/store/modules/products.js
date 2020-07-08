import Vue from 'vue'

export default {
  state: {
    products: []
  },

  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    }
  },

  actions: {
    async getProducts({ commit }) {
      let res = await Vue.axios.get('/products')
      console.log(res);
      commit('SET_PRODUCTS', res.data.data)
    }
  }
}