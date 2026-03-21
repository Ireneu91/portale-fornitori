<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isLogin = computed(() => route.path === '/')
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">NOME AZIENDA o LOGO</div>
      <ul class="nav-link">
        <template v-if="!isLogin">
            <li><router-link to="/" class="logout-btn">Esci</router-link></li>
        </template>
        </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 99%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}

.navbar .logo {
    margin: 0 auto;
    text-align: center;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.nav-link {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link a {
    position: absolute;
    top: 15px;
    right: 80px;
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link a:hover {
  color: #d95d00;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}

/* ====== XS ======  */
@media only screen and (min-width : 0) and (max-width : 767px) {
    .nav-link a { right: 20px; }
}
</style>