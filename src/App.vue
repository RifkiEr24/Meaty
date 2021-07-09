<template>
  <div id="app">
      <navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
     components: {
    Navbar
  },
}
</script>
<style lang="scss">
@import "./scss/_mixins.scss";
@import "./scss/_variables.scss";

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
font-family: 'Poppins', sans-serif; 
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}

body{
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
