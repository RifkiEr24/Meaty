<template>
  <header>
    <nav v-scroll="updateScroll" class="nav p-1" id="drawer"  :class="{ 'bg-primary': $route.path !== '/' || scrollPosition > 20}">
      <div class="brand">
          <p class="brand-name p-1">Meathycal</p>
      </div>
        <ul>
            <li class="nav-item "><router-link :to="'/'">Home</router-link></li>
            <li class="nav-item "> <router-link :to="'menu'">Menu</router-link></li>
           

            <li class="nav-item "><a class="nav-link" href="#">Gallery</a></li>
            <li class="nav-item" id="dropdown"> <router-link :to="'cart'">Cart</router-link>
              <span class="badge" v-if="cart.length > 0">  {{cartItemCount}}</span>
               <div class="dropdown-content text-primary p-2">
                <div v-if="cart.length === 0">
                  <p class="text-center">Oops.. Your Cart Still Empty</p>
                </div>
                <div v-else>
                   <review-item  v-for="item in cart" :key="item.product.id" :cartItem="item"></review-item>
                 <div class="cart-item-footer pt-2 mt-2 ">
                   <button @click="clearCartItems" class="bg-primary p-1 ">Clear Cart</button>
                 
                 </div>
                </div>
                
            
              </div>
            </li>
           
        </ul>
         <a id="hamburger" aria-label="Hamburger">☰</a>
    </nav>

  </header> 
</template>

<script>
import ReviewItem from './ReviewItem.vue';
import {mapGetters, mapState, mapActions} from 'vuex';
export default {
  name: 'Navbar',
  components:{   ReviewItem },
  data(){
   return{
      scrollPosition: null,  
    }
  },
  computed :{
    ...mapGetters({
      cartItemCount :"cartItemCount"
    }),
    ...mapState([
      'cart'
    ]),
  },
  methods: {
    ...mapActions(["clearCartItems"]),
     updateScroll() {
       this.scrollPosition = window.scrollY
    },
  },
  mounted(){
        window.addEventListener('scroll', this.updateScroll);
  }
};
</script>
<style lang="scss" >
@import "./../scss/_mixins.scss";

nav {
  color: white;
  display: flex;
  width: 100%;
  top: 0;
  position: fixed;
  background-color: #2B2B2B;
  justify-content: space-between;
  align-items: center;
  transition: background-color 1s ease;
  z-index: 10;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  @include tablet {
    background-color: transparent;
  }

  .brand-name {
    font-weight: bold;
    font-size: 21px;
  }

  ul {
    display: none;
    margin-left: auto;
    list-style: none;
    flex-direction: column;
    ;

    @include tablet {
      flex-direction: row;
      display: flex;
    }

    li {
      @extend .mr-5;

      a {
        color: white;
        font-weight: 600;
      }

      .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 15px;
        font-size: 12px;
        right: 25px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #f9f9f9;
        color: #2B2B2B;
      }

      &#dropdown:hover {
        .dropdown-content {
          visibility: visible;
          opacity: 1;
          transform: translate(0, 45px);
          transition: all 0.5s ease-in-out;
        }
      }

      .dropdown-content {
        visibility: hidden;
        position: absolute;
        right: 10px;
        background-color: #f9f9f9;
        min-width: 350px;
        top: 0;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        opacity: 0;
        transition: all 0.5s ease-in-out;

        .cart-item-footer {
          border-top: 0.5px solid black;
        }

        button {
          border: 0;
          color: white;
          border-radius: 5px;
        }
      }
    }
  }

  #hamburger {
    font-size: 30px;
    @extend .p-1;

    @include tablet {
      display: none;
    }
  }
}

</style>

