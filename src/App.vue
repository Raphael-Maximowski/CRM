<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Sidebar from '@/components/SideBars/Sidebar.vue'
import { userConfigStore } from '@/stores/userConfigManagement.js'
import { computed, onMounted, onUnmounted, watch } from 'vue'
import Header from '@/components/Headers/Header.vue'
import { headerManagementStore } from '@/stores/headerManagement.js'
import { stepsManagementStore } from '@/stores/stepsManagement.js'

const userConfig = userConfigStore()
const headerStore = headerManagementStore()
const userColorData = computed(() => userConfig.userColorData)
const userConfigWidth = computed(() => userConfig.userWidth)
const headerStateInMobile = computed(() => headerStore.headerMobileStateGetter)
const route = useRoute()

const updateUserViewPort = () => {
  userConfig.setUserviewPortWith(window.innerWidth)
}

onMounted(() => {
  window.addEventListener('resize', updateUserViewPort);
  userConfig.setUserviewPortWith(window.innerWidth)

})

onUnmounted(() => {
  window.removeEventListener('resize', updateUserViewPort);
})

const preventScroll = (e: Event) => {
  e.preventDefault();
};

const preventArrowScroll = (e: KeyboardEvent) => {
  if (['ArrowUp', 'ArrowDown', ' '].includes(e.key)) {
    e.preventDefault();
  }
};

watch(headerStateInMobile, (newValue) => {
  if (newValue) {
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('keydown', preventArrowScroll);
    window.addEventListener('touchmove', preventScroll, { passive: false });
    return
  }

  window.removeEventListener('wheel', preventScroll);
  window.removeEventListener('keydown', preventArrowScroll);
  window.removeEventListener('touchmove', preventScroll);
})

watch(route, (newRoute) => {
  switch (newRoute.name){
    case 'funnelsView':
      headerStore.setHeaderData({ buttonMessage: 'Create Funnel', headerMessage: 'Scope your Clients however you want!', action: 'Create Funnel', inputMessage: 'Search For Funnels', searchType: 'Funnel' })
      break;
    case 'CRMStepsView':
      headerStore.setHeaderData({ buttonMessage: 'Create Contact', headerMessage: 'Have a better management of your Clients!', action: 'Create Contact', inputMessage: 'Search For Contacts', searchType: 'Contacts' })
      break;
    case 'ContactsListView':
      headerStore.setHeaderData({ buttonMessage: '', headerMessage: 'Filter your Contacts!', action: 'Create Contact', inputMessage: '', searchType: '' })
      break;
    case 'FavoriteListView':
      headerStore.setHeaderData({ buttonMessage: '', headerMessage: 'Check All of Your Favorites!', action: 'Create Contact', inputMessage: '', searchType: '' })
      break;
    case 'User Settings':
      headerStore.setHeaderData({ buttonMessage: '', headerMessage: 'Change your Settings!', action: '', inputMessage: '', searchType: '' })
      break;
    case 'ReportsView':
      headerStore.setHeaderData({ buttonMessage: '', headerMessage: 'Check all of your Reports!', action: '', inputMessage: '', searchType: '' })
      break;
  }
})

</script>

<template>
  <div class="d-flex vw-100 vh-100">
    <Sidebar v-if="userConfigWidth > 992" />
    <div
      :style="{'--dynamic-color': userColorData.hexa}"
      class="flex-grow-1 flex-1 d-flex overflow-x-auto flex-column body-content">
      <Header />
      <RouterView />
    </div>
  </div>

</template>

<style scoped>
.body-content {
  background-color: #EBEBEB;
  max-width: 100%;
}
</style>
