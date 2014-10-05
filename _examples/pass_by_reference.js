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


function reset(statusObj){
  statusObj.total = 0;
}

var myStatus = {
  total: 6
};
reset(myStatus);
assertTripleEqual(myStatus.total, 0, "objects are pass-by-reference");
