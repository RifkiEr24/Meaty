<template>
  <div id="app ">
    <navbar />
    <transition name="fade" mode="out-in">
      <router-view class="mb-10" :class="{ 'pt-10': $route.path !== '/' }" />
    </transition>

    <Footer />
    <notifications position="bottom right" classes="custom-notification mb-5" group="notification" />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import {
  mapActions
} from 'vuex';
import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      food: ['Chicken', 'Beef', 'Lamb', 'Pork'],
    }
  },
  mounted() {
    this.food.map(category => {
      this.fetchFood(category);
    })
    console.log(this.$store.state.food)
  },
  methods: {
    ...mapActions(["fetchFood"])
  }
}
</script>
<style lang="scss">

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

</style>
