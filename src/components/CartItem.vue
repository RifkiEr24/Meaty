<template>
    <div class="flex cart-item mt-3">
        <label class="checkbox-container ">
            <input type="checkbox" @change=" selectedCartToggle" v-model="cartItem.selected">
            
            <span class="checkmark"></span>
        </label>
        <img class="img-food ml-5" :src="cartItem.product.strMealThumb" alt="">
        <div class="ml-2">
            <p>{{cartItem.product.strMeal}}</p>
            <h4>x{{cartItem.quantity}} pcs</h4>
        </div>
        <div class="cart-control flex">
            <button @click="removeProductFromCart(cartItem.product)"> <span class="iconify text-primary"
                    data-icon="clarity:trash-solid" data-inline="false"></span>
            </button>
            <button @click="reduceQuantityToCart">-</button>
            <input @change="changeQuantity($event)" type="number" min="1" :value="cartItem.quantity"
                style="width:40px; text-align:center;" name="" id="">
            <button @click="addQuantityToCart">+</button>
        </div>

    </div>
</template>

<script>
import {
    mapActions
} from 'vuex';
export default {
    props: ["cartItem"],
    methods: {
        ...mapActions(['increaseProductCartQuantity', 'decreaseProductCartQuantity', 'changeProductCartQuantity','toggleSelectedCart']),
        changeQuantity: function name(event) {
            let value = event.target.value;
            if (value <= 0 || value.charAt(0) === "0") {
                event.target.value = 1;
            } else {
                this.changeProductCartQuantity({
                    product: this.cartItem.product,
                    quantity: event.target.value
                })
            }
        },
        removeProductFromCart(product) {
            this.$store.dispatch('removeProductFromCart', product)
        },
        addQuantityToCart() {
            this.increaseProductCartQuantity({
                product: this.cartItem.product,
                quantity: 1
            })
        },
        reduceQuantityToCart() {
             if (this.cartItem.quantity != 1) {
                this.decreaseProductCartQuantity({
                product: this.cartItem.product,
                quantity: 1
            })
            }
            
        },
        selectedCartToggle(){
            this.toggleSelectedCart({
                product:this.cartItem.product,
                selected:this.cartItem.selected
            })
        }

    }
}
</script>

<style lang="scss" scoped>
button{
    border: 0;
    background-color: transparent;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

    
.cart-item{
    position: relative;
    min-height: 150px;
}
.img-food{
    width: 75px;
    height: 75px;
    object-fit: cover;
}
.cart-control{
    position: absolute;
    right: 0;
    bottom: 0;
}
/* Custom checkbox */
.checkbox-container {
    cursor: pointer;
    display: block;
    position: relative;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input {
        /* Hide the browser's default checkbox */
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked {
            &~.checkmark {
                /* Change bg on checked*/
                background-color: #2B2B2B;

                &::after {
                    /* Show the checkmark when checked */
                    display: block;
                }
            }
        }
    }
    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        border: 2px solid #2B2B2B;
        background-color: transparent;

        &::after {
            /* Create & style the checkmark/indicator (hidden when not checked) */

            content: "";
            position: absolute;
            display: none;
            left: 7px;
            top: 2px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
}

</style>
