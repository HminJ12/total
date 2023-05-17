<template>
  <h1 class="title">{{greet}}</h1>
</template>

<script>

export default {
  name: 'App',
  setup(){ //composition
    const name = "Vue app";

    const fn = (param) => {
      return `Hello, ${param}`;
    }
    const greet = fn(name);


    return {
      name, //name : name
      fn,
      greet,
    };
  }

}
</script>

<style>
  .title{
    color: red;
  }
</style>
