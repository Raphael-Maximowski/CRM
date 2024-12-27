import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { toastManagementStore } from '@/stores/toastManagement.ts'
import { stepsManagementStore } from '@/stores/stepsManagement.ts'


export const funnelsManagementStore = defineStore('funnelsManagement', () => {
  const toastManagement = toastManagementStore()
  const stepsStore = stepsManagementStore()

  const funnelsData = ref([
    { name: 'Funnel Example', description: 'Created as a Example', id: 1, date: '10/09/2024' }
    ]
  )

  const funnelsDataGetter = computed(() => funnelsData.value)

  const duplicateFunnel = (funnelToDuplicate) => {

    if (!funnelToDuplicate) {
      toastManagement.errorToast('An error occurred while duplicating, try again later')
      return
    }

    const funnelToPush = ref({})
    let created_at = new Date()

    function formatDate(date) {
      const month = date.getMonth() + 1
      const day = date.getDate()
      const year = date.getFullYear()

      return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`
    }

    const name = funnelToDuplicate.name
    const description = funnelToDuplicate.description
    const id = funnelsData.value.length === 0 ? 1 : funnelsData.value[funnelsData.value.length - 1].id + 1
    created_at = formatDate(created_at)

    funnelToPush.value.name = name
    funnelToPush.value.id = id
    funnelToPush.value.description = description
    funnelToPush.value.date = created_at

    funnelsData.value.push(funnelToPush.value)
    stepsStore.createStepsForDefaultFunnel(funnelToPush.value.id)
  }

  const editFunnel = (funnelEditData) => {
    const index = funnelsData.value.findIndex((funnelInArray) => funnelInArray.id === funnelEditData.id)
    if (index > -1) {
      funnelsData.value[index] = funnelEditData
      toastManagement.succesToast('Funnel Edited')

      return
    }

    toastManagement.errorToast('An error occurred while editing, try again later')
  }

  const deleteFunnel = (funnelToDelete) => {
    const index = funnelsData.value.findIndex((funnelInArray) => funnelInArray.id === funnelToDelete.id)
    if (index > -1) {
      funnelsData.value.splice(index, 1)
      stepsStore.deleteStepOnCascade(funnelToDelete.id)
      toastManagement.succesToast('Funnel Deleted')
      return
    }

    toastManagement.errorToast('An error occurred while deleting, try again later')
  }

  const createFunnel = (funnelData) => {
    if (!funnelData) return
    let funnel = funnelData
    const funnelId = funnelsData.value.length === 0 ? 1 : funnelsData.value[funnelsData.value.length - 1].id + 1
    let created_at = new Date()

    function formatDate(date) {
      const month = date.getMonth() + 1
      const day = date.getDate()
      const year = date.getFullYear()

      return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`
    }

    created_at = formatDate(created_at)

    funnel = {
      ...funnel,
      id: funnelId,
      date: created_at
    }

    funnelsData.value.push(funnel)
    stepsStore.createStepsForDefaultFunnel(funnel.id)
  }

  return { funnelsDataGetter, funnelsData, createFunnel, deleteFunnel, editFunnel, duplicateFunnel }
}, { persist: true })
