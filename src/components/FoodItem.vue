<template>
  <div class="food-card bg-primary">
    <img :src="strMealThumb" alt="">  
      <h4 class="text-center pt-2 pb-2">{{strMeal}}</h4>
      <button class=""> <span class="iconify" data-icon="bi:cart-plus" data-inline="false"></span> Add To Cart</button>
  </div>
</template>

<script>
export default {
    props: {
        idMeal: {
            type: String,
            required: true
        },
        strMeal: {
            type: String,
            required: true
        },
        strMealThumb: {
            type: String,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.food-card{
    color: #EDEDED;
    border-radius: 35px;
    
    img{
    width: 100%;
    max-height: 200px;
    object-fit: cover;
}   
button{
    width: 100%;
}
}

</style>