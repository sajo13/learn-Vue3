<template>
  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">{{ teamStore.name }} - {{ teamStore.spots }} Member Team</h5>
  </footer>
</template>

<script setup>
import {useTeamStore} from "@/stores/TeamStore";
// Import your Pinia store

// Use the Pinia store to access state
const teamStore = useTeamStore();
</script>
