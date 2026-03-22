<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  tipologia: ''
})

const submit = () => {
  router.push('/dashboard')
}
</script>

<template>
  <section id="certificazioni">
    <h1><img src="../assets/images/certificate.png"/>Carica o aggiorna la tua certificazione</h1>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <div class="form-group">
        <label>Tipologia certificazione</label>
        <input v-model="formData.tipologia" type="text" required>
      </div>
      <div class="form-group">
          <label for="documento">Carica Allegato:</label>
          <input type="file" id="documento" name="documento" accept=".pdf, .jpg, .jpeg, .png">
      </div>
      <div class="form-group">
          <label for="scadenza">Data di Scadenza:</label>
          <input type="date" id="scadenza" name="scadenza" required>
      </div>
      <div class="button-container">
          <button>Carica documento</button>
      </div>
    </form>
    <!-- <form action="/upload" method="POST" enctype="multipart/form-data">
      <div class="campi" v-for="campo of certificazione.campi" :key="campo.title">
            <div v-if="campo.type == 'allegato'" class="allegato">
                <div class="form-group">
                    <label for="documento">Carica Allegato:</label>
                    <input type="file" id="documento" name="documento" accept=".pdf, .jpg, .jpeg, .png">
                </div>
            </div>
            <div v-if="campo.type == 'scadenza'" class="scadenza">
                <div class="form-group">
                    <label for="scadenza">Data di Scadenza:</label>
                    <input type="date" id="scadenza" name="scadenza" required>
                </div>
            </div>
        </div>
        <div class="button-container">
            <button>Carica documento</button>
        </div>
    </form> -->
</section>
</template>

<style scoped>
#certificazioni {
  background-color: rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
  border: 1px solid #623e23;
  padding: 2rem;
  border-radius: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
}

#certificazioni h1 { margin-bottom: 10px; }

#certificazioni h1 img {
    width: 20px;
    vertical-align: middle;
    margin-right: 10px;
    margin-top: -5px;
}

#certificazioni p {
  margin-bottom: 1.5rem;
}

#certificazioni .form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

#certificazioni label {
  margin-bottom: 0.5rem;
  color: #e0b391;
  font-weight: 600;
  font-size: 0.9rem;
}

#certificazioni input {
  padding: 0.8rem;
  border: 1px solid #e0b391;
  border-radius: 30px;
  background-color: #e0b391;
}

#certificazioni input[type="file"] {
    color: #000;
}

#certificazioni input[type="file"]::file-selector-button {
    border-radius:20px;
    border: 1px solid #000;
    }

#certificazioni input:focus {
  outline: 2px solid #623e23;
  outline-offset: 1px;
}

#certificazioni .button-container {
  width: 100%;              
  margin-top: 1rem;  
  text-align: center;      
}

#certificazioni button {
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

#certificazioni button:hover {
  background-color: transparent;
  color: #d95d00;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}

/* ====== XS ======  */
@media only screen and (min-width : 0) and (max-width : 767px) {
    #certificazioni button {
    width: 100%;
    font-size: 0.8rem;
    }
}
</style>