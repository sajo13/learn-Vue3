<script setup>
import Modal from "@/components/Modal.vue";
import {useTeamStore} from "@/stores/TeamStore";
import {ref} from "vue";

let showModal = ref(false);
let team = useTeamStore();
</script>

<template>
  <button
    :disabled="! team.spotsRemaining"
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    @click="showModal = true"
  >Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #default>
        <p class="text-black border-spacing-1">Need to add a new member to your team?</p>

        <form class="mt-6">
          <div class="flex gap-2">
            <input class="flex-1 text-black border-spacing-1" placeholder="Email Address..."
                   type="email">
            <button class="text-black border-spacing-1">Add</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>
