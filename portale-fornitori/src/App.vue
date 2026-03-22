<script setup>
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <div class="layout">
    <TheNavbar /> <main class="main-content">
      <RouterView /> 
    </main>
  </div>
</template>

<style>
.layout {
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.main-content {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center; 
  align-items: center;    
  padding: 2rem;
}
</style>