<template>
  <div class="home">
    <hero />
    <div class="container">
      <h2 class="mt-4 text-center">Menu Makanan</h2>
      <div class="food-container" v-for="(value, name) in food" :key="name">
        <h2 class="mt-4 text-center "> {{name}}</h2>
        <div class="food-list flex">
          <div class="food-item p-1" v-for="item in value.slice(0,8)" :key="item.id">
            <food-item :idMeal="item.idMeal" :strMeal="item.strMeal" :strMealThumb="item.strMealThumb" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from "./../data/api-endpoint"
  import Hero from "../components/Hero.vue"
import FoodItem from '../components/FoodItem.vue'

  export default {
    data() {
      return {
        endpoint: data,
        food: {
          Beef: [],
          Chicken: [],
          Lamb: [],
          Pork: []
        }
      }
    },
    components: {
      Hero,
      FoodItem
    },
    computed:{
      products(){
        return this.$store.state.products;
      }
    },
    methods: {
      callBeef() {
        this.axios.get(this.endpoint.foodlist('beef')).then((response) => {
          this.food.Beef = response.data.meals;
        })
      },
      callChicken() {
        this.axios.get(this.endpoint.foodlist('chicken')).then((response) => {
          this.food.Chicken = response.data.meals;
        })
      },
      callLamb() {
        this.axios.get(this.endpoint.foodlist('lamb')).then((response) => {
          this.food.Lamb = response.data.meals;
        })
      },
      callPork() {
        this.axios.get(this.endpoint.foodlist('pork')).then((response) => {
          this.food.Pork = response.data.meals;
        })
      }
    },
    mounted() {
      this.callBeef();
      this.callChicken();
      this.callLamb();
      this.callPork();
      console.log(this.food);
    }
  }
</script>

<style lang="scss" scoped>
@import "./../scss/_mixins.scss";

.food-list {
  flex-wrap: wrap;
}

.food-item {
  margin: 20px 0 0 20px;
  width: calc((100% / 2) - 20px);
  @include tablet {
    width: calc((100% / 3) - 20px);
  }
  @include desktop{
        width: calc((100% / 4) - 20px);

  }
}
</style>