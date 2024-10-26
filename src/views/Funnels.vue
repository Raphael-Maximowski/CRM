<script setup lang="ts">
import '../styles/funnels.scss'
import useResolutionWidth from '@/utils/Resolution'
import { watch } from 'vue'
import type { Funnels } from '@/models/Funnels'

const { windowWidth } = useResolutionWidth()

watch(windowWidth, (newValue) => {
  console.log(newValue)
})

const funnelsMock: Funnels[] = [
  {
    id: 1,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    id: 2,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    id: 3,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    id: 4,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    id: 5,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    id: 6,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    id: 7,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    id: 8,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    id: 9,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    id: 10,
    name: 'Teste',
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  }
]


</script>

<template>
  <main
    id="FunnelsMobile"
    v-if="windowWidth < 768">
    <div id="createFunnelsSection">
      <button>Create Funnel</button>
      <button>Manage Funnels</button>
    </div>
    <div id="funnelContentContainer">
      <div
        v-for="funnel in funnelsMock"
        class="funnelContent">
        <p>{{ funnel.name }}</p>
        <img src="../assets/images/Funil.png" />
      </div>
    </div>
  </main>
  <main
    id="FunnelsDesktop"
    v-else>
    <div
      v-for="funnel in funnelsMock"
    >
      <RouterLink :to="{ name: 'Funnel', params: { id: funnel.id } }">
        <div class="funnelContent">
          <div class="funnelHeader">
            <p> {{ funnel.name }} </p>
            <img src="../assets/images/Funil.png" />
          </div>
          <div class="funnelBody">
            <p> {{ funnel.description }} </p>
          </div>
        </div>
      </RouterLink>
    </div>
  </main>
</template>
