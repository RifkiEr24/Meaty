<template>
  <div class="flex">
           <div class="current-delivery-address">
                 <p><span class="font-bold">{{addressData.address.receiver}}</span>( {{addressData.address.label}})</p>
                <p> {{addressData.address.telp}}</p>
                <p>{{addressData.address.address}}</p>
                <p>{{addressData.address.city}}</p>
             </div>
             <button @click="removeAddressData">     <span class="iconify" data-icon="clarity:trash-solid" data-inline="false"></span></button>
              <button v-if="addressData.selected === false" @click="setAsMainAddress">Jadikan Alamat Utama</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
props:['addressData'],
methods:{
...mapActions(['removeAddress','selectMainAddress']),
removeAddressData(){
  this.removeAddress(this.addressData)
},
setAsMainAddress(){
  this.selectMainAddress(this.addressData)
}
}
}
</script>

<style>

</style>