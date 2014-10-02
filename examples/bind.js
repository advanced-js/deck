var obj = {
  first: 'Bob',
  last: 'Hope',
  fullName: function(){
    return this.first + ' ' + this.last;
  }
};

function bind(fn, context){
  return function(){
    return fn.apply(context, arguments);
  };
}

// alias the function
var unbound = obj.fullName;

assertTripleEqual(unbound(), 'undefined undefined', "without binding, function calls use the calling scope");

// bind it to the original context
var bound = bind(unbound, obj);

assertTripleEqual(typeof bound, 'function', "bind() returns a function");
assert(bound !== unbound, "returns a new function");
assertTripleEqual(bound(), 'Bob Hope', "bound function will use the specified context");
assertTripleEqual(bound.call({}), 'Bob Hope', "bound function can be called in any context");
