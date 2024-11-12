import { ref, computed, watch, type ComputedRef } from 'vue'

export default function useSearch(items: ComputedRef, searchParam: string) {
  const enteredSearchTerm = ref('')
  const activeSearchTerm = ref('')

  const availableItems = computed(() => {
    if (activeSearchTerm.value) {
      return items.value.filter((item: Record<string, string | number>) =>
        item[searchParam]?.toString().toLowerCase().includes(activeSearchTerm.value.toLowerCase()),
      )
    }
    return items.value
  })

  const updateSearch = (val: string) => {
    enteredSearchTerm.value = val
  }

  watch(enteredSearchTerm, (newValue) => {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue
      }
    }, 300)
  })

  return {
    enteredSearchTerm,
    activeSearchTerm,
    availableItems,
    updateSearch,
  }
}
