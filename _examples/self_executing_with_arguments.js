---
---

var outerVal = 6;

//////////

var myFun = function(innerVal){
  assertTripleEqual(innerVal, 6);
};

myFun(outerVal);

// is equivalent to:

(function(innerVal){
  assertTripleEqual(innerVal, 6);
})(outerVal);
