//Closure 1

function cal(x){
  return function(y) {
    return function(z) {
      return x*y*z;
    };
  };
}
console.log(cal(2)(3)(4)); // 24

//Closure 2

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12