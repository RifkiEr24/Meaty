<template>
   <div class="p-2">
            <h3 class="text-center">Add New Address Delivery</h3>
            <form  @submit.prevent="test">
            <div class="form-group">
                <label for="label">Label Adress</label>
                <input type="text" v-model="addAddressData.label" name="label" id="label">
                <small>Example: "Home", "Office", "Apartment", etc</small>
            </div>
            <div class="flex">
                <div class="form-group name">
                <label for="receiver">Receiver Name</label>
                <input type="text" name="receiver" v-model="addAddressData.receiver" id="receiver">
            </div>
               <div class="form-group telephone">
                <label for="telephone">Telephone</label>">
                <input type="number" name="telephone" v-model="addAddressData.telp" id="telephone">
            </div>
                 <div class="form-group city">
                <label for="city">City</label>
                <select name="city" v-model="addAddressData.city" id="city">
                    <option value="cimahi">Cimahi</option>
                    <option value="cimahi">Bandung</option>
                </select>
            </div>
                 <div class="form-group zipcode">
                <label for="zipcode">Zipcode</label>
                <input type="text" v-model="addAddressData.zipcode" name="zipcode" id="zip">
            </div>
            </div>
             <div class="form-group">
                <label for="address">Address</label>
                <textarea name="address" id="address" v-model="addAddressData.address"  rows="2"></textarea>
            </div>
            <input type="submit">
            </form>
        </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    data() {
      return {
        addAddressData: {},
      }
    },
methods:{
    ...mapActions(["addAddress"]),
    test(){
        this.addAddress(this.addAddressData)
    }
}
}
</script>

<style lang="scss" scoped>
.flex{
    flex-wrap: wrap;
}
.form-group{
    &.name{
        width: 50%;
    }
    &.telephone{
        width: 50%;
    }
    &.city{
        width: 70%;
    }
    &.zipcode{
        width: 30%;
    }
    
}
input{
    width: 100%;
    border-radius: 15px;
}
</style>