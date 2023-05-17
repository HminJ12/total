<template>
  <select @change="fnChangeHandler" v-model="num1">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  +
  <select @change="fnChangeHandler" v-model="num2">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  =
  <span>{{sum}}</span>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup(){
    const sum = ref(0)
    const num1 = ref(0)
    const num2 = ref(0)
    const fnChangeHandler = () => {
      sum.value = parseInt(num1.value) + parseInt(num2.value)
    }
    return{
      sum,
      fnChangeHandler,
      num1,
      num2,
    };
  }
}
</script>


