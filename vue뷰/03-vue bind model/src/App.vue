<template>
  <input type="text" v-model="name" >
  <button @click="onSubmit">클릭</button>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'App',
  setup(){ //composition
    const name = ref('hello');

    const onSubmit = () => {  
      console.log(name.value);
    };


    return {
      name, //name : name
      onSubmit,

    };
  }

}
</script>

<style>

</style>
