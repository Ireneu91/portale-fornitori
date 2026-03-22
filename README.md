# Mockup portale fornitori industria metallurgica

## Appunti per Paolo
Ciao Paolo, scrivo qui qualche appunto sul progetto.

### Concept grafico

Per quanto riguarda il design nel suo complesso, non avendo riferimenti su palette/logo/font, mi sono focalizzata sull'unica info a mia disposizione: si parla di **fornitori di un'industria metallurgica**. Ho quindi cercato una **texture di sfondo** che ricordasse un **metallo** mantenendo un **contrasto tra toni scuri e caldi** (in particolare una tonalità **arancione**). Ho pensato, insomma, al colore delle **scintille** prodotte in questo tipo di lavorazione.
In particolare sono ricordate dal bordino del form di autenticazione, dei questionari e del form certificazioni.
Inizialmente avevo pensato anche di aggiungerla alla **navbar** e ai box del cruscotto ma, visti i diversi colori ed elementi presenti, disorientavano un po' l'utente secondo me, e ho optato solo per lo **sfondo in opacità con blur**, che conferisce uno **stile moderno**.

Abbiamo quindi le seguenti **pagine**:

* **Pagina di autenticazione** con `form`

* **Dashboard** con titolo, breve intro e due box:
   - **box questionari:**
   Contiene una lista dei `questionari` con nome e  `stato di completamento` (di un colore diverso se *da iniziare*, *in corso* o *inviato*). Con l'hover lo sfondo diventa arancio e lo stato bianco, inoltre per rendere ancor più l'idea di "cliccabile" ho fatto in modo che apparisse una freccetta a sinistra del nome, cui ho aggiunto del margin-left.

   - **box certificazione:**
   Contiene in alto gli `alert` *scaduto/in scadenza* (rosso e giallo scuri con bordi leggermente più saturi) e subito sotto l'elenco delle `certificazioni` da caricare, con icone a sinistra e con apposito `bottone` a destra. Per le certificazioni già caricate potremmo pensare di mantenere fissi i colori che adesso appartengono solo all'hover oppure si potrebbe cambiare colore e testo del bottone.

* **Questionario:**
  Lo stile riprende quello del form iniziale, con l'aggiunta di un riquadro con sfondo più scuro per ogni gruppo domanda/risposte (secondo me questa divisione rende il form meno pesante, un po' tipo quelli di google form).

* **Certificazione:**
  Anche in questo caso mantengo lo stesso stile. Ho arrotondato il bordo di "scegli file".


### struttura

Sono partita dal progetto di esempio di Vue, per avere già un quadro chiaro dell'organizzazione delle cartelle e della struttura dei files. Ho giusto aggiunto un mio file reset.css e un google font (di solito uso Bootstrap per le colonne e matchHeight per rendere uguali le altezze, ma visto l'esercizio ho provato a fare tutto con le flexbox).
Il progetto non è tutto perfettamente funzionante, ma ho lasciato stare focalizzandomi per lo più lato design.


## Richiesta

* Una **industria metallurgica** molto grande nostra cliente ci ha chiesto di creare un **portale per la gestione di alcune pratiche dei loro fornitori**.

* Ciascun fornitore deve potersi `autenticare` per entrare nel portale nel quale è presente un cruscotto che mostra una **serie di questionari e certificazioni**.

* Ciascun **questionario** ha uno `stato di completamento`: **da iniziare**, **in corso**, **inviato**

* Un questionario contiene diverse domande, non importa quali siano, ma tipicamente prevedono una risposta con una `picklist` **si/no/non applicabile** e in alcuni casi una **risposta numerica o testuale**

* Le **certificazioni** sono in un’altra sezione: ciascun fornitore deve essere in grado di caricare le sue certificazioni, **una alla volta**, specificando il **tipo** e la **data di scadenza**, **allegando anche il file** della certificazione in questione. Il tipo di certificazione a oggi non è noto e non prevediamo quindi una scelta, è il fornitore stesso a scriverlo in un apposito campo libero.

* Se le certificazioni precedentemente caricate fossero **scadute o in scadenza**, deve essere previsto un `warning` visivo di qualche tipo.
