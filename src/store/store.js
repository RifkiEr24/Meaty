import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import data from './../data/api-endpoint'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({ cart: state.cart }), //only save navigation module
  })
Vue.use(Vuex, axios);

export default new Vuex.Store({
    state: {
        food: [],
        cart:[],
    },
    getters: {
        foodBeef: state => {
            const foodBeef = state.food.filter(food => {
                return food.ctr === "beef";
            })
            return foodBeef;
        },
        foodChicken: state => {
            const foodBeef = state.food.filter(food => {
                return food.ctr === "chicken";
            })
            return foodBeef;
        },
        foodLamb: state => {
            const foodLamb = state.food.filter(food => {
                return food.ctr === "lamb";
            })
            return foodLamb;
        },
        foodPork: state => {
            const foodLamb = state.food.filter(food => {
                return food.ctr === "pork";
            })
            return foodLamb;
        },
        cartItemCount: state =>{
          return state.cart.length;  
        },
        selectedCart: state => {
            const selectedCart = state.cart.filter(cart => {
                return cart.selected === true;
            })
            return selectedCart;
        },
        cartItemSelectedCount: state =>{
            
            const selectedCart = state.cart.filter(cart => {
                return cart.selected === true;
            }).map(item=>{
               return item.quantity
            }).reduce((prev, curr) => prev + curr, 0);
            return selectedCart;
            // return state.cart.length;  
          }
    },
    mutations: {
        SET_FOOD(state, food) {
            state.food.push(...food);
        },
        ADD_TO_CART(state,{product, quantity}){
            const selected= true;
            let productInCart = state.cart.find(item => {
                return item.product.idMeal === product.idMeal
            })
            if(productInCart){
                productInCart.quantity += quantity
                return;
            }
            state.cart.push({
                product,
                quantity,
                selected
            })
        },
        REMOVE_PRODUCT_FROM_CART(state, product){
            state.cart = state.cart.filter(item => {
                return item.product.idMeal !== product.idMeal
            })
        },
        INCREASE_CART_QUANTITY(state,{product, quantity}){
            console.log(product);
            let productInCart = state.cart.find(item => {
                return item.product.idMeal === product.idMeal
            })
            productInCart.quantity += quantity
        },
        DECREASE_CART_QUANTITY(state,{product, quantity}){
            console.log(product);
            let productInCart = state.cart.find(item => {
                return item.product.idMeal === product.idMeal
            })
            productInCart.quantity -= quantity
        },
        CHANGE_CART_QUANTITY(state,{product, quantity}){
            
            let productInCart = state.cart.find(item => {
                return item.product.idMeal === product.idMeal
            })
            productInCart.quantity = quantity
        },
        TOGGLE_SELECTED_CART(state,{product, selected}){
            let productInCart = state.cart.find(item => {
                return item.product.idMeal === product.idMeal
            })
            productInCart.selected = selected
        },
        CLEAR_CART_ITEMS(state){
            state.cart = [];
        },
        
    
    },
    actions: {
        loadFoodChicken({
            commit
        }) {
            axios
                .get(data.foodlist('Chicken'))
                .then(response => {
                    let food = response.data.meals;
                    food.forEach(item => {
                        item.ctr = "chicken";
                    })
                    commit('SET_FOOD', food);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadFoodBeef({
            commit
        }) {
            axios
                .get(data.foodlist('Beef'))
                .then(response => {
                    let food = response.data.meals;
                    food.forEach(item => {
                        item.ctr = "beef";
                    })
                    commit('SET_FOOD', food);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadFoodLamb({
            commit
        }) {
            axios
                .get(data.foodlist('Lamb'))
                .then(response => {
                    let food = response.data.meals;
                    food.forEach(item => {
                        item.ctr = "lamb";
                    })
                    commit('SET_FOOD', food);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadFoodPork({
            commit
        }) {
            axios
                .get(data.foodlist('Pork'))
                .then(response => {
                    let food = response.data.meals;
                    food.forEach(item => {
                        item.ctr = "pork";
                    })
                    commit('SET_FOOD', food);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addProductToCart({commit},{product, quantity}){
            commit('ADD_TO_CART',{product, quantity})
        },
        removeProductFromCart({commit},product){
            commit('REMOVE_PRODUCT_FROM_CART',product)
        },
        clearCartItems({commit}){
            commit('CLEAR_CART_ITEMS')
        },
        increaseProductCartQuantity({commit},{product, quantity}){
            commit('INCREASE_CART_QUANTITY',{product, quantity})
        },
        decreaseProductCartQuantity({commit},{product, quantity}){
            commit('DECREASE_CART_QUANTITY',{product, quantity})
        },
        changeProductCartQuantity({commit},{product, quantity}){
            commit('CHANGE_CART_QUANTITY',{product, quantity})
        },
        toggleSelectedCart({commit},{product, selected}){
            commit('TOGGLE_SELECTED_CART',{product, selected})
        }
    },
    plugins: [vuexLocal.plugin],
    modules: {}
})