
// The Prototype JavaScript Framework is a JavaScript framework created by Sam Stephenson in February 2005 as part of the foundation for Ajax support in Ruby on Rails. It is implemented as a single file of JavaScript code, usually named prototype.js.
// The Object.prototype is a property of the Object constructor. It is also the end of a prototype chain.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

// Object constructor example

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}


//Object constructor example

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};