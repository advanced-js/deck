// NOTE: broken in the deck - run with `node scripts/run_tests.js examples/this.js`

var global = this; // 'window' in the browser


function fn1(){
  return this;
}

assertTripleEqual(fn1(), global, "functions defined globally have global context");
assertTripleEqual(global.fn1(), global, "functions defined globally are available on the global object");


// effectively the same as above
global.fn2 = function(){
  return this;
};

assertTripleEqual(global.fn2(), global, "functions defined on the glboal object have global context");
assertTripleEqual(fn2(), global, "the global object is inferred when no parent object is specified");


var obj = {
  fn3: function(){
    return this;
  }
};

assertTripleEqual(obj.fn3(), obj, "functions defined on an object have the context of that object");


var fn3 = obj.fn3;
assertTripleEqual(fn3(), global, "context is dependent on where the function is called, not where it's defined");

assertTripleEqual(fn3.call(obj), obj, "applied context modifies 'this'");
