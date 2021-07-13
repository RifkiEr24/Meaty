<template>
    <div class="container">
        <div class="flex mt-11 p-1">
            <modal name="addresslist" :scrollable="true" :height="'auto'" :adaptive="true">
                <div class="p-2">
                    <div slot="top-right">
                        <buttton-primary @button-click="$modal.hide('addresslist')" :buttonText="'X'" />
                    </div>
                    <h3 class="text-center">Choose Address Delivery</h3>
                    <input type="text" class="p-1" v-model="searchAddress"
                        placeholder="Search Adress / Label / Receiver / .. Here">
                    <buttton-primary class="item-center mt-2" @button-click="showAdd" :buttonText="'Add New Address'" />
                    <address-item v-for="item in filteredData" :key="item.id" :addressData="item" />
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
                <buttton-primary class="mt-2" @button-click="show" :buttonText="'Choose Another Address'" />
                <br>
                <small>*Delivery Price : Rp.15.000 for Cimahi, Rp.30.000 For Bandung</small>
            </div>
            <div class="summary-container p-2 m-2 bg-white">
                <h2>Cart Summary</h2>
                <div class="flex summary-item justify-between">
                    <p>Total Harga ({{cartItemSelectedCount}} pcs)</p>
                    <p>Rp.{{cartItemSelectedCount * 30000}}</p>
                </div>
                <div class="flex summary-item justify-between">
                    <p>Total Ongkos Kirim</p>
                    <p>Rp.{{deliveryPrice}}</p>
                </div>
                <div class="flex summary-total justify-between summary-item mt-2 mb-2">
                    <p>Total</p>
                    <p>{{(cartItemSelectedCount * 30000) + deliveryPrice}}</p>
                </div>
                <buttton-primary class="item-center" @button-click="order" :buttonText="'Order Now'" />
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
    import ButttonPrimary from '../components/ButttonPrimary.vue'
    export default {
        data() {
            return {
                allAddress: [],
                searchAddress: '',
            }
        },
        components: {
            AddressItem,
            AddressForm,
            ButttonPrimary
        },
        computed: {
            filteredData() {
                return this.address.map(item => {
                    return item
                }).filter(addressData => {
                    return addressData.address.address.toLowerCase().includes(this.searchAddress
                            .toLowerCase()) ||
                        addressData.address.receiver.toLowerCase().includes(this.searchAddress.toLowerCase()) ||
                        addressData.address.label.toLowerCase().includes(this.searchAddress.toLowerCase()) ||
                        addressData.address.city.toLowerCase().includes(this.searchAddress.toLowerCase()) ||
                        addressData.address.telp.toLowerCase().includes(this.searchAddress.toLowerCase()) ||
                        addressData.address.zipcode.toLowerCase().includes(this.searchAddress.toLowerCase())
                })

            },
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
            order() {
                this.clearCartItems().then(this.$router.push('/').then(
                    this.$notify({
                        type: 'success',
                        group: 'notification',
                        title: 'Complete',
                        text: "Your Order Will be Processed, please wait. We'll deliver it to you As soon as possible :) .. Thank You for purchasing on Meathycal",
                        duration: 10000
                    })
                ))


                // .then(this.clearCartItems).then( this.$router.push('/'))

            },
            show() {
                this.$modal.show('addresslist');
            },
            showAdd() {
                this.$modal.hide('addresslist');
                this.$modal.show('add-address-modal');
            },
            hide() {
                this.$modal.hide('addresslist');
            }
        },
        mounted() {
            this.allAddress = this.address;
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../scss/_responsive.scss";

    .container {
        .flex {
            align-items: flex-start;

        }

        .bg-white {
            border-radius: 25px;
        }

        .cart-item-container {
            margin: 10px 5px;
            width: 100%;

            @include desktop {
                width: calc(60% - 10px);
            }
        }

        .summary-container {
            margin: 10px 5px;
            width: 100%;

            .summary-total {
                border-top: 1px solid #2B2B2B;
            }

            @include desktop {
                width: calc(40% - 10px);

            }
        }
    }

    input {
        width: 100%;
        border-radius: 15px;
    }
</style>