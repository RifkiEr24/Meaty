<template>
  <div class="home">
    <hero />
    <h2 class="mt-4 text-center">Menu Makanan</h2>
    <div class="food-container flex container">
      <div class="food-item" v-for="(value, name) in food" :key="name">
        {{name}}
        <li v-for="item in value" :key="item.id">
          {{item.strMeal}}
        </li>
      </div>
      <div class="food-item">
        a
      </div>
      <div class="food-item">
        a
      </div>
      <div class="food-item">
        a
      </div>
    </div>
  </div>
</template>

<script>
import data from "./../data/api-endpoint"
import Hero from "../components/Hero.vue"

export default 
  {
  data(){
    return{
      endpoint : data,
      food:{
        Beef:[],
        Chicken:[],
        Lamb:[],
        Pork:[]
      }
    }
  },
components: { Hero },
mounted() {
  this.axios.get(this.endpoint.foodlist('beef')).then((response) => {
    this.food.Beef = response.data.meals;
  }).then(this.axios.get(this.endpoint.foodlist('chicken')).then((response) => {
    this.food.Chicken = response.data.meals;
  })).then(this.axios.get(this.endpoint.foodlist('lamb')).then((response) => {
    this.food.Lamb = response.data.meals;
  })).then(this.axios.get(this.endpoint.foodlist('pork')).then((response) => {
    this.food.Pork = response.data.meals;
  }))
  console.log(this.food);
}
}
</script>

<style lang="scss" scoped>

.food-item{
  width: calc(100% / 4);
}
</style>