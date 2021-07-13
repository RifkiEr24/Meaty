<template>
  <div class="home">
    <hero />
    <div class="container">
      <div class="flex featured-post">
        <div class="p-2">
       <span class="iconify featured-icon item-center" data-icon="bx:bx-dollar" data-inline="false"></span>
          <p class="text-center">All Food you can eat with the same price, <span class="font-bold">Rp.35.000 !</span></p>
        </div>
         <div class="p-2">
          <span class="iconify featured-icon  item-center" data-icon="ic:round-delivery-dining" data-inline="false"></span>
          <p class="text-center">Order & deliver into your front door :)</p>
          <p class="font-bold text-center">(Currently available for Bandung & Cimahi Only)</p>
        </div>
         <div class="p-2">
         <span class="iconify featured-icon  item-center" data-icon="tabler:meat" data-inline="false"></span>
         <p class="text-center">High Quality & Delicious Meat Resource !</p>
        </div>
      </div>
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
  @import "./../scss/_responsive.scss";


.featured-post{
  flex-wrap: wrap;
  @include tablet{
    flex-wrap: nowrap;
  }
  div{
    width: 100%;
    .featured-icon{
      width: 120px;
      height: 120px;
    }
  }
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