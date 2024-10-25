<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import SideBar from '@/components/SideBar.vue'

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});


</script>

<template>
  <main>
    <SideBar :windowWidth="windowWidth" />
  </main>
</template>

