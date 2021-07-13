<template>
    <div class="container">
        <div class="container flex mt-12 p-1">
            <modal name="my-first-modal" :scrollable="true" :height="'auto'" :adaptive="true">

                <div class="p-2">
                    <div slot="top-right">
                        <button @click="$modal.hide('foo')">
                            ❌
                        </button>
                    </div>
                    <h3 class="text-center">Choose Address Delivery</h3>
                    <input type="text">
                    <button @click="showAdd">Tambah Alamat Baru</button>
                    <address-item v-for="item in address" :key="item.label" :addressData="item" />
                </div>
            </modal>
            <modal name="add-address-modal" :adaptive="true" :height="'auto'">
                <address-form />
            </modal>
            <div class="cart-item-container p-2 m-2 bg-white">
                <h2>Checkout</h2>
                <h4>Address Delivery</h4>
                <div class="current-delivery-address" v-for="item in selectedAddress" :key="item.id">
                    <p><span class="font-bold">{{item.receiver}}</span> ({{item.label}})</p>
                    <p>{{item.telp}}</p>
                    <p>{{item.address}}</p>
                    <p>{{item.city}}, {{item.zipcode}}</p>
                </div>
                <button @click="show" class="bg-primary text-white p-1 mt-2">Pilih Alamat Lain</button>

            </div>
            <div class="summary-container p-2 m-2 bg-white">
                <h2>Cart Summary</h2>
                <div class="flex summary-item">
                    <p>Total Harga ({{cartItemSelectedCount}} pcs)</p>
                    <p>Rp.{{cartItemSelectedCount * 30000}}</p>
                </div>
                     <div class="flex summary-item">
                    <p>Total Ongkos Kirim</p>
                    <p>Rp.{{deliveryPrice}}</p>
                </div>
                <div class="flex summary-total summary-item mt-2 mb-2">
                    <p>Total</p>
                    <p>{{(cartItemSelectedCount * 30000) + deliveryPrice}}</p>
                </div>
                <button @click="order" class="bg-primary checkout p-1 text-white text-center ">Order Now
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapActions
} from 'vuex';
import AddressForm from '../components/AddressForm.vue';
import AddressItem from '../components/AddressItem.vue';
export default {
    components: {
        AddressItem,
        AddressForm
    },
    computed: {
        deliveryPrice() {
            let price;
            this.selectedAddress.map(address => {
                if (address.city === "cimahi") {
                    price = 15000;
                } else if (address.city === "bandung") {
                    price = 30000;
                }
            })
            return price
        },
        ...mapGetters([
            'selectedAddress',
            'cartItemSelectedCount'
        ]),
        ...mapState([
            'address'
        ]),
    },
    methods: {
        ...mapActions(['clearCartItems']),
        order(){
             this.$notify({
                type: 'success',
                group: 'notification',
                title: 'Complete',
                text: "Your Order Will be Processed, please wait. We'll serve it to you As soon as possible :) .. Thank You for purchasing on Meathycal",
                duration: 10000
            }).then(this.clearCartItems).then( this.$router.push('/'))
           
        },
        show() {
            this.$modal.show('my-first-modal');
        },
        showAdd() {
            this.$modal.hide('my-first-modal');
            this.$modal.show('add-address-modal');
        },
        hide() {
            this.$modal.hide('my-first-modal');
        }
    },
    mounted() {
        console.log(this.$store.state.address);
         
    }
}
</script>

<style lang="scss" scoped>
@import "./../scss/_mixins.scss";
input{
    width: 100%;
    border-radius: 15px;
}
.checkout{
    margin-left: auto;
    margin-right: auto;
    display: block;
    max-width: 200px;
}
.container.flex{
    flex-wrap: wrap;
}
.summary-item, .summary-container{
    justify-content: space-between;
}
.summary-total{
    border-top: 1px solid #2B2B2B;
}
.cart-item-container{
      margin: 20px 0 0 20px;
    width: 100%;
   @include desktop {
 width: calc(60% - 20px);
    }
}
.summary-container{
      margin: 20px 0 0 20px;
       width: 100%;
   @include desktop {
 width: calc(40% - 20px);
    
}
}
.container{
    align-items: flex-start;
    .bg-white{
            border-radius: 25px;
    }
}
</style>