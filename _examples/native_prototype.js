---
---

// remember array_as_object.js?
// native types have prototypes, too

var myAry = [];
var myObj = {};

assertTripleEqual(typeof myObj, 'object', "an object is an Object");
assertTripleEqual(typeof myAry, 'object', "so is an Array");

assertTripleEqual(Object.prototype.toString.apply(myObj), '[object Object]', "Object's toString() acts differently than typeof");
assertTripleEqual(Object.prototype.toString.apply(myAry), '[object Array]', "it can distinguish an Array from an Object");

// look at _.isArray()
// http://underscorejs.org/docs/underscore.html
