<template>
  <li class="pb-3 sm:pb-4">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div class="flex-1 min-w-0 space-y-3">
        <p class="text-sm font-medium text-gray-900 truncate">
          {{ title }}
        </p>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps(['title'])
</script>

<style scoped>
li:not(:last-child) {
  border-bottom: 1px solid #ebe8e8;
  padding-bottom: 1rem;
}
</style>
