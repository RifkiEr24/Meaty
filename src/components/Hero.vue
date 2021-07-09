<template>
  <div class="hero">
      <div class="hero-text">
          <h1>VarRestaurant</h1>
          <p>Every Variant Country Food in One Place!</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "./../scss/_mixins.scss";
.hero{
    background-image: url('../assets/hero.jpg');
    background-position: center;
    background-size: cover;
    background-color: black;
    box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.65);
    min-height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    border-bottom-left-radius: 85px;
    border-bottom-right-radius: 85px;
    .hero-text{
        margin: 0 auto;
        text-align: center;
    }
}
.hero-img{
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    object-fit: cover;
    height: 100vh;
    @include tablet {
      
        }
}
</style>