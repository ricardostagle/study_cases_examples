// JavaScript arrow functions are roughly the equivalent of lambda functions in python or blocks in Ruby.
// When you must use an anonymous function (as when passing an inline callback), use arrow function notation. eslint: prefer-arrow-callback, arrow-spacing
// https://github.com/airbnb/javascript#arrow-functions
// https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html

// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});


// bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map(number => `A string containing the ${number + 1}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// No implicit return with side effects
function foo(callback) {
  const val = callback();
  if (val === true) {
    // Do something if callback returns true
  }
}

let bool = false;

// bad
foo(() => bool = true);

// good
foo(() => {
  bool = true;
});