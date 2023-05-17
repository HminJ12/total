<template>
  <h1 class="title">{{name}}</h1>
  <button v-on:click="updateName">클릭</button>
</template>

<script>
import { reactive } from 'vue';


export default {
  name: 'App',
  setup(){ //composition
    const name = reactive({
      id : 1,
    });

  /* 
  const fn = (param) => {
      return `Hello, ${param}`;
    }
    const greet = fn(name);
  */

  const updateName = () => {
    name.id = 2;
    console.log(name);
  }

    return {
      name, //name : name
      updateName,
    };
  }

}
</script>

<style>

</style>
