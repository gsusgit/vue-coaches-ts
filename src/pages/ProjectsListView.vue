<template>
  <base-container v-if="coach">
    <h2 class="text-xl font-bold">{{ coach.name }}</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
      :placeholder="'Filter projects'"
    ></base-search>
    <div v-if="hasProjects" class="space-y-5">
      <h3 class="text-lg text-teal-700 font-semibold pt-5">Projects</h3>
      <ul class="space-y-3 bg-gray-100 p-4 rounded-lg shadow-sm max-h-96 overflow-y-scroll">
        <project-item
          v-for="prj in availableProjects"
          :key="prj.id"
          :title="prj.title"
        ></project-item>
      </ul>
    </div>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>Please, select a coach...</h3>
  </base-container>
</template>

<script setup lang="ts">
import { computed, watch, toRefs } from 'vue'
import useSearch from '@/hooks/search'
import ProjectItem from '@/components/templates/projects/ProjectItem.vue'

const props = defineProps({
  coach: {
    type: Object,
    default: null,
  },
})

const { coach } = toRefs(props)

const projects = computed(() => {
  return coach.value ? coach.value.projects : []
})

const { enteredSearchTerm, availableItems, updateSearch } = useSearch(projects, 'title')

const availableProjects = computed(() => availableItems.value)

const hasProjects = computed(() => {
  return coach.value.projects && availableProjects.value.length > 0
})

watch(coach, () => {
  updateSearch('')
})
</script>
