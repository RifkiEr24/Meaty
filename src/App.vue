<template>
  <div id="app">
      <navbar />
  <transition
        name="fade"
        mode="out-in"
      >
        <router-view :class="{ 'pt-10': $route.path !== '/' }"/>
      </transition>
      <notifications position="bottom right"  classes="custom-notification" group="notification" />
    <footer/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import { mapActions} from 'vuex';
import Footer from './components/Footer.vue';
export default {
     components: {
    Navbar,
          Footer
  },
  mounted(){
   this.loadFoodBeef();
  this.loadFoodChicken();
  this.loadFoodLamb();
  this.loadFoodPork();
  },
  computed: {

  },
  methods:{
 ...mapActions(["loadFoodBeef","loadFoodChicken","loadFoodLamb","loadFoodPork"])
  }
}
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
font-family: 'Poppins', sans-serif; 
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
body{
    color: #2B2B2B;
    background-color: #EDEDED;
    margin: 0;
    padding: 0;
}
p{
    margin: 0;
}
a{
    text-decoration: none;
}
</style>
