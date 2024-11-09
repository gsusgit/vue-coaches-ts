<template>
  <main class="grid grid-cols-2 max-w-6xl mx-auto m-5">
    <coaches-list-view
      :coaches="activeCoaches"
      @list-projects="selectCoach"
    ></coaches-list-view>
    <projects-list-view v-if="selectedCoach" :coach="selectedCoach"></projects-list-view>
    <projects-list-view v-else></projects-list-view>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Coach } from './data/types'
import coaches from './data/data'
import CoachesListView from './pages/CoachesListView.vue'
import ProjectsListView from './pages/ProjectsListView.vue'

const selectedCoach = ref<Coach | null>(null)
const activeCoaches = ref<Coach[]>(coaches)

const selectCoach = (id: string) => {
  selectedCoach.value =
    activeCoaches.value.find((coach) => coach.id === id) || null
}
</script>
