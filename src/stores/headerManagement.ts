import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

export const headerManagementStore = defineStore('headerManagement', () => {
  const headerDataState = ref({
    buttonMessage: '',
    headerMessage: '',
    action: ''
  })

  const headerDataGetter = computed(() => headerDataState.value)

  const setHeaderData = (payload) => {
    headerDataState.value = {
      buttonMessage: payload.buttonMessage,
      headerMessage: payload.headerMessage,
      action: payload.action
    }
  }

  return { setHeaderData, headerDataGetter }
})