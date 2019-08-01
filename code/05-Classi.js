// Before ES6

function Car(model, brand) {
  this.model = model;
  this.brand = brand;
  this.buy = function() {
    console.log('Buy a car');
  }
  /* // Alternativa perfettamente valida
  return {
    model: model,
    brand: brand
  }*/
}

Car.prototype.move = function(direction) {
  console.log(`I'm moving on the ${direction}`);
}

function Suv(model, brand, seats) {
  Car.call(this, model, brand);
  this.seats = seats;
  this.buy = function() {
    // Prova a cambiare move con buy :)
    Car.prototype.move.call(this, 'top');
    console.log('Buy a suv');
  }
}

/* La prima istruzione "compie la magia" dell'ereditarietà prototipale. E' l'istruzione che costruisce la catena dei prototipi: in questo caso ogni Suv ha una Car come prototipo.
La seconda istruzione pur non essendo necessaria serve per garantire che il costruttore di Suv, rimanga Suv in quanto con la prima istruzione lo impostiamo a Car.
Questo non vuol dire che se non lo reimposto non funziona o non chiamerò il costruttore di Suv (lo farò comunque grtamite la new la chiamata al costruttore).
Se omettessi la prima istruzione, avrei che le proprietà della classe Base verranno ereditate ma non il prototipo e quindi i metodi che aggancio al prototipo. Se avessi metodi dichiarati nell'istanza allora li riuscirei a vedere lo stesso.

*/
Suv.prototype = Object.create(Car.prototype);
Suv.prototype.constructor = Suv;

var s = new Suv('Rav4', 'Toyota', 6);
s.move('left');
s.buy();
console.dir(s);
// From ES6

class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat(something) {
    console.log(`I'm eating ${something}`);
  }
}

// Prova ad eseguirlo senza l'extends Person
class Player extends Person {

}

const p = new Player('Lorenzo', 42);
p.eat('Lasagna');