---
---

var properties = {};
var words = [];

assertTripleEqual(typeof properties, 'object', "an object is an Object");
assertTripleEqual(typeof words, 'object', "so is an Array");

words.newProp = "A property on an array";
assertTripleEqual(words.newProp, "A property on an array", "assigning arbitrary properties");
assertTripleEqual(words['newProp'], "A property on an array", "can retrieve properties with square brackets");
