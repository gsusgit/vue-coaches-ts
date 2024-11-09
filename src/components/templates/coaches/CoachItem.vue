<template>
  <li class="pb-3 sm:pb-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-1 min-w-0 space-y-3">
        <p class="text-sm font-medium text-gray-900 truncate">
          {{ name }}
        </p>
        <button
          class="focus:ring-4 font-medium rounded-lg text-sm px-3 py-1 me-2 mb-2 text-white bg-teal-700 hover:bg-teal-700 focus:ring-teal-300"
          @click="$emit('list-projects', id)"
        >
          View Projects
        </button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps(['id', 'name'])
defineEmits(['list-projects'])
</script>

<style scoped>
li:not(:last-child) {
  border-bottom: 2px solid #ebe8e8;
  padding-bottom: 1rem;
}
</style>
