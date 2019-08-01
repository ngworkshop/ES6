// Before ES6

// var greetings = function(name) {...}

function greetings(name){
  console.log('Hello', name);
}

greetings('World');

// From ES6

// Grazie alle Arrow Functions o Lambda Functions, oltre ad una sintassi compatta, posso sfruttare il fatto di preservare il this

const eat = food => console.log(`Eating ${food}`);

eat('Pizza');


function Lego(name) {
  return {
    name: name,
    // Prova a sostituire la arrow della setTimeout con una function per avere undefined!!!
    build: function() {
      setTimeout( () => {
        console.log(this);
      }, 1000);
    },
    // Nota che la getName non ha più il contesto di esecuzione dell'oggetto e ottengo udefined.
    // In alcuni esempi di codice ES5 troviamo self o that per salvare il this!
    piece: function() {
      // var self = this;
      // Sostituisci con una Arrow:
      function getName() {
        // usa self al posto di this:
        return this.name;
      }
      return getName();
    }
  }
}

var l = new Lego('Mattoncino');
l.build();


const returnWithoutReturn = name => `Hello ${name}`;

console.log(returnWithoutReturn('Lorenzo'));
console.log(l.piece());

/*
button.addEventListener('click', function() {
  // chi è il this?
  var addColor = function() {
    // chi è il this qui?
  }
})
*/