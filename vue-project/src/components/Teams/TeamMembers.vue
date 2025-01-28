<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";
import {useTeamStore} from "@/stores/TeamStore";
// Import your Pinia store

// Use the Pinia store to access state
const teamStore = useTeamStore();
</script>

<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
    <th class="text-left px-6 py-2">Name</th>
    <th class="text-left px-6 py-2">Email</th>
    <th class="text-left px-6 py-2">Status</th>
    </thead>

    <tbody>
    <TeamMember v-for="member in teamStore.members" :email="member.email" :name="member.name"
                :status="member.status"/>
    </tbody>
  </table>

  <p v-show="teamStore.members.length === teamStore.spots" class="text-right text-gray-600 italic">
    There are
    no remaining team spots. Upgrade to add more.</p>
</template>
