<template>
<div class="container ">
    <h2 class="text-center">Gallery</h2>
    <p class="text-center">Various Photo & Experience On Meathycal Restaurant !</p>
 <div class="item-container">
    <div class="item" v-for="(image,index) in  img" :key="index">
        <img :src="getImgUrl(image)" class="img-gallery"  alt="">
    </div>
</div>
</div>
 
</template>

<script>
export default {
    data() {
      return {
          img:[]
      }
    },
methods:{
    getImgUrl(pic) {
    return require('../assets/'+pic)
},
createArrayRestaurant(){
for(let i = 1; i <=14;i++){
    let restaurantname =  `restaurant${i}.jpg`;
    this.img.push(restaurantname);
}
}

},
mounted(){
this.createArrayRestaurant();
}
}
</script>

<style lang="scss" scoped>
.img-gallery{
    border-radius: 20px;
    width: 100%;
            transition: 0.3s ease-in-out;
            &:hover{
                padding: 0.5rem;
            }

}
.item-container {
    -moz-column-width: 18em;
    -webkit-column-width: 18em;
    column-width: 18em;
    -moz-column-gap: 1em;
    -webkit-column-gap:1em;
    column-gap: 1em;
}
.item {
    display: inline-block;
    width: 100%;
    padding: 30px;
    margin: 5px;
}
</style>