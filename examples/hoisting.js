var fooNotDefined = false;
try {
  console.log(foo);
} catch(e){
  fooNotDefined = true;
}

assert(fooNotDefined, "non-declared variables will throw errors when called");
assertTripleEqual(typeof foo, 'undefined', "non-declared variables have a typeof 'undefined'");

assertTripleEqual(bar, undefined, "variable declarations get hoisted, but not the assignment");
assertTripleEqual(typeof bar, 'undefined', "declared (but unset) variables *also* have typeof 'undefined'");

var bar = 'bar';


var bazNotDefined = false;
try {
  console.log(baz);
} catch(e){
  bazNotDefined = true;
}

assert(bazNotDefined, "hoisting only occurs within a single scope");

function testFunc(){
  var baz = 'baz';
}
