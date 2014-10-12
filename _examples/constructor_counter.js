---
---

var numPeople = 0;

var Person = function(){
  numPeople++;
};

var bruce = new Person();

assertTripleEqual(numPeople, 1);

var tony = new Person();

assertTripleEqual(numPeople, 2, "constructor is called once per instance");

// go back to instance_methods - how many times is fullName() defined?
