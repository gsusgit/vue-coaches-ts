<template>
  <base-container>
    <h2 class="text-xl font-bold">Coaches list</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
      :placeholder="'Filter coaches'"
    ></base-search>
    <div>
      <button
        class="focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        @click="sort('asc')"
        :class="[
          sorting === 'asc'
            ? 'text-white bg-teal-700 hover:bg-teal-700 focus:ring-teal-300'
            : 'text-gray-700 bg-white border-2 border-gray-100 hover:bg-teal-700 hover:text-white focus:ring-teal-300',
        ]"
      >
        Sort Ascending
      </button>
      <button
        class="focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        @click="sort('desc')"
        :class="[
          sorting === 'desc'
            ? 'text-white bg-teal-700 hover:bg-teal-700 focus:ring-teal-300'
            : 'text-gray-700 bg-white border-2 border-gray-100 hover:bg-teal-700 hover:text-white focus:ring-teal-300',
        ]"
      >
        Sort Descending
      </button>
    </div>
    <ul class="space-y-3 border-2 border-gray-100 p-3 rounded-md max-h-96 overflow-y-scroll">
      <coach-item
        v-for="coach in displayedCoaches"
        :key="coach.id"
        :name="coach.name"
        :id="coach.id"
        @list-projects="$emit('list-projects', $event)"
      ></coach-item>
    </ul>
  </base-container>
</template>

<script setup lang="ts">
import { toRefs, computed, defineEmits, watch } from 'vue'
import useSearch from '@/hooks/search'
import useSort from '@/hooks/sort'
import CoachItem from '@/components/templates/coaches/CoachItem.vue'

const props = defineProps({
  coaches: {
    type: Array,
    default: null,
  },
})

const { coaches } = toRefs(props)

defineEmits(['list-projects'])

const availableCoaches = computed(() => availableItems.value)

const { enteredSearchTerm, availableItems, updateSearch } = useSearch(
  computed(() => coaches.value),
  'name',
)
const { sorting, sort, sortedItems } = useSort(availableCoaches, 'name')

const displayedCoaches = computed(() => {
  return sortedItems.value
})

watch(sorting, (newSorting) => {
  sort(newSorting)
})
</script>
