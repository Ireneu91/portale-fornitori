# Mockup portale fornitori industria metallurgica

Appunti per Paolo da scrivere alla fine

## Richiesta

* Una **industria metallurgica** molto grande nostra cliente ci ha chiesto di creare un **portale per la gestione di alcune pratiche dei loro fornitori**.

* Ciascun fornitore deve potersi `autenticare` per entrare nel portale nel quale è presente un cruscotto che mostra una **serie di questionari e certificazioni**.

* Ciascun **questionario** ha uno `stato di completamento`: **da iniziare**, **in corso**, **inviato**

* Un questionario contiene diverse domande, non importa quali siano, ma tipicamente prevedono una risposta con una `picklist` **si/no/non applicabile** e in alcuni casi una **risposta numerica o testuale**

* Le **certificazioni** sono in un’altra sezione: ciascun fornitore deve essere in grado di caricare le sue certificazioni, **una alla volta**, specificando il **tipo** e la **data di scadenza**, **allegando anche il file** della certificazione in questione. Il tipo di certificazione a oggi non è noto e non prevediamo quindi una scelta, è il fornitore stesso a scriverlo in un apposito campo libero.

* Se le certificazioni precedentemente caricate fossero **scadute o in scadenza**, deve essere previsto un `warning` visivo di qualche tipo.
