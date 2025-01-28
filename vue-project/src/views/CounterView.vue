<script setup>
import {useCounterStore} from "@/stores/CounterStore";

let counter = useCounterStore();
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>

    <button
      :disabled="! counter.remaining"
      @click="counter.increment()"
    >Increment ({{ counter.remaining }} Remaining)
    </button>
  </div>
</template>
