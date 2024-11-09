<template>
  <form>
    <input
      class="bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
      type="search"
      @input="(event) => $emit('search', (event.target as HTMLInputElement)?.value || '')"
      :value="searchTerm"
      :placeholder="placeholder"
    />
  </form>
</template>

<script setup lang="ts">
defineProps(['searchTerm', 'placeholder'])
defineEmits(['search'])
</script>
