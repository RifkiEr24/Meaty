<template>
  <div class="flex justify-between p-1">
           <div class="current-delivery-address">
                 <p><span class="font-bold">{{addressData.address.receiver}}</span>( {{addressData.address.label}})</p>
                <p> {{addressData.address.telp}}</p>
                <p>{{addressData.address.address}}</p>
                <p>{{addressData.address.city}},{{addressData.address.zipcode}}</p>
             </div>
             <div class="mt-2">
               <buttton-primary @button-click="removeAddressData" :buttonText="`<span class='iconify' style='width:15px; height:15px;' data-icon='clarity:trash-solid' data-inline='false'></span>`" />
              <buttton-primary  v-if="addressData.selected === false" @button-click="setAsMainAddress" :buttonText="'Set As Main Adress'" />
             </div>
            
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import ButttonPrimary from './ButttonPrimary.vue';
export default {
  components: { ButttonPrimary },
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

<style lang="scss" scoped>
@import "./../scss/_mixins.scss";

.flex{
  border-bottom:1px solid #2B2B2B;
  align-items: center;
  flex-direction: column;
  @include tablet{
    flex-direction: row;
  }
}
    .iconify{
            width: 44px;
            height: 44px;
        }
</style>