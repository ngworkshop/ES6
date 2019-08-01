// Before ES6

function Car(model, brand) {
  return {
    model: model,
    brand: brand
  }
}

var user = {
  name: 'Lorenzo',
  age: 42
}


// destructuring in ES5:
var name = user.name;

console.log(name);

// From ES6

// Use shorthand object notation
function Car(model, brand) {
  return {
    model,
    brand
  }
}

// Destructuring in ES6:

const todo = {
  title: 'Book a Room',
  description: 'Take a free Room for next holiday'
}

const {title, description} = todo;

console.log(title, description);