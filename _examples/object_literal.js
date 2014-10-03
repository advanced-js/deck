---
---

var person1 = {
  first: 'Bob',
  last: 'Hope'
};
var person2 = person1;

person2.last = 'Marley';

assertTripleEqual(person1.last, 'Marley', "the original object is changed");
assertTripleEqual(person1, person2, "they are the same object");
