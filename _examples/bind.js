---
---

var obj = {
  first: 'Bob',
  last: 'Hope',
  fullName: function(){
    return this.first + ' ' + this.last;
  }
};

// alias the function
var unbound = obj.fullName;

assertTripleEqual(unbound(), 'undefined undefined', "without binding, function calls use the calling scope");

// bind it to the original context
// note this is an ES5 function:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Browser_compatibility
var bound = unbound.bind(obj);

assertTripleEqual(typeof bound, 'function', "bind() returns a function");
assertTripleEqual(bound === unbound, false, "returns a new function");
assertTripleEqual(bound(), 'Bob Hope', "bound function will use the specified context");
assertTripleEqual(bound.call({}), 'Bob Hope', "bound function can be called in any context");
