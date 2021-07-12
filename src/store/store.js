import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import data from './../data/api-endpoint'
Vue.use(Vuex, axios);

export default new Vuex.Store({
    state: {
        food: [],
        cart:[]
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
        }
    },
    mutations: {
        SET_FOOD(state, food) {
            state.food.push(...food);
        },
        ADD_TO_CART(state,{product, quantity}){
            let productInCart = state.cart.find(item => {
                return item.product.idMeal === product.idMeal
            })
            if(productInCart){
                productInCart.quantity += quantity
                return;
            }
            state.cart.push({
                product,
                quantity
            })
        },
        REMOVE_PRODUCT_FROM_CART(state, product){
            state.cart = state.cart.filter(item => {
                return item.product.idMeal !== product.idMeal
            })
        },
        CLEAR_CART_ITEMS(state){
            state.cart = [];
        }
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
        }
    },
    modules: {}
})