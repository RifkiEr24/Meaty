<template>
  <div class="food-card bg-primary">
    <img :src="food.strMealThumb" alt="">  
      <h4 class="text-center pt-2 pb-2">{{food.strMeal}}</h4>
      <button class="" @click="addToCart()"> <span class="iconify" data-icon="bi:cart-plus" data-inline="false"></span> Add To Cart</button>
  </div>
</template>

<script>
import {
    mapActions
} from 'vuex';
export default {
    props: ["food"],
    methods: {
        ...mapActions(['addProductToCart']),
        addToCart() {
            this.addProductToCart({
                product: this.food,
                quantity: 1
            })
            this.$notify({
                type: 'success',
                group: 'notification',
                title: 'Success',
                text: 'Item Added To Cart'
            })
        }
    }
}

</script>

<style lang="scss" scoped>
.food-card {
    color: #EDEDED;
    border-radius: 35px;

    img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
    }

    button {
        width: 100%;
    }
}
</style>