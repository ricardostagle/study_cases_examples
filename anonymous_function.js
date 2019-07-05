// Normal function definition:

function hello() {
  alert('Hello world');
}
hello();

// Anonymous function definition:

var anon = function() {
  alert('I am anonymous');
}
anon();

// One common use for anonymous functions is as arguments to other functions. Another common use is as a closure, for which see also the Closures chapter.

// Use as an argument to other functions:

setTimeout(function() {
  alert('hello');
}, 1000);