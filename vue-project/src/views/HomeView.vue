<template>
  <main>
    <Quiz :quiz="{ name: 'My First Quiz', questions: [] }" />

  </main>
</template>

<script setup>
// import {state} from "@/stores/quizStore";
import Quiz from "@/components/Quiz/Quiz.vue";
</script>
