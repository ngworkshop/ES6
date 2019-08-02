author: Lorenzo Franceschini
summary: CatLab per imparare ECMAScript 6
id: [ecmascript-6](https://ecstatic-dubinsky-be1234.netlify.com/#0)
categories: javascript, web
environments: Web
status: Draft

# Introduzione ad ECMAScript 6

## Introduzione a CatLab
Duration: 0:15:00

### Warm Up

Ciao! Benvenuto a questo primo giorno di "lavoro" in **CatLab**, un ufficio non proprio del tutto normale :)

Oggi il nostro boss, di seguito troverai una foto di repertorio...

![](./assets/cat-boss.jpg)

...ci ha chiesto di cominciare a pensare ad una prossima appplicazione in **Angular** per stare al passo con i tempi.

![](http://www.relatably.com/m/img/oh-my-god-memes/oh-my-god.jpg)

Niente panico. Dobbiamo capire le tecnologie coinvolte e cosa dobbiamo conoscere per poter padroneggiare questo **Framework OpenSource** di **Google**.

Sicuramente abbiamo già una conoscenza base di HTML, CSS e JavaScript. I tre linguaggi alla base di ogni applicazione web. Ognuno con il suo compito ben preciso: il primo è un linguaggio di markup che definisce, attraverso l'uso di elementi, la struttura della pagina web, il secondo è un insieme di regole che, attraverso dei selettori, definiscono il layout grafico degli elementi HTML ed infine JavaScript un linguaggio di programmazione dinamico, object-oriented general-purpose.

Negative
: Il suffiso Java nel nome di JavaScript non è in alcun modo un riferimento o legame al linguaggio Java. Sono due differenti linguaggi, nati con scopi diversi e da aziende diverse. Java è stato sviluppato da Sun Microsystems, JavaScript da Netscape. Il postfisso Script non vuole significare una limitazione del linguaggio.

**Le specifiche ufficiai** del linguaggio sono pubblicate dall'ente internazionale per le standardizzazioni [ECMA](http://www.ecma-international.org/publications/standards/Ecma-262.htm) da cui il nome ECMAScript come **specifica** e JavaScript come **implementazione** della specifica.

#### Versioni

ES1: June 1997 — ES2: June 1998 — ES3: Dec. 1999 — ES4: Abandoned - ES5: Dec. 2009 - ES6: June 2015 (rinominata ES2015) - ES2016 (ES7): June 2016 - ES2017: June 2017 - ... - ES2019: June 2019

Positive
: Uno degli aspetti interessanti di JavaScript è la sua natura dinamica ed espressiva, che permette al linguaggio di essere effettivamente orientato agli oggetti senza usare le classi come blueprint di creazione. In JS possiamo creare oggetti tramite l'ereditarietà (is-a) e per aggregazione (has-a).

Il nostro primo giorno di lavoro sarà quello di conoscere meglio JavaScript ed in particolare la sesta edizione ES6 in quanto ha portato in JavaScript tantissime novità.

#### Il tuo turno

* Scopri di più su ECMAScript cercando quali sono le maggiori novità introdotte, prova a fare una sorta di lista delle main features;
* Cerca di scoprire come possiamo eseguire JavaScript sui moderni Browser;
* Perchè dobbiamo usarlo;
* Qual'è lo stato attuale di supporto nei Browser;

#### Misura il tuo livello attuale di conoscenza

Usa questa sezione per rispondere a delle domande e verificare il tuo attuale livello di conoscenza. Prova a rispondere senza aiuti, successivamente puoi consularti con compagni o strumenti web ed infine leggi le possibili rispose e link ad approfondimenti.

* Analizza il codice e rispondi alle domande nei commenti:
```
button.addEventListener('click', function() {
  // chi è il this?
  var addColor = function() {
    // chi è il this qui?
  }
});

button.addEventListener('click', function() {
  // chi è il this?
  var addColor = () => {
    // chi è il this qui?
  }
});
```
* Quali ambienti di esecuzione di JavaScript conosci?
* Sai cosa succede quando viene eseguito il nostro codice JavaScript?
* Come funzione l'Hoisting?
* Sai fare un esempio di codice con una Callback?

#### Risposte

Negative
: Spoiler Alert - Prima di vedere le risposte, prova sempre le tue forze!

* button - (dipende dall'ambiente di esecuzione: window nel browser, global in node) - button - button
* Browser - NodeJS - esistono environment "minori" come Rino (Java Environment) - Electron è di base un env NodeJS
* Avviene una prima fase di Parsing che costruisce una struttura detta AST (Abstract Syntax Tree), successivamente viene generato il "Machine Code" per il processore in uso, il codice viene eseguito. Ogni esecuzione avviene all'interno di un **Contesto di Esecuzione**: **Global Execution Context** uno per l'intera applicazione (non per ogni script) e **Function Execution Context** uno per ogni funzione. Ogni contesto è inserito all'interno di una **Exection Context Stack**. JavaScript è **Single Thread**, questo vuol dire che posso eseguire un solo contesto di esecuzione alla volta, mettendo in "pausa" gli altri. L'escuzione sarà in ordine LIFO (Last In First Out):

![](./assets/stack_javascript.gif)

Ad ogni esecuzione di un contesto, inseriamo lo stesso in una pila e associamo un environment detto **Lexical Environment** [[Environment]] dove "vivono" le variabili e funzioni interne alla funzione eseguita. Se una funzione esegue un'altra funzione, si dice che crea una **Closure**, una **Chiusura**, come se avvolgesse l'esecuzione della funzione interna e tutto il suo stato permane. Per questo posso accedere, dalle funzioni più interne dette **Inner**, le variabili delle funzioni dette **Outer**. Il Global Execution Context sarà l'Outer Function più esterna ed è il motivo per cui il suo **Scope** è **Globale** ed accessibile a tutti.
Nel contesto di esecuzione globale ho tutto ciò che non è in una funzione, viene associato con un **Global Object** che nel Browser corrisponde alla **Window**. Quando creo una proprietà nel Global Scope di fatto è una proprietà dell'oggetto globale:

```
var nome = 'Lorenzo';
console.log(nome === window.nome); // true
```
* Hosting:
* Codice:
  ```
  setTimeout(function() { console.log(this)}, 1000);
  ```

[Lexical environment and function scope - StackOverflow](https://stackoverflow.com/questions/12599965/lexical-environment-and-function-scope)
[The JavaScript Lexical Environment Explained - Youtube](https://www.youtube.com/watch?v=1qXypjZu0sU)


## Le nuove caratteristiche di JavaScript ES6
Duration: 0:30:00

In questo [sito](http://es6-features.org) puoi trovare la lista delle new features di ES6 con relative comparazione dell'eventuale codice in ES5.

* ES5: Pienamente supportato da tutti i browser ed è "pronto all'uso";
* ES6-ES7-ES8: Supportato dai browser moderni, alcune funzionalità hanno bisogno di usare polyfill e transpilazione;
* ES9-ES10: Versioni future riferite anche come ESNext. Alcune funzionalità sono disponibili tramite transpilazione e polyfill.

Molte delle nuove caratteristiche sono degli "zuccherini sintattici".
