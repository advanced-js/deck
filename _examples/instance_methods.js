---
---

var Person = function(first, last){
  this.fullName = function(){
    return first + ' ' + last;
  };
};

var bruce = new Person('Bruce', 'Wayne');
var tony = new Person('Tony', 'Stark');

assertTripleEqual(bruce.fullName(), 'Bruce Wayne', "correct fullName for bruce");
assertTripleEqual(tony.fullName(), 'Tony Stark', "correct fullName for tony");

assertTripleEqual(bruce.fullName === tony.fullName, false, "functions created in the constructor are unique to each instance");
