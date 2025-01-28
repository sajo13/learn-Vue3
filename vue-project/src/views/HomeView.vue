<script>
import {useFlash} from "@/composable/useFlash.js";

export default {
  setup() {
    let {flash} = useFlash();

    return {flash};
  }
}
</script>

<template>
  <main>
    <p>
      <button @click="flash('Yay!', 'it works', 'info')"> Click Me</button>
    </p>

  </main>
</template>
