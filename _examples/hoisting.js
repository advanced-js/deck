---
---

var isFooDefined;
try {
  console.log(foo);
  isFooDefined = true;
} catch(e){
  isFooDefined = false;
}

assertTripleEqual(isFooDefined, false, "non-declared variables will throw errors when called");
assertTripleEqual(typeof foo, 'undefined', "non-declared variables have a typeof 'undefined'");

assertTripleEqual(bar, undefined, "variable declarations get hoisted, but not the assignment");
assertTripleEqual(typeof bar, 'undefined', "declared (but unset) variables *also* have typeof 'undefined'");

var bar = 'bar';


var isBazDefined;
try {
  console.log(baz);
  isBazDefined = true;
} catch(e){
  isBazDefined = false;
}

assertTripleEqual(isBazDefined, false, "hoisting only occurs within a single scope");

function testFunc(){
  var baz = 'baz';
}
