---
---

function fn1(){
  return this;
}

assertTripleEqual(fn1(), window, "functions defined globally have global context");
assertTripleEqual(window.fn1(), window, "functions defined globally are available on the global object");


// effectively the same as above
window.fn2 = function(){
  return this;
};

assertTripleEqual(window.fn2(), window, "functions defined on the global object have global context");
assertTripleEqual(fn2(), window, "the global object is inferred when no parent object is specified");


var obj = {
  fn3: function(){
    return this;
  }
};

assertTripleEqual(obj.fn3(), obj, "functions defined on an object have the context of that object");


var fn3 = obj.fn3;
assertTripleEqual(fn3(), window, "context is dependent on where the function is called, not where it's defined");

assertTripleEqual(fn3.call(obj), obj, "applied context modifies 'this'");
