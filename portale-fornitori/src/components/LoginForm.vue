<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  fornitore: '',
  password: ''
})

const submit = () => {
  router.push('/dashboard')
}
</script>

<template>
  <section id="form">
    <h1>Accedi al portale</h1>
    <p>Compila il form con i tuoi dati per accedere al portale per rispondere ai questionari e caricare le tue certificazioni.</p>
    <form @submit.prevent="submit"  method="POST">
      <div class="form-group">
        <label>Fornitore</label>
        <input v-model="formData.fornitore" type="text" required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="formData.password" type="text" required>
      </div>

      <div class="button-container">
        <button type="submit" class="btn-submit">Accedi</button>
      </div>
    </form>
</section>
</template>

<style scoped>
#form {
  background-color: rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
  border: 1px solid #623e23;
  padding: 2rem;
  border-radius: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}


#form p {
  margin-bottom: 1.5rem;
}

#form .form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

#form label {
  margin-bottom: 0.5rem;
  color: #e0b391;
  font-weight: 600;
  font-size: 0.9rem;
}

#form input {
  padding: 0.8rem;
  border: 1px solid #e0b391;
  border-radius: 30px;
  background-color: #e0b391;
}

#form input:focus {
  outline: 2px solid #623e23;
  outline-offset: 1px;
}

#form .button-container {
  width: 100%;              
  margin-top: 1rem;  
  text-align: center;      
}

#form .btn-submit {
  padding: 7px 60px;
  background-color: #d95d00;
  border: 1px solid #d95d00;
  color: #FFF;
  text-transform: uppercase;
  border-radius: 30px;
  cursor: pointer;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
  letter-spacing: 0.1rem;
  font-family: "Baloo Paaji 2", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  align-self: flex-end;
}

#form .btn-submit:hover {
  background-color: transparent;
  color: #d95d00;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}
</style>