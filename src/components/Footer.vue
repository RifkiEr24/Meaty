<template>
  <footer  v-scroll="updateScroll" class="bg-primary p-2 mt-5" :class="{ 'border-radius': scrollPosition > 80}">
      <h4 class="text-white text-center">Copyright © Meathycal 2021</h4>
  </footer>
</template>

<script>
export default {
    data(){
   return{
      scrollPosition: null,  
    }
    
  },
    methods: {
     updateScroll() {
       this.scrollPosition = window.scrollY
    },
  },
  mounted(){
        window.addEventListener('scroll', this.updateScroll);
  }

}
</script>

<style lang="scss" scoped>
@import "./../scss/_responsive.scss";

footer{
    
    width: 100%;
    transition: all 0.3s ease-in-out;
    @include tablet{
        position: fixed;
    bottom: 0;
    }
}
.border-radius{
    border-top-right-radius:25px;
        border-top-left-radius:25px;

}
</style>