import { ref, computed, type ComputedRef } from 'vue'

export default function useSort(items: ComputedRef, field: string) {
  const sorting = ref<'asc' | 'desc'>('asc')

  const sortedItems = computed(function () {
    if (!sorting.value) {
      return items.value
    }
    interface Item {
      [key: string]: string | number | boolean | null | undefined
    }

    return items.value.slice().sort((u1: Item, u2: Item) => {
      if (
        sorting.value === 'asc' &&
        u1[field] != null &&
        u2[field] != null &&
        u1[field] > u2[field]
      ) {
        return 1
      } else if (sorting.value === 'asc') {
        return -1
      } else if (
        sorting.value === 'desc' &&
        u1[field] != null &&
        u2[field] != null &&
        u1[field] > u2[field]
      ) {
        return -1
      } else {
        return 1
      }
    })
  })

  const sort = (mode: 'asc' | 'desc') => {
    sorting.value = mode
  }

  return {
    sorting,
    sort,
    sortedItems,
  }
}
