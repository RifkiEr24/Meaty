<template>
  <div class="container flex mt-12 p-1">
   
      <div class="cart-item-container p-2 m-2 bg-white">
             <h2>Cart</h2>
          <cart-item v-for="item in cart" :key="item.product.idMeal" :cart-item="item"/>
      </div>
      <div class="summary-container p-2 m-2 bg-white">
          <h2>Cart Summary</h2>
          <div v-for="item in selectedCart" :key="item.product.idMeal" class="flex summary-item">
                 <p >
              {{item.product.strMeal}}
          </p>
          <p>x{{item.quantity}}</p>
          </div>
        <div class="flex summary-total summary-item mt-2 mb-2">
            <p>Total</p>
            <p>x {{cartItemSelectedCount}} pcs</p>
        </div>
       <router-link :to="'checkout'" class="bg-primary checkout p-1 text-white text-center ">Checkout</router-link>
      </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import CartItem from '../components/CartItem.vue';
export default {
  components: { CartItem },
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
.checkout{
    margin-left: auto;
    margin-right: auto;
    display: block;
    max-width: 100px;
}
.container.flex{
    flex-wrap: wrap;
}
.summary-item, .summary-container{
    justify-content: space-between;
}
.summary-total{
    border-top: 1px solid #2B2B2B;
}
.cart-item-container{
      margin: 20px 0 0 20px;
    width: 100%;
   @include desktop {
 width: calc(60% - 20px);
    }
}
.summary-container{
      margin: 20px 0 0 20px;
       width: 100%;
   @include desktop {
 width: calc(40% - 20px);
    
}
}
.container{
    align-items: flex-start;
    .bg-white{
            border-radius: 25px;
    }
}
</style>