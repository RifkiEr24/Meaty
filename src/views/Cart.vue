<template>
  <div class="container flex mt-12 p-1">
    <div class="cart-item-container p-2 m-2 bg-white">
      <h2>Cart</h2>
      <div v-if="cart.length === 0">
        <h5 class="text-center">It seems like you dont have any food yet on your cart</h5>
        <buttton-primary @button-click="$router.push({name:'Menu'})" class="item-center mt-2" :buttonText="'Go To Menu'"/>
      </div>
      <div v-else>
              <cart-item v-for="item in cart" :key="item.product.idMeal" :cart-item="item" />

      </div>
    </div>
    <div class="summary-container  p-2 m-2 bg-white">
      <h2>Cart Summary</h2>
      <div v-for="item in selectedCart" :key="item.product.idMeal" class="flex summary-item justify-between">
        <p>
          {{item.product.strMeal}}
        </p>
        <p>x{{item.quantity}}(Rp.{{item.quantity * 35000}})</p>
      </div>
      <div class="flex summary-total justify-between summary-item mt-2 mb-2">
        <p>Total</p>
        <p>Rp. {{cartItemSelectedCount * 35000}}</p>
      </div>
      <router-link v-if="cartItemSelectedCount > 0" :to="'checkout'" class="bg-primary checkout p-1 text-white text-center ">Checkout</router-link>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import ButttonPrimary from '../components/ButttonPrimary.vue';
import CartItem from '../components/CartItem.vue';
export default {

  components: { CartItem, ButttonPrimary },
  computed :{
  ...mapGetters({
     selectedCart:"selectedCart",
     cartItemSelectedCount:"cartItemSelectedCount"
    }),
    ...mapState([
      'cart'
    ]),
  },
  mounted(){
      console.log(this.cartItemSelectedCount)
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import "./../scss/_mixins.scss";
.container.flex {
  flex-wrap: wrap;
  align-items: flex-start;

  .bg-white {
    border-radius: 25px;
  }

  .cart-item-container {
    margin: 10px 5px;
    width: 100%;

    @include desktop {
      width: calc(60% - 10px);
    }
  }

  .summary-container {
    margin: 10px 5px;

    width: 100%;

    @include desktop {
      width: calc(40% - 10px);

    }

    .summary-total {
      border-top: 1px solid #2B2B2B;
    }

  }
}

</style>