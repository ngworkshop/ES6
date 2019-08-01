// Le variabili ci permettono di salvare i dati in una sezione della memoria. Quando creiamo le variabili ed eseguiamo del codice, ci muoviamo all'interno di un contesto di esecuzione. Come dichiariamo queste variabili influenza la visibilità rispetto ai nostro contesti di esecuzione. Uno 

// Before ES6

var isTheOnlyOne = 10;

// Problema: var è function-scoped. Questo porta ad avere una dichiarazione a livello di blocco, pensando che la variabile non sia visibile al di fuori di esso. Quello che spesso accade è che la variabile farà parte del global-scope (pull the global scope).

// From ES6

// Con const e let il comportamento è di tipo block-scoped. Un blocco di codice è racchiuso sempre tra parentesi graffe, ad eccezione di quando ho una sola istruzione, in cui posso ometterle.

const iCantRedeclared = 10;

let counter = 0;

// Usa, dove possibile, const, successivamente let.