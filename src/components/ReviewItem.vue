<template>
<div class="flex cart-item text-primary">
    <img class="img-food p-1" :src="cartItem.product.strMealThumb" :alt="cartItem.product.strMeal">
    <div>
          <h4 v-if="cartItem.product.strMeal.length > 22">{{cartItem.product.strMeal.slice(0,22)}}..</h4>
         <h4 v-else>{{cartItem.product.strMeal.slice(0,22)}}</h4>

        <p>x {{cartItem.quantity}} pcs</p>
    </div>
    <button @click="removeProductFromCart(cartItem.product)">
            <span class="iconify text-primary remove-item"  data-icon="bi:x-square-fill" data-inline="false"></span>

    </button>
</div>
</template>

<script>

export default {
    props: ["cartItem"],
    created(){
        console.log(this.cartItem);
    },
    methods:{
        removeProductFromCart(product){
            this.$store.dispatch('removeProductFromCart', product)
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    border: 0;
    margin-left: auto;
}
.cart-item{
    align-items: center;
}
.img-food{
    width: 60px;
    height: 60px;
    object-fit: cover;
}
.remove-item{
  width: 30px;
    height: 30px;  
}
</style>