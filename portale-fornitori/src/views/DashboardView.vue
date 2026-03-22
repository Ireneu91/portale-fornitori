<template>
    <section id="dashboard">
        <div class="testo">
            <h1>Area Riservata Fornitori</h1>
            <h2>Compilate questionari, caricate certificazioni blablablabla.
                <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum efficitur risus at aliquam. Praesent in lacus pretium, scelerisque eros et, pretium risus. Mauris quis est sed lectus ultrices luctus. Etiam tempus vitae sapien vitae volutpat. Phasellus volutpat tempus urna.
            </h2>
        </div>
        <div class="container">
            <div class="box">
                <RouterLink to="/questionario/1">
                    <div class="questionario">
                        <p>Questionario numero 1</p>
                        <span class="stato da_iniziare">da iniziare</span>
                    </div>
                </RouterLink>
                <RouterLink to="/questionario/2">
                    <div class="questionario">
                        <p>Questionario numero 2</p>
                        <span class="stato in_corso">in corso</span>
                    </div>
                 </RouterLink>
                <RouterLink to="/questionario/3">
                    <div class="questionario">
                        <p>Questionario numero 3</p>
                        <span class="stato inviato">inviato</span>
                    </div>
                 </RouterLink>
                <RouterLink to="/questionario/4">
                    <div class="questionario">
                        <p>Questionario numero 4</p>
                        <span class="stato">da iniziare</span>
                    </div>
                </RouterLink>
            </div>
            <div class="box">
                <RouterLink to="/certificazione/">
                    <div class="upload">
                        <p><img src="../assets/images/upload.png"/>Carica una nuova certificazione</p>
                        <button>Carica documento</button>
                    </div>
                </RouterLink>
                <div class="alert_scaduta">
                    <p>Certificazione Pippo scaduta!</p>
                </div>
                <div class="alert_in_scadenza">
                    <p>Certificazione Paperino in scadenza</p>
                </div>
                
                <RouterLink to="/certificazione/">
                    <div class="certificazione">
                        <p><img src="../assets/images/certificate.png"/>Certificazione Pippo</p>
                        <button>Modifica</button>
                    </div>
                </RouterLink>
                <RouterLink to="/certificazione/">
                    <div class="certificazione">
                        <p><img src="../assets/images/certificate.png"/>Certificazione Paperino</p>
                        <button>Modifica</button>
                    </div>
                 </RouterLink>
                <RouterLink to="/certificazione/">
                    <div class="certificazione">
                        <p><img src="../assets/images/certificate.png"/>Certificazione Pluto</p>
                        <button>Modifica</button>
                    </div>
                 </RouterLink>
                <RouterLink to="/certificazione/">
                    <div class="certificazione">
                        <p><img src="../assets/images/certificate.png"/>Certificazione Paperone</p>
                        <button>Modifica</button>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>

#dashboard {
    width: 100%;
    margin: 0;
    padding: 80px 0;    
}

#dashboard h1 {
    text-align: center;
    margin-bottom: 20px;
}

#dashboard h2 {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 40px;
}

#dashboard .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;           
    margin: 0 auto;
}

#dashboard .box {
    flex: 1;           
    background-color: rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 40px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    
    display: flex;
    flex-direction: column;
}

#dashboard .testo {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    font-weight: 200;
}

#dashboard a .questionario {
    background-color: #000;
    padding: 10px 20px;
    border-radius: 15px;
    margin: 10px 0;
    background-image: url("../assets/images/freccia.svg");
    background-repeat: no-repeat;
    background-size: 5px;
    background-position: 0px 50%;
    display: flex;
    justify-content: space-between; 
    align-items: center;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}

#dashboard .stato {
    padding: 5px 20px;
    border-radius: 15px;
    border: 1px solid red;
    min-width: 110px;
    text-align: center;
}

#dashboard .stato.da_iniziare { border: 1px solid #ff0000; }
#dashboard .stato.in_corso { border: 1px solid #ffa800; }
#dashboard .stato.inviato { border: 1px solid #00b827; }

#dashboard a .questionario:hover {
    background-color: #d95d00;
    padding: 10px 20px;
    border-radius: 15px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    cursor: pointer;
    background-position: 10px 50%;
    background-size: 25px;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}

#dashboard a .questionario:hover .stato,
#dashboard a .questionario:hover p {
    font-weight: 600;
    color:#FFF;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}

#dashboard a .questionario:hover p {
     margin-left: 30px;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
     }

#dashboard a .questionario:hover .stato {
    border: 1px solid #FFF;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}

#dashboard button {
    padding: 5px 20px;
    border-radius: 15px;
    color: #FFF;
    background-color: #d95d00;
    border: 1px solid #d95d00;
    min-width: 110px;
    font-family: "Baloo Paaji 2", sans-serif;
    text-align: center;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear; 
}

#dashboard .alert_scaduta,
#dashboard .alert_in_scadenza {
    background-color: #500c0c;
    padding: 10px 20px;
    border-radius: 15px;
    border: 1px solid #8e0000;
    margin: 10px 0;
}

#dashboard .alert_in_scadenza {
    background-color: #986d06;
    border: 1px solid #dc9e08;
    }

#dashboard a .upload,
#dashboard a .certificazione {
    border: 2px solid #000;
    padding: 10px 20px;
    border-radius: 15px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between; 
    align-items: center;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}

#dashboard a .upload { background-color: #000; }

#dashboard a .upload p img,
#dashboard a .certificazione p img {
    width: 20px;
    vertical-align: middle;
    margin-right: 10px;
    margin-top: -5px;
}

#dashboard a .upload p img { width: 18px; }

#dashboard a .upload:hover,
#dashboard a .certificazione:hover {
    background-color: #d95d00;
    border: 2px solid #d95d00;
    padding: 10px 20px;
    border-radius: 15px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    cursor: pointer;
    background-position: 10px 50%;
    background-size: 25px;
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;
}

#dashboard a .upload:hover button,
#dashboard a .certificazione:hover button {
    color: #d95d00;
    font-weight: 700;
    background-color: #FFF; 
  -webkit-transition:all 0.2s linear;
  -moz-transition:all 0.2s linear;
  transition:all 0.2s linear;  
}

/* ====== XS ======  */
@media only screen and (min-width : 0) and (max-width : 767px) {

    #dashboard { padding-top: 60px; }
    #dashboard .box { padding: 1rem; }

    #dashboard .stato {
    padding: 5px 10px;
    font-size: 0.8rem;
    min-width: 80px;
    }

    #dashboard a .questionario:hover { background-size: 0; }
    #dashboard a .questionario:hover p { margin-left: 0; }

    #dashboard button {
    padding: 5px 10px;
    font-size: 00.8rem;
    }
}

</style>