---
---

function increment(val){
  val += 1;
  return val;
}

var counter = 0;
var incVal = increment(counter);
assertTripleEqual(counter, 0, "primitives are pass-by-value");
assertTripleEqual(incVal, 1, "returns incremented value");
