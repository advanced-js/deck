---
---

var Person = function(first, last){
  this.first = first;
  this.last = last;
};

var bob = new Person('Bob', 'Hope');
var sally = new Person('Sally', 'Field');

assertTripleEqual(bob.first, 'Bob', "the public properties are accessible");

assertTripleEqual(bob === sally, false, "two instances are not the same");

assertTripleEqual(bob instanceof Person, true, "'new' creates instance");
assertTripleEqual(bob instanceof Object, true, "it's an Object");
