<script setup lang="ts" >
import '../styles/funnels.scss'
import useResolutionWidth from "@/utils/Resolution";
import {watch} from "vue";
import type {Funnels} from "@/models/Funnels";

const { windowWidth } = useResolutionWidth();

watch(windowWidth, (newValue) => {
  console.log(newValue);
});

const funnelsMock: Funnels[] = [
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
  {
    name: 'Teste' ,
    description: 'Funil criado para testes',
    timeStamp: '2024-01-23'
  },
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
      class="funnelContent">
      <div class="funnelHeader">
        <p> {{ funnel.name }} </p>
        <img src="../assets/images/Funil.png" />
      </div>
      <div class="funnelBody">
        <p> {{ funnel.description }} </p>
      </div>
    </div>
  </main>
</template>
