// Before ES6

function Car(model, brand) {
  return {
    model: model,
    brand: brand
  }
}

Car.prototype.move = function(direction) {
  console.log(`I'm moving on the ${direction}`);
}

function Suv(model, brand) {
  Car.call(model, brand);
}

/* La prima istruzione "compie la magia" dell'ereditarietà prototipale. E' l'istruzione che costruisce la catena dei prototipi: in questo caso ogni Suv ha una Car come prototipo.
La seconda istruzione pur non essendo necessaria serve per garantire che il costruttore di Suv, rimanga Suv in quanto con la prima istruzione lo impostiamo a Car.
Questo non vuol dire che se non lo reimposto non funziona o non chiamerò il costruttore di Suv (lo farò comunque grtamite la new la chiamata al costruttore).

*/
Suv.prototype = Object.create(Car.prototype);
Suv.prototype.constructor = Suv;

var s = new Suv('Rav4', 'Toyota');
s.move('left');
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

class Player extends Person {

}

const p = new Player('Lorenzo', 42);
p.eat('Lasagna');