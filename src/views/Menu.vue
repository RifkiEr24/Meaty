<template>
  <div class="container">
    <select @change="onChange($event)" name="" id="">
      <option value="all">All</option>
      <option value="beef">Beef</option>
      <option value="chicken">Chicken</option>
      <option value="lamb">Lamb</option>
      <option value="pork">Pork</option>
    </select>
    <input type="text" v-model="searchFood">
   <p>{{searchFood}}</p> 
    <div >
      <transition-group name="fade" class="food-list flex" tag="div">

          <div class="food-item p-1" v-for="item in filteredData" :key="item.idMeal" style="animation-duration: 0.3s">
            <food-item :food="item" />
          </div>
      </transition-group>
        </div>
  </div>
</template>

<script>
import FoodItem from '../components/FoodItem.vue';
export default {
  components: { FoodItem },
data() {
      return {
        allFood: [],
        searchFood:'',
      }
    },
    computed: {
       filteredData() {
    return this.allFood.filter(food => food.strMeal.toLowerCase().includes(this.searchFood.toLowerCase()))
  }
    },
    mounted(){
     this.allFood=this.$store.state.food;
    },
    methods:{
       onChange:function(event){
         if(event.target.value === "beef"){
           this.allFood=this.$store.getters.foodBeef;
         }
         else if(event.target.value === "chicken"){

           this.allFood=this.$store.getters.foodChicken;
         }
        else if(event.target.value === "lamb"){

           this.allFood=this.$store.getters.foodLamb;
         }
         else if(event.target.value === "pork"){

           this.allFood=this.$store.getters.foodPork;
         }
           else if(event.target.value === "all"){

           this.allFood=this.$store.state.food;
         }
    },

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

    @include desktop {
      width: calc((100% / 4) - 20px);

    }
  }
</style>