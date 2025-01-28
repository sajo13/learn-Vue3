<script setup>
import {useTeamStore} from "@/stores/TeamStore";
import AddMemberModel from "@/components/Teams/AddMemberModel.vue";
// Import your Pinia store

// Use the Pinia store to access state
const teamStore = useTeamStore();
</script>

<template>
  <header class="flex justify-between">
    <div>
      <AddMemberModel/>
    </div>

    <div>
      <div class="inline-flex items-center text-3xl relative">
        <img alt="" class="mr-2" src="@/assets/logo.svg">
        <h3>{{ teamStore.name }} Team</h3>
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">
          {{ teamStore.spots }}
        </div>
      </div>
    </div>
  </header>
</template>
