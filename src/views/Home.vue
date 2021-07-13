<template>
  <div class="home">
    <hero />
    <div class="container">
      <h2 class="mt-4 text-center">Restaurant Menu</h2>
      <div class="food-container">
        <h2 class="mt-4 text-center ">Beef</h2>
        <div class="food-list flex">
          <div class="food-item p-1" v-for="item in beef.slice(0,8)" :key="item.id">
            <food-item :food="item" />
          </div>
        </div>
        <router-link :to="'menu'">
          <buttton-primary class="item-center mt-2" :buttonText="'See More'" />
        </router-link>
      </div>
      <div class="food-container">
        <h2 class="mt-4 text-center ">Chicken</h2>
        <div class="food-list flex">
          <div class="food-item p-1" v-for="item in chicken.slice(0,8)" :key="item.id">
            <food-item :food="item" />
          </div>
        </div>
        <router-link :to="'menu'">
          <buttton-primary class="item-center mt-2" :buttonText="'See More'" />
        </router-link>

      </div>
      <div class="food-container">
        <h2 class="mt-4 text-center ">Lamb</h2>
        <div class="food-list flex">
          <div class="food-item p-1" v-for="item in lamb.slice(0,8)" :key="item.id">
            <food-item :food="item" />
          </div>
        </div>
        <router-link :to="'menu'">
          <buttton-primary class="item-center mt-2" :buttonText="'See More'" />
        </router-link>
      </div>
      <div class="food-container">
        <h2 class="mt-4 text-center ">Pork</h2>
        <div class="food-list flex">
          <div class="food-item p-1" v-for="item in pork.slice(0,8)" :key="item.id">
            <food-item :food="item" />
          </div>
        </div>
        <router-link :to="'menu'">
          <buttton-primary class="item-center mt-2" :buttonText="'See More'" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from "../components/Hero.vue"
  import FoodItem from '../components/FoodItem.vue'
  import {
    mapGetters
  } from 'vuex'
import ButttonPrimary from '../components/ButttonPrimary.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      Hero,
      FoodItem,
        ButttonPrimary
    },
    computed: {
     
      ...mapGetters({
        beef: "foodBeef",
        chicken: "foodChicken",
        lamb: "foodLamb",
        pork: "foodPork"
      }),
    },
    methods: {

    },
    mounted() {}
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

    @include desktop {
      width: calc((100% / 4) - 20px);

    }
  }
</style>