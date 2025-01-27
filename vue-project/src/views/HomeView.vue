<script setup>
// import {ref} from 'vue';
import TheWelcome from '../components/TheWelcome.vue';

// Use $ref shorthand for reactivity
let message = $ref("Hello world");

setTimeout(() => {
  message = "I have been changed";  // Direct assignment, reactivity works
}, 2000);
</script>

<template>
  <main>
    <TheWelcome/>
    {{ message }} <!-- Directly using message without .value -->
    <input v-model="message" type="text"/>
  </main>
</template>
