import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products:[
            {name :'Banana', price:20},
            {name :'Grape', price:20},
        ]
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
  })