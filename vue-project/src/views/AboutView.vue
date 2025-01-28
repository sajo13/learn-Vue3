<script>
import flash from "@/mixins/flash.js";

export default {
  mixins: [flash]
}
</script>


<template>
  <main>
    <p>
      <button @click="flash('Hi', 'it works')"> Click Me</button>
    </p>

  </main>
</template>


