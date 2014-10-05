---
---

var myAry = [
  'foo',
  'bar',
  'baz'
];

assertTripleEqual(myAry[0], 'foo', "access with number");
assertTripleEqual(myAry['0'], 'foo', "access with string");

assertTripleEqual(typeof {}, 'object', "an object is an Object");
assertTripleEqual(typeof myAry, 'object', "so is an Array");

myAry.newProp = "A property on an array";
assertTripleEqual(myAry.newProp, "A property on an array", "assigning arbitrary properties");
assertTripleEqual(myAry['newProp'], "A property on an array", "can retrieve properties with square brackets");
assertTripleEqual(myAry[0], 'foo', "array access still works");
