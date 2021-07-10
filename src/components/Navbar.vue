<template>
  <header>
    <nav class="nav p-1" id="drawer" :class="{ 'bg-primary': $route.path !== '/' }">
      <div class="brand">
          <p class="brand-name p-1">Meathycal</p>
      </div>
        <ul>
            <li class="nav-item "><router-link :to="'/'">Home</router-link></li>
            <li class="nav-item "> <router-link :to="'about'">Home</router-link></li>
           

            <li class="nav-item "><a class="nav-link" href="#">Gallery</a></li>
            <li class="nav-item "><a class="nav-link" href="#">Cart</a></li>
        </ul>
         <a id="hamburger" aria-label="Hamburger">☰</a>
    </nav>

  </header> 
</template>

<script>

export default {

}
</script>

<style lang="scss" >
@import "./../scss/_mixins.scss";

nav{
    color: white;
    display: flex;
    width: 100%;
    top: 0;
    position: fixed;
    background-color: #2B2B2B;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s ease;
     @include tablet {
         background-color: transparent;
        }
    .brand-name{
      font-weight: bold;
      font-size: 21px;
    }
    ul{
      display: none;
      margin-left: auto;
      list-style: none;
      flex-direction: column;;
        @include tablet {
          flex-direction: row;
          display: flex;
        }
      li{
        @extend .mr-5;
          a{
            color:white;
            font-weight: 600;
          }
        }
    }
    #hamburger{
      font-size: 30px;
      @extend .p-1;
      @include tablet {
         display: none;
        }
    }
}

</style>

