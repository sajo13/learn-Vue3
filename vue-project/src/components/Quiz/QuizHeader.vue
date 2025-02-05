'
<template>
  <div>
    <h1> Quiz Header</h1>
     <h3>Welcome to your first quiz</h3>
  </div>
</template>
<script setup>
import {inject} from "vue";

defineProps({ quiz: Object});
</script>
