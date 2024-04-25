import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const infoRep = ref('executor')
  const modalRegExecutor = ref(false)

  return { infoRep, modalRegExecutor }
})
