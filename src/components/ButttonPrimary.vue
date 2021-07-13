<template>
  <button class="bg-primary p-1 " v-html="buttonText" @click="$emit('button-click')">
  </button>
</template>

<script>
export default {
props:['buttonText']
}
</script>

<style lang="scss" scoped>
  button {
          border: 0;
          color: white;
          border-radius: 5px;
          transition: 0.3s ease-in-out;
          &:hover{
              background-color: #141414;
          }
        }
    
</style>