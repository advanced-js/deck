---
---

var Person = function(first, last){
  this.first = first;
  this.last = last;
};

Person.prototype.fullName = function(){
  return this.first + ' ' + this.last;
};

var bruce = new Person('Bruce', 'Wayne');
var tony = new Person('Tony', 'Stark');

assertTripleEqual(bruce.fullName(), 'Bruce Wayne', "correct fullName for bruce");
assertTripleEqual(tony.fullName(), 'Tony Stark', "correct fullName for tony");

assertTripleEqual(bruce.fullName === tony.fullName, true, "functions on the prototype are shared across instances");
