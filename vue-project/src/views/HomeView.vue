<script setup>
import {useStorage} from "@/composable/useStorage.js";

let food = useStorage('food', 'tacos');

</script>

<template>
  <main>
    <p>
      What is your favorite food? <input v-model="food" type="text">
    </p>
  </main>
</template>
