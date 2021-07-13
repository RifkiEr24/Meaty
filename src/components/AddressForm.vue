<template>
   <div class="p-2">
         <div slot="top-right">
                        <buttton-primary @button-click="$modal.hide('add-address-modal')" :buttonText="'X'" />
                    </div>
            <h3 class="text-center">Add New Address Delivery</h3>
            <form  @submit.prevent="test">
            <div class="form-group">
                <label for="label">Label Adress</label>
                <input type="text" required v-model="addAddressData.label" name="label" id="label">
                <small>Example: "Home", "Office", "Apartment", etc</small>
            </div>
            <div class="flex">
                <div class="form-group name">
                <label for="receiver">Receiver Name</label>
                <input type="text" required name="receiver" v-model="addAddressData.receiver" id="receiver">
            </div>
               <div class="form-group telephone">
                <label for="telephone">Telephone</label>">
                <input type="number" required name="telephone" v-model="addAddressData.telp" id="telephone">
            </div>
                 <div class="form-group city">
                <label for="city">City</label>
                <select name="city" required v-model="addAddressData.city" id="city">
                    <option value="cimahi">Cimahi</option>
                    <option value="bandung">Bandung</option>
                </select>
            </div>
                 <div class="form-group zipcode">
                <label for="zipcode">Zipcode</label>
                <input type="text" required v-model="addAddressData.zipcode" name="zipcode" id="zip">
            </div>
            </div>
             <div class="form-group">
                <label for="address">Address</label>
                <textarea name="address" required id="address" v-model="addAddressData.address"  rows="4"></textarea>
            </div>
            <buttton-primary class="item-center" type="submit" :buttonText="'Submit'"/>
            </form>
        </div>
</template>

<script>
import {mapActions} from 'vuex';
import ButttonPrimary from './ButttonPrimary.vue';
export default {
  components: { ButttonPrimary },
    data() {
      return {
        addAddressData: {},
      }
    },
methods:{
    ...mapActions(["addAddress"]),
    test(){
        this.addAddress(this.addAddressData)
        this.$modal.hide('add-address-modal');
    }
}
}
</script>

<style lang="scss" scoped>
.flex{
    &>*{
          margin: 10px 5px;
    }
  
}
.form-group{
    &.name{
        width: calc(50% - 10px);
    }
    &.telephone{
        width: calc(50% - 10px);
    }
    &.city{
        width: calc(70% - 10px);
        select{
            width: 100%;
        }
    }
    &.zipcode{
        width: calc(30% - 10px);
    }
    textarea{
        width: 100%;
    }
    
}
input, textarea{
    padding: 0.5rem;
    width: 100%;
    border-radius: 15px;
}
</style>