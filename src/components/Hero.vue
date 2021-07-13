<template>
  <div class="hero">
      <div class="hero-text">
          <h1>Meathycal</h1>
          <p>Best Meat Based Food You Ever Meet ! </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>