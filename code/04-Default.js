// Before ES6

function multiply(numA, numB) {
  var numA = numA || 1;
  var numB = numB || 1;
  return numA * numB;
}

console.log(multiply());

function f (x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
};
var res = f(1, 2, "hello", true, 7, [1,2,3,'a','b']) === 12;
console.log(res);
// From ES6

const mul = (numA = 1, numB = 1) => {
  return numA * numB;
}

console.log(mul());