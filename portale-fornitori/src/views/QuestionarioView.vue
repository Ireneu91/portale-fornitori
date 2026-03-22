<script setup lang="ts">
import { useRoute } from 'vue-router'
import questionari from '@/constant/questionari'

const route = useRoute()

const questionario = questionari.find(q => q.id === Number(route.params.id))
</script>

<template>
  <form id="questionario">
        <h1>{{questionario?.title}}</h1>
        <div class="quesiti" v-for="domanda of questionario?.domande" :key="domanda.title">
            <p class="domanda">{{domanda.title}}</p>
            <div v-if="domanda.type == 'radio-affermazione'" class="affermazione">
                <input type="radio" id="sì" name="sì" value="sì">
                <label for="sì">Sì</label><br>
                
                <input type="radio" id="no" name="no" value="no">
                <label for="no">No</label><br>
                
                <input type="radio" id="non-applicabile" name="non-applicabile" value="non-applicabile">
                <label for="non-applicabile">Non applicabile</label>
            </div>
            <div v-if="domanda.type == 'radio-numeri'" class="numeri">
                <input type="radio" id="1" name="valutazione-numerica" value="1">
                <label for="1">1</label><br>
                
                <input type="radio" id="2" name="valutazione-numerica" value="2">
                <label for="2">2</label><br>
                
                <input type="radio" id="3" name="valutazione-numerica" value="3">
                <label for="3">3</label><br>

                <input type="radio" id="4" name="valutazione-numerica" value="4">
                <label for="4">4</label><br>
                
                <input type="radio" id="5" name="valutazione-numerica" value="5">
                <label for="5">5</label><br>
                
                <input type="radio" id="6" name="valutazione-numerica" value="6">
                <label for="6">6</label><br>
            </div>
            <div v-if="domanda.type == 'risposte-lunghe'" class="lunghe">
                <input type="radio" id="r1" name="risposte-lunghe" value="bla">
                <label for="r1">Lorem ipsum blablal afwdgfbvds</label><br>
                
                <input type="radio" id="r2" name="risposte-lunghe" value="blaa">
                <label for="r2">2Senti a me, sdd grmv ergepmab</label><br>
                
                <input type="radio" id="r3" name="risposte-lunghe" value="blaaa">
                <label for="r3">Devi gsgw etbsa thr3</label><br>

                <input type="radio" id="r4" name="risposte-lunghe" value="blaaaa">
                <label for="r4">Anche io asmpa èm ewonva</label><br>
            </div>
            <div v-if="domanda.type == 'domanda-aperta'" class="domanda_aperta">
                <input type="text" id="text" name="text" value="Scrivi scrivi">
            </div>
        </div>
        <button>Invia</button>
    </form>
</template>

<style scoped>
#questionario {
  background-color: rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
  border: 1px solid #623e23;
  padding: 2rem;
  border-radius: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 900px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

#questionario h1 {
    margin-bottom: 20px;
}

#questionario .quesiti{
  background-color: rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  width: 100%;
  margin: 5px;
}

#questionario .domanda { margin-bottom: 10px; }
#questionario input { margin-right: 10px; }

#questionario input {
  padding: 0.5rem;
  border: 1px solid #e0b391;
  background-color: #e0b391;
  border-radius: 5px;
}

#questionario input:focus {
  outline: 2px solid #623e23;
  outline-offset: 1px;
}

#questionario .button-container {
  width: 100%;              
  margin-top: 1rem;  
  text-align: center;      
}

#questionario button {
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
  margin-top: 20px;
  align-self: flex-end;
}

#questionario button:hover {
  background-color: transparent;
  color: #d95d00;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}

/* ====== XS ======  */
@media only screen and (min-width : 0) and (max-width : 767px) {
    #questionario button { width: 100%; }
}

</style>