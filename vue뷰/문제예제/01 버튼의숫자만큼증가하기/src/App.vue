<template>
  <input :value="n" type="text"> 
  <!-- v.bind:value="1"  :value="1" -->
  <hr>
  <button @click="fnIncrease($event)">1</button>
  <button @click="fnIncrease($event)">2</button>
  <button @click="fnIncrease($event)">3</button>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup(){
    const n = ref(1) //초기값 
    const fnIncrease = (e) => {
      n.value += parseInt(e.target.innerText)
    }
    return {
      n,
      fnIncrease,
    };

  }

}
</script>


