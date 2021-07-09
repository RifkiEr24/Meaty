<template>
  <div class="home">
    <hero />
    <h2 class="mt-4 text-center">Menu Makanan</h2>
    <div class="food-container flex container">
      <div class="food-item">
        a
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
    }
  },
components: { Hero },
mounted(){
  this.axios.get(this.endpoint.foodlist('beef')).then((response) => {
  console.log(response.data.meals)
})

  console.log(this.endpoint.foodlist('beef'));
}
}
</script>

<style lang="scss" scoped>

.food-item{
  width: calc(100% / 4);
}
</style>